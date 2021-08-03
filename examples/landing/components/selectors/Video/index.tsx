import { useNode, useEditor } from '@craftjs/core';
import React from 'react';
import YouTube from 'react-youtube';
import styled from 'styled-components';

import { VideoSettings } from './VideoSettings';

const YoutubeDiv = styled.div<any>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  > div {
    height: 100%;
  }
  iframe {
    pointer-events: ${(props) => (props.enabled ? 'none' : 'auto')};
    // width:100%!important;
    // height:100%!important;
  }
`;

export type VideoProps = {
  width: string;
  height: string;
  videoId : string;
};

const defaultProps = {
  width : "400",
  height :"400",
  videoId: "IwzUs1IMdyQ"
};


export const Video = (props: Partial<VideoProps>) => {
  props = {
    ...defaultProps,
    ...props,
};
const {
    width,
    height,
    videoId
} = props;

  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));
  const {
    connectors: { connect },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

  return (
    <YoutubeDiv ref={connect} enabled={enabled} width={width} height={height}>
      <YouTube
        videoId={videoId}
        opts={{
          width: '100%',
          height: '100%',
        }}
      />
    </YoutubeDiv>
  );
};

Video.craft = {
  displayName: 'Video',
  props: {
    videoId: 'IwzUs1IMdyQ',
  },
  related: {
    toolbar: VideoSettings,
  },
};
