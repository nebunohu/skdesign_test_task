import { useRef } from 'react';
import InputMask, {InputState} from 'react-input-mask';
import { InputLabel, OutlinedInput, FormHelperText } from '@mui/material';
import StyledFormControl from '../styled-form-control/styled-form-control';
import { TFormInput } from '../../types';

const PhoneInput = (
  props: TFormInput) => {
    /*const ref=useRef<HTMLInputElement>(null);
    const beforeMaskValueChange = (newState:any, oldState:any, userInput:any) => {
      const state: InputState = {value: "", selection: null}
      var { value } = newState;
      var selection = newState.selection;
      var cursorPosition = selection ? selection.start : null;
      if (ref.current ) {
        //ref.current.focus();
      }
      return {
        value,
        selection
      };
    }*/
    
    return (
      <StyledFormControl>
        <InputLabel 
          shrink 
          htmlFor={props.id} 
          error={props.error?.message ? true : false}
        >
          {props.inputLabel}
        </InputLabel>
        <InputMask 
          mask="+7 (999) 999-99-99" 
          value={props.value} 
          name={props.id} 
          onChange={props.onChange}
          maskChar={null}
          >
            {(inputProps: {
              id: string, 
              placeholder: string, 
              inputLabel: string, 
              required: boolean,
              onChange?: any,
              error: {message: string},
              value: string,
            }) => <OutlinedInput 
                  {...inputProps}
                  notched
                  id="phone"
                  placeholder="+7 (000) 000-00-00" 
                  label="Номер телефона *" 
                  required={true} 
                  error={props.error?.message ? true : false} 
                />}
          </InputMask>
          <FormHelperText id={props.id} error={props.error?.message ? true : false}>{props.error?.message}</FormHelperText>
      </StyledFormControl>)
  };

  export default PhoneInput;