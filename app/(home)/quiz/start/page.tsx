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
        point,
        rate
    }

    async function showFormIdendtity() {
        const { value: formValues } = await MySwal.fire({
            confirmButtonColor: "#b91c1c",
            html: (
                <IdentityContent value={data} />
            ),
            showConfirmButton: false,
            // focusConfirm: false,
            // preConfirm: () => {
            //     // Dapatkan elemen input untuk username dan password
            //     const namaInput = Swal.getPopup()?.querySelector('#nama') as HTMLInputElement | null;
            //     const emailInput = Swal.getPopup()?.querySelector('#email') as HTMLInputElement | null;
            //     const noTelpInput = Swal.getPopup()?.querySelector('#noTelp') as HTMLInputElement | null;

            //     // Cek apakah elemen input ada
            //     if (!namaInput || !emailInput || !noTelpInput) {
            //         Swal.showValidationMessage('Nama, Email, dan No Telp masih kosong!');
            //         return null;
            //     }

            //     const nama = namaInput.value;
            //     const email = emailInput.value;
            //     const noTelp = noTelpInput.value;

            //     // Cek jika username atau password kosong
            //     if (!nama || !email || !noTelp) {
            //         Swal.showValidationMessage('Silahkan masukkan nama and email');
            //         return null;
            //     }

            //     return { nama, email, noTelp };
            // }
        });

        // if (formValues) {
        //     const { isConfirmed } = await Swal.fire({
        //         title: 'Data Berhasil dikirim',
        //         // text: 'Do you want to continue',
        //         icon: 'success',
        //         confirmButtonText: 'OK'
        //     })
        //     if (isConfirmed) {
        //         router.push('/therapy')
        //     }
        // }
    }

    return (
        <div className="mx-auto text-slate-200 px-5 md:max-w-md lg:max-w-lg">
            {!showResult ? (
                <div>
                    <h1>Pertanyaan: {activeQuestion + 1} <span>/{questions.length}</span></h1>
                    <div className="flex flex-col">
                        <h3 className="my-4 lg:text-lg">{questions[activeQuestion].question}</h3>
                        {answers.map((answer, idx) => (
                            <li
                                key={idx}
                                onClick={() => onAnswerSelected(answer, idx)}
                                className={
                                    selectedAnswerIndex === idx ? 'list-none text-center my-2 py-3 rounded-xl  font-semibold bg-primary text-white ring-2 ring-[#b3aaff]' : 'list-none text-center my-2 bg-[#b3aaff] py-3 rounded-xl text-primary font-semibold hover:bg-primary hover:text-white hover:cursor-pointer'
                                }
                            >
                                <span>{answer}</span>
                            </li>
                        ))}
                        {checked ? (
                            <button onClick={nextQuestion} className="my-5 bg-slate-700 py-3 rounded-xl">
                                {activeQuestion === question.length - 1 ? 'Finish' : 'Next'}
                            </button>
                        ) : (
                            <button onClick={nextQuestion} disabled className="my-5 bg-slate-500 py-3 rounded-xl">
                                {' '}
                                {activeQuestion === question.length - 1 ? 'Finish' : 'Next'}
                            </button>
                        )}
                    </div>
                </div>
            ) : (
                <div className='container'>
                    <h3 className="text-3xl text-center font-semibold uppercase">{rate}</h3>
                    <p className="text-sm lg:text-lg text-center font-normal">Kamu mengalami tingkat stres yang {rate}. untuk meringankannya ayo ikuti terapi!</p>
                    <button onClick={showFormIdendtity} className="block mx-auto my-5 bg-primary py-2 w-1/2 rounded-xl text-lg font-semibold uppercase">Terapi Now</button>
                </div>
            )}
        </div>
    )
}

export default function TesPage() {
    return (
        <TesPageContent />
    )
}