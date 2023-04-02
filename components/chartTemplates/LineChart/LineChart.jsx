import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Svg, Line, Path } from 'react-native-svg';

const LineChart = ({
  chartHeight = 300,
  chartWidth = chartHeight,
  stroke = 3,
  strokeColor = 'black',
  graphBackgroundColor = 'transparent',
  centralLineColor = 'red',
  centralLineDashWidth = 5,
  isCentralLine = false,
  containerStyle,
  coordinates
}) => {
  const [points, setPoints] = useState({});
  const [totalDifferenceY, setTotalDifferenceY] = useState(0);
  const [totalDifferenceX, setTotalDifferenceX] = useState(0);
  const strokeWidth = ((chartHeight + chartWidth) * 0.01) * (`0.${stroke}` * 1)

  const getDifference = (highPoint, lowPoint) => highPoint - lowPoint;
  
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

  const path = coordinates.map((item, index) => {
    const xOne = getXAxis(item.x);
    const yOne = getYAxis(item.y);
    return `
      ${index === 0 ? 'M' : 'L'} ${xOne} ${yOne}`
    })
    .join(' ');

  useEffect(() => {
    getPoints();
  }, [])
  return (
    <View style={[ 
        { height: chartHeight, 
          width: chartWidth, 
          backgroundColor: graphBackgroundColor, 
          position: 'relative'
        },
         containerStyle 
      ]}>
      <Svg 
        height={chartHeight} 
        width={chartWidth} 
        style={
          { transform: [{ rotateY: '180deg' }] }
        }
      >
        {
          !!points && !!totalDifferenceX && !!totalDifferenceY ?
          <Path 
            d={path}
            fill="none" 
            stroke={strokeColor}
            strokeWidth={strokeWidth} 
          /> :
          null
        }
        {
          isCentralLine ?
          <Line
            x1={0}
            y1={chartHeight * 0.5}
            x2={chartWidth}
            y2={chartHeight * 0.5}
            stroke={centralLineColor}
            strokeWidth={strokeWidth}
            strokeDasharray={centralLineDashWidth}
          /> :
          null
        }
      </Svg>

    </View>
  )
}

export default LineChart;
// import React, { useState, useEffect } from 'react';
// import { View, Text } from 'react-native';
// import { Svg, Line, Path } from 'react-native-svg';

// const LineChart = ({
//   chartHeight = 300,
//   chartWidth = chartHeight,
//   stroke = 3,
//   strokeColor = 'black',
//   graphBackgroundColor = 'transparent',
//   centralLineColor = 'red',
//   centralLineDashWidth = 5,
//   isCentralLine = false,
//   containerStyle,
//   coordinates
// }) => {
//   const [points, setPoints] = useState({});
//   const [totalDifferenceY, setTotalDifferenceY] = useState(0);
//   const [totalDifferenceX, setTotalDifferenceX] = useState(0);
//   const strokeWidth = ((chartHeight + chartWidth) * 0.01) * (`0.${stroke}` * 1)

//   const getDifference = (highPoint, lowPoint) => highPoint - lowPoint;
  
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

//   const path = coordinates.map((item, index) => {
//     const xOne = getXAxis(item.x);
//     const yOne = getYAxis(item.y);
//     return `
//       ${index === 0 ? 'M' : 'L'} ${xOne} ${yOne}`
//     })
//     .join(' ');

//   useEffect(() => {
//     getPoints();
//   }, [])

//   useEffect(() => {
//     console.log(`X: ${getXAxis(coordinates[0].x)}`);
//     console.log(`Y: ${getYAxis(coordinates[0].y)}`);
//     console.log(path);
//   }, [points])
//   return (
//     <View style={[ 
//         { height: chartHeight, 
//           width: chartWidth, 
//           backgroundColor: graphBackgroundColor, 
//           transform: [ 
//             {rotateY: '180deg'}, 
//           ],
//           position: 'relative'
//         },
//          containerStyle 
//       ]}>
//       <Svg height={chartHeight} width={chartWidth} style={{ position: 'absolute' }}>
//         {
//           !!points && !!totalDifferenceX && !!totalDifferenceY ?
//           <Path 
//             d={ path }
//             fill="none" 
//             stroke={strokeColor}
//             strokeWidth={strokeWidth} 
//           /> :
//           null
//         }
//         {
//           isCentralLine ?
//           <Line
//             x1={0}
//             y1={chartHeight * 0.5}
//             x2={chartWidth}
//             y2={chartHeight * 0.5}
//             stroke={centralLineColor}
//             strokeWidth={strokeWidth}
//             strokeDasharray={centralLineDashWidth}
//           /> :
//           null
//         }
//       </Svg>

//     </View>
//   )
// }

// export default LineChart;