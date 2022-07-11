import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'light',
  useSystemColorMode: true,
};

const breakpoints = {
  sm: '400px',
  md: '700px',
  lg: '1300px',
};

const theme = extendTheme({ config, breakpoints });

export default theme;