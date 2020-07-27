import React from 'react'
import "./index.less";

const EdgeToolTips = ({ x, y }) => {
  return (
    <div className={'edgeTooltips'} style={{ top: `${y}px`, left: `${x}px`}}>
      <div className={'edgeTitle'}>
        <p className={'tooltipsCommon'}>凭证开立</p>
        <p className={`${'tooltipsCommon'} ${'tooltipsMoney'}`}>1000,000,000元</p>
        <p className={`${'tooltipsCommon'} ${'tooltipsDate'}`}>2019-09-10</p>
      </div>
      <div className={'edgeDetail'}>
        <div className={'detailContent'}>
          <p className={'edgeCode'}>交易编码：</p>
          <span className={'edgeValue'}>1000190203455</span>
        </div>
        <div className={'detailContent'}>
          <p className={'edgeCode'}>交易编码：</p>
          <span className={'edgeValue'}>1000190203455</span>
        </div>
        <div className={'detailContent'}>
          <p className={'edgeCode'}>交易编码：</p>
          <span className={'edgeValue'}>1000190203455</span>
        </div>
      </div>
    </div>
  )
}

export default EdgeToolTips
