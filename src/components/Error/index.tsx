import React from 'react';
import { ErrorContainer } from './styles';
import { Center } from '@chakra-ui/react';

const Error = ({ children }: { children: React.ReactNode }) => {
  return (
    <Center>
      <ErrorContainer data-testid="errorToFetchData">
        <p>{children}</p>
      </ErrorContainer>
      ;
    </Center>
  );
};

export default Error;
