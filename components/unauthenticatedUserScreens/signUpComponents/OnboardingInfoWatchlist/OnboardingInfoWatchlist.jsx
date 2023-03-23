import React, { useEffect, useState } from 'react';
import { ScrollView, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';

import InnerContainer from '../../../containers/InnerContainer/InnerContainer';
import NavigationButtons from '../../NavigationButtons/NavigationButtons';
import TickerButton from '../../../buttonComponents/TickerButton/TickerButton';
import CustomButton from '../../../buttonComponents/CustomButton/CustomButton';

import { BodyOne, BodyThree, FinePrint } from '../../../Text/Text';

import { getMarketData } from '../../../../services/contentServices/cryptoService';

import { styles } from './OnboardingWatchlistStyles';
import { colorObject } from '../../../../redux/reducers/colorSlice';

const OnboardingInfoWatchlist = ({ setProgress }) => {
  const [ tickerButtonData, setTickerButtonData ] = useState();
  const [ selectedTopicsArray, setSelectedTopicsArray ] = useState([]);
  const [ seeMore, setSeeMore ] = useState(false);

  const colors = useSelector(colorObject);

  useEffect(() => {
    fetchTickerButtonData()
  }, [])
  const fetchTickerButtonData = async () => {
    const marketData = await getMarketData();
    setTickerButtonData(marketData);
  };

  const onPressTopic = (name) => {
    if (selectedTopicsArray.includes(name)) {
      const filteredArray = selectedTopicsArray.filter((item) => {
        if (item !== name) {
          return item
        }
      })
      setSelectedTopicsArray(filteredArray);
    } else {
      setSelectedTopicsArray(prevState => [...prevState, name]);
    }
  }

  const isSelectedFunction = (value, array) => array.includes(value) ? true : false; 
  return (
    <>
      <InnerContainer>
        <BodyOne style={{ textAlign: 'center' }}>
          {`What stocks are you interested in keeping up with?`}
        </BodyOne>
        <BodyThree style={[ styles.selectThree ]}>
          {`(Select at least three)`}
        </BodyThree>
        <ScrollView>
          {
            !!tickerButtonData ?
            tickerButtonData.map((item, index) => (
              <TickerButton
                key={`${item.id}${index}`}
                name={item.name}
                symbol={item.symbol}
                currentPrice={item.current_price}
                priceChangePercentage={
                  item.price_change_percentage_7d_in_currency
                }
                logoUrl={item.image}
                sparkline={item.sparkline_in_7d.price}
                onPress={() => onPressTopic(item.name)}
                isSelected={isSelectedFunction(item.name, selectedTopicsArray)}
                wrapperStyle={{
                  display: !seeMore && index > 5 ? 'none' : !!seeMore ? 'flex' : null,
                }}
              />
            )) :
            <ActivityIndicator size="large"/>            
          }
          {
            !!tickerButtonData ?
            <CustomButton 
              onPress={() => setSeeMore(!!seeMore ? false : true)} 
              style={{ backgroundColor: colors.primary }}
            >
              <FinePrint>{!!seeMore ? `See Less` : `See more`}</FinePrint>
            </CustomButton> :
            null
          }
        </ScrollView>
      </InnerContainer>
      <NavigationButtons
        topButtonTitle="Next"
        bottomButtonTitle="Skip"
        topButtonOnPress={() => setProgress(true)}
        // bottomButtonOnPress={}
      />
    </>
  )
}

export default OnboardingInfoWatchlist;