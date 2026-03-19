import { news } from '../data/data';
import NewsCard from './newscard';

export default function NewsSection() {
  return (
    <div className='max-w-7xl mx-auto px-4 py-12'>
        <h2 className='text-2xl md:text-3xl font-bold text-gray-900 mb-3'>
            Recent News
        </h2>
        <p className='text-gray-600 text-sm leading-relaxed mb-8 max-w-7xl'>
            Bangladesh 2.0 aims to be a comprehensive platform that not only shares visionary ideas but also keeps you updated with the latest news and developments related to our vision for a better Bangladesh. Stay informed about the progress, initiatives, and success stories that are shaping the future of our nation. Here are some of the recent news articles related to Bangladesh 2.0.
        </p>

        <div className=' flex flex-col gap-6'>
            {news.map((item, index) => (
                <NewsCard key={index} 
                title={item.title} 
                source={item.source}
                date={item.date}
                time={item.time}
                desc={item.desc}
                image={item.image}
                imageLeft={item.imageLeft}
                 />
            ))}
        </div>
    </div>
  )
}
