import { parseISO, isValid as isValidDate } from 'date-fns'

interface LoginFormProps {
  email: string
  password: string
}
interface RegisterFormProps extends LoginFormProps {
  username: string
  day: string
  month: string
  year: string
}

interface validatorObject {
  isValid: boolean
  error: string
}

export interface LoginFormValidators {
  email: validatorObject
  password: validatorObject
}

export interface RegisterFormValidators extends LoginFormValidators {
  username: validatorObject
  date: validatorObject
}

export const getValidatorsLoginForm = ({ email, password }: LoginFormProps) => {
  const emailValidator = validatorEmail(email)
  const passwordValidator = validatorPassword(password)

  return {
    email: emailValidator,
    password: passwordValidator,
  }
}

export const validateLoginForm = ({ email, password }: LoginFormValidators) => {
  const validatorsValues = Object.values({ email, password })
  const isValid = validatorsValues.every(
    (validator) => validator.isValid === true
  )
  return isValid
}

export const getRegisterFormValidators = ({
  email,
  password,
  username,
  day,
  month,
  year,
}: RegisterFormProps): RegisterFormValidators => {
  const emailValidator = validatorEmail(email)
  const passwordValidator = validatorPassword(password)
  const usernameValidator = validatorUsername(username)
  const monthNumber = getMonthNumber(month)
  const dateISO = `${year}-${monthNumber}-${day.padStart(2, '0')}` // 2022-01-01
  const dateValidator = validatorDate(dateISO)

  return {
    email: emailValidator,
    password: passwordValidator,
    username: usernameValidator,
    date: dateValidator,
  }
}

export const validateRegisterForm = ({
  email,
  password,
  username,
  date,
}: RegisterFormValidators) => {
  const validatorsValues = Object.values({ email, password, username, date })
  const isValidForm = validatorsValues.every(
    (validator) => validator.isValid === true
  )
  return isValidForm
}

const validatorDate = (dateISO: string) => {
  const isValid = isValidDate(parseISO(dateISO))
  return {
    isValid,
    error: !isValid ? 'Please insert a valid date' : '',
  }
}

const validatorUsername = (username: string) => {
  const usernamePattern = /^[A-Za-z0-9 ]+$/
  const isValid = usernamePattern.test(username)
  return {
    isValid,
    error: !isValid ? 'Username must have only alphanumerical caracters' : '',
  }
}

const validatorPassword = (password: string) => {
  const isValid = password.length > 6 && password.length < 16
  return {
    isValid,
    error: !isValid ? 'Password must have between 7 and 15 characters' : '',
  }
}

const validatorEmail = (email: string) => {
  const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  const isValid = emailPattern.test(email)
  return {
    isValid,
    error: !isValid ? 'Enter a valid e-mail address' : '',
  }
}

const getMonthNumber = (monthName: string) => {
  const monthNumber = new Date(`${monthName} 1 2022`).getMonth() + 1
  const strNumber = String(monthNumber).padStart(2, '0')
  return strNumber
}
