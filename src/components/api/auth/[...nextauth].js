import NextAuth from 'react-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
    //configure one or more authentication providers
    providers: [
        Providers.Google({
            clientId: process.env.Google_ID,
            clientSecret: process.env.Google_SECRET
        }),
        //...add more providers here
    ],
});
