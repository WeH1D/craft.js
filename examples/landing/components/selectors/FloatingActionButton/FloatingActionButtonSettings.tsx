import React from 'react';

import { ToolbarSection, ToolbarItem, ToolbarDropdown} from '../../editor';

export const FloatingActionButtonSettings = () => {
  return (
    <React.Fragment>
       <ToolbarSection
        title="Settigns"
        props={['onClick']}
      >
        <ToolbarItem propKey="onClick" type="text" label="Function callback" />
      </ToolbarSection>
    </React.Fragment>
  );
};
