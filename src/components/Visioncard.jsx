import lightIcon from '../assets/light.png';

interface VisionCardProps {
    title: string;
    desc: string;
    bg: string;
    btnColor: string;
}

export default function VisionCard({ title, desc, bg, btnColor }: VisionCardProps) {
  return (
    <div className={`${bg} rounded-xl p-6 flex flex-col gap-4`}>
        <div className='w-12 h-12'>
            <img src={lightIcon} alt="icon" className='w-full h-full object-contain' />
        </div>

        <h3 className='font-bold text-gray-900 text-base'>{title}</h3>
        <p className='text-gray-900 text-sm leading-relaxed'>{desc}</p>
        <button className={`${btnColor} text-white px-5 py-2 rounded text-sm font-medium w-fit transition-colors duration-200`}>
            Learn More
        </button>
    </div>
  )
}
