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
import { useNavigate, Switch, Route, Routes } from 'react-router-dom';
import Navbar from '../elements/Navbar';
import { QrReader } from 'react-qr-reader';
import { getUser } from '../utils/actions';

function Scan() {
  const [isPhone] = useMediaQuery('(max-width: 50em)');
  let navigate = useNavigate();
  const [data, setData] = useState('No result');
  const user = getUser();
  if (!user) navigate('/login');
  useEffect(() => {
    if (data !== 'No result') {
      window.location.href = data;
      return false;
    }
  }, [data]);

  return (
    <Box>
      <VStack h="100vh">
        <Navbar />

        {isPhone ? (
          <Stack h={'full'} w=" full" justify={'center'}>
            <Stack align={'center'} spacing="16">
              <Text>Scan your QR Code</Text>
              <Box textAlign={'center'} boxSize="72" border="1px solid">
                <QrReader
                  onResult={(result, error) => {
                    if (!!result) {
                      setData(result?.text);
                    }

                    if (!!error) {
                      console.info(error);
                    }
                  }}
                  style={{ width: '100%' }}
                />
                <p>{data}</p>
              </Box>

              {/* <Button size={'lg'} onClick={() => navigate('/')}>
                Log out
              </Button> */}
            </Stack>
          </Stack>
        ) : (
          <Stack h={'full'} w=" full" pt="8%">
            <Text textAlign={'center'}>Scan your QR Code</Text>
            <Stack align={'center'} spacing="16">
              <Box textAlign={'center'} boxSize="80">
                <QrReader
                  onResult={(result, error) => {
                    if (!!result) {
                      setData(result?.text);
                    }

                    if (!!error) {
                      console.info(error);
                    }
                  }}
                  style={{ width: '100%' }}
                />
                <p>{data}</p>
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

export default Scan;
