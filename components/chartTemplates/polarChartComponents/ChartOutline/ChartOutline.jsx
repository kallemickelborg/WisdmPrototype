import React from 'react';
import { View } from 'react-native';
import Svg, { Circle, Line } from 'react-native-svg';

import { SubHeadings } from '../../../Text/Text';

import { findX, findY } from '../../functions';

const ChartOutline = ({
  labelData,
  radius,
  lineWidth,
  labelFontSize,
  chartDiameter,
  chartOutlineBackgroundColor,
  chartOutlineLineColor,
  chartOutlineLabelColor,
  chartOutlineCenterColor,
  hasInnerShapes,
  hasDivisionLines,
  hasLabels
}) => {

  const innerCircleObject = [
    { name: 'one', diameter: chartDiameter * 0.8 },
    { name: 'two', diameter: chartDiameter * 0.6 },
    { name: 'three', diameter: chartDiameter * 0.4 },
    { name: 'four', diameter: chartDiameter * 0.2 },
  ]

  const buildInnerCircles = (key, diameter) => {
    return (
      <Svg
      key={key}
      viewBox={`0 0 ${chartDiameter} ${chartDiameter}`}
      style={{
        position: 'absolute',
        transform: [
          { translateX: chartDiameter * 0.5 - diameter * 0.5 },
          { translateY: chartDiameter * 0.5 - diameter * 0.5 },
        ]
      }}
      >
        <Circle
          cx={diameter * 0.5}
          cy={diameter * 0.5}
          r={diameter * 0.5}
          stroke={chartOutlineLineColor}
          strokeWidth={lineWidth}
          strokeDasharray={`${lineWidth * 3}`}
        />
      </Svg>
    )
  };

  return (
    <View
    style={{
      height: chartDiameter,
    }}
    >
      {/* Slices of PI */}
      <View
        style={{
          height: chartDiameter,
          width: chartDiameter,
          borderRadius: radius,
          borderColor: chartOutlineLineColor,
          backgroundColor: chartOutlineBackgroundColor,
          borderWidth: lineWidth,
          position: 'absolute'
        }}
      ></View>
      <Svg viewBox={`0 0 ${chartDiameter} ${chartDiameter}`} style={{ display: hasDivisionLines ? 'flex' : 'none' }}>
        {/* <Circle
          cx={radius}
          cy={radius}
          r={radius}
          stroke={chartOutlineLineColor}
          strokeWidth={lineWidth}
          fill={chartOutlineBackgroundColor}
        /> */}
      {
        Object.keys(labelData).map((item, index) => {
          const angle = (360 / Object.keys(labelData).length) * index; 
          const x = findX(radius, angle);
          const y = findY(radius, angle);
          return (
            <Line
              key={`${item}${index + 1}`}
              x1={radius - lineWidth * 0.5}
              y1={radius - lineWidth * 0.5}
              x2={x}
              y2={y}
              stroke={chartOutlineLineColor}
              strokeWidth={lineWidth}
              strokeDasharray={`${lineWidth * 3}`}
            />
          )
        })
      }
      </Svg>
      {/* Labels */}
      {
        Object.keys(labelData).map((item, index) => {
          const angle = (360 / Object.keys(labelData).length) * index; 
          const x = findX(radius, angle);
          const y = findY(radius, angle);
          return (
            hasLabels ?
            <SubHeadings 
              key={`${item}${index + 1}`}
              style={{
                color: chartOutlineLabelColor,
                fontSize: labelFontSize,
                textAlign: 'center',
                width: labelFontSize * 100,
                height: 'auto',
                position: 'absolute',
                top: y,  
                left: x - labelFontSize * 100 * 0.5,  
                transform: [
                    { rotateZ: angle > 90 && angle < 270 ? `-${angle}deg` : `-${ angle + 180}deg` },
                    { translateY: angle === 0 ? -labelFontSize * 0.5 : angle > 90 && angle < 270 ? labelFontSize * 3 * 0.5 : -labelFontSize * 2 * 0.5 }
                  ] 
                }}>
              {item}
            </SubHeadings> :
            null
          )
        })
      }
      {
        hasInnerShapes ?
        <>
          {/* Inner Chart Circles */}
          {
            innerCircleObject.map((item) => (
              buildInnerCircles(item.name, item.diameter)
            ))
          }
          {/* Chart Center */}
          <View 
            style={{
              position: 'absolute',
              top: radius,
              left: radius,
              height: chartDiameter * 0.05,
              width: chartDiameter * 0.025,
              borderRadius: chartDiameter * 0.025,
              borderColor: chartOutlineLineColor,
              borderWidth: lineWidth,
              backgroundColor: chartOutlineCenterColor,
              transform: [
                {translateX: (-chartDiameter * 0.025) * 0.5 - (lineWidth * 0.5)},
                {translateY: (-chartDiameter * 0.05) * 0.5 - (lineWidth * 0.5)},
              ] 
            }}
          >
          </View>
        </> :
        null
      }
    </View>
  )
}

export default ChartOutline;