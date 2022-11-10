import { Box } from '@mui/material'
import { useEffect } from 'react'
import AuthBox from '../../components/AuthBox'
import AuthTitle from '../../components/AuthTitle'
import DefaultSubmitButton from '../../components/Primitives/DefaultSubmitButton'
import { useState } from 'react'
import LabelWithRedirect from '../../components/LabelWithRedirect'
import {
  getRegisterFormValidators,
  validateRegisterForm,
} from '../../shared/utils/validators'
import RegisterInputs from '../../components/RegisterInputs'

export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const [isFormValid, setIsFormValid] = useState(false)
  const [showErrors, setShowErrors] = useState(false)

  const registerValidators = getRegisterFormValidators({
    email,
    password,
    username,
    day,
    month,
    year,
  })

  useEffect(() => {
    setIsFormValid(validateRegisterForm({ ...registerValidators }))
  }, [
    email,
    password,
    username,
    day,
    month,
    year,
    setIsFormValid,
    registerValidators,
  ])

  const handleRegister = () => {
    setShowErrors(!isFormValid)
    if (isFormValid) {
      console.log({
        email,
        password,
        username,
        day,
        month,
        year,
      })
    }
  }

  return (
    <AuthBox sx={{ width: { xs: '450px', sm: '480px' } }}>
      <Box sx={{ textAlign: 'center', marginBottom: '1.2rem' }}>
        <AuthTitle>Create an account</AuthTitle>
      </Box>
      <RegisterInputs
        validators={showErrors ? registerValidators : undefined}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        username={username}
        setUsername={setUsername}
        day={day}
        setDay={setDay}
        month={month}
        setMonth={setMonth}
        year={year}
        setYear={setYear}
      />
      <DefaultSubmitButton onClick={handleRegister}>
        Register
      </DefaultSubmitButton>
      <LabelWithRedirect
        label='Already have an account?'
        redirect='/login'
        redirectText='Log in'
      />
    </AuthBox>
  )
}
