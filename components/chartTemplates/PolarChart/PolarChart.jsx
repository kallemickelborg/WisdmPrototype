import React from "react";
import { View } from 'react-native';

import { SubHeadings } from "../../Text/Text";
import { responsivePixels } from "../../../globalStyles";

import { styles } from "./PolarChartStyles";

const PolarChart = ({
  fromPoint = 0,
  toPoint = 1,
  // 1 - 999...
  stroke = 3,
  labelFontSize = 16,
  chartDiameter,
  hasInnerShapes,
  polarData
}) => {
  const radius = chartDiameter * 0.5;
  const lineWidth = chartDiameter * 0.01 * `0.${stroke}`;

  const findX = (distance, angle) => {
    return distance * Math.sin(Math.PI * 2 * angle / 360) + distance
  };
  const findY = (distance, angle) => {
    return distance * Math.cos(Math.PI * 2 * angle / 360) + distance
  };

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
        borderColor: 'black',
        borderWidth: lineWidth,
        borderStyle: 'dashed',
        top: '50%',
        left: '50%',
        transform: [
          {translateX: (-diameter) * 0.5},
          {translateY: (-diameter) * 0.5},
        ] 
      }}
    >
    </View>
    )
  };
  return (
    <View
      style={{
        position: 'relative',
        height: chartDiameter,
        width: chartDiameter,
        borderRadius: chartDiameter,
        backgroundColor: 'transparent',
        borderColor: 'black',
        borderWidth: lineWidth,
      }}
    >
      {/* Chart Outline */}
      {/* Slices of PI */}
      {
        hasInnerShapes ?
        Object.keys(polarData).map((item, index) => {
          const angle = (360 / Object.keys(polarData).length) * index; 
          const x = findX(radius, angle);
          const y = findY(radius, angle);
          return ( 
            <View key={item} 
              style={{ 
                transform: [
                  {rotateZ: '180deg'}, 
                  { translateY: -chartDiameter }
                ] 
              }}>
              <View
                style={{
                  height: radius,
                  width: lineWidth,
                  backgroundColor: 'black',
                  position: 'absolute',
                  top: y - radius * 0.5 + lineWidth,
                  left: x - (lineWidth + lineWidth * 0.5),
                  transform: [
                    { rotateZ: `-${angle}deg` },
                    { translateY: (lineWidth * 0.5 - lineWidth) - radius * 0.5},
                  ]
                }}
              >
                {/* Labels */}
                <SubHeadings 
                  style={{
                    fontSize: responsivePixels(labelFontSize),
                    textAlign: 'center',
                    width: responsivePixels(labelFontSize * 5),
                    height: 'auto',
                    position: 'absolute',
                    top: radius + chartDiameter * 0.01,  
                    transform: [ 
                        { rotateZ: angle > 90 && angle < 270 ? `-${360}deg` : `-${180}deg` },
                        { translateX: angle > 90 && angle < 270 ? responsivePixels(-labelFontSize * 5 * 0.5) : responsivePixels(labelFontSize * 5 * 0.5) }
                      ] 
                    }}>
                  {item}
                </SubHeadings>
              </View>
            </View>
          )
        }) :
        null
      }
      {/* Inner Chart Circles */}
      {
        hasInnerShapes ?
        innerCircleObject.map((item) => (
          buildInnerCircles(item.name, item.diameter)
        )) :
        null
      }
      {/* Chart Center */}
      {
        hasInnerShapes ?
        <View 
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            height: chartDiameter * 0.05,
            width: chartDiameter * 0.025,
            borderRadius: chartDiameter * 0.025,
            borderColor: 'black',
            borderWidth: lineWidth,
            backgroundColor: 'lightgrey',
            transform: [
              {translateX: (-chartDiameter * 0.025) * 0.5},
              {translateY: (-chartDiameter * 0.05) * 0.5},
            ] 
          }}
        >
        </View> :
        null
      }
      {/* End Chart Outline */}
    </View>
  )
}

export default PolarChart;