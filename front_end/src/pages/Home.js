import React, { useState, useEffect } from 'react';
import {
  Heading,
  VStack,
  Text,
  Flex,
  Box,
  useMediaQuery,
  HStack,
  Button,
  Stack,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../elements/ColorModeSwitcher';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../utils/actions';
function Home() {
  const [isPhone] = useMediaQuery('(max-width: 50em)');
  let navigate = useNavigate();
  const user = getUser();
  if (user) navigate('/dashboard');

  return (
    <Box>
      <VStack h="100vh">
        <Flex p={[2, 4]} justify={'space-between'} w="full">
          <Button variant={'unstyled'} onClick={() => navigate('/')}>
            Home
          </Button>
          <ColorModeSwitcher />
        </Flex>
        {isPhone ? (
          <Stack h={'full'} w=" full" justify={'center'}>
            <Stack align={'center'} spacing="16">
              <Box textAlign={'center'}>
                <Heading>Tiny Town</Heading>
                <Text>The biggest treasure hunt of the year</Text>
              </Box>

              <Button size={'lg'} onClick={() => navigate('signup')}>
                Join
              </Button>
            </Stack>
          </Stack>
        ) : (
          <Stack h={'full'} w=" full" pt="8%">
            <Stack align={'center'} spacing="16">
              <Box textAlign={'center'}>
                <Heading>Tiny Town</Heading>
                <Text>The biggest treasure hunt of the year</Text>
              </Box>

              <Button size={'lg'} onClick={() => navigate('signup')}>
                Join
              </Button>
            </Stack>
          </Stack>
        )}
      </VStack>
    </Box>
  );
}

export default Home;
