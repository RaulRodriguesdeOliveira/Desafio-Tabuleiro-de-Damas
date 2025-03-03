"use client"
import { Peca, Casa } from "../css/style"
import style from "../css/style.module.css"

export default function CasaDama(props) {
    return (
        <Casa className={style.casa} black={props.black ? "true" : "false"}>
            <Peca black={props.black ? "true" : "false"} blue={props.blue === "true" ? "true" : "false"} green={props.green === "true" ? "true" : "false"} ></Peca>
        </Casa>
    )
}