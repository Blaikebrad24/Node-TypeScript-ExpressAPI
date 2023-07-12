import { Router , Request, Response, NextFunction } from 'express';
import Controller from '@/utils/interfaces/Controller.interface';
import HttpException from '@/utils/exceptions/http.exceptions';
import validationMiddleware from '@/middleware/validation.middleware';
import validate from '@/resources/Post/post.validation';
import PostService from '@/resources/Post/post.service';

class PostController implements Controller {

    public path = '/posts';
    public router = Router();

    constructor(){
        this.initializeRoutes();
    }

    private initializeRoutes(): void {
        
    }
    
}