import React from 'react';

import { ToolbarSection, ToolbarItem } from '../../editor';
import { ToolbarRadio } from '../../editor/Toolbar/ToolbarRadio';

export const FormTextInputSettings = () => {
  return (
    <React.Fragment>
       <ToolbarSection
        title="FieldName"
        props={['fieldName']}
      >
        <ToolbarItem propKey="fieldName" type="text" label="Field Name" />
      </ToolbarSection>
    </React.Fragment>
  );
};
