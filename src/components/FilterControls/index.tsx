import React from 'react';
import SortByControls from '../SortByControls';
import { VStack } from '@chakra-ui/react';
import RegionControls from '../RegionControls';

const FilterControls = () => {
  return (
    <>
      <VStack spaceY={4} align="flex-start">
        <SortByControls />

        <RegionControls />

        <h3>Status</h3>
      </VStack>
    </>
  );
};

export default FilterControls;
