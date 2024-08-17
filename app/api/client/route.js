import Connection  from "@/libs/mongodb";
const {mClient} = require("@/models/client")
import { NextResponse } from "next/server";

export async function POST(req){

    const {firstname,lastname,phone,whatsapp,district,email,residence,user_id,observation}= await req.json()
    console.log(user_id)
    // return NextResponse.json({message:"pass"},{status:200})
    try {
        await Connection()
        //si l'utilisateur existe
        const existClient = await mClient.findOne({phone}).select("_id")
        if(existClient){
            return NextResponse.json({message:"numero de telephone déjà utilisé",existClient},{status:401})
        }
        let observationValue = observation || "Pas d'observation";
        await mClient.create({
            lastname,
            firstname,
            email,
            phone,
            whatsapp,
            district,
            residence,
            user_id,
            observation : observationValue
        })

        return NextResponse.json({message:"client enregistré avec succès"},{status:201})

    } catch (error) {
        console.log(error.message)
        return NextResponse.json({message:"Echec de l'enregistrement du client",error},{status:501})
    }
}