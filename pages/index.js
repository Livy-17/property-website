import React from 'react';
import { Box, Flex, Text, Button, Image, Divider, useColorMode } from '@chakra-ui/react';
import Link from 'next/link';
import { useBreakpointValue } from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/react';

function Home() {

  const { colorMode, toggleColorMode } = useColorMode();

  // const [isLessThan400px] = useMediaQuery('(max-width: 400px)');
  // const [isLessThan700px] = useMediaQuery('(max-width: 700px');
  const [isLessThan1300px] = useMediaQuery('(max-width: 1300px)');

  return ( 
    <Box>
      <Box width='100vw'>
        <Box>
          <Image src='/intro_house.jpg' alt='' width='100vw' height='400px' objectFit='cover' />
        </Box>
        <Flex flexDirection='column' justifyContent='center' alignItems='center' bg='#262638' width={{ base: '300px', sm: '400px', md: '500px', lg: '800px' }} borderRadius='5px' position='absolute' top='430px' right='50%' transform='translate(50%,-50%)'>
          <Text fontSize={{ base: 'lg', sm: 'xl', md: '2xl', lg: '3xl' }} color={ colorMode === 'light' ? 'green.200' : 'green.600' } m='30px 0 5px 0'>Find Your Property</Text> 
          <Text fontSize={{ base: 'sm', sm: 'md', md: 'lg', lg: 'xl' }} w={{ base: '150px', sm: 'auto'}} color='white'>Explore properties for sale and to rent</Text>
          <Link href='/search?purpose=for-sale' passHref>
            <Button bg={ colorMode === 'light' ? 'green.200' : 'green.600' } width={{ base: '150px', sm: '170px', md: '190px', lg: '220px' }} m='30px 0 10px 0'>{ useBreakpointValue({ base: 'Rent', lg: 'I want to rent a property' }) }</Button>
          </Link>
          <Link href='/search?purpose=for-rent' passHref>
            <Button bg={ colorMode === 'light' ? 'green.200' : 'green.600' } width={{ base: '150px', sm: '170px', md: '190px', lg: '220px' }} m='0 0 40px 0'>{ useBreakpointValue({ base: 'Buy', lg: 'I want to buy a property' }) }</Button>
          </Link>
        </Flex>
      </Box>
      <Flex mt='200px' mb='100px' flexDirection='column' alignItems='center' gap='100px'>
        { isLessThan1300px ? 
          <Flex gap='50px' alignItems='center' flexDirection='column'>
            <Image src='intro_sale.jpeg' alt='' width={{ base: '300px', sm: '380px', md: '460px', lg: '500px' }} height={{ base: '200px', sm: '240px', md: '280px', lg: '300px' }} objectFit='cover' boxShadow='-10px -10px' />
            <Flex flexDirection='column'>
              <Text fontSize={{ base: 'sm', sm: 'md', md: 'lg', lg: 'xl' }} fontWeight='bold'>BUY</Text>
              <Divider />
              <Text fontSize={{ base: 'lg', sm: 'xl', md: '2xl', lg: '3xl' }} fontWeight='bold'>Find your new home for sale on Moving</Text>
              <Text width={{ base: '300px', sm: '450px', md: '550px', lg: '700px' }} fontSize={{ base: 'sm', sm: 'md', md: 'md', lg: 'lg' }} mt='20px'>Listing an extensive range of houses, flats, bungalows, land and retirement homes, Moving makes it easy for you to find your next happy home regardless of whether you are a first-time buyer, upsizing, downsizing or relocating.</Text>
            </Flex>
          </Flex>
          :
          <Flex gap='50px' alignItems='center'>
            <Image src='intro_sale.jpeg' alt='' width='500px' height='300px' objectFit='cover' boxShadow='-10px -10px' />
            <Flex flexDirection='column'>
              <Text fontSize='xl' fontWeight='bold'>BUY</Text>
              <Divider />
              <Text fontSize='3xl' fontWeight='bold'>Find your new home for sale on Moving</Text>
              <Text width='700px' fontSize='lg' mt='20px'>Listing an extensive range of houses, flats, bungalows, land and retirement homes, Moving makes it easy for you to find your next happy home regardless of whether you are a first-time buyer, upsizing, downsizing or relocating.</Text>
            </Flex>
          </Flex>
        }
        { isLessThan1300px ? 
          <Flex gap='50px' alignItems='center' flexDirection='column'>
            <Image src='intro_rent.webp' alt='' width={{ base: '300px', sm: '380px', md: '460px', lg:'500px' }} height={{ base:'200px', sm: '240px', md: '280px', lg: '300px' }} objectFit='cover' boxShadow='10px 10px' />
            <Flex flexDirection='column'>
              <Text fontSize={{ base: 'sm', sm: 'md', md: 'lg', lg: 'xl' }} fontWeight='bold'>RENT</Text>
              <Divider />
              <Text fontSize={{ base: 'lg', sm: 'xl', md: '2xl', lg: '3xl' }} fontWeight='bold'>Find your new home for rent on Moving</Text>
              <Text width={{ base: '300px', sm: '450px', md: '550px', lg: '700px' }} fontSize={{ base: 'sm', sm: 'md', md: 'md', lg: 'lg' }} mt='20px'>Listing a wide range of property types and styles, we cover everything from student lettings, to studio flats, detached family homes and even luxury Mayfair penthouses.</Text>
            </Flex>
          </Flex>
          :
          <Flex gap='50px' alignItems='center'>
            <Flex flexDirection='column'>
              <Text fontSize='xl' fontWeight='bold'>RENT</Text>
              <Divider />
              <Text fontSize='3xl' fontWeight='bold'>Find your new home for rent on Moving</Text>
              <Text width='700px' fontSize='lg' mt='20px'>Listing a wide range of property types and styles, we cover everything from student lettings, to studio flats, detached family homes and even luxury Mayfair penthouses.</Text>
            </Flex>
            <Image src='intro_rent.webp' alt='' width='500px' height='300px' objectFit='cover' boxShadow='10px 10px' />
          </Flex>
        }
      </Flex>
    </Box>
  );
}

export default Home;