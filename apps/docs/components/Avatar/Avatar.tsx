import { Box, Flex, Image, Text } from '@chakra-ui/react'
import type { AvatarProps } from './Avatar.types'

export const Avatar = ({ ghId, username, name }: AvatarProps) => (
  <Flex
    flexDir="column"
    alignItems="center"
    display="inline-flex"
    gap="10px"
    _hover={{
      '.go-to-wrapper': {
        visibility: 'visible',
        fontSize: '20px',
      },
    }}
  >
    <Box position="relative" overflow="hidden" borderRadius="50%">
      <Image
        src={`https://avatars.githubusercontent.com/u/${ghId}?v=4`}
        w="173px"
      />
      <Text
        className="go-to-wrapper"
        position="absolute"
        top="0"
        right="0"
        bottom="0"
        left="0"
        as="a"
        href={`https://github.com/${username}`}
        target="_blank"
        visibility="hidden"
        backgroundColor="black"
        display="flex"
        alignItems="center"
        justifyContent="center"
        fontSize="16px"
        color="#009972"
        transition="font-size 0.3s ease-out"
      >
        Go to Github
      </Text>
    </Box>

    <Text>
      {name} / {username}
    </Text>
  </Flex>
)
