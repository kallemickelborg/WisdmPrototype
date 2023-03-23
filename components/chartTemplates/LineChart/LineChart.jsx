import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

// Height is required
const LineChart = ({
  chartHeight = 300,
  chartWidth = chartHeight,
  color = 'black',
  stroke,
  currentPrice,
  logoUrl,
  name,
  symbol,
  priceChangePercentage7d,
  coordinates
}) => {
  const [points, setPoints] = useState({});
  const [totalDifferenceY, setTotalDifferenceY] = useState(0);
  const [totalDifferenceX, setTotalDifferenceX] = useState(0);
  const unitSize = 
    stroke === 'large' ? 
    ((chartHeight + chartWidth) * 0.01) * 0.75 : 
      stroke === 'small' ? ((chartHeight + chartWidth) * 0.01) * 0.25 : 
      ((chartHeight + chartWidth) * 0.01) * 0.5;

  const getDifference = (highPoint, lowPoint) => highPoint - lowPoint;

  const getAngle = (y1, y2, x1, x2) => {
    const angle = Math.atan2( getYAxis(y2) - getYAxis(y1), getXAxis(x2) - getXAxis(x1) ) * ( 180 / Math.PI );
    return angle;
  }

  const getDistance = (y1, y2, x1, x2) => {
    const distance = Math.hypot(getXAxis(x2) - getXAxis(x1), getYAxis(y2) - getYAxis(y1));
    return distance;
  }
  
  const getYAxis = ( yValue ) => {
    const percent = getDifference(points.yHigh, yValue) / totalDifferenceY;
    const pointY = percent * chartHeight;
    return pointY;
  }

  const getXAxis = ( xValue ) => {
    const percent = getDifference(points.xHigh, xValue) / totalDifferenceX;
    const pointX = percent * chartWidth;
    return pointX;
  }
  
  const getPoints = () => {
    let xHigh = 0;
    let yHigh = 0;
    let yLow = coordinates[0].y;
    let xLow = coordinates[0].x;
    coordinates.map((item) => {
      item.x > xHigh ? xHigh = item.x : null;
      item.y > yHigh ? yHigh = item.y : null;
      item.x < xLow ? xLow = item.x : null;
      item.y < yLow ? yLow = item.y : null;
    }) 
    setPoints({ xHigh, yHigh, xLow, yLow });
    setTotalDifferenceX(getDifference(xHigh, xLow));
    setTotalDifferenceY(getDifference(yHigh, yLow));
  }

  useEffect(() => {
    getPoints()
  }, [])
  return (
    <View style={{ height: chartHeight, width: chartWidth, position: 'relative' }}>
      {
        !!points && !!totalDifferenceY && !!totalDifferenceX ?
        coordinates.map((item, index) => {
          const distance = coordinates[index + 1] ? getDistance(item.y, coordinates[index + 1].y, item.x, coordinates[index + 1].x) + unitSize / 2 : 0;
          const yMid = coordinates[index + 1] ? (getYAxis(item.y) + getYAxis(coordinates[index + 1].y)) / 2 : 0;
          const xMid = coordinates[index + 1] ? (getXAxis(item.x) + getXAxis(coordinates[index + 1].x)) / 2 : 0;
          const angle = coordinates[index + 1] ? `${-getAngle(item.y, coordinates[index + 1].y, item.x, coordinates[index + 1].x)}deg` : `0deg`;
          return (
            <View
              key={`${item.x}${item.y}`}
            >
              {/* Points */}
              <View 
                style={{ 
                  position: 'absolute', 
                  top: getYAxis(item.y), 
                  right: getXAxis(item.x) - unitSize / 2, 
                  height: unitSize,
                  width: unitSize,
                  borderRadius: 50, 
                  backgroundColor: color,
                }}
              >
              </View>
              {/* Lines */}
              <View
                style={{ 
                  position: 'absolute', 
                  top: yMid, 
                  right: xMid - (distance/2), 
                  height: unitSize,
                  width: distance,
                  borderRadius: 50, 
                  backgroundColor: color,
                  transform: [
                    { rotateZ: angle },
                  ]
                }}
              >
              </View>
            </View>
        )}) :
        null
      }
    </View>
  )
}

export default LineChart;
// import React, { useState, useEffect } from 'react';
// import { View, Text } from 'react-native';

// // Height is required
// const LineChart = ({
//   chartHeight,
//   chartWidth = chartHeight,
//   color,
//   hasBorders,
//   stroke,
//   currentPrice,
//   logoUrl,
//   name,
//   symbol,
//   priceChangePercentage7d,
//   coordinates
// }) => {
//   const [points, setPoints] = useState({});
//   const [totalDifferenceY, setTotalDifferenceY] = useState(0);
//   const [totalDifferenceX, setTotalDifferenceX] = useState(0);
//   const unitSize = 
//     stroke === 'large' ? 
//     ((chartHeight + chartWidth) * 0.01) * 0.75 : 
//       stroke === 'small' ? ((chartHeight + chartWidth) * 0.01) * 0.25 : 
//       ((chartHeight + chartWidth) * 0.01) * 0.5;

//   const getDifference = (highPoint, lowPoint) => highPoint - lowPoint;

//   const getAngle = (y1, y2, x1, x2) => {
//     const angle = Math.atan2( getYAxis(y2) - getYAxis(y1), getXAxis(x2) - getXAxis(x1) ) * ( 180 / Math.PI );
//     return angle;
//   }

//   const getDistance = (y1, y2, x1, x2) => {
//     const distance = Math.hypot(getXAxis(x2) - getXAxis(x1), getYAxis(y2) - getYAxis(y1));
//     return distance;
//   }
  
//   const getYAxis = ( yValue ) => {
//     const percent = getDifference(points.yHigh, yValue) / totalDifferenceY;
//     const pointY = percent * chartHeight;
//     return pointY;
//   }

//   const getXAxis = ( xValue ) => {
//     const percent = getDifference(points.xHigh, xValue) / totalDifferenceX;
//     const pointX = percent * chartWidth;
//     return pointX;
//   }
  
//   const getPoints = () => {
//     let xHigh = 0;
//     let yHigh = 0;
//     let yLow = coordinates[0].y;
//     let xLow = coordinates[0].x;
//     coordinates.map((item) => {
//       item.x > xHigh ? xHigh = item.x : null;
//       item.y > yHigh ? yHigh = item.y : null;
//       item.x < xLow ? xLow = item.x : null;
//       item.y < yLow ? yLow = item.y : null;
//     }) 
//     setPoints({ xHigh, yHigh, xLow, yLow });
//     setTotalDifferenceX(getDifference(xHigh, xLow));
//     setTotalDifferenceY(getDifference(yHigh, yLow));
//   }

//   useEffect(() => {
//     getPoints()
//   }, [])
//   return (
//     <View style={{ height: chartHeight, width: chartWidth, position: 'relative' }}>
//       {
//         !!hasBorders ?
//         <>
//           {/* Border Right */}
//           <View
//             style={{
//               position: 'absolute',
//               height: chartHeight + (unitSize * 2),
//               width: unitSize * 0.5,
//               right: -unitSize,
//               top: -unitSize,
//               backgroundColor: '#D9D9D9',
//             }}
//           >
//           </View>
//           {/* Border Left */}
//           <View
//             style={{
//               position: 'absolute',
//               height: chartHeight + (unitSize * 2),
//               width: unitSize * 0.5,
//               left: -unitSize,
//               top: -unitSize,
//               backgroundColor: '#D9D9D9',
//             }}
//           >
//           </View>
//           {/* Border Bottom */}
//           <View
//             style={{
//               position: 'absolute',
//               height: unitSize * 0.5,
//               width: chartWidth + (unitSize * 2),
//               right: -unitSize,
//               top: chartHeight + unitSize,
//               backgroundColor: '#D9D9D9'
//             }}
//           >
//           </View>
//           {/* Border Top */}
//           <View
//             style={{
//               position: 'absolute',
//               height: unitSize * 0.5,
//               width: chartWidth + (unitSize * 2),
//               right: -unitSize,
//               top: -unitSize,
//               backgroundColor: '#D9D9D9'
//             }}
//           >
//           </View>
//         </> :
//         null
//       }
//       {
//         !!points && !!totalDifferenceY && !!totalDifferenceX ?
//         coordinates.map((item, index) => {
//           const distance = coordinates[index + 1] ? getDistance(item.y, coordinates[index + 1].y, item.x, coordinates[index + 1].x) + unitSize / 2 : 0;
//           const yMid = coordinates[index + 1] ? (getYAxis(item.y) + getYAxis(coordinates[index + 1].y)) / 2 : 0;
//           const xMid = coordinates[index + 1] ? (getXAxis(item.x) + getXAxis(coordinates[index + 1].x)) / 2 : 0;
//           const angle = coordinates[index + 1] ? `${-getAngle(item.y, coordinates[index + 1].y, item.x, coordinates[index + 1].x)}deg` : `0deg`;
//           const timeObject = new Date(item.x * 1000);
//           // const time = `${timeObject.getHours() + 1} ${timeObject.getDate()} ${timeObject.getMonth() + 1} ${timeObject.getFullYear()}`;
//           const time = `${timeObject.getDate()}`;
//           return (
//             <View
//               key={`${item.x}${item.y}`}
//             >
//               {
//                 (index + 1) % 10 === 0 && !!hasBorders ?
//                 <>
//                   <View
//                     style={{
//                       position: 'absolute',
//                       height: chartHeight + (unitSize * 2),
//                       width: unitSize * 0.5,
//                       right: getXAxis(item.x) - unitSize / 2,
//                       top: -unitSize,
//                       backgroundColor: '#D9D9D9',
//                     }}
//                   >
//                   </View>
//                   <View
//                     style={{
//                       position: 'absolute',
//                       right: getXAxis(item.x) - unitSize / 2,
//                       top: chartHeight + (unitSize * 2) + index,
//                       backgroundColor: '#D9D9D9',
//                     }}
//                   >
//                     <Text>{time}</Text>
//                   </View>
//                 </> :
//                 null
//               }
//               {/* Points */}
//               <View 
//                 style={{ 
//                   position: 'absolute', 
//                   top: getYAxis(item.y), 
//                   right: getXAxis(item.x) - unitSize / 2, 
//                   height: unitSize,
//                   width: unitSize,
//                   borderRadius: 50, 
//                   backgroundColor: color,
//                 }}
//               >
//               </View>
//               {/* Lines */}
//               <View
//                 style={{ 
//                   position: 'absolute', 
//                   top: yMid, 
//                   right: xMid - (distance/2), 
//                   height: unitSize,
//                   width: distance,
//                   borderRadius: 50, 
//                   backgroundColor: color,
//                   transform: [
//                     { rotateZ: angle },
//                   ]
//                 }}
//               >
//               </View>
//             </View>
//         )}) :
//         null
//       }
//     </View>
//   )
// }

// export default LineChart;