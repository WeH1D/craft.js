import { Element, useEditor } from '@craftjs/core';
import { Tooltip } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

import ButtonSvg from '../../../public/icons/toolbox/button.svg';
import SquareSvg from '../../../public/icons/toolbox/rectangle.svg';
import TypeSvg from '../../../public/icons/toolbox/text.svg';
import YoutubeSvg from '../../../public/icons/toolbox/video-line.svg';
import { Button } from '../../selectors/Button';
import { Container } from '../../selectors/Container';
import { Text } from '../../selectors/Text';
import { Video } from '../../selectors/Video';
import { Form } from 'components/selectors/Form/Form';
import { FormTextInput } from 'components/selectors/FormTextInput/FormTextInput';
import { FormRadioButton } from 'components/selectors/FormRadioButton/FormRadioButton';
import { FormRadioGroup } from 'components/selectors/FormRadioGroup/FormRadioGroup';
import { FormCheckbox } from 'components/selectors/FormCheckbox/FormCheckbox';
import { FormSlider } from 'components/selectors/FormSlider/FormSlider';
import { FloatingActionButton } from 'components/selectors/FloatingActionButton/FloatingActionButton';
import { DataGridUI } from 'components/selectors/DataGrid/DataGridUI';
import { TabUI } from 'components/selectors/Tab/TabUI';
import TabPannel from 'components/selectors/TabPannel/TabPannel';

const ToolboxDiv = styled.div<{ enabled: boolean }>`
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  ${(props) => (!props.enabled ? `width: 0;` : '')}
  ${(props) => (!props.enabled ? `opacity: 0;` : '')}
`;

const Item = styled.a<{ move?: boolean }>`
  svg {
    width: 22px;
    height: 22px;
    fill: #707070;
  }
  ${(props) =>
    props.move &&
    `
    cursor: move;
  `}
`;

export const Toolbox = () => {
  const {
    enabled,
    connectors: { create },
  } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return (
    <ToolboxDiv
      enabled={enabled && enabled}
      className="toolbox transition w-12 h-full flex flex-col bg-white"
    >
      <div className="flex flex-1 flex-col items-center pt-3">
        
        
        
        <div
          ref={(ref) =>
            create(
              ref,
              <Element
                canvas
                is={Container}
                background={{ r: 200, g: 230, b: 230, a: 1 }}
                color={{ r: 0, g: 0, b: 0, a: 1 }}
                height="300px"
                width="100%"
              ></Element>
            )
          }
        >
          <Tooltip title="Container" placement="right">
            <Item className="m-2 pb-2 cursor-pointer block" move>
              <SquareSvg />
            </Item>
          </Tooltip>
        </div>


        <div
          ref={(ref) =>
            create(
              ref,
              <Element
                canvas
                is={Form}
                background={{ r: 220, g: 220, b: 220, a: 1 }}
                color={{ r: 0, g: 0, b: 0, a: 1 }}
                height="200px"
                width="100%"
              ></Element>
            )
          }>
          <Tooltip title="Form" placement="right">
            <Item className="m-2 pb-2 cursor-pointer block" move>
              <h1>F</h1>
            </Item>
          </Tooltip>
        </div>

        
        <div
          ref={(ref) =>
            create(ref, <TabUI></TabUI>)
          }
        >
          <Tooltip title="Tab Group" placement="right">
            <Item className="m-2 pb-2 cursor-pointer block" move>
              <SquareSvg />
            </Item>
          </Tooltip>
        </div>


        <div
          ref={(ref) =>
            create(
              ref,
              <Element
                canvas
                is={TabPannel}
                background={{ r: 200, g: 230, b: 230, a: 1 }}
                height="300px"
                width="100%"
              ></Element>
            )
          }
        >
          <Tooltip title="Tab Pannel" placement="right">
            <Item className="m-2 pb-2 cursor-pointer block" move>
              <SquareSvg />
            </Item>
          </Tooltip>
        </div>


        <div
          ref={(ref) =>
            create(ref, <DataGridUI></DataGridUI>)
          }>
          <Tooltip title="DataGridUI" placement="right">
            <Item className="m-2 pb-2 cursor-pointer block" move>
              <h1>DG</h1>
            </Item>
          </Tooltip>
        </div>



        <div
          ref={(ref) =>
            create(ref, <FormTextInput></FormTextInput>)
          }>
          <Tooltip title="FormTextInput" placement="right">
            <Item className="m-2 pb-2 cursor-pointer block" move>
              <h1>FTI</h1>
            </Item>
          </Tooltip>
        </div>


        <div
          ref={(ref) =>
            create(ref, <FormRadioGroup></FormRadioGroup>)
          }>
          <Tooltip title="FormRadioGroup" placement="right">
            <Item className="m-2 pb-2 cursor-pointer block" move>
              <h1>FRG</h1>
            </Item>
          </Tooltip>
        </div>


        <div
          ref={(ref) =>
            create(ref, <FormRadioButton></FormRadioButton>)
          }>
          <Tooltip title="FormRadioButton" placement="right">
            <Item className="m-2 pb-2 cursor-pointer block" move>
              <h1>FRB</h1>
            </Item>
          </Tooltip>
        </div>


        <div
          ref={(ref) =>
            create(ref, <FormCheckbox></FormCheckbox>)
          }>
          <Tooltip title="FormCheckbox" placement="right">
            <Item className="m-2 pb-2 cursor-pointer block" move>
              <h1>FC</h1>
            </Item>
          </Tooltip>
        </div>


        <div
          ref={(ref) =>
            create(ref, <FormSlider></FormSlider>)
          }>
          <Tooltip title="FormSlider" placement="right">
            <Item className="m-2 pb-2 cursor-pointer block" move>
              <h1>FS</h1>
            </Item>
          </Tooltip>
        </div>


        <div
          ref={(ref) =>
            create(ref, <FloatingActionButton></FloatingActionButton>)
          }>
          <Tooltip title="FloatingActionButton" placement="right">
            <Item className="m-2 pb-2 cursor-pointer block" move>
              <h1>FAB</h1>
            </Item>
          </Tooltip>
        </div>


        <div
          ref={(ref) =>
            create(ref, <Text fontSize="12" textAlign="left" text="Hi there" />)
          }
        >
          <Tooltip title="Text" placement="right">
            <Item className="m-2 pb-2 cursor-pointer block" move>
              <TypeSvg />
            </Item>
          </Tooltip>
        </div>
        <div ref={(ref) => create(ref, <Button />)}>
          <Tooltip title="Button" placement="right">
            <Item className="m-2 pb-2 cursor-pointer block" move>
              <ButtonSvg />
            </Item>
          </Tooltip>
        </div>

        
        <div ref={(ref) => create(ref, <Video />)}>
          <Tooltip title="Video" placement="right">
            <Item className="m-2 pb-2 cursor-pointer block" move>
              <YoutubeSvg />
            </Item>
          </Tooltip>

        </div>
      </div>
    </ToolboxDiv>
  );
};
