import { visions } from '../data/data';
import VisionCard from './Visioncard';


export default function VisionSection() {
  return (
    <div className='max-w-7xl mx-auto px-4 py-12'>
     <h2 className='text-2xl md:text-3xl font-bold text-gray-900 mb-3'>
        The vision of Future
     </h2>
     <p className='text-gray-600 text-sm leading-relaxed mb-8 max-w-7xl'>
        Bangladesh 2.0 aims to redefine the nation's trajectory by embracing cutting-edge technology, promoting inclusive growth, and ensuring sustainability. With initiatives in renewable energy, digital transformation, and robust infrastructure, the country is set to become a global model of development.
     </p>

     <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8'>
        {visions.map((vision, index) => (
            <VisionCard key={index} title={vision.title}
             desc={vision.desc} bg={vision.bg} btnColor={vision.btnColor} />
        ))}
     </div>

     <div className='bg-gray-200 border border-gray-600 rounded-xl p-8'>
        <span className='text-5xl text-gray-900 font-serif leading-none'>"</span>
        <p className='text-gray-900 text-sm leading-relaxed mt-2 mb-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci deleniti temporibus sed eos quod provident et similique consequuntur aperiam quam sunt ea incidunt repudiandae iusto saepe voluptatibus, officia, beatae necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, necessitatibus totam! Veniam, aliquid excepturi perspiciatis minus, culpa ut quibusdam molestias corrupti ea praesentium cupiditate quae deserunt vero quaerat, quos laudantium?</p>

        <p className='font-bold text-gray-900 text-sm'>Dr. Muhammad Yunus</p>
        <p className='text-gray-900 text-xs'>Chief Adviser of the People's Republic of Bangladesh</p>
     </div>
    </div>
  )
}
