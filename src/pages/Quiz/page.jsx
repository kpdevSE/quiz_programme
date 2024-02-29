import React, {useState} from "react";
import {IoIosSend} from "react-icons/io";
import Navigation from "../../components/navigation";
import {quiz} from "../../data";
import './style.css';

export default function Quiz()
{
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
    const [showResult, setShowResult] = useState(false);
    const [result, setResult] = useState({
        score: 0,
        correctAnswers: 0,
        wrongAnswers: 0,
    });

    const {questions} = quiz;
    const {question, answers, correctAnswer} = questions[activeQuestion];

    // Select and check answer
    const onAnswerSelected = (answer, idx) =>
    {
        setSelectedAnswerIndex(idx);
        if (answer === correctAnswer)
        {
            setResult(prev => ({
                ...prev,
                score: prev.score + 5,
                correctAnswers: prev.correctAnswers + 1,
            }));
        } else
        {
            setResult(prev => ({
                ...prev,
                wrongAnswers: prev.wrongAnswers + 1,
            }));
        }
    };

    // Move to the next question
    const nextQuestion = () =>
    {
        setSelectedAnswerIndex(null);
        if (activeQuestion !== questions.length - 1)
        {
            setActiveQuestion(prev => prev + 1);
        } else
        {
            setShowResult(true);
        }
    };

    // Skip the current question
    const skipQuestion = () =>
    {
        nextQuestion(); // You can customize this if you want to handle skipping differently
    };

    return (
        <div>
            <Navigation />
            <div className="container">
                <div>
                    <div className='quiz-container'>
                        <h3>Results</h3>
                        <h3>Overall {(result.score / (questions.length * 5)) * 100}%</h3>
                        <p style={{color: "blue", fontWeight: "bold"}}>
                            Total Questions: <span>{questions.length}</span>
                        </p>
                        <p style={{color: "black", fontWeight: "bold"}}>
                            Total Score: <span>{result.score}</span>
                        </p>
                        <p style={{color: "green", fontWeight: "bold"}}>
                            Correct Answers: <span>{result.correctAnswers}</span>
                        </p>
                        <p style={{color: "red", fontWeight: "bold"}}>
                            Wrong Answers: <span>{result.wrongAnswers}</span>
                        </p>
                    </div>
                </div>
                <h1 style={{marginTop: "30px"}}>Quiz</h1>
                <div>
                    <h2>
                        Question: {activeQuestion + 1}
                        <span>/{questions.length}</span>
                    </h2>
                    <div style={{height: "10vh"}}>
                        <h3 style={{color: "black"}}>{question}</h3>
                    </div>
                </div>
                <div>
                    {!showResult ? (
                        <div className='quiz-container'>
                            <h3>{questions[activeQuestion].question}</h3>
                            <ul>
                                {answers.map((answer, idx) => (
                                    <li
                                        key={idx}
                                        onClick={() => onAnswerSelected(answer, idx)}
                                        className={selectedAnswerIndex === idx ? 'li-selected' : 'li-hover'}
                                    >
                                        <span>{answer}</span>
                                    </li>
                                ))}
                            </ul>
                            <button onClick={nextQuestion} className='btn' style={{backgroundColor: "green", border: "none"}}>
                                {activeQuestion === questions.length - 1 ? 'Finish' : (
                                    <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: '3'}}>
                                        <IoIosSend />
                                        <p>Submit</p>
                                    </div>
                                )}
                            </button>
                            <button onClick={skipQuestion} className='btn' style={{backgroundColor: "red", border: "none"}}>
                                Skip
                            </button>
                        </div>
                    ) : (
                        <div className='quiz-container'>
                            <button onClick={() => window.location.reload()}>Restart</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
