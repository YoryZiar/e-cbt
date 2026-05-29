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
        <div className="mx-auto w-full">
            <div className="text-center mb-10">
                <h1 className="text-white text-3xl md:text-4xl font-bold mb-3">Hubungi Kami</h1>
                <p className="text-slate-400 font-light">Jangan ragu untuk mengirimkan pesan, pertanyaan, atau berbagi cerita Anda.</p>
            </div>

            <form onSubmit={handleSubmitFormMessage} className="bg-[#13072e]/50 backdrop-blur-md border border-white/10 max-w-3xl mx-auto rounded-3xl p-8 lg:p-12 shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <label htmlFor="title" className="block">
                        <span className="block font-medium text-slate-300 mb-2">Nama Lengkap</span>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            value={messageForm.title}
                            onChange={handleFormMessageChange}
                            placeholder="Masukkan nama Anda"
                            className="w-full rounded-xl py-3 px-4 bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all"
                        />
                    </label>
                    
                    <label htmlFor="email" className="block">
                        <span className="block font-medium text-slate-300 mb-2">Alamat Email</span>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={messageForm.email}
                            onChange={handleFormMessageChange}
                            placeholder="nama@email.com"
                            className="w-full rounded-xl py-3 px-4 bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all"
                        />
                    </label>
                </div>

                <label htmlFor="message" className="block mb-8">
                    <span className="block font-medium text-slate-300 mb-2">Pesan Anda</span>
                    <textarea
                        name="message"
                        id="message"
                        value={messageForm.message}
                        onChange={handleFormMessageChange}
                        placeholder="Tuliskan pesan atau cerita Anda di sini..."
                        className="w-full rounded-xl h-40 md:h-48 py-3 px-4 bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all resize-none"
                    ></textarea>
                </label>
                
                <div className='text-center'>
                    <button type="submit" className="w-full md:w-auto px-10 py-4 bg-secondary hover:bg-[#c4bdff] text-primary text-lg rounded-xl font-bold transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(179,170,255,0.3)]">
                        Kirim Pesan
                    </button>
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