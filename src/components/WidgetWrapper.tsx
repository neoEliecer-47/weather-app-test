import { ReactNode } from "react"


const WidgetWrapper = ({ children }: {children: ReactNode}) => {
  return (
    <div className="p-2 w-full h-[10rem] bg-blue-500 mb-8">
        {children}
    </div>
  )
}

export default WidgetWrapper