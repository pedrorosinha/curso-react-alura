import { useState } from "react";
import { TempoParaSegundos } from "../../common/utils/time";
import { ITarefa } from "../../types/tarefa";
import Button from "../button";
import Clock from "./clock";
import style from './Timer.module.scss';

interface Props {
    selecionado: ITarefa | undefined
}

export default function Timer({ selecionado }: Props) {
    const [tempo, setTempo] = useState<number>();
    if (selecionado?.tempo) {
            setTempo(TempoParaSegundos(selecionado.tempo));
    }
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            Tempo: {tempo}
            <div className={style.relogioWrapper}>
                <Clock />
            </div>
            <Button>
                Começar!
            </Button>
        </div>
    )
}