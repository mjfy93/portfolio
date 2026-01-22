
import { Links, Meta, Scripts, ScrollRestoration } from 'react-router'
// import Navbar from './nav/Navbar'
// import Footer from './Footer'

export default function HtmlShell({
  children,
  title = 'Portfolio - @mjfy93'
}) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='UTF-8' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0'
        />
        <meta
          name='description'
          content='My Portfolio'
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link rel="icon" type="image/svg+xml" href="/pen1.svg" />
        <title>{title}</title>
        <Meta />
        <Links />
      </head>
      <body>

        {children}
        {/* <Footer /> */}
        <ScrollRestoration />
        <Scripts />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
        />
      </body>
    </html>
  )
}