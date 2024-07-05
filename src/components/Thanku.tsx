import Link from "next/link"

export const ThankYou = ()=> {

    return (
        <div className='flex flex-col gap-2 items-center justify-center'>
            <div> ITS greeat if you hv given legit details , if not FU.</div>
            <div className=''>THE <span className='text-2xl font-bold'>ENDD</span></div>
            <Link href="/">homeepagee</Link>
        </div>
    )
}