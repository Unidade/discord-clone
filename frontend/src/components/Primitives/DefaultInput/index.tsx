import { FormControl, InputBase, InputLabel } from '@mui/material'
import { styled } from '@mui/material/styles'

const Required = styled('span')({
  color: 'rgb(237, 66,69)',
  marginLeft: '3px',
})

const Input = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    color: 'rgb(220, 221, 222)',
    borderRadius: 4,
    position: 'relative',
    backgroundColor: '#222',
    fontSize: 16,
    padding: '10px 12px',
    marginBottom: '15px',
  },
}))

interface DefaultInputProps {
  label: string
  id: string
  type?: 'text' | 'password'
  required?: boolean
  value?: string
  setValue?: (value: string) => void
}

export default function DefaultInput({
  label,
  id,
  type = 'text',
  required = true,
  value,
  setValue,
}: DefaultInputProps) {
  return (
    <FormControl sx={{ width: 1 }} variant='standard'>
      <InputLabel
        disableAnimation
        shrink
        sx={{
          color: '#B9BBBE',
          textTransform: 'uppercase',
          fontSize: '1.1rem',
          fontWeight: '600',
        }}
        htmlFor={id}
      >
        {label}
        {required && <Required>*</Required>}
      </InputLabel>
      <Input
        value={value}
        onChange={(e) => {
          setValue && setValue(e.target.value.trim())
        }}
        type={type}
        id={id}
      />
    </FormControl>
  )
}
