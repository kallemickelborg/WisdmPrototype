import * as React from "react";
import { useRef, useState, useEffect } from "react";
import { ActivityIndicator, FlatList } from "react-native";

import MainContainer from '../../../containers/MainContainer/MainContainer'

import { getMarketData } from "../../../../services/contentServices/cryptoService";

import TickerButton from "../../../buttonComponents/TickerButton/TickerButton";

import { styles } from "./WatchListStyles";

export default function Watchlist() {
  const isLoaded = useRef(false);
  const [data, setData] = useState();

  useEffect(() => {
    if (!isLoaded.current) {
      fetchMarketData();
      isLoaded.current = true;
    }
    return () => isLoaded.current = false;
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data])

  const fetchMarketData = async () => {
    const marketData = await getMarketData();
    setData(marketData);
  };

  return (
    <MainContainer style={{ marginBottom: 100 }}>
      {
        !!data ?
        <FlatList
        style={{ width: '100%' }}
        keyExtractor={(item) => item.id}
        data={data}
        renderItem={({ item }) => (
          <TickerButton
            name={item.name}
            symbol={item.symbol}
            currentPrice={item.current_price}
            priceChangePercentage7d={
              item.price_change_percentage_7d_in_currency
            }
            logoUrl={item.image}
            sparkline={item.sparkline_in_7d.price}
          />
        )}
      /> :
      <ActivityIndicator size="large"/>
      }
    </MainContainer>
  );
}