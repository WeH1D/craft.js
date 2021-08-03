import { Element } from '@craftjs/core'
import React, { useContext } from 'react'
import { useNode } from '@craftjs/core'
import { useFormik } from 'formik';
import { FormSettings } from './FormSettings';
import { Save } from '@material-ui/icons';
import { Resizer } from '../Resizer';
import {globalContext} from 'utils/Context/context'
import { FormTextInput } from '../FormTextInput/FormTextInput';
import { FloatingActionButton } from '../FloatingActionButton/FloatingActionButton';

export type ContainerProps = {
  background: Record<'r' | 'g' | 'b' | 'a', number>;
  color: Record<'r' | 'g' | 'b' | 'a', number>;
  flexDirection: string;
  alignItems: string;
  justifyContent: string;
  fillSpace: string;
  width: string;
  height: string;
  padding: string[];
  margin: string[];
  marginTop: number;
  marginLeft: number;
  marginBottom: number;
  marginRight: number;
  shadow: number;
  children: React.ReactNode;
  radius: number;
  contextName: string;
};

const defaultProps = {
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  fillSpace: 'no',
  padding: ['0', '0', '0', '0'],
  margin: ['0', '0', '0', '0'],
  background: { r: 220, g: 220, b: 220, a: 1 },
  color: { r: 0, g: 0, b: 0, a: 1 },
  shadow: 0,
  radius: 0,
  width: 'auto',
  height: 'auto',
  contextName: ""
};

export const formContext = React.createContext({})

export const Form = (props: Partial<ContainerProps>) => {
  props = {
    ...defaultProps,
    ...props,
  };
  const {
    flexDirection,
    alignItems,
    justifyContent,
    fillSpace,
    background,
    color,
    padding,
    margin,
    shadow,
    radius,
    children,
    contextName
  } = props;
  const { connectors: { connect, drag } } = useNode();
  const Gcontext = useContext(globalContext)
  // const formik = useFormik({
  //   initialValues: Gcontext[contextName] == null ? null : Gcontext[contextName].values,
  //   onSubmit: values => {
  //     if (Gcontext[context["contextName"]] != null) {
  //       Gcontext[context["contextName"]].values = {
  //         ...Gcontext[context["contextName"]].values,
  //         [fieldName]: a.target.value
  //       }
  //     }
  //   },
  // });

  var formValues = {
    contextName: contextName
  }
  
  return (
    <Resizer
      propKey={{ width: 'width', height: 'height' }}
      style={{
        justifyContent,
        flexDirection,
        alignItems,
        background: `rgba(${Object.values(background)})`,
        color: `rgba(${Object.values(color)})`,
        padding: `${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px`,
        margin: `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`,
        boxShadow:
          shadow === 0
            ? 'none'
            : `0px 3px 100px ${shadow}px rgba(0, 0, 0, 0.13)`,
        borderRadius: `${radius}px`,
        flex: fillSpace === 'yes' ? 1 : 'unset',
      }}>
       <formContext.Provider value={formValues}>
          <form id="forma" 
          style={{
            width:"100%"
          }}>
            {children}
          </form>
        </formContext.Provider>
    </Resizer>
  )
}

Form.craft = {
  displayName: 'Form',
  rules: {
    canDrag: () => true,
    canMoveIn: (incomingNode) => incomingNode.data.type == FormTextInput || incomingNode.data.type == FloatingActionButton

  },
  props: defaultProps,
  related: {
    toolbar: FormSettings,
  },
};

// function edit() {
//   alert("EDITED  " + JSON.stringify(formValues.values, null, 2));
// }
// function save() {
//   alert("SAVED  " + JSON.stringify(formValues.values, null, 2));
// }
// function submitForm() {
//   alert("SUBMITANO  " + JSON.stringify(formValues.values, null, 2));
// }