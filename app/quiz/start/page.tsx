'use client'

import Link from "next/link";
import React, { use, useState } from "react"
import { quiz } from "../../data"
import Swal from "sweetalert2";

function TesPageContent() {
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(false);
    const [checked, setChecked] = useState(false);
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
    const [showResult, setShowResult] = useState(false);
    const [result, setResult] = useState({
        score: 0,
        correctAnswers: 0,
        wrongAnswers: 0,
    });

    const { questions } = quiz;
    const { question, answers, correctAnswer } = questions[activeQuestion];

    //   Select and check answer
    const onAnswerSelected = (answer: string, idx: any) => {
        setChecked(true);
        setSelectedAnswerIndex(idx);
        if (answer === correctAnswer) {
            setSelectedAnswer(true);
            console.log('true');
        } else {
            setSelectedAnswer(false);
            console.log('false');
        }
    };

    // Calculate score and increment to next question
    const nextQuestion = () => {
        setSelectedAnswerIndex(null);
        setResult((prev) =>
            selectedAnswer
                ? {
                    ...prev,
                    score: prev.score + 5,
                    correctAnswers: prev.correctAnswers + 1,
                }
                : {
                    ...prev,
                    wrongAnswers: prev.wrongAnswers + 1,
                }
        );
        if (activeQuestion !== questions.length - 1) {
            setActiveQuestion((prev) => prev + 1);
        } else {
            setActiveQuestion(0);
            setShowResult(true);
        }
        setChecked(false);
    };

    return (
        <div className="mx-auto text-white px-5 md:max-w-md lg:max-w-md">
            {!showResult ? (
                <div>
                    <h1>Pertanyaan: {activeQuestion + 1} <span>/{questions.length}</span></h1>
                    <div className="flex flex-col">
                        <h3 className="my-4">{questions[activeQuestion].question}</h3>
                        {answers.map((answer, idx) => (
                            <li
                                key={idx}
                                onClick={() => onAnswerSelected(answer, idx)}
                                className={
                                    selectedAnswerIndex === idx ? 'list-none text-center my-2 py-3 rounded-xl  font-semibold bg-primary text-white' : 'list-none text-center my-2 bg-[#b3aaff] py-3 rounded-xl text-primary font-semibold hover:bg-primary hover:text-white hover:cursor-pointer'
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
                    <h3 className="text-3xl text-center font-semibold">Results</h3>
                    <Link href="/">
                        <button className="block mx-auto my-5 bg-primary py-3 rounded-xl w-full text-2xl font-semibold">Save</button>
                    </Link>
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