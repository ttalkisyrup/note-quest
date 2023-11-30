'use client'
import Image from 'next/image'
import { useState } from 'react'

import { NOTE_NAME } from '@/constants/note-name'
import { Box, Button, Flex, Switch, Text } from '@radix-ui/themes'

export default function NoteQuiz() {
  const [language, setLanguage] = useState(true)

  return (
    <>
      <Text as="label" size="2">
        <Flex gap="2" justify={'end'}>
          EN{' '}
          <Switch
            size="3"
            checked={language}
            onClick={() => setLanguage((prev) => !prev)}
          />{' '}
          KO
        </Flex>
      </Text>

      <Image src="/" alt="계이름" width={100} height={100} />

      <Flex gap="3">
        {NOTE_NAME.map((name) => (
          <Box
            key={name.en}
            width="9"
            height="9"
            className="flex justify-center items-center"
          >
            <Button variant="solid" size={'4'}>
              {name[language ? 'ko' : 'en']}
            </Button>
          </Box>
        ))}
      </Flex>
    </>
  )
}
