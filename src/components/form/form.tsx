import { useState, ChangeEvent, FormEvent, useRef, ReactNode } from 'react'; 
import { useSelector, useDispatch } from '../../hooks';
import FormWrapper from "./form-wrapper";
import FormInput from "../form-input/form-input";

import UserDataWrapper from "./user-data-wrapper";
import HiddenFields from "../hidden-fields/hidden-fields";
import FormSelect from "../form-selector/form-selector";
import selectArrow from '../../images/select.svg';
import StyledButton from '../styled-button/styled-button';

// Data 
import * as cities from '../../data/cities.json'; 
import * as sources from '../../data/sources.json';
import { saveForm, clearForm } from '../../redux/actions/form-actions';
import { SelectChangeEvent } from '@mui/material';

const Form = () => {
  const { form } = useSelector(store => store);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const clickHandler = () => {
    setIsHidden(!isHidden);
  }
  const formRef = useRef(null);

  const [error, setError] = useState({
    name: {message: ''}, 
    number: {message: ''},
    email: {message: ''},
    profileLink: {message: ''},
  });
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>, validationTemplate?: RegExp) => {
    e.preventDefault();

    const value = e.target.value;
    const name = e.target.name;
    let tempError = {...error}
    if( typeof validationTemplate === 'undefined' ) {
      if( value.length < 2 && name === 'name' ) {
        tempError.name.message = 'Имя должно быть длиной не менее 2 символов';
      } else if ( value.length < 3 && name === 'profile-link' ) {
        tempError.profileLink.message = 'Ссылка должна быть длиной не менее 3 символов';
      } else {
        tempError = {...tempError, profileLink: {message: ''}, name: {message: ''}};
      }
    } else if (name === "phone") {
      if (value.match(validationTemplate)) {
        tempError.number.message = '';
      } else {
        tempError.number.message = 'Введите номер в формате +7 (ХХХ) ХХХ-ХХ-ХХ';
      }
    } else if (name === "email") {
      if (value.match(validationTemplate)) {
        tempError.email.message = '';
      } else {
        tempError.email.message = 'Неверный формат E-mail';
      }
    }
    setError(tempError);
    setNoErrors(checkErrors(tempError));
    dispatch(saveForm({...form, [name]: value}));
  }

  const onSelectChange = (e: SelectChangeEvent<string>, child?: ReactNode) => {
    e.preventDefault();
    const value = e.target.value;
    const name = e.target.name;
    dispatch(saveForm({...form, [name]: value}));
  }

  const [noErrors, setNoErrors] = useState(true);
  const checkErrors = (testError: typeof error) => {
    type TKey = keyof typeof error;
    let key: TKey;
    for (key in testError) {
      if(testError[key].message) {
        return false
      }
    }
    return true;
  }

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      console.log(JSON.stringify(form));
      setIsLoading(false);
      dispatch(clearForm());
    }, 2000);
  }

  return (
    <FormWrapper 
      ref={formRef}
      onSubmit={onSubmitHandler}
    >
      <UserDataWrapper>
        <FormInput 
          id="name" 
          placeholder="Иван" 
          inputLabel="Ваше имя *" 
          required={true} 
          onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeHandler(e)} 
          error={{message: error.name.message}} 
          value={form.name}
        />
        <FormInput 
          id="phone" 
          placeholder="+7 (000) 000-00-00" 
          inputLabel="Номер телефона *" 
          required={true} 
          onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeHandler(e, /\+7 \(\d\d\d\) \d\d\d-\d\d-\d\d/)} 
          error={{message: error.number.message}} 
          value={form.phone}
        />
        <FormInput 
          id="email" 
          placeholder="example@skdesign.ru" 
          inputLabel="E-mail *" 
          required={true} 
          onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeHandler(e, /.+@.+\..+/)} 
          error={{message: error.email.message}} 
          value={form.email}
        />
        <FormInput 
          id="profileLink" 
          placeholder="instagram.com/skdesign" 
          inputLabel="Ссылка на профиль *" 
          required={true} 
          onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeHandler(e)} 
          error={{message: error.profileLink.message}} 
          value={form.profileLink}
        />
      </UserDataWrapper>
      <FormSelect 
        inputWidth="100%" 
        id="city" 
        placeholder="" 
        inputLabel="Выберите город *" 
        required={true} 
        data={Array.from(cities).map(el => el.name)} 
        value={form.city} 
        onChange={onSelectChange} 
      />
      <FormInput 
        inputWidth="100%" 
        id="organization" 
        placeholder="SK Design" 
        inputLabel="Название организации/студии" 
        value={form.organization} 
        onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeHandler(e)} 
      />
      <HiddenFields>
        <>
          <div style={{marginBottom: "20px", cursor: "pointer"}} onClick={clickHandler}>Показать дополнительные поля <img src={`${selectArrow}`} alt=''></img></div>
          {!isHidden && <>
            <FormInput 
              inputWidth="100%" 
              id="recipient" 
              placeholder="ФИО" 
              inputLabel="Получатель" 
              value={form.recipient} 
              onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeHandler(e)} 
            />
            <FormSelect 
              inputWidth="100%" 
              id="source" 
              placeholder="" 
              inputLabel="Откуда узнали про нас" 
              data={Array.from(sources)} 
              value={form.source}
              onChange={onSelectChange} 
            />
            </>}
        </>
      </HiddenFields>
      <StyledButton type="submit" disabled={!noErrors} loading={isLoading} />
    </FormWrapper>
  )
}

export default Form;