import { Element } from '@craftjs/core'
import React from 'react'
import { useNode } from '@craftjs/core'
import { useFormik } from 'formik';
import { FormSettings } from './FormSettings';


var formValues = {
    values : {}
}

const defaultProps = {
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  fillSpace: 'no',
  padding: ['0', '0', '0', '0'],
  margin: ['0', '0', '0', '0'],
  background: { r: 255, g: 255, b: 255, a: 1 },
  color: { r: 0, g: 0, b: 0, a: 1 },
  shadow: 0,
  radius: 0,
  width: '100%',
  height: 'auto',
};

export const MyContext = React.createContext(formValues)

export const FormCanvas = ({children}) => {

  const formik = useFormik({
    initialValues: formValues.values,
    onSubmit: values => {
      alert(JSON.stringify(formValues.values, null, 2));
    },
  });

  const { connectors: {connect}} = useNode();
  return (
    <div ref={connect} className="text-only"
    style={{
      background:'lightblue',
      width:'300px',
      height:'500px'
      }}>
         <MyContext.Provider value={formValues}>
          <form id="forma" onSubmit={formik.handleSubmit}>
            {children} 
            <button type="submit">Submit</button>
          </form>
          </MyContext.Provider>
    </div>
  )
}

export const Form = () => {
   const {connectors: {connect, drag}} = useNode();
    return (
      <div ref={connect}>
        <Element id="customdiv" is={FormCanvas} canvas>
        </Element>
      </div>
    )
}

Form.craft = {
  displayName: 'Custom',
  rules: {
    canDrag: () => true,
  },
  props: defaultProps,
  related: {
    toolbar: FormSettings,
  },
};
