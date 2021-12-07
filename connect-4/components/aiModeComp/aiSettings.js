import React, { useEffect, useContext } from 'react';

import {
  FormControl,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Box,
} from '@material-ui/core';

// Components
import AppContext from '../../contexts/AppContext';
import { Player } from '../../model';

const AiSettings = () => {
  const { playersList, setPlayersList, value, setValue } =
    useContext(AppContext);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    let newList = [];
    newList.push(new Player('Human', 'red'));

    setPlayersList(newList);
  }, []);

  return (
    <>
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="row"
      style={{ marginTop: '1.5rem' }}
    >
      <FormControl component="fieldset">
        <FormLabel component="legend" style={{ margin: "20px"}}>CHOOSE AI LEVEL</FormLabel>
        <RadioGroup
          aria-label="mode"
          defaultValue="easy"
          name="radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value="easy" control={<Radio />} label="Easy" />
          <FormControlLabel value="hard" control={<Radio />} label="Hard" />
        </RadioGroup>
      </FormControl>
    </Box>
    </>
  );
};

export default AiSettings;
