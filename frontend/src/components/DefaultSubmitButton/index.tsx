import { Button } from '@mui/material'

interface DefaultSubmitButtonProps {
  children: React.ReactNode
  disabled?: boolean
}

export default function DefaultSubmitButton({
  children,
  disabled = false,
}: DefaultSubmitButtonProps) {
  return (
    <Button
      disabled={disabled}
      variant='contained'
      sx={{
        width: 1,
        color: 'rgb(220, 221, 222)',
        py: '8px',
        boxShadow: 'none',
        textTransform: 'initial',
        fontSize: '1rem',
        position: 'relative',
        ':disabled': {
          bgcolor: 'rgb(88, 101, 242)',
          color: 'inherit',
          ':before': {
            pointerEvents: 'none',
            content: "''",
            width: 1,
            height: 1,
            position: 'absolute',
            bgcolor: 'rgba(0,0,0,0.4)',
          },
          pointerEvents: 'visible',
          ':hover': {
            cursor: 'not-allowed',
          },
        },
      }}
    >
      {children}
    </Button>
  )
}
