import React from "react";
import style from './Button.module.scss';

interface ButtonProps {
    children: React.ReactNode;
    type?: "button" | "submit" | "reset" | undefined, onClick?: () => void
  }
  
  class Button extends React.Component<ButtonProps> {
    render(): React.ReactNode {
      const {type = "button", onClick} = this.props;
      return (
        <button onClick={onClick} className={style.botao} type={type}>
            {this.props.children}
        </button>
      );
    }
  }

export default Button;