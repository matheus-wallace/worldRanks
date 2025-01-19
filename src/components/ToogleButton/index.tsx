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
      paddingTop={'.5'}
      paddingBottom={'.5'}
      paddingLeft={'3'}
      paddingRight={'3'}
      borderRadius={'2xl'}
    >
      {text}
    </Button>
  );
};

export default ToogleButton;
