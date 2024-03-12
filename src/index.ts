import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
 
//to insert values into users table
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

//insertUser("avnish@gmail.com","ok","avnish","dhoundiyal");

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

//updateUsers("akshat1@gmail.com",updateParamas);


//get users details
const getUsers = async()=>{
    const result = await prisma.users.findMany();
    console.log(result);
}

//getUsers();



const insertTodo = async(title:string,description:string,userId:number)=>{
    const result = await prisma.todo.create({
        data:{
           title:title,description:description,user_id:userId
        }
    })
    console.log(result);
}

//insertTodo("code","coding everyday 20 h",1);

//getting todo with user included
const getTodos = async(userId:number)=>{
    const result = await prisma.todo.findFirst({
        where:{
            user_id:userId
        },
        select:{
            id:true,
            title:true,
            description:true,
            user:true
        }
    });
    console.log(result);
}

//getTodos(1);

//getting user with todo included
const get = async (userId:number)=>{
    
const userWithTodos = await prisma.users.findUnique({
    where: { id: userId },
    include: {
      todos: true // Include todos associated with the user
    }});

    console.log(userWithTodos);
}

get(1);