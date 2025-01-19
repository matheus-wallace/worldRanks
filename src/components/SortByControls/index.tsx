import {
  createListCollection,
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from '@chakra-ui/react';
import React, { useState } from 'react';

const SortByControls = () => {
  const [selectedValue, setSelectedValue] = useState('name');

  const options = createListCollection({
    items: [
      { label: 'Name', value: 'name' },
      { label: 'Population', value: 'population' },
      { label: 'Region', value: 'region' },
      { label: 'Area', value: 'area' },
    ],
  });

  return (
    <>
      <SelectRoot collection={options}>
        <h3>Sort By</h3>
        <SelectTrigger borderRadius="xl">
          <SelectValueText data-testid="selectValue" placeholder="Select an option" padding="2">
            {options.items.find((option) => option.value === selectedValue)?.label || 'Name'}
          </SelectValueText>
        </SelectTrigger>
        <SelectContent data-testid="filterTableList">
          {options.items.map((option) => (
            <SelectItem
              data-testid="selectItem"
              item={option}
              padding={'4'}
              key={option.value}
              onClick={() => setSelectedValue(option.value)}
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </SelectRoot>
    </>
  );
};

export default SortByControls;
