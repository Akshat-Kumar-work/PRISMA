import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//to create table
async function insertUser(email:string,password:string,firstName:string,lastName:string){
   const response = await prisma.users.create({
        data:{
            email,firstName,lastName,password
        },
        select:{
            id:true,
            firstName:true,
        }
 
    })
    console.log(response)
};

//insertUser("akshat1@gmail.com","coolCoder","akshat","dhoundiyal");

interface UpdatePrams{
    firstName?:string;
    lastName?:string;
}

const updateParamas={
    firstName:"cool",
    lastName:"coder"
}

//to update table
async function updateUsers(email:string,updateParamas:UpdatePrams) {
    const result  = await prisma.users.update({
        where:{email:email},
        data:{
            firstName:updateParamas.firstName,
            lastName:updateParamas.lastName
        }
    })
    console.log(result);
}

updateUsers("akshat1@gmail.com",updateParamas);