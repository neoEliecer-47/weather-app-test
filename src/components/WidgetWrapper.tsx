import { ReactNode } from "react"



const WidgetWrapper = ({ children }: {children: ReactNode}) => {

  // function buildValue(title: string){
  //   if(title.startsWith('t')) return temperature
  //   if(title.startsWith('w')) return wind
  //   if(title.startsWith('h')) return humidity
  //   if(title.startsWith('p')) return pressure
  // }
  return (
    <div className="p-10 bg-red-300 w-full h-[12rem] m-auto mb-10 overflow-hidden">
        {/* <Image src={imgSrc} width={50} height={50} alt="image" className="bg-white"/>
        <h2 className="bg-red-500">{title}</h2>
        <h4 className="bg-white">{buildValue(title)}</h4>
        <button className='p-4 bg-white/50 text-black'>refresh</button> */}
        {children}
    </div>
  )
}

export default WidgetWrapper