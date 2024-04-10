import React from "react";

class Button extends React.Component {
    render(): React.ReactNode {
        const estaAtivo = false
        const styles = {
            backgroundColor: estaAtivo ? "green" : "red"
        }
        return (
            <button style={styles}>
                Botão
            </button>
        )
    }
}

export default Button;