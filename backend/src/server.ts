import express from 'express'
import authRoutes from "./routes/authRoutes"
import pageRoutes from "./routes/pageRoutes"
import blockRoutes from "./routes/blockRoutes"
import cors from 'cors'

const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT =3000;

// express.json()
app.use("/api/auth", authRoutes); 
app.use("/api/pages",pageRoutes);
app.use("/api/blocks", blockRoutes);
app.listen(PORT, ()=>{
      
    console.log(`Hello to axon on ${PORT}`)
})