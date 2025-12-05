#!/usr/bin/env bash
set -o errexit -o nounset -o pipefail

readonly repository="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd)"
readonly infra_dir="$repository/infra"
readonly ENV="prod"

source "$repository/scripts/common.sh"

function main {
  required_command tofu
  check_node_version
  get_environment_variables

  echo ::group::Initialize OpenTofu
  pushd "$infra_dir"
  tofu init -input=false
  popd
  echo ::endgroup::

  echo ::group::Build the application
  npm_ci
  npm run build
  echo ::endgroup::

  echo ::group::Deploy the application
  pushd "$infra_dir"
  tofu apply -input=false -auto-approve
  popd
  echo ::endgroup::
  }

main "$@"