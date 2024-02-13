import React, { ButtonHTMLAttributes } from 'react'
import { cva, VariantProps } from "class-variance-authority";
import { cn } from '../../lib/utils';

const buttonVariants = cva(
  "inline-flex items-center justify-center min-w-fit transition delay-75 ease-in-out hover:transition-color rounded-md",
  {
    variants: {
      variant: {
        default: "bg-blue-700 text-white hover:bg-blue-900",
        outline: "bg-transpatent border border-slate-200 hover:bg-gray-500 hover:text-white",
        primary: "bg-green-700 text-white hover:bg-green-800",
        secondary: "bg-yellow-600 text-white hover:bg-yellow-700",
        gray: "bg-gray-600 text-white hover:bg-gray-700",
        danger: "bg-red-500 text-white hover:bg-red-600",
        transparent: "bg-transparent"
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-2 rounded-md"
      }
    },
    defaultVariants: {
      size: "default",
      variant: 'default'
    }
  }
);

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {

}

function Button({ className, size, variant, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ size, variant, className }))}
      {...props}
    />
  )
}

export {
  Button,
  buttonVariants
}