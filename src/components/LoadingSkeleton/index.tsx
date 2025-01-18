import React from 'react';
import { HStack, Skeleton, Stack } from '@chakra-ui/react';

export const LoadingRowList = () => {
  return (
    <HStack gap={'5'} maxWidth={'50vw'}>
      <Stack data-testid="skeletonLoading" flex="1">
        <Skeleton height={'10'} />
      </Stack>
    </HStack>
  );
};
