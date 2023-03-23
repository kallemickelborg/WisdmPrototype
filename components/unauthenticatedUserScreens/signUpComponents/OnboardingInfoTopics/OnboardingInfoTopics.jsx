import React, { useState } from 'react';
import { ScrollView, View, Image } from 'react-native';
import { useSelector } from 'react-redux';

import InnerContainer from '../../../containers/InnerContainer/InnerContainer';
import CustomButton from '../../../buttonComponents/CustomButton/CustomButton';
import NavigationButtons from '../../NavigationButtons/NavigationButtons';

import { BodyOne, BodyThree, FinePrint } from '../../../Text/Text';

import { styles } from './OnboardingInfoTopicsStyles';
import { colorObject } from '../../../../redux/reducers/colorSlice';

import { makeTitleIntoKey } from '../../../../functions/manipulateStrings';

const INIT_TOPICS_ARRAY = [
  { name: 'Technology', icon: require('../../../../assets/adaptive-icon.png') },
  { name: 'Consumer Goods', icon: require('../../../../assets/adaptive-icon.png') },
  { name: 'Healthcare', icon: require('../../../../assets/adaptive-icon.png') },
  { name: 'Environment', icon: require('../../../../assets/adaptive-icon.png') },
  { name: 'Energy', icon: require('../../../../assets/adaptive-icon.png') },
  { name: 'Automotive', icon: require('../../../../assets/adaptive-icon.png') },
  { name: 'Pharma', icon: require('../../../../assets/adaptive-icon.png') },
  { name: 'Real Estate', icon: require('../../../../assets/adaptive-icon.png') },
  { name: 'Science', icon: require('../../../../assets/adaptive-icon.png') },
  { name: 'Fashion', icon: require('../../../../assets/adaptive-icon.png') },
]

const OnboardingInfoTopics = ({ setProgress }) => {
  const [ topicsArray, setTopicsArray ] = useState(INIT_TOPICS_ARRAY);
  const [ selectedTopicsArray, setSelectedTopicsArray ] = useState([]);
  const [ addMore, setAddMore ] = useState(false);

  const colors = useSelector(colorObject);

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
      <ScrollView>
        <InnerContainer>
          <BodyOne style={[ styles.centerText ]}>
            {`What are you interested in learning on Wisdm?`}
          </BodyOne>
          <BodyThree style={[ styles.centerText ]}>
            {`(Select at least one)`}
          </BodyThree>
          <View style={[ styles.topicContainer ]}>
            {
              topicsArray.map((item, index) => (
                <CustomButton
                  key={makeTitleIntoKey(item.name)}
                  style={[ 
                    styles.outerTopicButton,
                    {
                      display: !addMore && index < 8 ? 'flex' : !!addMore ? 'flex' : 'none'
                    }
                  ]}
                  isSelected={isSelectedFunction(item.name, selectedTopicsArray)}
                  onPress={() => onPressTopic(item.name)}
                >
                  <BodyThree>{item.name}</BodyThree>
                  <View 
                    style={[ 
                      styles.iconContainer,
                      { backgroundColor: colors.secondary }, 
                      isSelectedFunction(item.name, selectedTopicsArray) ? { backgroundColor: colors.buttonPrimary } : null 
                    ]}
                    onPress={() => onPressTopic(item.name)}
                  >
                    <Image source={item.icon} style={[ styles.topicIcon ]}/>
                  </View>
                </CustomButton>
              ))
            }
          </View>
          <CustomButton 
            style={[ { backgroundColor: colors.primary } ]}
            onPress={() => setAddMore(!!addMore ? false : true)}
          >
            <FinePrint>{!!addMore ? `Add Less` : `Add More`}</FinePrint>
          </CustomButton>
        </InnerContainer>
      </ScrollView>
      <NavigationButtons
        topButtonTitle="Next"
        bottomButtonTitle="Skip"
        topButtonOnPress={() => setProgress(true)}
        // bottomButtonOnPress={}
      />
    </>
  )
}

export default OnboardingInfoTopics;
// import React, { useState } from 'react';
// import { ScrollView, View, Image } from 'react-native';

// import InnerContainer from '../../../containers/InnerContainer/InnerContainer';
// import CustomButton from '../../../buttonComponents/CustomButton/CustomButton';
// import NavigationButtons from '../../NavigationButtons/NavigationButtons';

// import { BodyOne, BodyThree, FinePrint } from '../../../Text/Text';

// import { styles } from './OnboardingInfoTopicsStyles';

// import { makeTitleIntoKey } from '../../../../functions/manipulateStrings';

// const INIT_TOPICS_ARRAY = [
//   { name: 'Investing Strategies', icon: require('../../../../assets/adaptive-icon.png') },
//   { name: 'Technical Analysis', icon: require('../../../../assets/adaptive-icon.png') },
//   { name: 'Day Training', icon: require('../../../../assets/adaptive-icon.png') },
//   { name: 'Long-Term Investment', icon: require('../../../../assets/adaptive-icon.png') },
//   { name: 'Market Context', icon: require('../../../../assets/adaptive-icon.png') },
//   { name: 'Tax Policies', icon: require('../../../../assets/adaptive-icon.png') },
//   { name: 'Retirement Goals', icon: require('../../../../assets/adaptive-icon.png') },
//   { name: 'Budgeting', icon: require('../../../../assets/adaptive-icon.png') },
// ]

// const OnboardingInfoTopics = ({ setProgress }) => {
//   const [ topicsArray, setTopicsArray ] = useState(INIT_TOPICS_ARRAY);
//   const [ selectedTopicsArray, setSelectedTopicsArray ] = useState([]);

//   const onPressTopic = (name) => {
//     if (selectedTopicsArray.includes(name)) {
//       const filteredArray = selectedTopicsArray.filter((item) => {
//         if (item !== name) {
//           return item
//         }
//       })
//       setSelectedTopicsArray(filteredArray);
//     } else {
//       setSelectedTopicsArray(prevState => [...prevState, name]);
//     }
//   }

//   const isSelectedFunction = (value, array) => array.includes(value) ? true : false; 
//   return (
//     <>
//       <ScrollView>
//         <InnerContainer>
//           <BodyOne style={[ styles.centerText ]}>
//             {`What are you interested in learning on Wisdm?`}
//           </BodyOne>
//           <BodyThree style={[ styles.centerText ]}>
//             {`(Select at least one)`}
//           </BodyThree>
//           <View style={[ styles.topicContainer ]}>
//             {
//               topicsArray.map((item) => (
//                 <CustomButton
//                   key={makeTitleIntoKey(item.name)}
//                   style={[ styles.outerTopicButton ]}
//                   isSelected={isSelectedFunction(item.name, selectedTopicsArray)}
//                   onPress={() => onPressTopic(item.name)}
//                 >
//                   <BodyThree>{item.name}</BodyThree>
//                   <View 
//                     style={[ 
//                       styles.iconContainer, 
//                       isSelectedFunction(item.name, selectedTopicsArray) ? styles.innerSelected : null 
//                     ]}
//                     onPress={() => onPressTopic(item.name)}
//                   >
//                     <Image source={item.icon} style={[ styles.topicIcon ]}/>
//                   </View>
//                 </CustomButton>
//               ))
//             }
//           </View>
//           <CustomButton style={[ styles.addMore ]}>
//             <FinePrint>{`Add More`}</FinePrint>
//           </CustomButton>
//         </InnerContainer>
//       </ScrollView>
//       <NavigationButtons
//         topButtonTitle="Next"
//         bottomButtonTitle="Skip"
//         topButtonOnPress={() => setProgress(true)}
//         // bottomButtonOnPress={}
//       />
//     </>
//   )
// }

// export default OnboardingInfoTopics;