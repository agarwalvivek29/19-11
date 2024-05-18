import NextAuth from "next-auth/next";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "@/lib/mongodb";

export const authOptions = {
    adapter : MongoDBAdapter(clientPromise, {
        collection: 'sessions',
        databaseName: "ecoTokens"
    }),

    session : {
        jwt: true,
    },

    providers: [
        {
            id : "metaMask",
            name : "MetaMask",
            type : "oauth",
            version : "2.0",
        }
    ]
}