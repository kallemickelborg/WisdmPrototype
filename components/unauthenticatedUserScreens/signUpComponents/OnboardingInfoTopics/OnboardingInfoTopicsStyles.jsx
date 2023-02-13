import { StyleSheet } from "react-native";

import { spacing, radius, responsivePixels } from "../../../../globalStyles";


export const styles = StyleSheet.create({
  centerText: {
    textAlign: 'center'
  },
  topicContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingTop: spacing.large
  },
  outerTopicButton: {
    position: 'relative', 
    width: '43%', 
    marginTop: responsivePixels(50), 
    paddingTop: spacing.large
  },
  iconContainer: {
    width: responsivePixels(50), 
    height: responsivePixels(50), 
    position: 'absolute', 
    bottom: responsivePixels(50), 
    borderRadius: radius.extraSmall
  },
  topicIcon: {
    width: '100%', 
    height: '100%'
  },
})
// import { StyleSheet } from "react-native";

// import { colors, spacing, radius, responsivePixels } from "../../../../globalStyles";


// export const styles = StyleSheet.create({
//   innerSelected: {
//     backgroundColor: colors.buttonPrimary,
//   },
//   centerText: {
//     textAlign: 'center'
//   },
//   topicContainer: {
//     flex: 1,
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//     paddingTop: spacing.large
//   },
//   outerTopicButton: {
//     position: 'relative', 
//     width: '43%', 
//     marginTop: responsivePixels(50), 
//     paddingTop: spacing.large
//   },
//   iconContainer: {
//     width: responsivePixels(50), 
//     height: responsivePixels(50), 
//     position: 'absolute', 
//     bottom: responsivePixels(50), 
//     backgroundColor: colors.secondary, 
//     borderRadius: radius.extraSmall
//   },
//   topicIcon: {
//     width: '100%', 
//     height: '100%'
//   },
//   addMore: {
//     backgroundColor: colors.primary
//   }
// })