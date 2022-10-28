import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { useState } from 'react'

interface DefaultSelectProps {
  id: string
  placeholder: string
  itens: string[]
  defaultValue?: string
}

export default function DefaultSelect({
  itens,
  id,
  placeholder,
  defaultValue = '',
}: DefaultSelectProps) {
  const [state, setState] = useState(defaultValue)
  const handleChange = (event: SelectChangeEvent) => {
    console.log(state)
    setState(event.target.value)
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
        value={state}
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
