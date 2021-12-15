import { ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./styles";

const Button = (props: ButtonHTMLAttributes<HTMLInputElement>) => {
  return (
    <ButtonContainer {...props}>
        {props.children}
    </ButtonContainer>
  )
};

export default Button;
