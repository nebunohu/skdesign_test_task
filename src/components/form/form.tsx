import { useState, ChangeEvent, FormEvent } from 'react'; 
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
import { saveForm } from '../../redux/actions/form-actions';

const Form = () => {
  const { form } = useSelector(store => store);
  const dispatch = useDispatch();
  const [isHidden, setIsHidden] = useState(true);
  const clickHandler = () => {
    setIsHidden(!isHidden);
  }

  const [error, setError] = useState({
    name: {message: ''}, 
    number: {message: ''},
    email: {message: ''},
    profileLink: {message: ''},
  });
  const onChangeHandler = async (e: ChangeEvent<HTMLInputElement>, validationTemplate?: RegExp) => {
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
    setTimeout(() => {
      console.log(form);
    }, 2000);
  }

  return (
    <FormWrapper onSubmit={onSubmitHandler}>
      <UserDataWrapper>
        <FormInput 
          id="name" 
          placeholder="Иван" 
          inputLabel="Ваше имя *" 
          required={true} 
          onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeHandler(e)} 
          error={{message: error.name.message}} 
        />
        <FormInput 
          id="phone" 
          placeholder="+7 (000) 000-00-00" 
          inputLabel="Номер телефона *" 
          required={true} 
          onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeHandler(e, /\+7 \(\d\d\d\) \d\d\d-\d\d-\d\d/)} 
          error={{message: error.number.message}} 
        />
        <FormInput 
          id="email" 
          placeholder="example@skdesign.ru" 
          inputLabel="E-mail *" 
          required={true} 
          onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeHandler(e, /.+@.+\..+/)} 
          error={{message: error.email.message}} 
        />
        <FormInput 
          id="profile-link" 
          placeholder="instagram.com/skdesign" 
          inputLabel="Ссылка на профиль *" 
          required={true} 
          onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeHandler(e)} 
          error={{message: error.profileLink.message}} 
        />
      </UserDataWrapper>
      <FormSelect inputWidth="100%" id="city" placeholder="" inputLabel="Выберите город *" required={true} data={Array.from(cities).map(el => el.name)} />
      <FormInput inputWidth="100%" id="organization" placeholder="SK Design" inputLabel="Название организации/студии" />
      <HiddenFields>
        <>
          <div style={{marginBottom: "20px", cursor: "pointer"}} onClick={clickHandler}>Показать дополнительные поля <img src={`${selectArrow}`} alt=''></img></div>
          {!isHidden && <>
            <FormInput inputWidth="100%" id="recipient" placeholder="ФИО" inputLabel="Получатель" />
            <FormSelect inputWidth="100%" id="source" placeholder="" inputLabel="Откуда узнали про нас" data={Array.from(sources)}/>
            </>}
        </>
      </HiddenFields>
      <StyledButton type="submit" disabled={!noErrors} />
    </FormWrapper>
  )
}

export default Form;