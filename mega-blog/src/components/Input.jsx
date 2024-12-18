import React from 'react'
import { useId } from 'react'
import { useRef } from 'react'

const Input = React.forwardRef( function Input({
    label,
    type="",
    className="",
    ...props
} , ref){
    const id = useId()

    return <div className='w-full'>
            {label && <label className='inline-block nb-1 pl-1'
                                htmlFor={id}>
                        </label>}
            <input
                type={type}
                className = {`px-3 py-2 rounded-lg bg-white text-black outline-none
                 focus:bg-gray-50 duration-200 borer borer-gray-200 
                 w-full  ${className}`}
                 ref={ref} 
                 {...props}
                 id={id}

                 />
                        
                   
           </div>
})

export default Input
