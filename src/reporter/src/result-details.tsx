import { Box, Text } from 'ink'
import React, { FC } from 'react'
import { Result } from 'tap-parser'
import { stringify } from 'tap-yaml'
import { Diff } from './diff.js'
import { Source } from './source.js'
import { Stack } from './stack.js'

export const ResultDetails: FC<{ result: Result }> = ({ result }) => {
  if (!result.diag || typeof result.diag !== 'object') return <></>
  const {
    test,
    stack,
    diff,
    at,
    source,
    errorOrigin,
    ...otherDiags
  } = result.diag

  // if we're just comparing equality, and have a diff, no value showing
  // the found/wanted, as it is frequently huge.
  if (diff?.trimEnd() && otherDiags.compare === '===') {
    delete otherDiags.found
    delete otherDiags.wanted
  }

  return (
    <Box paddingLeft={4} flexDirection="column">
      <Diff diff={diff} />
      <Source at={at} source={source} errorOrigin={errorOrigin} />
      <Stack stack={stack} />
      {!!Object.keys(otherDiags).length && (
        <Text dimColor>{stringify(otherDiags).trim()}</Text>
      )}
    </Box>
  )
}
