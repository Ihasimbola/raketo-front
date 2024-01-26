import { InputHTMLAttributes, forwardRef } from 'react'
import { VariantProps, cva } from "class-variance-authority";
import { cn } from '../../lib/utils';

const inputVariants = cva(
  "text-gray-800 focus:outline-none bg-transparent h-10 pl-2 ",
  {
    variants: {
      variant: {
        primary: "border border-2 border-gray-500 rounded-md placeholder:text-gray-600",
        secondary: "border-b-2 border-gray-200",
        default: "bg-transparent placeholder:text-gray-600",
      },
    },
    defaultVariants: {
      variant: "default"
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
          className={cn([inputVariants({ variant }), className])}
          placeholder={placeholder}
          {...props}
        />
      </>
    )
  }
)

export default Input