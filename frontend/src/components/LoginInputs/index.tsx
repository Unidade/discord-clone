import { LoginFormValidators } from '../../shared/utils/validators'
import ErrorInput from '../ErrorInput'
import DefaultInput from '../Primitives/DefaultInput'

export interface LoginInputsProps {
  email: string
  setEmail: (email: string) => void
  password: string
  setPassword: (password: string) => void
  validators?: LoginFormValidators
}

export default function LoginInputs({
  email,
  setEmail,
  password,
  setPassword,
  validators,
}: LoginInputsProps) {
  return (
    <>
      <DefaultInput
        value={email}
        setValue={setEmail}
        id='discord-text-input'
        label='E-mail'
      />
      <ErrorInput text={validators?.email.error || ''} />
      <DefaultInput
        value={password}
        setValue={setPassword}
        id='discord-password-input'
        type='password'
        label='Password'
      />
      <ErrorInput text={validators?.password.error || ''} />
    </>
  )
}
