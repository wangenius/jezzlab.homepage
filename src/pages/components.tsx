import { ReactNode } from "react"

const Text = ({children}:{children:ReactNode}) => {
    return     <p className="text-sm sm:text-base  max-w-xl mt-6">
{children}
  </p>
}

export default Text;