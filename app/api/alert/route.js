import clientPromise from "@/lib/mongodb"
import { ObjectId } from "mongodb"

export const POST = async (req) => {
    const {type, title, desc} = await req.json()
    const body = {
        type, 
        title,
        desc,
        date: new Date().toLocaleString("en-IN", {timeZone: "Asia/Kolkata"})
    }
    const client = await clientPromise
    const db = client.db("aavishkar")
    const collection = db.collection("alerts")
    
    const result = await collection.insertOne({body})

    return Response.json({
        message: "added",
        body,
        result
    })
}


export const GET = async () => {
     const client = await clientPromise
    const db = client.db("aavishkar")
    const collection = db.collection("alerts")
    
    const result = await collection.find({}).sort({"_id": -1}).toArray()

    return Response.json({
        message: "added",
        result
    })
}

export const DELETE = async (req) => {

    const {id} = await req.json()

    const client = await clientPromise
    const db = client.db("aavishkar")
    const collection = db.collection("alerts")
    
    const result = await collection.deleteOne({_id:new ObjectId(id)})

    console.log(result);
    

    return Response.json({message: "Deleted succesfully"})
}