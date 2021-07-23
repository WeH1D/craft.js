import React from 'react';

import { ToolbarSection, ToolbarItem } from '../../editor';
import { ToolbarRadio } from '../../editor/Toolbar/ToolbarRadio';

export const FormRadioGroupSettings = () => {
  return (
    <React.Fragment>
        <ToolbarSection
        title="Field Name"
        props={['fieldName']}
      >
        <ToolbarItem propKey="fieldName" type="text" label="Field Name" />
      </ToolbarSection>
       <ToolbarSection
        title="Title"
        props={['title']}
      >
        <ToolbarItem propKey="title" type="text" label="Title" />
      </ToolbarSection>
    </React.Fragment>
  );
};
