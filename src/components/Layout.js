import React from "react"
import { SessionProvider, useSession } from "next-auth/react"
import { store } from "../app/store"
import { Provider } from "react-redux"



const Layout=({children})=>{
   const {data:session}= useSession()
    return (
        <Provider store={store}>
        <SessionProvider session={session}>
            {children}
            </SessionProvider>
            </Provider>
    )
}

export default Layout