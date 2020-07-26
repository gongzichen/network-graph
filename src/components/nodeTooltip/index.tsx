import React from "react";
import { Timeline } from "antd";
import "antd/es/timeline/style/css";
import "./index.less";

interface Props {
	x	: String; 
	y	: String;
}

function NodeToolTips(props: Props) {
  return (
    <div
      className={"nodeTooltips"}
      style={{ top: `${props.y}px`, left: `${props.x}px` }}
    >
      <Timeline>
        <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
        <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
        <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
        <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
      </Timeline>
    </div>
  );
};

export default NodeToolTips;
