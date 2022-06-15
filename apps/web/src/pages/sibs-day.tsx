import { Box, Heading, Flex, Spacer } from '@chakra-ui/react';
import { ForkMe } from 'fork-me-corner';
import { ChakraNextLinkButton } from '../components/ChakraNextLinkButton';
import { FaHome } from 'react-icons/fa';
import { SibLogo } from '../components/home/SibLogo';

type Inset = 'top' | 'left' | 'right' | 'bottom';
type Insets = Partial<Record<Inset, string>>;
const Blob = ({
  bg,
  borderRadius,
  height,
  width,
  inset,
}: // TODO: Resolve inset stuff with ChakraUI
Record<string, string> & any) => (
  <Box
    position="absolute"
    top={inset?.top}
    left={inset?.left}
    right={inset?.right}
    bottom={inset?.bottom}
    bgGradient={bg}
    borderRadius={borderRadius}
    height={height}
    width={width}
  ></Box>
);

export default function SibsDay() {
  return (
    <Flex
      bgGradient="linear(to-r, #1A04A6, #1A04A8)"
      position={'relative'}
      px={14}
      py={4}
      color="white"
      height="100vh"
      direction={'column'}
      justify={'space-around'}
      flexWrap="wrap"
    >
      <Box zIndex="2">
        <Heading as="h2" fontSize="2.1rem">
          WELCOME TO THE BLEEDING-EDGE
        </Heading>
        <Box py={5}>
          <Heading as="h1" lineHeight="1" fontSize="9rem">
            SIBS
            <br />
            DAY
          </Heading>
        </Box>
      </Box>
      <Blob
        inset={{ right: '0', top: '0' }}
        bg={'linear(to-br, #c27853, #e0d0d4)'}
        borderRadius={'38% 10% 56% 44% / 49% 0% 38% 51%  '}
        height={'500px'}
        width={'500px'}
      />
      <Spacer />
      <Blob
        inset={{ bottom: '0', left: '0' }}
        bg={'linear(to-tl, #c27853, #e0d0d4)'}
        borderRadius={'75% 73% 45% 31% / 50% 79% 71% 0% '}
        height={'300px'}
        width={'300px'}
      />
      <Flex
        zIndex={2}
        p={4}
        maxWidth={'90%'}
        alignSelf={'end'}
        direction={'column'}
        align={'flex-end'}
      >
        <Box
          bgGradient="linear(to-r, #c27853, #cb6e29)"
          height="1rem"
          width="5rem"
        />
        <Heading textAlign="end" as="h3" size="xl">
          Open discussions and talks about the current tech ecosystem.
          <ChakraNextLinkButton
            href="https://docs.google.com/forms/d/1frC8SXs2SMcAreb11C0eTIkAikJ0mWk7WixKNR7pwyk/viewform?edit_requested=true"
            //TODO: orange as the box above
            backgroundColor="#ad5e23"
            textColor="white"
            _hover={{ bg: '#c27853' }}
            leftIcon={<SibLogo width={20} height={20} />}
            width="100%"
            size="sm"
          >
            Fill the form
          </ChakraNextLinkButton>
        </Heading>
      </Flex>
    </Flex>
  );
}
