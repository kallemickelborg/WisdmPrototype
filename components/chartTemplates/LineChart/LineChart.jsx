import React, { useState, useEffect } from 'react';
import { View } from 'react-native';

// Height is required
const LineChart = ({
  height,
  width = height,
  color,
  currentPrice,
  logoUrl,
  name,
  symbol,
  priceChangePercentage7d,
  sparkline
}) => {
  const [points, setPoints] = useState({});
  const [totalDifferenceY, setTotalDifferenceY] = useState(0);
  const [totalDifferenceX, setTotalDifferenceX] = useState(0);
  const unitSize = ((height + width) * 0.01) * 0.5;

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
    const pointY = percent * height;
    return pointY;
  }

  const getXAxis = ( xValue ) => {
    const percent = getDifference(points.xHigh, xValue) / totalDifferenceX;
    const pointX = percent * width;
    return pointX;
  }
  const getPoints = () => {
    let xHigh = 0;
    let yHigh = 0;
    let yLow = sparkline[0].y;
    let xLow = sparkline[0].x;
    sparkline.map((item) => {
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
    <View style={{ height: height, width: width, position: 'relative' }}>
      {
        !!points && !!totalDifferenceY && !!totalDifferenceX ?
        sparkline.map((item, index) => {
          const distance = sparkline[index + 1] ? getDistance(item.y, sparkline[index + 1].y, item.x, sparkline[index + 1].x) + unitSize / 2 : 0;
          const yMid = sparkline[index + 1] ? (getYAxis(item.y) + getYAxis(sparkline[index + 1].y)) / 2 : 0;
          const xMid = sparkline[index + 1] ? (getXAxis(item.x) + getXAxis(sparkline[index + 1].x)) / 2 : 0;
          const angle = sparkline[index + 1] ? `${-getAngle(item.y, sparkline[index + 1].y, item.x, sparkline[index + 1].x)}deg` : `0deg`;
          return (
            <View
              key={`${item.x}${item.y}`}
            >
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