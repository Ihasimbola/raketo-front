import React from 'react'
import { Button } from '../Button/Button'
import "./style.scss";
import { createPortal } from 'react-dom';

type Props = {
  children: React.ReactNode,
  setShowModal: (value: boolean) => void
}

function Modal({ children, setShowModal }: Props) {
  return (
    <div className='modal rounded-md'>
      {
        createPortal((<div className='modal__overlay' onClick={() => setShowModal(false)}></div>), document.body)
      }
      {children}
      <div className='flex flex-row justify-between mt-4'>
        <Button
          variant="secondary"
          onClick={() => setShowModal(false)}
        >
          Hiverina
        </Button>
        <Button
          variant="default"
        >
          Forony
        </Button>
      </div>
    </div>
  )
}

export default Modal