import { Typography, TypographyProps } from '@mui/material'

export default function AuthTitle({ children }: TypographyProps) {
  return (
    <Typography variant='h4' fontWeight={700}>
      {children}
    </Typography>
  )
}
