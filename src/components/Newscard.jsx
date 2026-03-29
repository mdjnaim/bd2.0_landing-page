import aljazeeraLogo from '../assets/aljazeera.png';

interface NewsCardProps {
    title: string;
    source: string;
    date: string;
    time: string;
    desc: string;
    image: string;
    imageLeft: boolean;
}

export default function NewsCard({ title, source, date, time, desc, image, imageLeft }: NewsCardProps) {
    const imageE1 = (
        <div className='w-full md:w-64 h-48 flex-shrink-0 rounded-xl overflow-hidden'>
            <img src={require(`../assets/${image}`)} alt={title} className='w-full h-full object-cover' />
        </div>
    )

    const contentE1 = (
        <div className='flex flex-col gap-3 flex-1'>
            <h3 className='text-xl font-bold text-gray-900'>{title}</h3>
            <div>
                <img src={aljazeeraLogo} alt="ALJAZEERA" className='h-5 object-contain'/>
            </div>
            <p className='text-gray-500 text-xs'>Date: {date} &nbsp; Time: {time}</p>
            <p className='text-gray-600 text-sm leading-relaxed'>{desc}</p>
            <button className='bg-teal-800 text-white px-5 py-2 rounded text-sm font-medium hover:bg-teal-900 transition-colors duration-200 w-fit'>Read More</button>
        </div>
    )

  return (
    <div className='bg-gray-200 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6'>
        {imageLeft ? (
            <>
                {imageE1}
                {contentE1}
            </>
        ) : (
            <>
                {contentE1}
                {imageE1}
            </>
        )}
    </div>
  )
}
