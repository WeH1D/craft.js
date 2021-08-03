import React from 'react';

import { ToolbarSection, ToolbarItem } from '../../editor';

export const VideoSettings = () => {

  return (
    <React.Fragment>
      <ToolbarSection title="Youtube">
        <ToolbarItem
          full={true}
          propKey="videoId"
          type="text"
          label="Video ID"
        />
      </ToolbarSection>
      <ToolbarSection
        title="Dimensions"
        props={['width', 'height']}
        summary={({ width, height }: any) => {
          return `${width || 0} x ${height || 0}`;
        }}
      >
        <ToolbarItem propKey="width" type="text" label="Width" />
        <ToolbarItem propKey="height" type="text" label="Height" />
      </ToolbarSection>
    </React.Fragment>
  );
};
