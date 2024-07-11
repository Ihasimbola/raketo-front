import React from 'react'
import { Button } from '../Button/Button'
import "./style.scss";
import { createPortal } from 'react-dom';
import { Form, useMatches, useNavigate } from 'react-router-dom';

type Props = {
  children: React.ReactNode,
}

function Modal({ children }: Props) {
  const navigate = useNavigate();
  const match = useMatches()
  const handle = match[match.length - 1].handle as { handle: () => string, urlEndPoint: string };

  const handleCloseModal = () => {
    navigate(-1);
  }
  const content = (
    <div className='modal rounded-md'>
      <Form method="post" action={`/${handle.urlEndPoint}`} encType='multipart/form-data'>
        {
          createPortal((<div className='modal__overlay' onClick={handleCloseModal}></div>), document.body)
        }
        {children}
        <div className='flex flex-row justify-between mt-4'>
          <Button
            variant="secondary"
            onClick={handleCloseModal}
            type="button"
          >
            Hiverina
          </Button>
          <Button
            variant="default"
            type="submit"
          >
            Forony
          </Button>

        </div>
      </Form>
    </div>
  )
  return (
    createPortal(content, document.body)
  )
}

export default Modal