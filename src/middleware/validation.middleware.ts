import { Request, Response, NextFunction, RequestHandler } from 'express';
import Joi from 'joi';


// validation Middleware - go through data being passed through, validate it with the options (Schema)
//                       - abort early will return back to the user and complete the request
//                       - if not it will allow the request to keep going and look for more errors
function validationMiddleware(schema: Joi.Schema): RequestHandler
{
    return async(
        req: Request,
        res: Response,
        next: NextFunction
    ) : Promise<void> => {
        const validationOptions = {
            abortEarly: false,
            allowUnkown: true,
            stripUnknown: true,

        };
        try{
            const value = await schema.validateAsync(
                req.body,
                validationOptions
            ); 
            req.body = value;
            next();
        } catch (e:any){
            const errors: string[] = [];
            e.details.forEach((error: Joi.ValidationErrorItem) => {
                errors.push(error.message)
            });
            res.status(400).send({errors});

        }
    };
}

export default validationMiddleware;