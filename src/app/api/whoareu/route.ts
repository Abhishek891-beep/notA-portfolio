import prisma from "@/lib/client"
import { NextApiRequest, NextApiResponse } from "next";
import z from "zod";

const UserSchema = z.object({
    name : z.string(),
    email : z.string().email(),
    opinion : z.string()
})
 
type ResponseData = {
    message: string
  }

export async function POST(req: Request , res: Response) {

    const bodyy =await req.json();
    console.log(bodyy);
    
    try {
        // const ValidData = UserSchema.parse(body);
        const user = await prisma.user.create({
            data : {
                name : bodyy.name  ,
                email : bodyy.email ,
                opinion :bodyy.opinion
            }
        })
        return Response.json({msg : "user created"})
    }catch(e){
        console.log(e);
    }

}
