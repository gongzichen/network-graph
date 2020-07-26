import React from "react";
import classnames from "classnames";
import "./index.less";


interface Props {
	x	: String; 
	y	: String;
}

function EdgeToolTips(props: Props) {
  return (
    <div
      className={classnames('edgeTooltips')}
      style={{ top: `${props.y}px`, left: `${props.x}px` }}
    >
      <div className={'edgeTitle'}>
        <p className={'tooltipsCommon'}>凭证开立</p>
        <p className={`${'tooltipsCommon'} ${'tooltipsMoney'}`}>1000,000,000元</p>
        <p className={`${'tooltipsCommon'} ${'tooltipsDate'}`}>2019-09-10</p>
      </div>
      <div className={'edgeDetail'}>
        <div className={'detailContent'}/>
      </div>
    </div>
  );
};

export default EdgeToolTips;
