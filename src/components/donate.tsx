import { amounts } from "../data/data"
import { useState } from "react";


export default function DonateSection() {
        const [selected, setSelected] = useState(amounts[0]);
        const [custom, setCustom] = useState("");

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3">
            Donate to Bangladesh 2.0
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed mb-8 max-w-7xl mx-auto">
            Bangladesh 2.0 is a non-profit initiative that relies on the support of individuals like you to drive positive change and create a better future for our nation. Your generous donations will help us fund our projects, initiatives, and campaigns aimed at transforming Bangladesh into a thriving and prosperous country. By contributing to Bangladesh 2.0, you are investing in the future of our nation and empowering us to make a meaningful impact on the lives of millions of people. Join us in our mission to build a brighter future for Bangladesh by donating today.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 max-w-4xl mx-auto">
            {amounts.map((amount, index) => (
                <button key={index} onClick={() => setSelected(amount)} className={`py-5 rounded-xl text-lg font-semibold border transition-all duration-200 ${selected === amount ? 'bg-teal-700 text-white border-teal-700 scale-105' : 'bg-white text-gray-800 border-gray-300 hover:border-teal-600 hover:bg-teal-50 hover:text-teal-700 hover:scale-105'}`}>
                    {amount}
                </button>
            ))}
            </div>
            <div className="max-w-4xl mx-auto mb-6">
            <input type="text" placeholder="Custom Amount" value={custom} onChange={(e) => setCustom(e.target.value)} className="w-full border border-gray-300 rounded-xl px-6 py-4 text-center text-gray-500 text-sm focus:outline-none focus:border-teal-600"/>
        </div>
        <button className="bg-teal-800 text-white px-10 py-3 rounded-lg text-sm font-semibold hover:bg-teal-900 hover:scale-105 transition-all duration-200">Donate Now</button>
    </div>
  )
}
