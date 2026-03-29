import { useState } from 'react';   

export default function NewsLetter() {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email) {
        alert(`Subscribed with ${email}`);
        setEmail('');
    }
  };

  return (
    <div className='max-w-7xl mx-auto px-4 py-8'>
        <div className='bg-green-100 rounded-2xl px-8 py-12 text-center'>
            <h2 className='text-2xl md:text-3xl font-bold text-gray-900 mb-3'>
                Subscribe to our Newsletter
            </h2>
            <p className='text-gray-600 text-sm leading-relaxed mb-8 max-w-md mx-auto'>
                Bangladesh 2.0 aims to redefine the nation's trajectory by embracing
                cutting-edge technology, promoting inclusive growth.
            </p>
            <div className='flex items-center max-w-lg mx-auto bg-white rounded-lg overflow-hidden border border-gray-200 mb-3'>
                <input 
                type='email' 
                placeholder='Enter your email' 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                className='flex-1 px-5 py-3 text-sm text-gray-600 focus:outline-none' />

                <button onClick={handleSubscribe}
                className='bg-teal-800 text-white px-6 py-3 text-sm font-semibold hover:bg-teal-900 transition-colors duration-200'>Subscribe</button>
            </div>
            <p className='text-gray-500 text-xs'>
                We promise not to spam you!
            </p>
        </div>
    </div>
  )
}
