import { Overpass, Oswald, Rubik } from '@next/font/google';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';

import Image from 'next/image';
import dashboard from '../../public/images/dashboard.png';

const overpass = Overpass({ subsets: ['latin'] });
const oswald = Oswald({ subsets: ['latin'] });
const rubik = Rubik({ subsets: ['latin'] });

export default function Herobanner() {
    return(
        <>
        <div className="flex items-center sm:w-full h-72 -skew-y-6 bg-gradient-to-r from-[#4ADE80] via-[#00B37E] to-[#009D7C] xl:-skew-y-3 h-96">
            <div className={rubik.className}>
                <div className="text-white skew-y-3 sm:ml-12 flex-col xl:ml-24">
                    <h1 className="flex tracking-tight drop-shadow-lg sm:text-[1.3rem] md:text-[1.7rem] lg:text-[2rem] xl:text-[3rem]">Het makkelijkst te gebruiken<br />stagelogboek van Nederland</h1>
                    <div className="flex justify-center mt-5 drop-shadow-xl">
                        <button className="flex flex-row items-center justify-center bg-yellow-300 w-48 px-1 py-2 text-[1rem] text-[#4ADE80] rounded-lg">Ga naar logboek <ArrowLongRightIcon className="h-[36px] w-[36px] ml-2" /></button>
                    </div>
                </div>
            </div>
            <div className="flex mt-96 sm:hidden md:ml-72 xl:flex ml-80">
                <Image src={dashboard} alt="dashboard" className='h-[45vh] w-[40vw] drop-shadow-2xl sm:hidden xl:flex skew-y-3' />
            </div>
        </div>      
        </>
    )
}