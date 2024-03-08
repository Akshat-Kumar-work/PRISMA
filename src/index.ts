import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function insertUser(email:string,password:string,firstName:string,lastName:string){
   const response =  prisma.user.create({
        data:{
            email,firstName,lastName,password
        }
    })
    console.log(response)
}