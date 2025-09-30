import express from 'express'
import authRoutes from "./routes/authRoutes"
import pageRoutes from "./routes/pageRoutes"
import blockRoutes from "./routes/blockRoutes"

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// express.json()
app.use("/api/auth", authRoutes); 
app.use("/api/pages",pageRoutes);
app.use("/api/blocks", blockRoutes);
app.listen(3000, ()=>{
      
    console.log("Hello to axon")
})