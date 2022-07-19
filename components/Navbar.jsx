import Link from 'next/link';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer, useColorMode } from '@chakra-ui/react';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsFillCloudMoonFill } from 'react-icons/bs';

const Navbar = () => {

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex p='2' borderColor='gray.100'>
      <Box fontSize='3xl' color={ colorMode === 'light' ? 'green.200' : 'green.600' } fontWeight='bold'>
        <Link href='/' paddingLeft='2'>Moving</Link>
      </Box>
      <Spacer />
      <Box>
        <Menu>
          <MenuButton as={IconButton} icon={<FcMenu />} variant='outlined' color='red.400' />
          <MenuList>
            <Link href='/' passHref>
              <MenuItem icon={<FcHome />}>Home</MenuItem>
            </Link>
            <Link href='/search?purpose=for-sale' passHref>
              <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
            </Link>
            <Link href='/search?purpose=for-rent' passHref>
              <MenuItem icon={<FcHome />}>Rent Property</MenuItem>
            </Link>
            <MenuItem icon={<BsFillCloudMoonFill />} onClick={toggleColorMode}>{colorMode === 'light' ? 'Dark' : 'Light'} Mode</MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  )
}

export default Navbar;