import { Document } from "mongoose";


//access- properties and methods of mongoose docment Class
export default interface Post extends Document {

    title: string;
    body: string;

}