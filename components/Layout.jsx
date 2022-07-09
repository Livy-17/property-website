import Head from 'next/head';
import { Box, Flex } from '@chakra-ui/react';
import Navbar from './Navbar';
import Footer from './Footer';

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
      <footer>
        <Footer />
      </footer>
    </Box>
  </Box>
);

export default Layout;