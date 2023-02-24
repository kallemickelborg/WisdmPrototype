import React from 'react';
import { View } from 'react-native';

import { SubHeadings } from '../../../Text/Text';

import { findX, findY } from '../../functions';

const ChartOutline = ({
  labelData,
  radius,
  lineWidth,
  labelFontSize,
  chartDiameter,
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
      <View
      key={key}
      style={{
        position: 'absolute',
        height: diameter,
        width: diameter,
        borderRadius: diameter,
        backgroundColor: 'transparent',
        borderColor: chartOutlineLineColor,
        borderWidth: lineWidth,
        borderStyle: 'dashed',
        top: '50%',
        left: '50%',
        transform: [
          {translateX: (-diameter) * 0.5},
          {translateY: (-diameter) * 0.5 - lineWidth * 0.5},
        ] 
      }}
    >
    </View>
    )
  };

  return (
    <View
    style={{
      height: chartDiameter,
    }}
    >
      {/* Slices of PI */}
      {
        Object.keys(labelData).map((item, index) => {
          const angle = (360 / Object.keys(labelData).length) * index; 
          const x = findX(radius, angle);
          const y = findY(radius, angle);
          return (
            <View key={item}>
              <View
                style={{
                  height: radius,
                  width: lineWidth,
                  backgroundColor: hasDivisionLines ? chartOutlineLineColor : 'transparent',
                  position: 'absolute',
                  top: y - radius * 0.5 - lineWidth,
                  left: x - (lineWidth + lineWidth * 0.5),
                  transform: [
                    { rotateZ: `-${angle}deg` },
                    { translateY: (lineWidth * 0.5 - lineWidth) - radius * 0.5},
                  ]
                }}
              >
                {/* Labels */}
                {
                  hasLabels ?
                  <SubHeadings 
                    style={{
                      color: chartOutlineLabelColor,
                      fontSize: labelFontSize,
                      textAlign: 'center',
                      width: labelFontSize * 5,
                      height: 'auto',
                      position: 'absolute',
                      top: radius + chartDiameter * 0.01,  
                      transform: [ 
                          { rotateZ: angle > 90 && angle < 270 ? `-${360}deg` : `-${180}deg` },
                          { translateX: angle > 90 && angle < 270 ? -labelFontSize * 5 * 0.5 : labelFontSize * 5 * 0.5 }
                        ] 
                      }}>
                    {item}
                  </SubHeadings> :
                  null
                }
              </View>
            </View>
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
              // LOL not super sure about this 😅😅😅
              transform: [
                {translateX: (-chartDiameter * 0.025) * 0.5 - (lineWidth * 1.025)},
                {translateY: (-chartDiameter * 0.05) * 0.5 - (lineWidth * 1.05)},
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