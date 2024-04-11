import { TempoParaSegundos } from "../../common/utils/date";
import Button from "../button";
import Clock from "./clock";
import style from './Timer.module.scss';
export default function Timer() {
    console.log('conversão: ', TempoParaSegundos('01:01:01'))
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Clock/>
            </div>
            <Button>
                Começar!
            </Button>
        </div>
    )
}