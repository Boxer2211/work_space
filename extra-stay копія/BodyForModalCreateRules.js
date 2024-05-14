import { InputAdornment, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { useEffect, useState } from 'react';
import { generateTimeForSelect } from 'src/views/extra-stay/utilsForExtraStay';


const BodyForModalCreateRules = ({
    t,
    exclusions,
    setCheck,
    check,
    value,
    setValue,
    minutes,
    startHours,
    endHours,
    validValue,
    titleForSelect,
    validCheck,
    typeOfCondition,
    setTypeOfCondition
}) => {


  const [timeOptions, setTimeOptions] = useState([]);

  useEffect(() => {

    setTimeOptions(generateTimeForSelect(minutes, startHours, endHours));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [minutes, exclusions]);

  const handleChangeTime = (value) => {
    setCheck(value)
  }

  const handleChange = (e) => {
    const inputValue = e.target.value
    if (inputValue >= 0 && inputValue <= 100) {
      setValue(inputValue);
    }
  };

  return(
    <>
      <Grid container spacing={5}>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel error={!validCheck}>
              {`${titleForSelect} time`}
            </InputLabel>
            <Select
              value={check}
              error={!validCheck}
              label={'Check-in time'}
              onChange={e => handleChangeTime(e.target.value)}
            >
              {timeOptions.map((time) => (
                <MenuItem key={time} value={time} disabled={exclusions.includes(time)}>
                  {time}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <RadioGroup
              aria-labelledby='demo-radio-buttons-group-label'
              defaultValue={'PERCENT'}
              name='radio-buttons-group'
              value={typeOfCondition}
              onChange={event => setTypeOfCondition(event.target.value)}
            >
              <FormControlLabel value='NOT_ALLOW' control={<Radio />} label='N/A' />
              <FormControlLabel value='FREE' control={<Radio />} label='FREE' />
              <FormControlLabel value='PERCENT' control={<Radio />} label='%' />
            </RadioGroup>
           <TextField
             sx={{ display: typeOfCondition !== 'PERCENT' && 'none'}}
             value={value}
             type={'number'}
             error={!validValue}
             InputProps={{
               endAdornment: <InputAdornment position="start">{'%'}</InputAdornment>,
               min: 0,
               max: 100
             }}
             label={t('cancellationPolicy.PENALTY_VALUE')}
             onChange={handleChange}
             required>
           </TextField>
          </FormControl>
        </Grid>
      </Grid>
    </>
  )
}

export default BodyForModalCreateRules
