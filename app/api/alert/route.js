import clientPromise from "@/lib/mongodb"

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
console.log(result);

    return Response.json({
        message: "added",
        result
    })
}