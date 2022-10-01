import React from 'react';
import {
  Heading,
  VStack,
  Text,
  Flex,
  Box,
  useColorModeValue,
  useDisclosure,
  HStack,
  Button,
  Stack,
  CloseButton,
  IconButton,
  VisuallyHidden,
  chakra,
} from '@chakra-ui/react';
import { AiOutlineMenu } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { removeToken, removeUser } from '../utils/actions';
const Navbar = () => {
  const navigate = useNavigate();
  const bg = useColorModeValue('white', 'gray.800');
  const mobileNav = useDisclosure();
  return (
    <React.Fragment>
      <chakra.header
        bg={bg}
        w="full"
        px={{
          base: 2,
          sm: 4,
        }}
        py={4}
        shadow="md"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <chakra.a
              href="/"
              title="Choc Home Page"
              display="flex"
              alignItems="center"
            >
              <Text>Home</Text>
            </chakra.a>
          </Flex>
          <ColorModeSwitcher />
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="brand.500"
              display={{
                base: 'none',
                md: 'inline-flex',
              }}
            >
              <Button variant="ghost" onClick={() => navigate('/dashboard')}>
                Home
              </Button>
              <Button
                variant="ghost"
                onClick={() => navigate('/dashboard/scan')}
              >
                Scan
              </Button>
              <Button
                variant="ghost"
                onClick={() => navigate('/dashboard/help')}
              >
                Help
              </Button>
              <Button
                onClick={() => {
                  removeUser();
                  removeToken();

                  navigate('/');
                }}
              >
                Log out
              </Button>
            </HStack>

            <Box
              display={{
                base: 'inline-flex',
                md: 'none',
              }}
            >
              <IconButton
                display={{
                  base: 'flex',
                  md: 'none',
                }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{
                  color: 'inherit',
                }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                zIndex="popover"
                display={mobileNav.isOpen ? 'flex' : 'none'}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />
                <Button
                  w="full"
                  variant="ghost"
                  onClick={() => navigate('/dashboard')}
                >
                  Home
                </Button>
                <Button
                  w="full"
                  variant="ghost"
                  onClick={() => navigate('/dashboard/scan')}
                >
                  Scan Codes
                </Button>
                <Button
                  w="full"
                  variant="ghost"
                  onClick={() => navigate('/dashboard/help')}
                >
                  Help
                </Button>
                <Button
                  w="full"
                  variant="ghost"
                  onClick={() => {
                    removeUser();
                    removeToken();
                    navigate('/');
                  }}
                >
                  Log out
                </Button>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
};

export default Navbar;
