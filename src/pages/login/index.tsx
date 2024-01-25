import React from 'react'
import LoginImg from "../../assets/login.jpg"
import Text from '../../components/Text/Text'
import { Form, NavLink } from 'react-router-dom'
import Input from '../../components/Input/Input'
import { Button } from '../../components/Button/Button'
import "./styles.scss"

type Props = {}

const LoginPage = (props: Props) => {
  return (
    <div className="login flex items-center justify-center">
      <div className='login__container grid'>
        <div className="login__couverture">
          <img src={LoginImg} alt="couverture" />
        </div>
        <div className='login__form'>
          <Text
            as="h1"
            color="light-700"
            weight="bold"
            className="py-5 border-b-2 border-b-gray-100"
            size="xl"
          >
            Miarahaba tonga eto @ Raketo
          </Text>
          <Form className="mt-4 flex flex-col gap-4">
            <Input
              placeholder='Anarana na mailaka'
              variant="secondary"
            />
            <Input
              placeholder='Teny miafina'
              variant="secondary"
            />
            <Button
              variant="primary"
              type="submit"
            >
              Hiditra
            </Button>
            <NavLink to="#">
              <Text
                color="light-700"
                className="hover:underline hover:text-gray-800"
              >
                Mbola tsy manana kaonty?
              </Text>
            </NavLink>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage