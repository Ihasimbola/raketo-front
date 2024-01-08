import { InputHTMLAttributes, forwardRef } from 'react'
import { VariantProps, cva } from "class-variance-authority";
import { cn } from '../../lib/utils';

const inputVariants = cva(
  "border border-2 border-gray-500 text-gray-800 rounded-md focus:outline-none h-10 pl-2 ",
  {
    variants: {
      variant: {
        primary: "bg-transparent placeholder:text-gray-600 focus:border-gray-800"
      }
    }
  }
)

interface InputProps extends InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {

}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ variant, placeholder, className, ...props }, ref) => {
    return (
      <>
        <input
         ref={ref}
         className={cn(inputVariants({ variant }))}
         placeholder={placeholder}
         {...props}
        />
      </>
    )
  }
)

export default Input