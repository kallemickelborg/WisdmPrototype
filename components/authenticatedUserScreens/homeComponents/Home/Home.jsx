import React from "react";
import { useState, useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";

import MainContainer from '../../../containers/MainContainer/MainContainer';

import StreakGraphicsContainer from "../streakGraphics/StreakGraphicsContainer/StreakGraphicsContainer";
import TopInfluencerButton from "../../../buttonComponents/InfluencerMoverButton/InfluencerMoverButton";

import { BodyThree, MediumHeadings, SmallHeadings } from "../../../Text/Text";
import { responsivePixels, fontSizes } from "../../../../globalStyles";
import SavedMedia from "../SavedMedia/SavedMedia";

import XYObject from '../../../../sample-data.json';
import influencerScores from '../../../../sample-polar-data.json';
const { sparkline_in_7d: xy } = XYObject;
const { influencerScore: score } = influencerScores;

const userData = {
  name: 'Sam',
  streak: 3,
}

const Home = () => {
  return (
    <MainContainer>
      <MediumHeadings>{`Hello, ${userData.name}`}</MediumHeadings>
      <BodyThree style={{ marginTop: -fontSizes.bodyThree.fontSize }}>
        You are on a
        <SmallHeadings>{` ${userData.streak} `}</SmallHeadings>
        day learning streak!
        <MediumHeadings> 🏃</MediumHeadings>
      </BodyThree>
      <StreakGraphicsContainer
        containerStyles={{
          marginVertical: 20,
        }}
        streak={userData.streak}
      />
		<SavedMedia/>
    </MainContainer>
  );
}

export default Home;



// import * as React from "react";
// import { useRef, useState, useEffect } from "react";
// import { View, FlatList, ActivityIndicator } from "react-native";

// import MainContainer from '../../../containers/MainContainer/MainContainer';

// import { getNewsData } from "../../../../services/contentServices/newsService";

// import NewsArticles from "../../../NewsArticles/NewsArticles";
// import StatWrapper from "../../../userStatComponents/StatWrapper/StatWrapper";

// import { styles as globalStyles } from '../../../../globalStyles'

// const Home = () => {
//   const [data, setData] = useState([]);
//   const isLoaded = useRef(false);

//   useEffect(() => {
//     if (!isLoaded.current) {
//       getData();
//       isLoaded.current = true;
//     }
//     return () => isLoaded.current = false;
//   }, []);

//   useEffect(() => {
//     // console.log(data);
//   }, [data])

//   const getData = async () => {
//     const newsData = await getNewsData();
//     setData(newsData);
//   }

//   return (
//     <MainContainer style={globalStyles.screenContainer}>
//       <StatWrapper
//         statArray={[
//           {category: 'totalSessions', number: 17},
//           {category: 'minutes', number: 82},
//           {category: 'largestStreak', number: 15},
//         ]}
//       />
//       {
//         data.length ?
//         <FlatList
//           // keyExtractor={(item) => item.source.replace(' ', '').concat(item.title.replace(' ', ''))}
//           data={data}
//           renderItem={({ item }) => (
//             <NewsArticles
//               title={item.title}
//               source={item.source}
//               summary={item.summary}
//               url={item.url}
//               banner_image={item.banner_image}
//               timestamp={item.timestamp}
//               overall_sentiment_score={item.overall_sentiment_score}
//               overall_sentiment_label={item.overall_sentiment_label}
//               ticker={item.ticker}
//             />
//           )}
//         /> :
//         <ActivityIndicator size="large"/>
//       }
//     </MainContainer>
//   );
// }

// export default Home;