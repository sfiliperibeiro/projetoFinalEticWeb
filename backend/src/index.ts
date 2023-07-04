import env from "dotenv";
import express, { NextFunction, Request, Response } from "express";
import router from "./routes";
import { verifyToken } from "./middleware/token";

env.config();


const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});
  
const PORT = process.env.PORT || 8080;
  
app.listen(PORT);

app.use(express.json());

const requestLogger = (request: Request, response: Response, next: NextFunction)=>{
    console.log(`[${request.method}] => url::${request.url}`);

    next();
}

app.use(requestLogger);

app.use(verifyToken);



app.use(router);

app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));




//https://www.prisma.io


//o comando para instalar o prisma é: npm i prisma -D

// npx prisma init 

//npx prisma migrate dev  initial  o initial pode ser outro nome qualquer


//comando npx i @prisma/client 