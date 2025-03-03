"use client";
import Casa from "./Casa";
import style from "../css/style.module.css";
import { Linha } from "../css/style";

export default function LinhaA(props) {
  return (
    <div>
      <Linha>
        <Casa blue={props.blue ? "true" : "false"} green={props.green ? "true" : "false"} black/>
        <Casa blue={props.blue ? "true" : "false"} green={props.green ? "true" : "false"}/>
        <Casa blue={props.blue ? "true" : "false"} green={props.green ? "true" : "false"} black/>
        <Casa blue={props.blue ? "true" : "false"} green={props.green ? "true" : "false"}/>
        <Casa blue={props.blue ? "true" : "false"} green={props.green ? "true" : "false"} black/>
        <Casa blue={props.blue ? "true" : "false"} green={props.green ? "true" : "false"}/>
        <Casa blue={props.blue ? "true" : "false"} green={props.green ? "true" : "false"} black/>
        <Casa blue={props.blue ? "true" : "false"} green={props.green ? "true" : "false"}/>
        {/* <Casa black />
        <Casa />
        <Casa black />
        <Casa />
        <Casa black />
        <Casa />
        <Casa black />
      </Linha>
      <Linha>
        <Casa black  />
        <Casa />
        <Casa black />
        <Casa />
        <Casa black />
        <Casa />
        <Casa black />
        <Casa /> */}
      </Linha>
    </div>
  );
}
