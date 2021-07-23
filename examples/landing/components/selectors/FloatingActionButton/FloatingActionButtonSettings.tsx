import React from 'react';

import { ToolbarSection, ToolbarItem, ToolbarDropdown} from '../../editor';
import { MenuItem } from '@material-ui/core';

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
