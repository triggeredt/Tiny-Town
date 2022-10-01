import React, { useEffect, useState } from 'react';
import { Text, Heading, Stack, Box } from '@chakra-ui/react';
import { useSearchParams, useParams, useNavigate } from 'react-router-dom';
import { getUser } from '../utils/actions';
const Code = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const user = getUser();
  if (!user) navigate('/login');
  return (
    <Stack h={'100vh'} w=" full" justify={'center'}>
      <Stack align={'center'} spacing="16">
        <Heading>Tiny Town</Heading>
        <Text>{id}</Text>
      </Stack>
    </Stack>
  );
};

export default Code;
