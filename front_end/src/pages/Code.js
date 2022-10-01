import React, { useEffect, useState } from 'react';
import { Text, Heading, Stack, Box, Input, Button } from '@chakra-ui/react';
import { useParams, useNavigate } from 'react-router-dom';
import { getUser } from '../utils/actions';
import { getCode } from '../utils/actions';
const Code = ({ callback1, callback3, callback2, callback4 }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const user = getUser();
  if (!user) navigate('/login');
  const [type, settype] = useState('digit');
  const [correct, setCorrect] = useState(0);
  const [wow, setWow] = useState(false);
  const [answer, setAnswer] = useState(0);
  const [clue, setclue] = useState();
  useEffect(() => {
    getCode(id).then(data => {
      // console.log(data);
      setclue(data.Hint);
      settype(data.HintType);
      setCorrect(data.AnswerDigit);
    });
  }, []);

  return (
    <Stack h={'100vh'} w=" full" justify={'center'}>
      <Stack align={'center'} spacing="16">
        <Button onClick={() => navigate('/dashboard')}>Back</Button>
        <Heading>Type: {type === 1 ? 'Pointer' : 'Digit'}</Heading>
        <Text align={'center'} px="3">
          {clue}
        </Text>
        {type == 2 && (
          <Box alignItems={'center'}>
            <Input
              type={'number'}
              maxLength={'1'}
              value={answer}
              onChange={e => {
                setAnswer(e.target.value);
              }}
            />
            <Button
              onClick={() => {
                if (answer == correct) {
                  if (answer == 3) {
                    callback1(3);
                  }
                  if (answer == 8) {
                    callback2(8);
                  }
                  if (answer == 5) {
                    callback3(5);
                  }
                  if (answer == 6) {
                    callback4(6);
                  }
                  console.log('Y');
                  navigate('/dashboard');
                } else {
                  console.log('N');
                  setWow(true);
                }
              }}
            >
              Submit
            </Button>
          </Box>
        )}
        {wow && <Box>Wrong</Box>}
      </Stack>
    </Stack>
  );
};

export default Code;
