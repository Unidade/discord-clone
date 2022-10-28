import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

import AuthBox from '../../components/AuthBox'
import DefaultSubmitButton from '../../components/DefaultSubmitButton'
import DefaultInput from '../../components/DefaultInput'
import AuthTitle from '../../components/AuthTitle'

export default function Login() {
  return (
    <AuthBox>
      <Box sx={{ textAlign: 'center', marginBottom: '1.4rem' }}>
        <AuthTitle>Welcome Back!</AuthTitle>
        <Typography
          color={'#B9BBBE'}
          gutterBottom
          variant='h6'
          fontWeight={300}
        >
          We are happy to see you again!
        </Typography>
      </Box>

      <Box
        component='form'
        sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
        autoComplete='false'
      >
        <DefaultInput id='discord-text-input' label='E-mail or Number Phone' />
        <DefaultInput
          id='discord-password-input'
          type='password'
          label='Password'
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
        <DefaultSubmitButton>Log In</DefaultSubmitButton>
      </Box>
      <div className='small-text light-gray-text mt-1'>
        Need an account?{' '}
        <Link to='/register' className='blue-text no-underline'>
          Register
        </Link>
      </div>
    </AuthBox>
  )
}
