import { VStack } from '@chakra-ui/react';
import { Checkbox } from '@/components/ui/checkbox';
import React from 'react';

const StatusControl = () => {
  return (
    <VStack align={'flex-start'}>
      <h3>Status</h3>
      <Checkbox>Member of the United Nations</Checkbox>
      <Checkbox>Independent</Checkbox>
    </VStack>
  );
};

export default StatusControl;
