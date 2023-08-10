import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/fontawesome-free-solid";

const QuestionList = () => {
    const questions = [
        {
            question: 'What do you want?',
            answer: 'Hz hz hz hzh zhz hzhz hzhhzhz hzh hzh zh zh hzh zh hzhz hz h zhz hz h',
        },
        {
            question: 'What do you want?',
            answer: 'Hz hz hz hzh zhz hzhz hzhhzhz hzh hzh zh zh hzh zh hzhz hz h zhz hz h',
        },
        {
            question: 'What do you want?',
            answer: 'Hz hz hz hzh zhz hzhz hzhhzhz hzh hzh zh zh hzh zh hzhz hz h zhz hz h',
        },
        {
            question: 'What do you want?',
            answer: 'Hz hz hz hzh zhz hzhz hzhhzhz hzh hzh zh zh hzh zh hzhz hz h zhz hz h',
        },
        {
            question: 'What do you want?',
            answer: 'Hz hz hz hzh zhz hzhz hzhhzhz hzh hzh zh zh hzh zh hzhz hz h zhz hz h',
        },
        {
            question: 'What do you want?',
            answer: 'Hz hz hz hzh zhz hzhz hzhhzhz hzh hzh zh zh hzh zh hzhz hz h zhz hz h',
        },
        {
            question: 'What do you want?',
            answer: 'Hz hz hz hzh zhz hzhz hzhhzhz hzh hzh zh zh hzh zh hzhz hz h zhz hz h',
        }, {
            question: 'What do you want?',
            answer: 'Hz hz hz hzh zhz hzhz hzhhzhz hzh hzh zh zh hzh zh hzhz hz h zhz hz h',
        }

    ];


    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleAnswer = (index) => {
        setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <section className="w-[85%] flex flex-col my-10 mx-auto">
            <h1 className="text-4xl text-red-600 mb-10 w-[70%] text-center">Questions ?</h1>
            <div className="shadow-[0px_0px_10px_5px_rgba(0,0,0,0.10)] flex flex-col w-[80%]">
                {questions.map((question, index) => (
                    <div className={`${index === 0 ? 'bg-gray-300' : ''} bg-white`}>
                        <div key={index} className={`border-b-[1px] flex flex-col`}>
                            <div className={`flex justify-between items-center cursor-pointer h-full transition-bg duration-300 ${expandedIndex === index ? 'transform bg-gray-100' : 'bg-white'}`}
                                onClick={() => toggleAnswer(index)}>
                                <div className="p-4 flex justify-between w-full">
                                    <h3 className="text-lg font-semibold">{question.question}</h3>
                                    <QuestionListButton expandedIndex={expandedIndex} index={index}/>
                                </div>
                            </div>
                            <div className={`overflow-hidden duration-300 ${expandedIndex === index ? 'bg-gray-100 max-h-40' : 'bg-white max-h-0'} transition-max-h transition-bg`}>
                                <div className="p-4 border-l-2 border-red-600">
                                    <p>{question.answer}</p>

                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

function QuestionListButton({expandedIndex, index}) {
    return (
        <svg
            className={`w-6 h-6 rounded-full bg-gray-300 transition-transform transition-bg duration-300 ${expandedIndex === index ? 'transform rotate-180 bg-red-600 text-white' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 18 18"
            xmlns="http://www.w3.org/2000/svg">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0.75"
                d="M13 8l-4 4-4-4"
            />
        </svg>
    );
}

export default QuestionList;
