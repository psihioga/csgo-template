import Image from "next/image";


export interface BgProps {
    position?: string;
}

export const Background = (props : BgProps) => {

    const width = 600;
    const height = 600;
    
    return <div className="absolute w-full pointer-events-none flex justify-center">
        <Image priority className='z-[-1] fixed -translate-y-3/4 opacity-50'  src={'/light_bulb.svg'} alt='light bulb' width={width} height={height}/>
        <Image className='z-[-1] fixed bottom-0 left-0 -translate-x-1/2 translate-y-3/4 opacity-50'  src={'/light_bulb.svg'} alt='light bulb' width={width} height={height}/>
        <Image className='z-[-1] fixed bottom-0 right-0 translate-x-1/2 translate-y-2/3 opacity-50'  src={'/light_bulb.svg'} alt='light bulb' width={width} height={height}/>
    </div>
}