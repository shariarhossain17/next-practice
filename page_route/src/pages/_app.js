
import Navbar from "@/components/Navbar/Navbar"
import { SessionProvider } from "next-auth/react"
import "../styles/globals.css"

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
 
  return getLayout(

    <SessionProvider session={pageProps.session}>
    <>
    <Navbar/>
    <Component {...pageProps} />
    </>
    </SessionProvider>
  )
}