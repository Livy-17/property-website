import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import Navbar from './Navbar';

const Layout = ({ children }) => (
  <Box>
    <Head>
      <title>Moving</title>
    </Head>
    <Box m='auto'>
      <header style={{ maxWidth: '1280px', margin: 'auto' }}>
        <Navbar />
      </header>
      <main>
        {children}
      </main>
    </Box>
  </Box>
);

export default Layout;