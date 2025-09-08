import clientPromise from "@/lib/mongodb";
import { unstable_noStore as noStore} from "next/cache";

const Home = async () => {
    noStore();
    
    const client = await clientPromise
    const db = client.db("aavishkar")
    const collection = db.collection("alerts")
    const result = await collection.find({}).toArray()

    if (!result) {
        return (
            <main>
                data not found
            </main>
        )
    }


    return (
        <main className="bg-gray-200 pb-16">
            <section className=" max-w-[700] py-3 px-2 m-auto text-black">
                <h1 className="text-3xl">Messages</h1>
                {result.length === 0? <div>No data to show</div> :
                result.map(alert => (
                    <div key={alert._id} className="rounded bg-slate-100 grid gap-2 p-2 ">
                        <div className="flex justify-between align-baseline flex-wrap text-sm ">
                            <div>{alert.body.type}</div>
                            <div>{alert.body.date.toLocaleString()}</div>
                        </div>
                        <div className="p-1 bg-slate-200 rounded grid gap-1">
                            <h2 className="text-xl">{alert.body.title}</h2>
                            <div className=""><p>{alert.body.desc}</p></div>
                        </div>
                    </div>
                ))}
            </section>
        </main>
    )
}

export default Home
