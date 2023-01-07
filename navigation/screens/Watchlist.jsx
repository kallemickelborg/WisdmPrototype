import * as React from "react";
import { useRef, useMemo, useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, SafeAreaView } from "react-native";

import { getMarketData } from "../../services/cryptoService";

import ListItem from "../../components/ListItem";
import Chart from "../../components/Chart";

import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

export default function Watchlist({ navigation }) {
  const [data, setData] = useState([]);
  const [selectedCoinData, setSelectedCoinData] = useState(null);

  useEffect(() => {
    const fetchMarketData = async () => {
      const marketData = await getMarketData();
      setData(marketData);
    };
    fetchMarketData();
  }, []);

  const bottomSheetModalRef = useRef(null);

  const snapPoints = useMemo(() => ["75%"], []);

  const openModal = (item) => {
    setSelectedCoinData(item);
    bottomSheetModalRef.current.present();
  };

  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
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
              onPress={() => openModal(item)}
            />
          )}
        />
      </View>

      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        style={styles.bottomSheet}
        backgroundColor="#333"
      >
        {selectedCoinData ? (
          <Chart
            currentPrice={selectedCoinData?.current_price}
            logoUrl={selectedCoinData?.image}
            name={selectedCoinData?.name}
            symbol={selectedCoinData?.symbol}
            priceChangePercentage7d={
              selectedCoinData?.price_change_percentage_7d_in_currency
            }
            sparkline={selectedCoinData?.sparkline_in_7d?.price}
          />
        ) : null}
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundcolor: "white",
    flex: 1,
  },
  largeTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  titleWrapper: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  divider: {
    backgroundColor: "lightgray",
    marginHorizontal: 16,
    marginTop: 16,
    height: 1,
  },
  contentContainer: {
    padding: 16,
  },
  bottomSheet: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
