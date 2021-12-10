import { DragIconWrapper } from "../util/DragIconWrapper";
import { Add } from "../assets/Add";
import React from "react";

export function DragHandle(props) {
  return (
    <DragIconWrapper {...props}>
      <Add />
    </DragIconWrapper>
  );
}
