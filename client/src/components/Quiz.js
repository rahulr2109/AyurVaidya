import React, { useState } from 'react';

const Quiz = () => {
    const [questionNo, setQuestionNo] = useState(0);
    const [vatta, setVatta] = useState(0);
    const [pitta, setPitta] = useState(0);
    const [kapha, setKapha] = useState(0);
    const [dosha, setDosha] = useState(null);

    const handleAnswer = (choice) => {
        if (choice === 1) setVatta(vatta + 1);
        if (choice === 2) setPitta(pitta + 1);
        if (choice === 3) setKapha(kapha + 1);

        if (vatta > pitta && vatta > kapha) {
            setDosha('Vatta');
        } else if (pitta > vatta && pitta > kapha) {
            setDosha('Pitta');
        } else if (kapha > vatta && kapha > pitta) {
            setDosha('Kapha');
        }

        setTimeout(() => {
            setQuestionNo(questionNo + 1);
            if (questionNo + 1 > quizData.length) {
                alert('Quiz completed, Now click ok to get your answer');
                // Handle displaying results
            }
        }, 1000);
    };

    const quizData = [
        {
            Q: 'How is your body structure?',
            C: ['Thin & lean', 'Medium & proportionate', 'Large & well-built'],
        },
        {
            Q: 'How is your appetite?',
            C: [
                'Irregular: I feel hungry sometimes and other times I do not',
                'Regular: I feel hunger strongly every few hours and need food at regular intervals',
                'Steady: I do not feel hungry for a few hours, I can miss meals, but do not like to. I tend towards emotional eating.',
            ],
        },
        // Add more quiz questions as needed
    ];

    return (
        <div>
            <div>
                <h3>{`Question ${questionNo + 1}: ${quizData[questionNo].Q}`}</h3>
                <ul>
                    {quizData[questionNo].C.map((choice, index) => (
                        <li key={index} onClick={() => handleAnswer(index + 1)}>
                            <label>{choice}</label>
                        </li>
                    ))}
                </ul>
            </div>
            {/* Display results or other components as needed */}
            {dosha && (
                <div>
                    <p>{`Your Dosha: ${dosha}`}</p>
                    {/* Display additional information or links based on dosha */}
                </div>
            )}
        </div>
    );
};

export default Quiz;
