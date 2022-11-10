import Box, { BoxProps } from '@mui/material/Box'
import { styled } from '@mui/material/styles'

import AuthBoxHeader from '../AuthBoxHeader'

const BoxWrapper = styled('div')({
  width: '100%',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#5865F2',
})

export default function AuthBox({ children, sx }: BoxProps) {
  return (
    <BoxWrapper>
      <Box
        sx={{
          width: { xs: '1', sm: '700px' },
          height: { xs: '1', sm: 'fit-content' },
          bgcolor: '#36393f',
          borderRadius: '5px',
          boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
          flexDirection: 'column',
          padding: { xs: '25px 16px 40px 16px', sm: '25px 32px 28px 32px' },
          color: 'white',
          ...sx,
        }}
      >
        <AuthBoxHeader />
        {children}
      </Box>
    </BoxWrapper>
  )
}
