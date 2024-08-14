import Connection  from "@/libs/mongodb";
const {mClient} = require("@/models/client")
import { NextResponse } from "next/server";
export async function GET(req,{params}){
    const{id} = params
    try {
        // Connection a la base de donnees
        await Connection()
      // Récupération des fonds du mois courant
      const clients = await mClient.find({user_id:id}).sort({createdAt: -1});
      const clientsT = await mClient.find({})
      //console.log(fondsOfMonth)
      return NextResponse.json({clients, clientsT},{status:200})
      } catch (error) {
        console.log(error.message);
        return NextResponse.json({message:"Une erreur server est survenue"}, {status:500})

      }

}