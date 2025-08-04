import { FC } from "react";
import Link from "next/link";

type BannerProps = {
    isSwiching: boolean;
}

const Banner: FC<BannerProps> = ({ isSwiching }) => {
    return <div className='text-3xl text-center sm:text-6xl text-slate-800 dark:text-slate-200 font-medium'>
        {isSwiching ?
            (<>
                ぼくの名前は <span className="text-purple-700 use-font font-bold"
                ><Link href={'/message'}><span className="dark:text-red-600">ナワサン。</span></Link></span
                ><span className="tree inline-block duration-300 ease-in-out transition">
                    <span className="inline dark:hidden">🌳</span>
                    <span className="hidden dark:inline">🌹</span>
                </span>
            </>) :
            (<>
                Hello!, I&apos;m <h1 className="inline dark:text-red-600 text-purple-700 use-font font-bold changename"
                ><span>Arikato111</span></h1
                ><span
                    className="inline-block hover:rotate-45 duration-300 ease-in-out transition"
                >🤖</span
                ></>)
        }
    </div>
}

export default Banner;