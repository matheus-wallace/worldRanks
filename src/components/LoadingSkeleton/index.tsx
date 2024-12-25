import React from 'react';
import { HStack, Skeleton, Stack } from '@chakra-ui/react';

export const LoadingRowList = () => {
  return (
    <HStack gap={'5'} maxWidth={'50vw'}>
      <Stack flex="1">
        <Skeleton height={'5'} />
        <Skeleton height={'5'} />
        <Skeleton height={'5'} />
        <Skeleton height={'5'} />
      </Stack>
    </HStack>
  );
};

export const LoadingCloseCountries = () => {
  return (
    <HStack gap={'5'} maxWidth={'50vw'}>
      <Stack flex="1">
        <Skeleton height={'5'} />
        <Skeleton height={'5'} />
        <Skeleton height={'5'} />
        <Skeleton height={'5'} />
      </Stack>
    </HStack>
  );
};
