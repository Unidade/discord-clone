import { Box, Typography } from '@mui/material'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import AuthBox from '../../components/AuthBox'
import DefaultSubmitButton from '../../components/Primitives/DefaultSubmitButton'
import LabelWithRedirect from '../../components/LabelWithRedirect'
import LoginPageHeader from '../../components/LoginPageHeader'
import {
  validateLoginForm,
  getValidatorsLoginForm,
} from '../../shared/utils/validators'
import LoginInputs from '../../components/LoginInputs'
import { loginAsync } from '../../store/reducers/authorization/authorizationSlice'
import { useAppDispatch } from '../../hooks/reduxHooks'

export default function Login() {
  const dispatch = useAppDispatch()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isFormValid, setIsFormValid] = useState(false)
  const [showErrors, setShowErrors] = useState(false)

  const loginValidators = getValidatorsLoginForm({ email, password })

  useEffect(() => {
    setIsFormValid(validateLoginForm({ ...loginValidators }))
  }, [email, password, setIsFormValid, loginValidators])

  const handleLogin = () => {
    setShowErrors(!isFormValid)
    if (isFormValid) {
      const data = {
        email,
        password,
      }
      dispatch(loginAsync(data))
        .unwrap()
        .then((d) => {
          console.log('Unrwap data success', d)
        })
        .catch((d) => {
          console.log('Unrwap data error', d)
        })
      console.log(data)
    }
  }

  return (
    <AuthBox>
      <LoginPageHeader />
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <LoginInputs
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          validators={showErrors ? loginValidators : undefined}
        />
        <Link to='/register'>
          <Typography
            variant='subtitle2'
            className='blue-text'
            sx={{ marginTop: '-0.8rem' }}
          >
            Forgot your password?
          </Typography>
        </Link>
        <DefaultSubmitButton onClick={handleLogin}>Log In</DefaultSubmitButton>
      </Box>
      <LabelWithRedirect
        label='Need an account?'
        redirect='/register'
        redirectText='Register'
      />
    </AuthBox>
  )
}
