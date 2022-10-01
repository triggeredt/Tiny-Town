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
  Input,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../elements/ColorModeSwitcher';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../utils/actions';
import Navbar from '../elements/Navbar';
function Dashboard() {
  const [isPhone] = useMediaQuery('(max-width: 50em)');
  let navigate = useNavigate();
  const user = getUser();
  if (!user) navigate('/login');
  const calculateTimeLeft = () => {
    const difference = +new Date('October 1, 2022 16:38:00') - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        hours: Math.floor(difference / (1000 * 60 * 60)),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });
  return (
    <Box>
      <VStack h="100vh">
        <Navbar />

        {isPhone ? (
          <Stack h={'full'} w=" full" justify={'center'}>
            <Stack align={'center'} spacing="16">
              <Box textAlign={'center'}>
                <Heading>Hi, {user ? user : 'User'}</Heading>
                {timeLeft.hours ||
                  timeLeft.minutes ||
                  (timeLeft.seconds && (
                    <Text>The Treasure Hunt is starting soon</Text>
                  ))}
                {timeLeft.hours || timeLeft.minutes || timeLeft.seconds ? (
                  <p>
                    <span>
                      {timeLeft.hours < 10
                        ? '0' + timeLeft.hours
                        : timeLeft.hours}
                    </span>
                    <span>:</span>
                    <span>
                      {timeLeft.minutes < 10
                        ? '0' + timeLeft.minutes
                        : timeLeft.minutes}
                    </span>
                    <span>:</span>
                    <span>
                      {timeLeft.seconds < 10
                        ? '0' + timeLeft.seconds
                        : timeLeft.seconds}
                    </span>
                  </p>
                ) : (
                  <>
                    <Text>Code:</Text>
                    <HStack justify={'center'} p="8">
                      <Input isReadOnly variant={'flushed'} w="2ch" />
                      <Input isReadOnly variant={'flushed'} w="2ch" />
                      <Input isReadOnly variant={'flushed'} w="2ch" />
                      <Input isReadOnly variant={'flushed'} w="2ch" />
                      <Input isReadOnly variant={'flushed'} w="2ch" />
                      <Input isReadOnly variant={'flushed'} w="2ch" />
                      <Input isReadOnly variant={'flushed'} w="2ch" />
                      <Input isReadOnly variant={'flushed'} w="2ch" />
                    </HStack>
                  </>
                )}
              </Box>
            </Stack>
          </Stack>
        ) : (
          <Stack h={'full'} w=" full" pt="8%">
            <Stack align={'center'} spacing="16">
              <Box textAlign={'center'}>
                <Heading>Hi, {user ? user : 'User'}</Heading>
                {timeLeft.hours ||
                  timeLeft.minutes ||
                  (timeLeft.seconds && (
                    <Text>The Treasure Hunt is starting soon</Text>
                  ))}
                {timeLeft.hours || timeLeft.minutes || timeLeft.seconds ? (
                  <p>
                    <span>
                      {timeLeft.hours < 10
                        ? '0' + timeLeft.hours
                        : timeLeft.hours}
                    </span>
                    <span>:</span>
                    <span>
                      {timeLeft.minutes < 10
                        ? '0' + timeLeft.minutes
                        : timeLeft.minutes}
                    </span>
                    <span>:</span>
                    <span>
                      {timeLeft.seconds < 10
                        ? '0' + timeLeft.seconds
                        : timeLeft.seconds}
                    </span>
                  </p>
                ) : (
                  <>
                    <Text>Code:</Text>
                    <HStack justify={'center'} p="8">
                      <Input isReadOnly variant={'flushed'} w="5ch" />
                      <Input isReadOnly variant={'flushed'} w="5ch" />
                      <Input isReadOnly variant={'flushed'} w="5ch" />
                      <Input isReadOnly variant={'flushed'} w="5ch" />
                      <Input isReadOnly variant={'flushed'} w="5ch" />
                      <Input isReadOnly variant={'flushed'} w="5ch" />
                      <Input isReadOnly variant={'flushed'} w="5ch" />
                      <Input isReadOnly variant={'flushed'} w="5ch" />
                    </HStack>
                  </>
                )}
              </Box>
            </Stack>
          </Stack>
        )}
      </VStack>
    </Box>
  );
}

export default Dashboard;
