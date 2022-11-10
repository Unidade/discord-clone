import { Box, Typography } from '@mui/material'
import AuthTitle from '../AuthTitle'

export default function LoginPageHeader() {
  return (
    <Box sx={{ textAlign: 'center', marginBottom: '1.4rem' }}>
      <AuthTitle>Welcome Back!</AuthTitle>
      <Typography color={'#B9BBBE'} gutterBottom variant='h6' fontWeight={300}>
        We are happy to see you again!
      </Typography>
    </Box>
  )
}
