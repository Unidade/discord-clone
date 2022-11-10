import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material'

interface DefaultSelectProps {
  id: string
  placeholder: string
  itens: string[]
  value?: string
  setValue?: (value: string) => void
}

export default function DefaultSelect({
  itens,
  id,
  placeholder,
  value = '',
  setValue,
}: DefaultSelectProps) {
  const handleChange = (event: SelectChangeEvent) => {
    setValue && setValue(event.target.value)
  }

  return (
    <FormControl>
      <Select
        id={id}
        MenuProps={{
          color: 'rgb(220, 221, 222)',
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'left',
          },
          transformOrigin: {
            vertical: 'bottom',
            horizontal: 'left',
          },
          PaperProps: {
            sx: {
              height: '200px',
              backgroundColor: '#36393f',
              color: 'rgb(220, 221, 222)',
            },
          },
        }}
        sx={{
          marginTop: '10px',
          paddingLeft: 0,
          bgcolor: '#222',
          color: 'rgb(220, 221, 222)',
          width: '132px',
          height: '38px',
          '& .MuiSelect-select .notranslate::after': placeholder
            ? {
                content: `"${placeholder}"`,
                opacity: 0.72,
              }
            : {},
        }}
        value={value}
        onChange={handleChange}
      >
        {itens.map((item) => (
          <MenuItem value={item} key={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
