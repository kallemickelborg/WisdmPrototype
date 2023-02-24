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
  console.log(dataObject);
  const getDataPoints = (object, index, radius) => {
    const keyValue = Object.values(object.influencerScore)[index];
    const percentOfRadius = keyValue / toPoint;
    const distanceFromCenter = radius * percentOfRadius;
    const angle = (360 / Object.keys(object.influencerScore).length) * index;
    const y = findY(distanceFromCenter, angle) + radius - distanceFromCenter - lineWidth * 0.5;
    const x = findX(distanceFromCenter, angle) + radius - distanceFromCenter - lineWidth * 0.5;
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
      {
        Object.keys(dataObject.influencerScore).map((item, index) => {
          const currentValues = getDataPoints(dataObject, index, radius);
          return (
            <View
              key={`${dataObject.scoreInfo.Name.replace(' ', '')}${graphIndex}${item}`}
            >
              {/* Points */}
              <View 
                style={{
                  display: 'none', 
                  position: 'absolute',
                  top: currentValues.y,
                  left: currentValues.x,
                  width: lineWidth,
                  height: lineWidth,
                  backgroundColor: 'transparent',
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

// import React from 'react';
// import { View, Text } from 'react-native';

// import { findX, findY } from '../../functions';

// const ChartGraphics = ({
//   fromPoint,
//   toPoint,
//   dataObject,
//   graphIndex,
//   chartDiameter,
//   radius,
//   lineWidth
// }) => {
//   const getDataPoints = (object, index, radius) => {
//     const keyValue = Object.values(object.influencerScore)[index];
//     const percentOfRadius = keyValue / toPoint;
//     const distanceFromCenter = radius * percentOfRadius;
//     const angle = (360 / Object.keys(object.influencerScore).length) * index;
//     const y = findY(distanceFromCenter, angle) + radius - distanceFromCenter - lineWidth;
//     const x = findX(distanceFromCenter, angle) + radius - distanceFromCenter - lineWidth;
//     return {
//       distanceFromCenter: distanceFromCenter,
//       angle: angle,
//       y: y,
//       x: x
//     }
//   }

//   const getAngle = (y1, y2, x1, x2) => {
//     const angle = Math.atan2( y2 - y1, x2 - x1 ) * ( 180 / Math.PI ) + 90;
//     return angle;
//   }
  
//   const getDistance = (y1, y2, x1, x2) => {
//     const distance = Math.hypot(x2 - x1, y2 - y1);
//     return distance;
//   }
//   return (
//     <View
//       style={{
//         position: 'absolute',
//       }}
//     >
//       {
//         Object.keys(dataObject.influencerScore).map((item, index) => {
//           const currentValues = getDataPoints(dataObject, index, radius);
//           const nextValues = getDataPoints(dataObject, index + 1, radius);
//           const firstValues = getDataPoints(dataObject, 0, radius);

//           const yMid = nextValues.y ? (currentValues.y + nextValues.y) / 2 : (currentValues.y + firstValues.y) / 2;
//           const xMid = nextValues.y ? (currentValues.x + nextValues.x) / 2 : (currentValues.x + firstValues.x) / 2;

//           const distanceToNextPoint = 
//             !!nextValues.y ? 
//             getDistance(currentValues.y, nextValues.y, currentValues.x, nextValues.x) : 
//             getDistance(currentValues.y, firstValues.y, currentValues.x, firstValues.x);
//           const angleToNextPoint = 
//             !!nextValues.y ? 
//             getAngle(currentValues.y, nextValues.y, currentValues.x, nextValues.x) : 
//             getAngle(currentValues.y, firstValues.y, currentValues.x, firstValues.x);
//           return (
//             <View
//               key={`${dataObject.scoreInfo.Name.replace(' ', '')}${graphIndex}${item}`}
//             >
//               {/* Points */}
//               <View 
//                 style={{ 
//                   position: 'absolute',
//                   top: currentValues.y,
//                   left: currentValues.x,
//                   width: lineWidth,
//                   height: lineWidth,
//                   backgroundColor: 'transparent',
//                 }}
//               >
//               </View>
//               {/* Lines */}
//               <View 
//                 style={{
//                   position: 'absolute',
//                   top: yMid - distanceToNextPoint * 0.5,
//                   left: xMid,
//                   width: lineWidth,
//                   height: distanceToNextPoint + lineWidth,
//                   borderRadius: lineWidth,
//                   backgroundColor: dataObject.scoreInfo.BorderColor ? dataObject.scoreInfo.BorderColor : 'black',
//                   transform: [
//                     { rotateZ: `${angleToNextPoint}deg` },
//                   ]
//                 }}
//               >
//                 {/* Triangles */}
//                 <View
//                   style={{
//                     // display: item !== 'Timeliness' ? 'none' : 'block',
//                     display: 'none',
//                     position: 'absolute',
//                     width: 0,
//                     height: 0,
//                     borderTopColor: 'red',
//                     borderEndColor: 'red',
//                     borderBottomColor: 'black',
//                     borderStartColor: 'red',
//                     borderTopWidth: 0,
//                     borderEndWidth: nextValues.y ? nextValues.distanceFromCenter : firstValues.distanceFromCenter,
//                     borderBottomWidth: distanceToNextPoint + lineWidth,
//                     borderStartWidth: currentValues.distanceFromCenter,
//                     // borderTopColor: 'transparent',
//                     // borderEndColor: 'transparent',
//                     // borderBottomColor: 'transparent',
//                     // borderStartColor: dataObject.scoreInfo.BorderColor ? dataObject.scoreInfo.BorderColor : 'black',
//                     opacity: 0.5,
//                     transform: [
//                     ]
//                   }}
//                 >
//                 </View>
//               </View>
//             </View>
//           )
//         })
//       }
//     </View>
//   )
// }

// export default ChartGraphics;