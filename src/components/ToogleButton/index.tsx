import { useTheme } from '@/Context/ThemeContext';
import { Button } from '@chakra-ui/react';
import React, { useState } from 'react';

const ToogleButton = ({ text }: { text: string }) => {
  const { colors } = useTheme();
  const [active, setActive] = useState<boolean>(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <Button
      backgroundColor={`${active ? colors.withe : colors.darkSoftGray}`}
      onClick={handleClick}
      paddingY={'.5'}
      paddingX={'3'}
      borderRadius={'2xl'}
    >
      {text}
    </Button>
  );
};

export default ToogleButton;
