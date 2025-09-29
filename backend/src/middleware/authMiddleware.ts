
import {Request,Response,NextFunction} from 'express'
import jwt from "jsonwebtoken"

// interface AuthRequest extends Request{
//     userId?: number;
// }


// Extend Express Request type to include userId
declare global {
  namespace Express {
    interface Request {
      userId?: number;
    }
  }
}



export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
         
       try {
               
            const authHeader = req.headers["authorization"];

            if(!authHeader){
                  return res.status(401).json({message: "No token provided"})
            }

            const token = authHeader.split(" ")[1]; // get token after Bearer
           
               if(!token){
                  return res.status(401).json({ message: "Invalid token format"});
               }
              const secret = process.env.JWT_SECRET || "defau";
            const decoded = jwt.verify(token,secret) as { userId: number}

            req.userId = decoded.userId;
            next();
                 
       } catch (error) {
             res.status(401).json({ message: "Unauthorized", error: (error as Error).message });
 
       }
}