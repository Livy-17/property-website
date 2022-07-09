import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Flex, Box, Text, Icon, useColorMode } from '@chakra-ui/react';
import { BsFilter } from 'react-icons/bs';
import SearchFilters from '../components/SearchFilters';
import Property from '../components/Property';
import noresult from '../assets/images/noresult.svg';
import { fetchApi, baseUrl } from '../utils/fetchApi';

const Search = ({ properties }) => {
  
  const [searchFilters, setSearchFilters] = useState(false);
  const router = useRouter();

  const { colorMode, toggleColorMode } = useColorMode();

  return(
    <Box>
      <Flex
        cursor='pointer'
        bg={ colorMode === 'light' ? 'gray.100' : 'gray.700' }
        borderColor='gray.200'
        p='2'
        fontWeight='bold'
        fontSize='lg'
        justifyContent='center'
        alignItems='center'
        onClick={ () => setSearchFilters(prev => !prev) }
      >
        <Text>Search Property by Filters</Text>
        <Icon paddingLeft='2' w='7' as={BsFilter} />
      </Flex>
      {searchFilters && <SearchFilters />}
      <Flex alignItems='center' justifyContent='center' bg={ colorMode === 'light' ? 'green.200' : 'green.900' } height='42px' mb='30px'>
        <Text fontSize='xl' p='4' fontWeight='bold'>
          Properties {router.query.purpose}
        </Text>
      </Flex>
      <Flex flexWrap='wrap' justifyContent='center' alignItems='center'>
        {properties.map(property => <Property property={property} key={property.id} /> )}
      </Flex>
      {properties.length === 0 && (
        <Flex justifyContent='center' alignItems='center' flexDirection='column' mt='5' mb='5'>
          <Image alt='no result' src={noresult} />
          <Text fontSize='2xl' mt='3'>No Result Found</Text>
        </Flex>
      )}
    </Box>
  )
};

export default Search;


export const getServerSideProps = async ({ query }) => {
  const purpose = query.purpose || 'for-rent';
  const rentFrequency = query.rentFrequency || 'yearly';
  const minPrice = query.minPrice || '0';
  const maxPrice = query.maxPrice || '1000000';
  const roomsMin = query.roomsMin || '0';
  const bathsMin = query.bathsMin || '0';
  const sort = query.sort || 'price-desc';
  const areaMax = query.areaMax || '35000';
  const locationExternalIDs = query.locationExternalIDs || '5002';
  const categoryExternalID = query.categoryExternalID || '4';

  const data = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`);

  return {
    props: {
      properties: data?.hits
    }
  }
}