import React from 'react';

import { ToolbarSection, ToolbarItem } from '../../editor';
import { ToolbarRadio } from '../../editor/Toolbar/ToolbarRadio';

export const FormRadioButtonSettings = () => {
  return (
    <React.Fragment>
       <ToolbarSection
        title="Label"
        props={['label']}
      >
        <ToolbarItem propKey="label" type="text" label="Label" />
      </ToolbarSection>
      <ToolbarSection
        title="Value"
        props={['value']}
      >
        <ToolbarItem propKey="value" type="text" label="Value" />
      </ToolbarSection>
    </React.Fragment>
  );
};
