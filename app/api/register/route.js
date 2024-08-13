import Connection  from "@/libs/mongodb";
const {mUser} = require("@/models/user");
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"

export async function POST(req){

    const {fullname,username,email,password,role}= await req.json()
    // console.log(fullname,email,password)
    // return NextResponse.json({message:"pass"},{status:200})
    try {
        await Connection()
        //si l'utilisateur existe
        const existUser = await mUser.findOne({email}).select("_id")
        if(existUser){
            return NextResponse.json({message:"Email déjà utilisé",existUser},{status:401})
        }
        const hashPassword = await bcrypt.hash(password,10)

        await mUser.create({
            fullname: fullname,
            username:username,
            email:email,
            password:hashPassword,
            role: role
        })

        return NextResponse.json({message:"utilisateur enregistré avec succès"},{status:201})

    } catch (error) {
        console.log(error.message)
        return NextResponse.json({message:"Echec de l'enregistrement de l'utilisateur",error},{status:501})
    }
}