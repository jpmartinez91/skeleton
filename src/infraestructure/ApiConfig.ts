import express, {Application, Router} from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import {useExpressServer} from 'routing-controllers';
import {MainController} from './MainController';

export class ApiConfig {
    app: Application;
    router: Router;
    
    constructor() {
        this.app =  express();
        this.router =  express.Router();
        this.#middleWare();
    }
    
    #middleWare() {
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: false}));
    
        useExpressServer(this.app, {
            controllers: [MainController]
        })
    }
    
}
