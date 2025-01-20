import React from 'react';
import { HStack, Skeleton, Stack } from '@chakra-ui/react';

export const LoadingRow = () => {
  return (
    <HStack gap={'5'} maxWidth={'50vw'}>
      <Stack data-testid="skeletonLoading" flex="1">
        <Skeleton height={'5'} />
      </Stack>
    </HStack>
  );
};

export const FlagSkeleton = () => {
  return <Skeleton height="40px" width={'70px'} />;
};
