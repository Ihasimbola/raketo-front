import { VariantProps, cva } from 'class-variance-authority'
import { SelectHTMLAttributes } from 'react'
import { cn } from '../../lib/utils'

type OptionsType = {
  label: string,
  optionId: string
}

const selectVariants = cva(
  "text-gray-800 h-10 pl-2 appearance-auto border-r-[10px] border-r-transparent h-full focus:outline-none w-full",
  {
    variants: {
      variant: {
        primary: "border-2 border-gray-500 rounded-md"
      }
    }
  }
)

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>, VariantProps<typeof selectVariants> {
  options: Array<OptionsType>,
  selectName: string,
}

function Select({ className, variant, options, selectName, ...props }: SelectProps) {
  return (
    <div className='border rounded-md overflow-hidden h-[40px]'>
      <select className={cn([selectVariants({ variant }), className])} {...props} name={selectName}>
        {
          options.map((option: OptionsType, idx: number) => (
            <option key={idx} value={option.optionId}>
              {option.label}
            </option>
          ))
        }
      </select>
    </div>
  )
}

export default Select