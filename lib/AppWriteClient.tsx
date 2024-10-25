import { Client, Account, ID, Databases, Query, Storage } from "appwrite";

// Init your Web SDK
const client = new Client();
client
    .setEndpoint(String(process.env.NEXT_PUBLIC_APPWRITE_URL)) 
    .setProject(String(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID)) 
    
const account = new Account(client);
const database = new Databases(client);   
const storage = new Storage(client);

export { client, account, database, storage, Query, ID };