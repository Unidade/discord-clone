import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material'
import { AppProps } from '../types/AppProps'

let theme = createTheme({
  palette: {
    primary: {
      main: '#5865f2',
    },
  },
  typography: {
    fontFamily: [
      'Source Sans Pro',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
})

theme = responsiveFontSizes(theme)

export const ThemeProviderWithTheme = ({ children }: AppProps) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)
