import React from 'react';

import { ToolbarSection, ToolbarItem } from '../../editor';
import { ToolbarRadio } from '../../editor/Toolbar/ToolbarRadio';

export const FormSliderSettings = () => {
  return (
    <React.Fragment>
        <ToolbarSection
        title="Field Name"
        props={['fieldName']}
      >
        <ToolbarItem propKey="fieldName" type="text" label="Field Name" />
      </ToolbarSection>
       <ToolbarSection
        title="Min Value"
        props={['minValue']}
      >
        <ToolbarItem propKey="minValue" type="text" label="Min Value" />
      </ToolbarSection>
      <ToolbarSection
        title="Max Value"
        props={['maxValue']}
      >
        <ToolbarItem propKey="maxValue" type="text" label="Max Value" />
      </ToolbarSection>
      <ToolbarSection
        title="Step Size"
        props={['stepSize']}
      >
        <ToolbarItem propKey="stepSize" type="text" label="Step Size" />
      </ToolbarSection>
    </React.Fragment>
  );
};
