import { useEffect, useState } from "react";
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

    useEffect(() => {
        if (selecionado?.tempo) {
            setTempo(TempoParaSegundos(selecionado.tempo));
        }
    }, [selecionado]);
    
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Clock tempo={tempo} />
            </div>
            <Button>
                Começar!
            </Button>
        </div>
    )
}