import User from "@/app/models/user";

import { dbConnect } from "@/app/lib/dbConnect";
import { NextResponse } from "next/server";

export async function POST(req,res){

    await dbConnect()
    try {
        let data = await req.json()

        const email=data.email

        const user = await User.findOne({email})

        if(user)
        {
          return NextResponse.json({error:"user already exists"},{status:422})
        }
       
        const newUser = new User({
            email,
        })

        const registerUser = await newUser.save()

        return NextResponse.json({message:"User registered successfully"},{status:201})

    } catch (error) {
        
      return NextResponse.json({error:"some error is there"+error},{status:500})
    }
}
