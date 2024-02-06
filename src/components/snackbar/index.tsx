import React, { useEffect, useState } from 'react'
import { VariantProps, cva } from 'class-variance-authority'
import { cn } from '../../lib/utils';
import { createPortal } from 'react-dom';
import "./style.scss";
import { CheckIcon } from 'lucide-react';
import Text from '../Text/Text';
import WarnIcon from '../icons/WarnIcon';
import ErrorIcon from '../icons/ErrorIcon';

const snackbarVariants = cva(
  'rounded-md p-4 absolute z-[1500]',
  {
    variants: {
      variant: {
        success: "bg-green-700 text-white",
        error: "bg-red-500 text-white",
        warning: "bg-yellow-400 text-black"
      }
    }
  }
)

interface SnackbarProps extends VariantProps<typeof snackbarVariants> {
  content: string;
  className?: string;
  textColor?: string;
  setShower: (value: boolean) => void;
  show: boolean;
}

function Snackbar({ content, className, variant, show, setShower, textColor }: SnackbarProps) {
  // const [isShow, setIsShow] = useState(show);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShower(false);
    }, 4000);

    return () => clearTimeout(timeout);
  }, []);

  const body = (
    <div className={cn([snackbarVariants({ variant }), className, "snackbar", `${show ? "" : "snackbar-hide"} hide`])}>
      {
        variant === "success" ? (<CheckIcon />)
          : variant === "warning" ? (<WarnIcon />) : (<ErrorIcon />)

      }
      <Text
        className={cn([textColor])}
      >
        {content}
      </Text>
    </div>
  )
  return (
    createPortal(body, document.body)
  )
}

export default Snackbar