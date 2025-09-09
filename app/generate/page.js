"use client"

import { useState } from "react"
import { toast } from "react-toastify"

const Generate = () => {
    const [type, setType] = useState("Emergency")
    const [desc, setDesc] = useState("")
    const [title, setTitle] = useState("")

    const types = [
        { id: 0, name: "Emergency" },
        { id: 1, name: "Flood" },
        { id: 2, name: "Cyclone" },
        { id: 3, name: "Heavy rain" },
        { id: 4, name: "Building collapse" },
        { id: 5, name: "Dam failure" },
        { id: 6, name: "Electricty" },
        { id: 7, name: "Gas Leak" },
        { id: 8, name: "Theft" },
        { id: 9, name: "Electricity" },
        { id: 10, name: "IoT device support" },
        { id: 11, name: "Wild animals" },
        { id: 12, name: "Missing child" },
        { id: 13, name: "Theft" },
        { id: 14, name: "Bridge collapse" },
        { id: 15, name: "Road accident" },
        { id: 16, name: "Dam failure" },
        { id: 17, name: "Chemical spill" },
        { id: 18, name: "Rescuer operation" },
        
    ]

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
        toast(data.message)

        setDesc("")
        setType("")
        setTitle("")
    }

    return (
        <main className="bg-gray-200 text-black pb-16">
            <section className=" max-w-[700] py-3 px-2 m-auto">

                <h3 className="text-3xl">Add a new alert</h3>
                <form onSubmit={(e) => { submit(e) }} className=" bg-gray-50 grid gap-4 p-2 rounded-lg">

                    <div className="grid gap-2">
                        <label className="">Select type</label>
                        <select className="outline-purple-900 p-2 bg-gray-100 rounded-lg border-0" onChange={(e) => { setType(e.target.value) }} required>
                            {types.map((type => (
                                <option key={type.id}>{type.name}</option>
                            )))}
                        </select>
                    </div>
                    <div className="grid gap-2">
                        <label className="">Title</label>
                        <input type="text" value={title} className="outline-purple-900 p-2 bg-gray-100 rounded-lg" onChange={(e) => { setTitle(e.target.value) }} placeholder="enter title" required />
                    </div>
                    <div className="grid gap-2">
                        <label className="">Description</label>
                        <input type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }} className="outline-purple-900 p-2 bg-gray-100 rounded-lg" placeholder="enter descripton" required />
                    </div>
                    <button type="submit" className="text-white bg-purple-900 rounded-lg p-2">Add alert</button>
                </form>
            </section>
        </main>
    )
}

export default Generate;