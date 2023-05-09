import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full">
        <div className="flex md:mx-6 gap-8">
          <div>
            <Sidebar/>
          </div>
          <div className="w-full ">
            <Navbar/>
            <Component {...pageProps} />
          </div>
        </div> 
      </main>
    </>
  ) 
    
}
