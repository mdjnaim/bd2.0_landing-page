import pillarIcon from '../assets/light.png';

interface PillarCardProps {
    title: string;
    desc: string;
}

export default function PillarCard({ title, desc }: PillarCardProps) {
  return (
    <div className='bg-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-200'>
        <div className='mb-3'>
            <img src={pillarIcon} alt="icon" className='w-10 h-10 object-contain' />
        </div>
        <h3 className='font-bold text-gray-900 text-sm mb-1'>{title}</h3>
        <p className='text-gray-700 text-xs leading-relaxed'>{desc}</p>
    </div>
  )
}

