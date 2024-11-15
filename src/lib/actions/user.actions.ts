'use server'


import { ID } from "node-appwrite";
import { cookies } from "next/headers";

import { createAdminClient, createSessionClient } from "../server/appwrite"
import { parseStringify } from "../utils";


declare interface signInProps {
  email: string;
  password: string;
}


export const signIn = async({email,password}: signInProps) =>{
    try{
        //mutations //database //make fetch
        const { account } = await createAdminClient();
        const response = await account.createEmailPasswordSession(email,password)

        return parseStringify(response)
    }
    catch(error){console.log(error)}
}

export const signUp = async(userData: SignUpParams) =>{
    try{
        const { account } = await createAdminClient();

        const newUser = await account.create(ID.unique(), userData.email, userData.password, `${userData.firstName} ${userData.lastName}`);
        const session = await account.createEmailPasswordSession(userData.email, userData.password);

        const cookieStore = await cookies()
        cookieStore.set("appwrite-session", session.secret, {
            path: "/",
            httpOnly: true,
            sameSite: "strict",
            secure: true,
        });
        return parseStringify(newUser)
    }
    catch(error){console.log(error)}
}


export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    const user = await account.get();
    console.log(user)
    return parseStringify(user)
  } catch (error) {
    return null;
  }
}