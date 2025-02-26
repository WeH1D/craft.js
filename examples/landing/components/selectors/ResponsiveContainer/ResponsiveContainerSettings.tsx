import React from 'react';

import { ToolbarSection, ToolbarItem } from '../../editor';
import { ToolbarRadio } from '../../editor/Toolbar/ToolbarRadio';

export const ResponsiveContainerSettings = () => {
  return (
    <React.Fragment>

      <ToolbarSection
        title="Responsiveness"
        props={['xs', 'sm', 'md', 'lg', 'xl', "rowOrCol"]}
      >
       <ToolbarItem
          propKey="rowOrCol"
          type="radio"
          label="Row/Column"
          full={true}
        >
          <ToolbarRadio value="row" label="Row" />
          <ToolbarRadio value="col" label="Column" />
        </ToolbarItem>
         {/* 
         Extra small screen / phone
          xs: <576px
        Small screen / phone
          sm: ≥576px
        Medium screen / tablet
          md: ≥768px
        Large screen / desktop
          lg: ≥992px
        Extra large screen / wide desktop
          xl: ≥1200px
           */}
          <ToolbarItem propKey="xs" type="number" label="xs or default"/>
          <ToolbarItem propKey="sm" type="number" label="sm"/>
          <ToolbarItem propKey="md" type="number" label="md"/>
          <ToolbarItem propKey="lg" type="number" label="lg"/>
          <ToolbarItem propKey="xl" type="number" label="xl"/>
      </ToolbarSection>

      <ToolbarSection
        title="Colors"
        props={['background', 'color']}
        summary={({ background, color }: any) => {
          return (
            <div className="flex flex-row-reverse">
              <div
                style={{
                  background:
                    background && `rgba(${Object.values(background)})`,
                }}
                className="shadow-md flex-end w-6 h-6 text-center flex items-center rounded-full bg-black"
              >
                <p
                  style={{
                    color: color && `rgba(${Object.values(color)})`,
                  }}
                  className="text-white w-full text-center"
                >
                  T
                </p>
              </div>
            </div>
          );
        }}
      >
        <ToolbarItem
          full={true}
          propKey="background"
          type="bg"
          label="Background"
        />
        <ToolbarItem full={true} propKey="color" type="color" label="Text" />
      </ToolbarSection>
      <ToolbarSection
        title="Margin"
        props={['margin']}
        summary={({ margin }: any) => {
          return `${margin[0] || 0}px ${margin[1] || 0}px ${margin[2] || 0}px ${
            margin[3] || 0
          }px`;
        }}
      >
        <ToolbarItem propKey="margin" index={0} type="number" label="Top" />
        <ToolbarItem propKey="margin" index={1} type="number" label="Right" />
        <ToolbarItem propKey="margin" index={2} type="number" label="Bottom" />
        <ToolbarItem propKey="margin" index={3} type="number" label="Left" />
      </ToolbarSection>
      <ToolbarSection
        title="Padding"
        props={['padding']}
        summary={({ padding }: any) => {
          return `${padding[0] || 0}px ${padding[1] || 0}px ${
            padding[2] || 0
          }px ${padding[3] || 0}px`;
        }}
      >
        <ToolbarItem propKey="padding" index={0} type="number" label="Top" />
        <ToolbarItem propKey="padding" index={1} type="number" label="Right" />
        <ToolbarItem propKey="padding" index={2} type="number" label="Bottom" />
        <ToolbarItem propKey="padding" index={3} type="number" label="Left" />
      </ToolbarSection>
      <ToolbarSection title="Decoration" props={['radius', 'shadow']}>
        <ToolbarItem
          full={true}
          propKey="radius"
          type="slider"
          label="Radius"
        />
        <ToolbarItem
          full={true}
          propKey="shadow"
          type="slider"
          label="Shadow"
        />
      </ToolbarSection>
      <ToolbarSection title="Alignment">
        <ToolbarItem
          propKey="flexDirection"
          type="radio"
          label="Flex Direction"
        >
          <ToolbarRadio value="row" label="Row" />
          <ToolbarRadio value="column" label="Column" />
        </ToolbarItem>
        <ToolbarItem propKey="fillSpace" type="radio" label="Fill space">
          <ToolbarRadio value="yes" label="Yes" />
          <ToolbarRadio value="no" label="No" />
        </ToolbarItem>
        <ToolbarItem propKey="alignItems" type="radio" label="Align Items">
          <ToolbarRadio value="flex-start" label="Flex start" />
          <ToolbarRadio value="center" label="Center" />
          <ToolbarRadio value="flex-end" label="Flex end" />
        </ToolbarItem>
        <ToolbarItem
          propKey="justifyContent"
          type="radio"
          label="Justify Content"
        >
          <ToolbarRadio value="justify-content-start" label="Start" />
          <ToolbarRadio value="justify-content-center" label="Center" />
          <ToolbarRadio value="justify-content-end" label="End" />
          <ToolbarRadio value="justify-content-between" label="Between" />
          <ToolbarRadio value="justify-content-around" label="Around" />
        </ToolbarItem>
      </ToolbarSection>
    </React.Fragment>
  );
};
