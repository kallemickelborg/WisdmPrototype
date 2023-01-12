import * as React from "react";
import { useRef, useMemo, useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, SafeAreaView } from "react-native";

import { getMarketData } from "../../../../services/contentServices/cryptoService";

import ListItem from "../../../ListItem/ListItem";

import { styles } from "./WatchListStyles";

export default function Watchlist({ navigation }) {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchMarketData = async () => {
      const marketData = await getMarketData();
      setData(marketData);
    };
    fetchMarketData();
    return () => fetchMarketData();
  }, []);

  useEffect(() => {
    // console.log(data);
  }, [data])

  return (
    <View style={styles.container}>
      {
        !!data ?
        <FlatList
        keyExtractor={(item) => item.id}
        data={data}
        renderItem={({ item }) => (
          <ListItem
            name={item.name}
            symbol={item.symbol}
            currentPrice={item.current_price}
            priceChangePercentage7d={
              item.price_change_percentage_7d_in_currency
            }
            logoUrl={item.image}
          />
        )}
      /> :
      <Text>Loading...</Text>
      }
    </View>
  );
}

// import * as React from "react";
// import { useRef, useMemo, useState, useEffect } from "react";
// import { View, Text, StyleSheet, FlatList, SafeAreaView } from "react-native";

// import { getMarketData } from "../../../../services/contentServices/cryptoService";

// import ListItem from "../../../ListItem/ListItem";
// import Chart from "../../../chartTemplates/Chart/Chart";

// import {
//   BottomSheetModal,
//   BottomSheetModalProvider,
// } from "@gorhom/bottom-sheet";

// import { styles } from "./WatchListStyles";

// export default function Watchlist({ navigation }) {
//   const [data, setData] = useState([]);
//   const [selectedCoinData, setSelectedCoinData] = useState(null);

//   useEffect(() => {
//     const fetchMarketData = async () => {
//       const marketData = await getMarketData();
//       setData(marketData);
//     };
//     fetchMarketData();
//   }, []);

//   const bottomSheetModalRef = useRef(null);

//   const snapPoints = useMemo(() => ["75%"], []);

//   const openModal = (item) => {
//     setSelectedCoinData(item);
//     bottomSheetModalRef.current.present();
//   };

//   return (
//     <BottomSheetModalProvider>
//       <View style={styles.container}>
//         <FlatList
//           keyExtractor={(item) => item.id}
//           data={data}
//           renderItem={({ item }) => (
//             <ListItem
//               name={item.name}
//               symbol={item.symbol}
//               currentPrice={item.current_price}
//               priceChangePercentage7d={
//                 item.price_change_percentage_7d_in_currency
//               }
//               logoUrl={item.image}
//               onPress={() => openModal(item)}
//             />
//           )}
//         />
//       </View>

//       <BottomSheetModal
//         ref={bottomSheetModalRef}
//         index={0}
//         snapPoints={snapPoints}
//         style={styles.bottomSheet}
//         backgroundColor="#333"
//       >
//         {selectedCoinData ? (
//           <Chart
//             currentPrice={selectedCoinData?.current_price}
//             logoUrl={selectedCoinData?.image}
//             name={selectedCoinData?.name}
//             symbol={selectedCoinData?.symbol}
//             priceChangePercentage7d={
//               selectedCoinData?.price_change_percentage_7d_in_currency
//             }
//             sparkline={selectedCoinData?.sparkline_in_7d?.price}
//           />
//         ) : null}
//       </BottomSheetModal>
//     </BottomSheetModalProvider>
//   );
// }
