'use client'

import Link from "next/link";
import React, { use, useState } from "react"
import { quiz } from "../../../data"
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content'
import IdentityContent from "@/app/(home)/identity/page";
import { useRouter } from 'next/navigation'

function TesPageContent() {
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [checked, setChecked] = useState(false);
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
    const [showResult, setShowResult] = useState(false);
    const [point, setPoint] = useState(0);
    const [rate, setRate] = useState('');

    const { questions } = quiz;
    const { question, answers } = questions[activeQuestion];

    //   Select and check answer
    const onAnswerSelected = (answer: string, idx: any) => {
        setChecked(true);
        setSelectedAnswerIndex(idx);
        setSelectedAnswer(answer)
    };

    // Calculate score and increment to next question
    const nextQuestion = () => {
        setSelectedAnswerIndex(null);

        if (selectedAnswerIndex === 0) {
            setPoint(point + 3)
        } else if (selectedAnswerIndex === 1) {
            setPoint(point + 5)
        } else if (selectedAnswerIndex === 2) {
            setPoint(point + 7)
        } else if (selectedAnswerIndex === 3) {
            setPoint(point + 9)
        }

        if (point < 37) {
            setRate("Ringan")
        } else if (point < 73) {
            setRate("Sedang")
        } else {
            setRate("Berat")
        }

        // setResult((prev) =>
        //     selectedAnswer
        //         ? {
        //             ...prev,
        //             score: prev.score + 5,
        //         }
        //         : {
        //             ...prev,
        //         }
        // );
        if (activeQuestion !== questions.length - 1) {
            setActiveQuestion((prev) => prev + 1);
        } else {
            setActiveQuestion(0);
            setShowResult(true);
        }
        setChecked(false);
    };

    const MySwal = withReactContent(Swal);
    const router = useRouter()
    let data = {
        point: JSON.stringify(point),
        rate
    }
    let score = JSON.stringify(point);
    let level = rate;

    async function showFormIdendtity() {
        const { value: formValues } = await MySwal.fire({
            confirmButtonColor: "#b91c1c",
            html: (
                <IdentityContent />
            ),
            showConfirmButton: true,
            focusConfirm: false,
            preConfirm: () => {
                // Dapatkan elemen input untuk username dan password
                const namaInput = Swal.getPopup()?.querySelector('#nama') as HTMLInputElement | null;
                const emailInput = Swal.getPopup()?.querySelector('#email') as HTMLInputElement | null;
                const noTelpInput = Swal.getPopup()?.querySelector('#noTelp') as HTMLInputElement | null;

                // Cek apakah elemen input ada
                if (!namaInput || !emailInput || !noTelpInput) {
                    Swal.showValidationMessage('Nama, Email, dan No Telp masih kosong!');
                    return null;
                }

                const nama = namaInput.value;
                const email = emailInput.value;
                const noTelp = noTelpInput.value;

                // Cek jika username atau password kosong
                if (!nama || !email || !noTelp) {
                    Swal.showValidationMessage('Silahkan masukkan nama and email');
                    return null;
                }

                return { nama, email, noTelp };
            }
        });
    }

    // Calculate progress percentage
    const progress = Math.round(((activeQuestion) / questions.length) * 100);

    return (
        <div className="min-h-screen py-12 relative overflow-hidden flex items-center justify-center">
            {/* Background decorative gradients */}
            <div className="absolute top-0 left-1/4 w-72 h-72 lg:w-96 lg:h-96 bg-primary/30 rounded-full mix-blend-screen filter blur-[100px] opacity-70 pointer-events-none"></div>
            <div className="absolute bottom-20 right-1/4 w-72 h-72 lg:w-96 lg:h-96 bg-secondary/20 rounded-full mix-blend-screen filter blur-[100px] opacity-70 pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10 w-full max-w-2xl">
                {!showResult ? (
                    <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[2rem] shadow-2xl p-6 lg:p-10">
                        
                        {/* Progress Header */}
                        <div className="mb-8">
                            <div className="flex justify-between items-end mb-2">
                                <span className="text-secondary font-medium tracking-wide uppercase text-xs">
                                    Pertanyaan {activeQuestion + 1} dari {questions.length}
                                </span>
                                <span className="text-white font-bold text-lg">{progress}%</span>
                            </div>
                            <div className="w-full bg-[#13072e] rounded-full h-2.5">
                                <div className="bg-gradient-to-r from-secondary to-[#d3ccff] h-2.5 rounded-full transition-all duration-500 ease-out" style={{ width: `${progress}%` }}></div>
                            </div>
                        </div>

                        {/* Question Section */}
                        <div className="mb-8">
                            <h3 className="text-2xl lg:text-3xl font-bold text-white leading-snug">
                                {questions[activeQuestion].question}
                            </h3>
                        </div>

                        {/* Answers List */}
                        <div className="space-y-3">
                            {answers.map((answer, idx) => (
                                <div
                                    key={idx}
                                    onClick={() => onAnswerSelected(answer, idx)}
                                    className={`
                                        group flex items-center p-4 rounded-xl cursor-pointer transition-all duration-300 border
                                        ${selectedAnswerIndex === idx 
                                            ? 'bg-secondary/20 border-secondary shadow-[0_0_15px_rgba(179,170,255,0.2)] scale-[1.02]' 
                                            : 'bg-[#13072e]/50 border-white/5 hover:bg-white/5 hover:border-secondary/30'}
                                    `}
                                >
                                    <div className={`
                                        w-6 h-6 rounded-full border-2 flex items-center justify-center mr-4 transition-colors
                                        ${selectedAnswerIndex === idx ? 'border-secondary' : 'border-slate-500 group-hover:border-secondary/50'}
                                    `}>
                                        {selectedAnswerIndex === idx && <div className="w-3 h-3 bg-secondary rounded-full"></div>}
                                    </div>
                                    <span className={`text-lg transition-colors ${selectedAnswerIndex === idx ? 'text-white font-medium' : 'text-slate-300 group-hover:text-white'}`}>
                                        {answer}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Action Button */}
                        <div className="mt-10 flex justify-end">
                            <button 
                                onClick={nextQuestion} 
                                disabled={!checked}
                                className={`
                                    px-8 py-3 rounded-full font-bold text-lg transition-all duration-300
                                    ${checked 
                                        ? 'bg-secondary text-primary hover:scale-105 hover:shadow-[0_0_20px_rgba(179,170,255,0.4)]' 
                                        : 'bg-white/10 text-slate-400 cursor-not-allowed'}
                                `}
                            >
                                {activeQuestion === questions.length - 1 ? 'Selesai' : 'Selanjutnya'}
                            </button>
                        </div>
                    </div>
                ) : (
                    /* Result Section */
                    <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[2rem] shadow-2xl p-8 lg:p-12 text-center animate-in fade-in zoom-in duration-500">
                        <div className="w-24 h-24 bg-primary/40 rounded-full flex items-center justify-center mx-auto mb-6 border border-secondary/30 shadow-[0_0_30px_rgba(179,170,255,0.2)]">
                            <span className="text-5xl">📊</span>
                        </div>
                        
                        <h2 className="text-slate-300 text-lg uppercase tracking-widest font-semibold mb-2">Hasil Penilaian Anda</h2>
                        <h3 className="text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-[#d3ccff] mb-6">
                            {rate}
                        </h3>
                        
                        <div className="bg-[#13072e]/50 p-6 rounded-2xl border border-white/5 mb-10">
                            <p className="text-slate-300 text-base lg:text-lg font-light leading-relaxed">
                                Berdasarkan jawaban Anda, Anda mengalami tingkat dampak stres yang <strong className="text-white font-medium">{rate}</strong>. 
                                Jangan khawatir, kami ada di sini untuk membantu Anda menghadapinya. Ayo ikuti sesi terapi mandiri kami!
                            </p>
                        </div>

                        <button 
                            onClick={showFormIdendtity} 
                            className="inline-flex items-center justify-center px-10 py-4 bg-secondary text-primary font-bold text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(179,170,255,0.5)]"
                        >
                            Mulai Terapi Sekarang
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default function TesPage() {
    return (
        <TesPageContent />
    )
}