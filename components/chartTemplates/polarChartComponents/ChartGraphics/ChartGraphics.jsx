import React from 'react';
import { View } from 'react-native';
import Svg, { Polygon } from 'react-native-svg';

import { findX, findY } from '../../functions';

const ChartGraphics = ({
  toPoint,
  dataObject,
  graphIndex,
  chartDiameter,
  radius,
  lineWidth
}) => {
  const getDataPoints = (object, index, radius) => {
    const keyValue = Object.values(object.influencerScore)[index];
    const percentOfRadius = keyValue / toPoint;
    const distanceFromCenter = radius * percentOfRadius;
    const angle = (360 / Object.keys(object.influencerScore).length) * index;
    const y = findY(distanceFromCenter, angle) + radius - distanceFromCenter;
    const x = findX(distanceFromCenter, angle) + radius - distanceFromCenter;
    return {
      distanceFromCenter: distanceFromCenter,
      angle: angle,
      y: y,
      x: x
    }
  }
  return (
    <View
      style={{
        position: 'absolute',
      }}
    >
      {/* Points */}
      {
        Object.keys(dataObject.influencerScore).map((item, index) => {
          const currentValues = getDataPoints(dataObject, index, radius);
          return (
            <View
              key={`${dataObject.scoreInfo.Name.replace(' ', '')}${graphIndex}${item}`}
            >
              <View 
                style={{
                  display: 'none', 
                  position: 'absolute',
                  top: currentValues.y,
                  left: currentValues.x,
                  width: lineWidth,
                  height: lineWidth,
                  backgroundColor: 'red',
                }}
              >
              </View>
            </View>
          )
        })
      }
      <Svg height={chartDiameter} width={chartDiameter}>
        <Polygon
        stroke={dataObject.scoreInfo.BorderColor}
        strokeWidth={lineWidth}
        fill={dataObject.scoreInfo.BorderColor}
        fillOpacity={0.3}
        points={`${Object.keys(dataObject.influencerScore).map((item, index) => {
          const currentValues = getDataPoints(dataObject, index, radius);
          return `${ currentValues.x.toFixed(4) } ${ currentValues.y.toFixed(4) }`
        })}`}
        />
      </Svg>
    </View>
  )
}

export default ChartGraphics;