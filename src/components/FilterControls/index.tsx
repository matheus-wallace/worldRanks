import React from 'react';
import SortByControls from '../SortByControls';
import { VStack } from '@chakra-ui/react';
import RegionControls from '../RegionControls';
import StatusControl from '../StatusControls';

const FilterControls = () => {
  return (
    <>
      <VStack spaceY={4} align="flex-start">
        <SortByControls />
        <RegionControls />
        <StatusControl />
      </VStack>
    </>
  );
};

export default FilterControls;
