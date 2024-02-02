import { Provider } from "react-redux";
import { store } from "../app/store";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";

const MyApp = ({
    Component,
    pageProps
  }) => {
    return (
       
     
            <Component {...pageProps} />

       
       

    )
    
}
export default MyApp
//kyu nhi ho rhi h issue kya aa rha h setup main issue hain achha to solution h koi iska dekh rahahun ok
