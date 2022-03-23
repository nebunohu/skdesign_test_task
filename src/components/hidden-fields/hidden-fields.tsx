import { FC } from 'react';
import HiddenFieldsWrapper from "../hidden-fields/hidden-fields-wrapper";

type THiddenFieldsProps = {
  children: JSX.Element;
}

const HiddenFields:FC<THiddenFieldsProps> = ({ children }) => {
  
  return (
    <HiddenFieldsWrapper>
      {children}
    </HiddenFieldsWrapper>
  )
}

export default HiddenFields;