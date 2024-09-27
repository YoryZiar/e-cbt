'use client'

import { useState } from "react"
import {
    messageInitialState
} from "@/app/types/validations/message"
import { useSendMessage } from "@/app/services/message/mutation";

function ContactContent() {
    const [messageForm, setMessageForm] = useState(messageInitialState);
    const messageMutation = useSendMessage();

    const handleFormMessageChange = (e: any) => {
        const { name, value } = e.target;

        setMessageForm({
            ...messageForm,
            [name]: value
        })
    }

    const handleSubmitFormMessage = async (e: any) => {
        e.preventDefault();

        const data = new FormData();
        Object.entries(messageForm).forEach(([key, value]) => {
            if (value !== null) {
                data.append(key, value);
            }
        });

        (await messageMutation).mutateAsync(data).then((res) => {
            setMessageForm(messageInitialState)
        })
    }
    return (
        <div className="mx-auto">
            <h1 className="text-slate-200 text-2xl text-center font-semibold lg:text-2xl">Kontak</h1>
            {/* <p className="text-slate-200 text-sm text-center lg:text-lg">Tuliskan apa yang kamu alami saat mengalami kekerasan (bullying)!</p> */}

            <form onSubmit={handleSubmitFormMessage} className="bg-primary max-w-xs md:max-w-3xl mx-auto rounded-lg py-5 mt-5 lg:p-10 lg:max-w-5xl">
                <label htmlFor="title" className="block mx-5">
                    <span className="block font-normal text-start text-slate-200 mb-1">Nama</span>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        value={messageForm.title}
                        onChange={handleFormMessageChange}
                        className="w-full rounded-md py-1 bg-slate-100 focus:outline-none p-2 focus:ring focus:ring-secondary"
                    />
                </label>
                <label htmlFor="email" className="block mx-5">
                    <span className="block font-normal text-start text-slate-200 my-1">Email</span>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={messageForm.email}
                        onChange={handleFormMessageChange}
                        className="w-full rounded-md py-1 bg-slate-100 focus:outline-none p-2 focus:ring focus:ring-secondary"
                    />
                </label>
                <label htmlFor="message" className="block mx-5 my-5">
                    <span className="block font-normal text-start text-slate-200 mb-1">Pesan</span>
                    <textarea
                        name="message"
                        id="message"
                        value={messageForm.message}
                        onChange={handleFormMessageChange}
                        className="w-full rounded-md h-28 md:h-48 bg-slate-100 focus:outline-none p-2 focus:ring focus:ring-secondary"
                    >
                    </textarea>
                </label>
                <div className='text-center'>
                    <button className="py-2 px-4 bg-secondary text-lg rounded-md font-semibold text-primary">Kirim</button>
                </div>
            </form>
        </div>
    )
}

export default function Contact() {
    return (
        <ContactContent />
    )
}