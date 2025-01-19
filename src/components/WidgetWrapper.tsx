import classNames from "classnames"
import { ReactNode } from "react"
import styles from './WidgetWrapper.module.css'


const WidgetWrapper = ({ children }: {children: ReactNode}) => {
  return (
    <div className={classNames(' w-full h-[10rem] md:h-[13rem]  mx-0 rounded-[1.8rem]', styles.container)}>
        {children}
    </div>
  )
}

export default WidgetWrapper