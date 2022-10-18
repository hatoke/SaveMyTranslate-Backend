import express from 'express';
import router from './api/routes';
import * as dotnev from 'dotenv';
import mongoLoader from "./loaders/mongo.loader";
import bodyParser from 'body-parser';
import cors from 'cors';
dotnev.config();

const dbURI = process.env.DATABASE_URL;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api", router);

const mongo: mongoLoader = new mongoLoader(dbURI);
mongo.connection();

const port = process.env.PORT || "80";
app.listen(port, () => {
  console.log(`App running http://localhost:${port}`);
});