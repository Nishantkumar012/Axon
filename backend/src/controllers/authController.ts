import {Request, Response} from "express"
import prisma from "../config/db"
import jwt from "jsonwebtoken"




export const registerHandler = async(req:Request,res:Response)=>{
     
     try {
            const {name, email, password} = req.body;

            //check if user already exist
            const existingUser = await prisma.user.findUnique({
                where: {email}
            })
            
              if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

         //create user
         const user = await prisma.user.create({
            data: {
                name,
                email,
                password,
            }
         })
  res.status(201).json({ message: "User registered successfully", user: { id: user.id, name: user.name, email: user.email } });
  } catch (error) {
    res.status(500).json({ message: "Error registering user", error: (error as Error).message });
  }
}


export const loginHandler = async(req:Request,res:Response)=>{
        
       try {
               const {email,password} = req.body;

               const user = await prisma.user.findUnique({
                  where: {email}
               })

               if(!user){
                  return res.status(400).json({message:"User not exist"})
               }
            
             const token = jwt.sign(
                   {userId:user.id},
                   process.env.JWT_SECRET || "def"
             )  ;
  
         res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ message: "Error logging in", error: (error as Error).message });
  }
};