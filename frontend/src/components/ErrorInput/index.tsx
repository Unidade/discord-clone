import { Typography } from '@mui/material'

interface ErrorInputProps {
  text: string
}
export default function ErrorInput({ text }: ErrorInputProps) {
  return (
    <Typography
      variant='caption'
      sx={{
        color: 'rgba(255,0,0,0.95)',
        mt: '-12px',
        mb: '10px',
        display: 'block',
      }}
    >
      {text}
    </Typography>
  )
}
