import { Client, Account, ID, Databases, Query, Storage } from "appwrite";

// Appwriteクライアントの初期化
const client = new Client();
client
    .setEndpoint(String(process.env.NEXT_PUBLIC_APPWRITE_URL)) // .envのエンドポイントを使用
    .setProject(String(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID)); // .envのプロジェクトIDを使用

const account = new Account(client);
const database = new Databases(client);   
const storage = new Storage(client);

export { client, account, database, storage, Query, ID };