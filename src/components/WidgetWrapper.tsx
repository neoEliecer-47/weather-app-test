import { ReactNode } from "react"


const WidgetWrapper = ({ children }: {children: ReactNode}) => {
  return (
    <div className="p-2 w-full h-[10rem] md:h-[13rem] bg-blue-500 mx-0 rounded-[1.8rem]">
        {children}
    </div>
  )
}

export default WidgetWrapper