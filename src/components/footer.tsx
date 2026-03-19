import fbIcon from '../assets/fb.png';
import instaIcon from '../assets/insta.png';
import xIcon from '../assets/x.png';

export default function FooterSection() {
  return (
    <footer className='bg-gray-100 py-10 text-center'>
        <h2 className='text-xl font-bold text-gray-900 mb-4'>
            Bangladesh 2.0
        </h2>
        <div className='flex items-center justify-center gap-6 mb-6'>
            <a href="#">
                <img src={fbIcon} alt="Facebook" className='w-7 h-7 object-contain hover:opacity-75 hover:scale-110 transition-all duration-200'/>
            </a>
            <a href="#">
                <img src={instaIcon} alt="Instagram" className='w-7 h-7 object-contain hover:opacity-75 hover:scale-110 transition-all duration-200'/>
            </a>
            <a href="#">
                <img src={xIcon} alt="Twitter" className='w-7 h-7 object-contain hover:opacity-75 hover:scale-110 transition-all duration-200'/>
            </a>
        </div>
        <p className='text-gray-500 text-xs'>© 2025 Bangladesh 2.0. All rights reserved.</p>
    </footer>
  )
}
