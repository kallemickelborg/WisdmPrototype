# WisdmPrototype

# State

redux reducers and store can be found at root level: 'redux'
configuration can be found at App.jsx

1. We are using Redux for state management. This does not mean that all state has to be stored in the Redux store. Only use it when it makes sense.
2. Most if not all of the user data will be held in the Redux store.

# Style Guides

1. Please reference the globalStyles.jsx folder at the root of the project for globalStyles. globalStyles contains the following:
   1. dimensions: An object that contains the dimensions of the viewport
   2. responsivePixels: A function that's responsible for the responsive design of the app
   3. colors: READ ME!!! A colors object. These are the current default color values that have been chosen for the app. Please!!! do not import and use the colors from this folder. Instead please pull them from the redux store. For a reference on how to do this you can view OnboardingProgressBar.jsx file located at 'components/unauthenticatedUserScreens/SignUpComponents/OnboardingProgressBar/OnboardingProgressBar.jsx'.
      Because of this all colors need to be directly applied to the Component NOT its StyleSheet.
   4. spacing: A spacing object that contains the general spacing used throughout the app
   5. fonts: An Object containing the fonts for the app. (fonts)
   6. radius: An Object containing the different radius used in the app
   7. fontSizes: A StyleSheet that directly defines the styles of the Custom Text components throughout the app
2. All component styles aside from globalStyles can be found in their respective folders with the name of the component followed by Styles (i.e. componentNameStyles.jsx)
3. Please use the responsivePixels() function located in the globalStyles.jsx folder when creating any custom sizing, spacing, etc...
4. For all Font specifications and Text components please use our selection of Custom Text Components. They are located in the Text folder, and their respective styles are all located under the name fontSizes in the globalStyles.jsx folder
5. When adding a font it must first be downloaded and then added to the root of the project at 'App.jsx' under const [fontsLoaded] = useFonts({'NameOfFont': require('path')})

# Custom Buttons

'components/buttonComponents'

Located under the buttonComponents Folder 'components/buttonComponents/'

1. CustomButton: Props Guide
   1. onPress: calls a callback function onPress
   2. style: overrides the default styles
   3. selectedStyle: overrides the default selected styles
   4. isSelected: if true gives button a selected style look
   5. children: wraps all children
2. TickerButton: Props Guide
   1. name: Name of Company
   2. symbol: Abbreviation of company name
   3. currentPrice: Company price per share
   4. priceChangePercentage: the determined profit or loss of the company by percentage in the given time frame
   5. sparkline: an array of objects with coordinates to be mapped by the linear graph (i.e. [{x: 0, y: 0}, {x: 2, y: 1}])
   6. logoUrl: company logo
   7. onPress: callback onPress TickerButton
   8. isSelected: if true gives selected styles
   9. wrapperStyle: overrides the button wrappers default styles
   10. selectedWrapperStyle: overrides the button wrappers selected default styles

# Charts

'components/chartTemplates'

1. PolarChart: Props Guide

   1. toPoint: defaults to 1. This prop determines the scale on which the graph does it's comparison. For example if you were to pass it 100 then the boundaries of the graph would be defined as 0 - 100. Any data/coordinate that you pass it that exceeds those bounds will fall outside of the graph. i.e. if we use its default value of 1 then our coordinates should look like {influencerScore: { Accuracy: 0.9, Health: 0.1, Relevance: 0.45 }}
      NOT! like {influencerScore: { Accuracy: 90, Health: 10, Relevance: 45 }}
   2. containerStyle: overrides the default containerStyles
   3. stroke: defaults to three: but can take a range from 1 - 999... This increases the width of the graphs lines, and border Radiuses
   4. labelFontSize: defaults to 16. determines the size of font that the associated labels will have
   5. chartDiameter: defaults to 300. determines the Diameter of the circle as well as the height and width of the chart
   6. hasInnerShapes: defaults true. determines if the graph has inner circles
   7. hasDivisionLines: defaults to true. determines if the graph is divided by lines into a pie
   8. chartOutlineLineColor: defaults to black
   9. chartOutlineBackgroundColor: defaults to transparent
   10. chartOutlineCenterColor: defaults to chartOutlineBackgroundColor
   11. chartOutlineLabelColor: defaults to chartOutlineLineColor
   12. IMPORTANT!!! polarData: accepts either a singular object or an array of Objects. i.e. { influencerScore: { keys: 0.1, are: 0.5, the: 0.9, names: 0.3, of: 0.23, labels: .777 }, scoreInfo: { Name: 'Name of Thing Being Graphed', BorderColor: 'Color of Polygon used to graph the data' } } or [{array}, {of}, {objects}, {like}, {the}, {one}, {listed}, {above}]. The data provided here makes the graph.

2. LineChart: Props Guide
   1. chartHeight: defaults to 300. Determines the height of the graph
   2. chartWidth: defaults to chartHeight. Determines the length of the graph
   3. color: defaults to transparent. Determines the color of the Graphing line
   4. stroke: defaults to "medium" but also takes 'large' and 'small' as arguments. This determines the size of the lineHeight
   5. IMPORTANT!!! coordinates: accepts an array of coordinate Objects. i.e. [{x: 3123, y: 3847 }, {x: 3124, y: 2847 }, {x: 3125, y: 5847 }]. These coordinates determine the graph

# Navigation

Most of the applications main Navigation is done with @react-navigation/native and can found under the following directory: 'components/navigationComponents/'

This does not include the navigation Buttons that are used to navigate through the onboarding process. The logic for these can be found at : 'components/unauthenticatedUserScreens/NavigationButtons'

# General Directory Navigation / Where you can Expect to find things

1. All General Reusable Components should be located at the 'components/' level of the project with semantic names.
2. All onboarding and sign in Specific Components should be located under 'components/unauthenticatedUserScreens/'.
3. All authenticated user screens(i.e. Home, Watch, Explore, Profile) should be located under 'components/authenticatedUserScreens/'.

# Functions

1. There is a functions folder located at the root level that should be used only for very general purpose functions.
2. all other function specific folders should be stored under the Component Folder that they hold logic for. Look at 'components/chartTemplates' for an example.
3. IMPORTANT!!! all API specific functions will be stored in a separate folder at the root level called 'services'

# Services

1. The services folder is stored at the root level and will contain the logic for all API calls.
2. There is barely anything here at the moment.

# Dependencies

Please check package.json for a list of all dependencies
