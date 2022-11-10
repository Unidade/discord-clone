import { InputLabel } from '@mui/material'
import { Box } from '@mui/system'
import { days, months, years } from '../../shared/registerVariables'
import { RegisterFormValidators } from '../../shared/utils/validators'
import ErrorInput from '../ErrorInput'
import { LoginInputsProps } from '../LoginInputs'
import DefaultInput from '../Primitives/DefaultInput'
import DefaultSelect from '../Primitives/DefaultSelect'

interface RegisterInputsPros extends Omit<LoginInputsProps, 'validators'> {
  username: string
  setUsername: (username: string) => void
  month: string
  setMonth: (month: string) => void
  year: string
  setYear: (year: string) => void
  day: string
  setDay: (day: string) => void
  validators?: RegisterFormValidators
}

export default function RegisterInputs({
  email,
  setEmail,
  password,
  setPassword,
  username,
  setUsername,
  month,
  setMonth,
  year,
  setYear,
  day,
  setDay,
  validators,
}: RegisterInputsPros) {
  return (
    <>
      <DefaultInput
        value={email}
        setValue={setEmail}
        required={false}
        id='register-email'
        label='email'
      />
      <ErrorInput text={validators?.email.error || ''} />
      <DefaultInput
        value={username}
        setValue={setUsername}
        required={false}
        id='register-username'
        label='username'
      />
      <ErrorInput text={validators?.username.error || ''} />
      <DefaultInput
        value={password}
        setValue={setPassword}
        required={false}
        id='register-password'
        type='password'
        label='password'
      />
      <ErrorInput text={validators?.password.error || ''} />
      <InputLabel
        disableAnimation
        shrink
        sx={{
          color: '#B9BBBE',
          textTransform: 'uppercase',
          fontSize: '1.1rem',
          fontWeight: '600',
        }}
      >
        DATE OF BIRTH
      </InputLabel>
      <Box
        sx={{
          display: 'flex',
          gap: '12px',
          alignItems: 'center',
          margin: '-15px 0 20px 0',
          padding: 0,
        }}
      >
        <DefaultSelect
          value={month}
          setValue={setMonth}
          id='month'
          placeholder='Month'
          itens={months}
        />
        <DefaultSelect
          value={day}
          setValue={setDay}
          id='day'
          placeholder='Day'
          itens={days}
        />
        <DefaultSelect
          value={year}
          setValue={setYear}
          id='year'
          placeholder='Year'
          itens={years}
        ></DefaultSelect>
      </Box>
      <ErrorInput text={validators?.date.error || ''} />
    </>
  )
}
