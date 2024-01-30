import React, { useEffect, useState } from 'react'
import LoginImg from "../../assets/login.jpg"
import Text from '../../components/Text/Text'
import { Form, NavLink, redirect } from 'react-router-dom'
import Input from '../../components/Input/Input'
import { Button } from '../../components/Button/Button'
import "./styles.scss"
import UserService from '../../services/userService'
import { useActionData } from 'react-router-dom'
import axios from 'axios'

export type CredentialType = {
  username: string,
  password: string
}

type Props = {}

const login = async () => {
  const res = await UserService.post("/users/login", {
    username: "ihasina",
    password: "bonjourtoi"
  })


  return res;
}

export async function action({ request }: any) {
  try {
    const formData = await request.formData();
    const credentials = Object.fromEntries(formData) as any;
    const { data } = await UserService.login('/users/login', credentials);
    localStorage.setItem('token', data.token);
    localStorage.setItem('refreshToken', data.refreshToken);
    return redirect('/');
  } catch (err: any) {
    return err.response.data.message as string;
  }
}

const LoginPage = (props: Props) => {
  const error = useActionData() as string;

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
          <Form className="mt-4 flex flex-col gap-4" method='post'>
            <Input
              placeholder='Anarana na mailaka'
              variant="secondary"
              name="username"
              type="text"
            />
            <Input
              placeholder='Teny miafina'
              variant="secondary"
              name="password"
              type="password"
            />
            <Button
              variant="primary"
              type="submit"
            >
              Hiditra
            </Button>
            {
              error && (<Text color="red-600">
                {error}
              </Text>)
            }
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