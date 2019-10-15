import React, { useContext } from "react";
import { PlaceholderInfo } from "../dnd/interfaces";
// import { CSSObject } from "styled-components";
import { RootContext } from "../root/RootContext";

export type Placeholder = {
  placeholder: PlaceholderInfo,
  suggestedStyles: any
}

export const defaultPlaceholder: React.FC<Placeholder> = ({ placeholder: { error }, suggestedStyles}) => {

  return (
    <div
      style={{
        position: 'fixed',
        display: 'block',
        opacity: 1,
        background: error ? 'red': 'rgb(98, 196, 98)',
        borderColor: 'rgb(98, 196, 98)',
        borderStyle: 'solid',
        borderWidth: '0px',
        ...suggestedStyles
      }}
    >
    </div>
  )
}


export const RenderPlaceholder: React.FC<Placeholder> = ({ placeholder, suggestedStyles }) => {
  const { query } = useContext(RootContext);
  const { renderPlaceholder } = query.getOptions();
  return React.createElement(renderPlaceholder, {
    placeholder,
    suggestedStyles,
  });
}