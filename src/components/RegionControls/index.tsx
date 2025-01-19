import { Flex, VStack } from '@chakra-ui/react';
import React from 'react';
import ToogleButton from '../ToogleButton';

const RegionControls = () => {
  return (
    <VStack align={'flex-start'}>
      <h3>Region</h3>
      <Flex wrap="wrap" gap={'1rem'}>
        <ToogleButton text="Americas" />
        <ToogleButton text="Antartic" />
        <ToogleButton text="Africa" />
        <ToogleButton text="Asia" />
        <ToogleButton text="Europe" />
        <ToogleButton text="Asia" />
      </Flex>
    </VStack>
  );
};

export default RegionControls;
