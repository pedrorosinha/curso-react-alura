import React from "react";
import style from './Button.module.scss';

interface Props {
  type?: "button" | "submit" | "reset" | undefined,
  onClick?: () => void, children?: React.ReactNode
}

function Button({ onClick, type, children }: Props) {
  return (
    <button onClick={onClick} type={type} className={style.botao}>
      {children}
    </button>
  )
}
// interface ButtonProps {
//     children: React.ReactNode;
//     type?: "button" | "submit" | "reset" | undefined, onClick?: () => void
//   }

// class Button1 extends React.Component<ButtonProps> {
//   render(): React.ReactNode {
//     const {type = "button", onClick} = this.props;
//     return (
//       <button onClick={onClick} className={style.botao} type={type}>
//           {this.props.children}
//       </button>
//     );
//   }
// }

export default Button;