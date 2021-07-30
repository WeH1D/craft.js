import React from 'react'
import { useNode } from '@craftjs/core'
import { useContext } from 'react'
import { formContext } from '../Form/Form'
import { InputBase, TextField } from '@material-ui/core'
import {globalContext} from 'utils/Context/context'
import { DataGrid, GridColDef, GridColumnHeaderParams, GridValueGetterParams } from '@material-ui/data-grid';
import { DataGridUISettings } from './DataGridUISettings'

export type DataGridUIProps = {
  fieldName: string;
  fieldType: string;
  fieldLabel: string;
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
};

const defaultProps = {
  fieldName: 'default',
  fieldType: 'text',
  fieldLabel: '',
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
  width: '100',
  height: 'auto',
};

export const DataGridUI = (props: Partial<DataGridUIProps>) => {

  props = {
    ...defaultProps,
    ...props,
  };
  const {
    fieldName,
    fieldType,
    fieldLabel,
    alignItems,
    justifyContent,
    fillSpace,
    background,
    color,
    padding,
    margin,
    shadow,
    radius,
    width,
    height
  } = props;

  const { connectors: { connect, drag } } = useNode();
  var context = useContext(formContext)
  const Gcontext = useContext(globalContext)

  function changeHeaderName (params: GridColumnHeaderParams){
    return <InputBase
      defaultValue={params.colDef.headerName}
      inputProps={{ 'aria-label': 'naked' }}
      onChange = {
        (a) => {
          params.colDef.headerName = a.target.value;
        }
      }
  />
  }

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 120 },
    {
      field: 'firstName',
      headerName: 'First name',
      flex: 1,
      editable: true,
      renderHeader: (params: GridColumnHeaderParams) => changeHeaderName(params),
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      flex: 1,
      editable: true,
      renderHeader: (params: GridColumnHeaderParams) => changeHeaderName(params),
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      flex: 1,
      editable: true,
      renderHeader: (params: GridColumnHeaderParams) => changeHeaderName(params),
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      flex: 1,
      renderHeader: (params: GridColumnHeaderParams) => changeHeaderName(params),
      valueGetter: (params: GridValueGetterParams) =>
        `${params.getValue(params.id, 'firstName') || ''} ${
          params.getValue(params.id, 'lastName') || ''
        }`,
    },
  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

  return (
    <div style={{ 
      height: 400, 
      width: '100%',
      justifyContent,
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
        flex: fillSpace === 'yes' ? 1 : 'unset', }}>
      <DataGrid

        rows={rows}
        columns={columns}
        pageSize={5}
        disableSelectionOnClick
      />
    </div>
  )
}

DataGridUI.craft = {
  displayName: 'Data grid',
  rules: {
    canDrag: () => true,
  },
  props: defaultProps,
  related: {
    toolbar: DataGridUISettings
  },
};
