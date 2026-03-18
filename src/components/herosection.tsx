import MonuMent from '../assets/monument.png';

export default function HeroSection() {
  return (
    <div className='max-w-7xl mx-auto px-4 py-8'>
        <div className='rounded-2xl overflow-hidden px-8 md:px-14 py-10 md:py-16 flex flex-col md:flex-row items-center justify-between gap-6 bg-green-200'>
            <div className='flex-1 text-center md:text-left'>
                <p className='text-sm text-gray-600 mb-2 font-medium'>Bangladesh 2.0</p>
                <h1 className='text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-6'>Idea , innovation ,<br /> 
                vision and challenges in<br />
                New Bangladesh.</h1>
                <button className='bg-teal-800 text-white px-5 py-2.5 rounded text-sm font-semibold hover:bg-teal-900 transition-colors duration-200 shadow'>Explore New Bangladesh</button>
            </div>

            <div className='w-40 h-40 md:w-72 md:h-72 flex-shrink-0'>
                <img className='w-full h-full object-contain' src={MonuMent} alt="monument" />
            </div>
        </div>
    </div>
  )
}
