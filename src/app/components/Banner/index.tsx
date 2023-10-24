import Image from 'next/image'
import Avatar from '../../assets/images/avatar.gif'

export default function Banner() {
    return (
        <>
            <h1 className='absolute top-20 text-9xl text-center uppercase effectFont' title='I am the Warrior'>I am the Warrior</h1>
            <div className="mt-[-6rem] mx-auto max-w-6xl w-full h-96 relative">
                <div className="h-3/4 bg-gradient-to-br from-orange-100/10 to-orange-300/30 rounded-2xl border-l-white/20 border-t-white/20 border-r-white/10 border-b-white/10 border-2 shadow-inner hover:shadow-xl hover:scale-105 duration-500">
                </div>
                <div className='h-1/3 flex justify-center'>
                    <h2 className='w-1/3 text-right uppercase effectFont2'>Đỗ Minh Vương</h2>
                    <Image 
                        src={Avatar} 
                        alt={'My avatar'} 
                        className='mx-5 h-[150%] w-auto translate-y-[-50%] relative rounded-full border-4 border-orange-300/20 z-10 hover:shadow-xl hover:scale-105 duration-500'
                    />
                    <h2 className='w-1/3 uppercase effectFont2'>XoaiCC</h2>
                </div>
            </div>
        </>
    );
}