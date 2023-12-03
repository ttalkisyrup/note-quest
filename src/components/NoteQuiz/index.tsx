'use client'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import {
  Box,
  Button,
  Card,
  Dialog,
  DialogClose,
  Flex,
  Switch,
  Text,
} from '@radix-ui/themes'
import clsx from 'clsx'

import { useHttpRequest } from '@/hooks/useHttpRequest'
import { getPitchNameQuizRandomSet } from '@/api/pitch.api'

import { NOTE_NAME } from '@/constants/note-name'
import { PitchName } from '@/types/name-quiz'
import Link from 'next/link'

const QUIZ_SIZE = 10

export default function NoteQuiz() {
  const [language, setLanguage] = useState(true)
  const [wrongAnswer, setWrongAnswer] = useState<PitchName | null>(null)
  const [correct, setCorrect] = useState<PitchName | null>(null)
  const [stage, setStage] = useState(0)
  const [isFinished, setIsFinished] = useState(false)
  const wrongCnt = useRef(0)

  const [quiz, getQuiz, isGetLoading] = useHttpRequest(() =>
    getPitchNameQuizRandomSet({ size: QUIZ_SIZE }).then(
      ({ data }) => data.data,
    ),
  )

  const handleSelect = (pitchName: PitchName) => {
    if (!quiz) return

    if (quiz[stage].name !== pitchName) {
      // 오답
      setWrongAnswer(pitchName)
      setTimeout(() => {
        setWrongAnswer(null)
      }, 300)
      wrongCnt.current++
      return
    }

    if (stage === quiz?.length - 1) {
      // 게임 끝
      setIsFinished(true)
    } else {
      // 정답 처리
      // 계속 진행
      setCorrect(pitchName)
      setTimeout(() => {
        setCorrect(null)
        setStage((s) => s + 1)
      }, 300)
    }
  }

  useEffect(() => {
    getQuiz()
  }, [])

  return (
    <>
      <Flex direction={'column'} gap="6" justify={'center'} align={'center'}>
        {!quiz ? (
          <div>loading</div>
        ) : (
          <Card
            variant="ghost"
            className={clsx(
              'w-full shadow-card transition',
              correct
                ? 'bg-green-200'
                : wrongAnswer
                ? 'bg-red-200'
                : 'bg-white',
            )}
          >
            <Flex direction={'column'} gap="4">
              <Flex gap="2" justify="between" className="py-2 px-3">
                <Text size="3" color="gray" weight="medium">
                  {stage + 1}/10
                </Text>
                <Text as="label" size="2" color="gray">
                  EN{' '}
                  <Switch
                    size="3"
                    checked={language}
                    onClick={() => setLanguage((prev) => !prev)}
                    variant="soft"
                    color="yellow"
                  />{' '}
                  KO
                </Text>
              </Flex>

              <Flex justify={'center'} align={'center'}>
                <Image
                  src={quiz?.[stage].imageUrl}
                  alt="계이름"
                  width={200}
                  height={200}
                  draggable="false"
                />
              </Flex>
            </Flex>
          </Card>
        )}

        <Flex gap="3" wrap="wrap" justify={'center'}>
          {NOTE_NAME.map((name) => (
            <Box
              key={name.en}
              width="9"
              height="9"
              className="flex justify-center items-center"
            >
              <Button
                variant="soft"
                size={'4'}
                color={name.color}
                onClick={() => handleSelect(name.en)}
                className={clsx(wrongAnswer === name.en && 'animate-vibration')}
              >
                {name[language ? 'ko' : 'en']}
              </Button>
            </Box>
          ))}
        </Flex>
      </Flex>

      <Dialog.Root open={isFinished}>
        <Dialog.Content>
          <Dialog.Title>Game Over</Dialog.Title>
          <Dialog.Description>
            시도 횟수 : {QUIZ_SIZE + wrongCnt.current}
            <br />
            정답률 :{' '}
            {Math.round((QUIZ_SIZE / (QUIZ_SIZE + wrongCnt.current)) * 10000) /
              100}
            %<br />
            오답률 :{' '}
            {Math.round(
              (wrongCnt.current / (QUIZ_SIZE + wrongCnt.current)) * 10000,
            ) / 100}
            %
          </Dialog.Description>

          <Flex gap="3" justify="center">
            <DialogClose>
              <Link href={'/'}>
                <Button variant="soft" color="yellow">
                  홈으로 가기
                </Button>
              </Link>
            </DialogClose>
          </Flex>
        </Dialog.Content>
      </Dialog.Root>
    </>
  )
}
