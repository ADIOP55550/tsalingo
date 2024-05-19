import { useState } from 'react';
import QRCode from 'react-qr-code';
const randomHex = Array.from({ length: 32 }, () => "0123456789ABCDEF".charAt(Math.floor(Math.random() * 16))).join('');

export default function CouponMessage() {
  const [value, setValue] = useState(randomHex);

  return (
    <div className='text-center flex flex-col items-center w-full mx-4'>
      <h1 className='text-xl mt-3 mb-2'>Congratulations!</h1>
      You've earned a <span className='text-amber-600 text-lg'>5%</span> discount for your next flight.
      Use this code at checkout.
      <QRCode className='mt-4' value={value} size={150}/>
      <pre className='text-sm mt-1'>{randomHex}</pre>
    </div>
  )
}
