import dotenv from 'dotenv';

dotenv.config();

import cors from 'cors';
import helmet from 'helmet';

import express from 'express';
import productsRoutes from './routes/productsRoutes';
import typesRoutes from './routes/typesRouter';

const whiteList = [
    'http://localhost:3000',
];

const corsOptions: cors.CorsOptions = {
    origin: whiteList
};

class App {

    app: express.Application;

    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(cors(corsOptions));
        this.app.use(helmet());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());

    }

    routes() {
        this.app.use('/products', productsRoutes);
        this.app.use('/types', typesRoutes);
	this.app.use('/', (req: express.Request, res: express.Response) => {return res.json('Ola mano')});
    }
}

export default new App().app;
