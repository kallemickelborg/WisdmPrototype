import React from "react";
import { View } from 'react-native';

import ChartOutline from "../ChartOutline/ChartOutline";
import ChartGraphics from "../ChartGraphics/ChartGraphics";

const PolarChart = ({
  toPoint = 1,
  // 1 - 999...
  stroke = 3,
  labelFontSize = 16,
  chartDiameter,
  hasInnerShapes = true,
  hasDivisionLines = true,
  hasLabels = true,
  chartOutlineLineColor = 'black',
  chartOutlineBackgroundColor = 'transparent',
  chartOutlineCenterColor = chartOutlineBackgroundColor,
  chartOutlineLabelColor = chartOutlineLineColor,
  polarData
}) => {
  const labelData = polarData.length ? polarData[0].influencerScore : polarData.influencerScore;
  const radius = chartDiameter * 0.5;
  const lineWidth = chartDiameter * 0.01 * `0.${stroke}`;

  const buildGraphics = (dataObject, graphIndex) => {
    return (
      <ChartGraphics
        toPoint={toPoint}
        key={`${dataObject.scoreInfo.Name}${graphIndex}`}
        dataObject={dataObject}
        graphIndex={graphIndex}
        chartDiameter={chartDiameter}
        radius={radius}
        lineWidth={lineWidth * 2}
      />
    )
  };

  return (
    <View
      style={{
        position: 'relative',
        height: chartDiameter,
        width: chartDiameter,
        borderRadius: chartDiameter,
        backgroundColor: chartOutlineBackgroundColor,
        borderColor: chartOutlineLineColor,
        borderWidth: lineWidth,
        transform: [
          {rotateZ: '180deg'}, 
        ] 
      }}
    >
      <ChartOutline
        labelData={labelData}
        radius={radius}
        lineWidth={lineWidth}
        labelFontSize={labelFontSize}
        chartDiameter={chartDiameter}
        chartOutlineLineColor={chartOutlineLineColor}
        chartOutlineCenterColor={chartOutlineCenterColor}
        chartOutlineLabelColor={chartOutlineLabelColor}
        hasInnerShapes={hasInnerShapes}
        hasDivisionLines={hasDivisionLines}
        hasLabels={hasLabels}
      />
      {/* Polar Chart Graphics */}
      {
        !!polarData.length ?
        polarData.map((object, index) => buildGraphics(object, index)) :
        buildGraphics(polarData, 0)
      }
    </View>
  )
}

export default PolarChart;