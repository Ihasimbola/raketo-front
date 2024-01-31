import React, { useEffect, useRef, useState } from 'react'
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import { sidebarDataList } from "../data/sidbarData"
import "./style.scss";
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import { Form, Outlet, useLocation, useNavigate } from 'react-router-dom';
import UserService from '../services/userService';
import { Button } from '../components/Button/Button';
import { Plus } from 'lucide-react';
import { createPortal } from 'react-dom';
import Modal from '../components/modal';
import Input from '../components/Input/Input';
import Text from '../components/Text/Text';
import { cn } from '../lib/utils';

type Props = {
  children?: React.ReactNode
}

type ModalContentType = {
  currentLocation: any
}

function AppLayout({ children }: Props) {
  const location = useLocation();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const res = await UserService.userIsAuthentic();
        return res;
      } catch (error: any) {
        navigate('/login', {
          replace: true
        })
      }
    }

    verifyToken();
  }, [location]);

  return (
    <div className="app-container">
      <Navbar />
      <Sidebar data={sidebarDataList} />
      <div className="app-content">
        <div className='flex flex-row justify-between pr-3'>
          <Breadcrumbs />
          <Button
            variant="primary"
            onClick={() => {
              setShowModal(true)
            }}
          >
            <Plus className="pr-[4px]" />
            Hamorona
          </Button>
        </div>
        {
          showModal && (
            createPortal(<Modal setShowModal={setShowModal} children={<ModalContent currentLocation={location} />} />, document.body)
          )
        }
        <Outlet />
        {/* {children} */}
      </div>
    </div>
  )
}

const ModalContent: React.FC<ModalContentType> = ({ currentLocation }) => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [imgSrc, setImgSrc] = useState<any>(null)

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    if (ev.target.files?.length) {
      const file = URL.createObjectURL(ev.target.files[0])
      setImgSrc(file);
    }
  }

  if (currentLocation.pathname.includes("sokajy")) {
    return (
      <React.Fragment>
        <div className="pb-3 mb-4 border-b-2 border-gray-200">
          <Text
            weight="bold"
          >
            Hamorona Sokajy
          </Text>
        </div>
        <div className='flex flex-col gap-3'>
          <Input
            placeholder="Anaran'ilay sokajy..."
            variant="primary"
            name="name"
          />
        </div>
      </React.Fragment>
    )
  }
  else if (currentLocation.pathname.includes('tekno')) {
    return (
      <React.Fragment>
        <div className="pb-3 mb-4 border-b-2 border-gray-200">
          <Text
            weight="bold"
          >
            Hamorona Tekno
          </Text>
        </div>
        <div className='flex flex-col gap-3'>
          <Input
            placeholder="Ananran'ilay tecno..."
            variant="primary"
          />
          <Input
            placeholder="Ananran'ilay tecno..."
            variant="primary"
          />
          <div className={
            cn(["modal__logo flex flex-col justify-center items-center border border-gray-200 border-dashed cursor-pointer", `${imgSrc ? 'border-none' : ''}`])
          }
            onClick={() => {
              inputFileRef?.current?.click()
            }}
          >
            {!imgSrc && <Plus width={35} height={35} color="#000000a6" />}
            {
              imgSrc && (<img src={imgSrc} alt="logo" className="content__logo" />)
            }
            {
              !imgSrc && <Text>
                Ampidiro eto ny sary famantarana
              </Text>
            }
          </div>
          <Input
            placeholder="Ananran'ilay tecno..."
            variant="primary"
            type="file"
            ref={inputFileRef}
            className='hidden'
            onChange={handleChange}
          />
        </div>
      </React.Fragment>
    )
  }
  else {
    return (
      <React.Fragment>
        <div className="pb-3 mb-4 border-b-2 border-gray-200">
          <Text
            weight="bold"
          >
            Hamorona Singa
          </Text>
        </div>
        <div className='flex flex-col gap-3'>
          <Input
            placeholder="Lohateny"
            variant="primary"
          />
          <Input
            placeholder="Famariparitana"
            variant="primary"
            type="text-area"
          />
          <Input
            placeholder="Ananran'ilay tecno..."
            variant="primary"
          />
        </div>
      </React.Fragment>
    )
  }

}

export default AppLayout