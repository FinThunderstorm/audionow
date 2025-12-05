import {
  ArrowRightIcon,
  Bars3Icon,
  UserCircleIcon,
} from "@heroicons/react/24/outline"
import { PropsWithChildren } from "react"

type Podcast = {
  id: number
  name: string
  author: string
  image: string
}

type Item = {
  id: number
  name: string
  price: number
  image: string
}

const Podcast = (podcast: Podcast) => (
  <div
    key={podcast.id}
    className="flex flex-col-reverse gap-2 bg-gray-600 bg-no-repeat h-56 aspect-square bg-cover"
    style={{ backgroundImage: `url("${podcast.image}")` }}
  >
    <div className="flex flex-col gap-0 backdrop-blur-lg p-2">
      <span className="text-xl font-bold text-shadow-sm">{podcast.name}</span>
      <span className="text-sm text-shadow-sm">{podcast.author}</span>
    </div>
  </div>
)

const FavouritePodcast = (podcast: Podcast) => (
  <div
    key={podcast.id}
    className="flex flex-row gap-2 bg-gray-600 bg-no-repeat text-nowrap justify-between items-center"
  >
    <div className="flex flex-col gap-0 backdrop-blur-lg p-2">
      <span className="text-xl font-bold text-shadow-sm">{podcast.name}</span>
      <span className="text-sm text-shadow-sm">{podcast.author}</span>
    </div>
  </div>
)

const Item = (item: Item) => (
  <div
    key={item.id}
    className="flex flex-col-reverse gap-2 bg-gray-600 bg-no-repeat h-56 aspect-square bg-cover"
    style={{ backgroundImage: `url("${item.image}")` }}
  >
    <div className="flex flex-row justify-between items-center gap-0 backdrop-blur-lg p-2">
      <span className="text-xl font-bold text-shadow-sm text-gray-600">
        {item.name}
      </span>
      <span className="text-sm text-shadow-sm text-gray-600">
        {new Intl.NumberFormat("fi-FI", {
          style: "currency",
          currency: "EUR",
        }).format(item.price)}
      </span>
    </div>
  </div>
)

const SectionHeader = ({ text }: { text: string }) => (
  <span className="bg-linear-to-r from-yellow-400 to-pink-700 bg-clip-text font-mono text-xl font-extrabold lowercase text-transparent px-2 pb-2 pt-0 w-auto">
    {text}
  </span>
)

const ScrollSection = ({
  children,
  text,
}: PropsWithChildren<{ text: string }>) => (
  <section className="flex flex-col gap-0.5">
    <SectionHeader text={text} />
    <div className="flex flex-row gap-4 px-2 overflow-scroll">{children}</div>
  </section>
)

const GridSection = ({
  children,
  text,
}: PropsWithChildren<{ text: string }>) => (
  <section className="flex flex-col gap-0.5">
    <SectionHeader text={text} />
    <div className="grid grid-cols-2 gap-2 px-2 md:grid-cols-4 lg:grid-cols-6">
      {children}
    </div>
  </section>
)

const podcasts: Podcast[] = [
  {
    id: 1,
    name: "All You Can Eat",
    author: "Duane Deane",
    image: "podcasts/all-you-can-eat.jpg ",
  },
  {
    id: 2,
    name: "Architecture Now",
    author: "Matthew Nicholls",
    image: "podcasts/architecture-now.jpg ",
  },
  {
    id: 3,
    name: "Burger Man",
    author: "Alex H.",
    image: "podcasts/burger-man.jpg ",
  },
  {
    id: 4,
    name: "Grilling with Jack",
    author: "Jack",
    image: "podcasts/grilling-with-jack.jpg ",
  },
  {
    id: 5,
    name: "Ice Cream And I",
    author: "Hillary Carpenter",
    image: "podcasts/ice-cream-and-i.jpg ",
  },
  {
    id: 6,
    name: "Mind Your Day",
    author: "Dr. Mind You",
    image: "podcasts/mind-your-day.jpg ",
  },
  {
    id: 7,
    name: "Motorsport Weekly",
    author: "James McKeever",
    image: "podcasts/motorsport-weekly.jpg ",
  },
  {
    id: 8,
    name: "Tuning Show",
    author: "Jeremy Hammond",
    image: "podcasts/tuning-show.jpg ",
  },
  {
    id: 9,
    name: "Winter Time",
    author: "Dr. Jesse James",
    image: "podcasts/winter-time.jpg",
  },
]

const items: Item[] = [
  { id: 1, name: "Bear", price: 15.95, image: "items/bear.jpg" },
  { id: 2, name: "Camera Man", price: 149.99, image: "items/camera-man.jpg" },
  { id: 3, name: "Camera", price: 73.95, image: "items/camera.jpg" },
  { id: 4, name: "Helmet", price: 42.95, image: "items/helmet.jpg" },
  { id: 5, name: "Jar", price: 15.95, image: "items/jar.jpg" },
  { id: 6, name: "Polar Bear", price: 214.95, image: "items/polar-bear.jpg" },
  { id: 7, name: "Popsicle", price: 22.95, image: "items/popsicle.jpg" },
  { id: 8, name: "Scooter", price: 79.95, image: "items/scooter.jpg" },
  { id: 9, name: "Tracktor", price: 89.95, image: "items/tracktor.jpg" },
]

const Page = () => {
  return (
    <>
      <header className="py-4 flex flex-row justify-between items-center">
        <Bars3Icon className="w-8 h-8 mx-2" />
        <span className="bg-linear-to-r to-yellow-400 from-pink-700 bg-clip-text font-mono text-4xl font-extrabold lowercase text-transparent w-auto">
          AudioNow
        </span>
        <UserCircleIcon className="w-8 h-8 mx-2" />
      </header>
      <main className="flex flex-col gap-4">
        <ScrollSection text="hot now on podcasts">
          {podcasts.map(Podcast)}
        </ScrollSection>
        <ScrollSection text="just arrived to store">
          {items.map(Item)}
        </ScrollSection>
        <GridSection text="go back to your favourites">
          {podcasts.reverse().slice(0, 6).map(FavouritePodcast)}
        </GridSection>
      </main>
      <footer className="flex flex-col justify-center items-center py-8">
        <span>made with 🎧 at MediaFun Inc.</span>
      </footer>
    </>
  )
}

export default Page
