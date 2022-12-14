import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Button,
    Icon,
    IconProps,
  } from '@chakra-ui/react';
  
  export default function CallToAction() {
    return (
      <Container maxW={'5xl'}>
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Realtime data on every company that had {' '}
            <Text as={'span'} color={'green.400'}>
              recent fundraising
            </Text>
          </Heading>
          <Text color={'gray.500'} maxW={'3xl'}>
            Never miss a fundraise. Keep track of every fundraise and receive smart reminders in appropriate times. Read your
            smart “Daily Agenda” every morning.
          </Text>
          <Stack spacing={6} direction={'row'}>
            <Button
              rounded={'full'}
              px={6}
              colorScheme={'green'}
              bg={'green.400'}
              _hover={{ bg: 'green.500' }}>
              Sign up
            </Button>
            <Button rounded={'full'} px={6}>
              Learn more
            </Button>
          </Stack>
        </Stack>
      </Container>
    );
  }