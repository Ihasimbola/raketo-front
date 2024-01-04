import { VariantProps, cva } from 'class-variance-authority'
import React from 'react'
import { cn } from '../../lib/utils'

const textVariants = cva(
  "",
  {
    variants: {
      color: {
        "light-500": "text-gray-500",
        "light-600": "text-gray-600",
        "light-700": "text-gray-700",
        "light-800": "text-gray-800",
        black: "text-gray-900",
        white: "text-gray-100"
      },
      size: {
        xs: "text-xs",
        sm: "text-sm",
        base: "text-base",
        lg: "text-lg",
        xl: "text-xl",
        "2xl": "text-2xl",
      }
    }
  }
)

interface TextProps extends 
 VariantProps<typeof textVariants> {
  as?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
  className?: string
 }

const Text = (props: TextProps) => {
  const { children, size, className , as = "p", color, ...otherProps } = props;

  const Tag = as;

  return (
    <Tag
     className={cn(textVariants({ color, size }))}
     {...otherProps}
    >
      { children }
    </Tag>
  )
}

export default Text;