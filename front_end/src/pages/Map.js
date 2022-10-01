import React, { useState, useEffect } from 'react';
import {
  Heading,
  VStack,
  Text,
  Flex,
  Box,
  useMediaQuery,
  HStack,
  Image,
  Stack,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../utils/actions';
import map from '../elements/unknown.png';
import Navbar from '../elements/Navbar';
function Map() {
  const [isPhone] = useMediaQuery('(max-width: 50em)');
  let navigate = useNavigate();
  const user = getUser();
  if (!user) navigate('/login');
  return (
    <Box>
      <VStack h="100vh">
        <Navbar />

        {isPhone ? (
          <Stack h={'full'} w=" full" justify={'center'}>
            <Stack align={'center'} spacing="16">
              <Box fontSize="sm" p="6">
                <Heading>Map</Heading>
                <Image src={map} boxSize="500px" />
              </Box>

              {/* <Button size={'lg'} onClick={() => navigate('/')}>
                Log out
              </Button> */}
            </Stack>
          </Stack>
        ) : (
          <Stack h={'full'} w=" full" pt="8%">
            <Stack align={'center'} spacing="16">
              <Box textAlign={'center'} px="10%">
                <Box fontSize="sm" p="6">
                  <Heading>Map</Heading>
                  <Image src={map} boxSize="500px" />
                </Box>
              </Box>

              {/* <Button size={'lg'} onClick={() => navigate('/')}>
                Log out
              </Button> */}
            </Stack>
          </Stack>
        )}
      </VStack>
    </Box>
  );
}

export default Map;
