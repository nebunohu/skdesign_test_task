import { useState } from 'react'; 
import FormWrapper from "./form-wrapper";
import FormInput from "../form-input/form-input";

import UserDataWrapper from "./user-data-wrapper";
import HiddenFields from "../hidden-fields/hidden-fields";
import FormSelect from "../form-selector/form-selector";
import { Button } from "@mui/material";
import selectArrow from '../../images/select.svg';
import StyledButton from '../styled-button/styled-button';

const Form = () => {
  const [isHidden, setIsHidden] = useState(true);
  const clickHandler = () => {
    setIsHidden(!isHidden);
  }
  return (
    <FormWrapper>
      <UserDataWrapper>
        <FormInput id="name" placeholder="Иван" inputLabel="Ваше имя *" required={true} />
        <FormInput id="phone" placeholder="+7 (000) 000-00-00" inputLabel="Номер телефона *" required={true} />
        <FormInput id="email" placeholder="example@skdesign.ru" inputLabel="E-mail *" required={true} />
        <FormInput id="profile-link" placeholder="instagram.com/skdesign" inputLabel="Ссылка на профиль *" required={true} />
      </UserDataWrapper>
      <FormSelect inputWidth="100%" id="city" placeholder="" inputLabel="Выберите город *" required={true} />
      <FormInput inputWidth="100%" id="organization" placeholder="SK Design" inputLabel="Название организации/студии" />
      <HiddenFields>
        <>
          <div style={{marginBottom: "20px", cursor: "pointer"}} onClick={clickHandler}>Показать дополнительные поля <img src={`${selectArrow}`} alt=''></img></div>
          {!isHidden && <>
            <FormInput inputWidth="100%" id="recipient" placeholder="ФИО" inputLabel="Получатель" />
            <FormSelect inputWidth="100%" id="city" placeholder="" inputLabel="Откуда узнали про нас"/>
            </>}
        </>
      </HiddenFields>
      <StyledButton />
    </FormWrapper>
  )
}

export default Form;