import React from 'react';

import { ToolbarSection, ToolbarItem, ToolbarDropdown} from '../../editor';
import { MenuItem } from '@material-ui/core';

export const FormTextInputSettings = () => {
  return (
    <React.Fragment>
       <ToolbarSection
        title="Settigns"
        props={['fieldName', 'fieldType', 'fieldLabel']}
      >
        <ToolbarItem propKey="fieldType" type="select" label="Field Type">
            <MenuItem value="text">Text</MenuItem> 
            <MenuItem value="number">Number</MenuItem>
            <MenuItem value="date">Date</MenuItem>
            <MenuItem value="password">Password</MenuItem>
            <MenuItem value="email">Email</MenuItem>
        </ToolbarItem>
        <ToolbarItem propKey="fieldName" type="text" label="Field Name" />
        <ToolbarItem propKey="fieldLabel" type="text" label="Field Label" />
      </ToolbarSection>
    </React.Fragment>
  );
};
