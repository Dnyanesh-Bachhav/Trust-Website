// import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@/styles/globals.css";

import { Roboto } from "next/font/google";
const roboto = Roboto({ weight: "400", subsets: ["latin"] });
export default function App({ Component, pageProps }) {
  return(
  <>
    <style jsx global>{`
        html {
          font-family: ${roboto.style.fontFamily};
        }
      `}</style>
    <Component {...pageProps} />
  </>);
}
