"use client";
import Casa from "./Casa";
import { Linha } from "../css/style";

export default function LinhaB(props) {
  return (
    <div>
      <Linha>
        <Casa blue={props.blue ? "true" : "false"} green={props.green ? "true" : "false"}/>
        <Casa blue={props.blue ? "true" : "false"} green={props.green ? "true" : "false"} black/>
        <Casa blue={props.blue ? "true" : "false"} green={props.green ? "true" : "false"}/>
        <Casa blue={props.blue ? "true" : "false"} green={props.green ? "true" : "false"} black/>
        <Casa blue={props.blue ? "true" : "false"} green={props.green ? "true" : "false"}/>
        <Casa blue={props.blue ? "true" : "false"} green={props.green ? "true" : "false"} black/>
        <Casa blue={props.blue ? "true" : "false"} green={props.green ? "true" : "false"}/>
        <Casa blue={props.blue ? "true" : "false"} green={props.green ? "true" : "false"} black/>
      </Linha>
    </div>
  );
}
