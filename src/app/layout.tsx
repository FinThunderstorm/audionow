import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "AudioNow",
  description: "AudioNow",
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang="en" data-theme="night">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
