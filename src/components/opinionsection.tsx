import { useState } from "react"
import { questions, opinionOptions } from '../data/data';

export default function OpinionSection() {
    const [opinions, setOpinions] = useState<string[]>(questions.map(() => "Yes, I Agree"));

    const handleChange = (index: number, value: string) => {
        const updated = [...opinions];
        updated[index] = value;
        setOpinions(updated);
    }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Your Opinion Matters</h2>

        <div className="border border-gray-200 rounded-xl overflow-hidden">
            <div className="grid grid-cols-2 bg-green-100 px-6 py-4">
                <span className="font-semibold text-gray-800 text-sm">Questions</span>
                <span className="font-semibold text-gray-800 text-sm text-right">Select Your Opinion</span>
            </div>

            {questions.map((question, index) => (
                <div key={index} className={`grid grid-cols-2 px-6 py-5 items-center gap-4 bg-gray-200 ${index !== questions.length - 1 ? 'border-b border-white' : ''}`}>
                <p className="text-gray-900 text-sm">{question}</p>
                <div className="flex justify-end">
                <select value={opinions[index]}
                onChange={(e) => handleChange(index, e.target.value)} className="border border-teal-600 text-teal-700 text-sm rounded px-3 py-2 bg-white cursor-pointer focus:outline-none hover:bg-green-200 hover:text-black transition-colors duration-200"
                >
                    {opinionOptions.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
                </div>
        </div>
            ))}
        </div>
    </div>
  )
}
