import React from 'react';
import {
  Heading,
  VStack,
  Text,
  Box,
  useMediaQuery,
  Stack,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../utils/actions';

import Navbar from '../elements/Navbar';
function Help() {
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
                <Heading>Instructions</Heading>
                <Text>
                  Welcome to tiny town treasure hunt, a QR code based scavenger
                  hunt that travels all over the country.
                </Text>
                <Text>
                  Go to our web app and sign up with your email to get started.
                  When the scavenger hunt begins, venture to the designated
                  starting area and get checked in.{' '}
                </Text>
                <Text>
                  Once checked in an empty password will be displayed. To fill
                  this password you will have to venture out into the town to
                  search for hidden QR codes to scan with.
                </Text>
                These QR codes contain either a riddle, the answer of which will
                give a digit or a hint that will help point you to a QR code
                with a riddle.
                <Text>
                  Within the app there is an integrated QR code scanner to scan
                  said QRs.
                </Text>
                <Text>
                  Once a player has the password revealed it's time to get back
                  to the start ASAP. Enter the password into the safe and the
                  game is over.
                </Text>
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
                <Heading>Instructions</Heading>
                <Text>
                  Welcome to tiny town treasure hunt, a QR code based scavenger
                  hunt that travels all over the country.
                </Text>
                <Text>
                  Go to our web app and sign up with your email to get started.
                  When the scavenger hunt begins, venture to the designated
                  starting area and get checked in.{' '}
                </Text>
                <Text>
                  Once checked in an empty password will be displayed. To fill
                  this password you will have to venture out into the town to
                  search for hidden QR codes to scan with.
                </Text>
                These QR codes contain either a riddle, the answer of which will
                give a digit or a hint that will help point you to a QR code
                with a riddle.
                <Text>
                  Within the app there is an integrated QR code scanner to scan
                  said QRs.
                </Text>
                <Text>
                  Once a player has the password revealed it's time to get back
                  to the start ASAP. Enter the password into the safe and the
                  game is over.
                </Text>
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

export default Help;
