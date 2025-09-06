"use client"

import { useState } from "react"

const Generate = () => {
    const [type, setType] = useState("")
    const [desc, setDesc] = useState("")
    const [title, setTitle] = useState("")

    const submit = async (e) => {
        e.preventDefault()
        const body = JSON.stringify({
            type,
            title,
            desc
        })
        const response = await fetch("/api/alert", {
            method: "POST",
            body: body,
            "Content-Type": "application/json"

        })
        const data = await response.json()
        console.log("data",data);
        
        setDesc("")
        setType("")
        setTitle("")
    }

    return (
        <main className="bg-gray-200 text-black">
            <section className=" max-w-[700] py-3 px-2 m-auto">

            <h3 className="text-3xl">Add a new alert</h3>
            <form onSubmit={(e)=>{submit(e)}} className=" bg-gray-50 grid gap-4 p-2 rounded-lg">

                <div className="grid gap-2">
                    <label className="">Type</label>
                    <input type="text" value={type} className="outline-purple-900 p-2 bg-gray-100 rounded-lg" onChange={(e)=>{setType(e.target.value)}} placeholder="enter type" required/>
                </div>
                <div className="grid gap-2">
                    <label className="">Title</label>
                    <input type="text" value={title} className="outline-purple-900 p-2 bg-gray-100 rounded-lg" onChange={(e)=>{setTitle(e.target.value)}} placeholder="enter title" required/>
                </div>
                <div className="grid gap-2">
                    <label className="">Description</label>
                    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="outline-purple-900 p-2 bg-gray-100 rounded-lg" placeholder="enter descripton" required/>
                </div>
                <button type="submit" className="text-white bg-purple-900 rounded-lg p-2">Add alert</button>
            </form>
            </section>
        </main>
    )
}

export default Generate;