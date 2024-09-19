import mongoose, { Schema } from "mongoose";

const urlSchema = new Schema(
    {
        shortid:{
            type:String,
            require:true,
           // unique:true
        },
        redirecturl:{
            type:String,
            require:true
        },
        visithistory:[{
            timeStamps:{
                type:Number
            }
        }]
    },
    {timeStamp:true}
)


export const url = mongoose.model("url",urlSchema)

 