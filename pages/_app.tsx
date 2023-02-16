import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
// import "../components/Navbar/Navbar.css";
// import "../components/Footer/Footer.css";
import Sidebar from './../components/Sidebar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="grid grid-cols-12 gap-6 px-5 lg:px-20 sm:px-18 md:px-30 my-14">
      <div className="col-span-12 p-4 text-center bg-white lg:col-span-4 rounded-2xl">
        <Sidebar/>
      </div>
      <div className="col-span-12 flex flex-col bg-white lg:col-span-8 rounded-2xl">
        <Navbar/>
        <Component {...pageProps} />
      </div>
    </div>
  );
}
