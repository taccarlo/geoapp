### GEOAPP IN REACT NATIVE 

In __tests__ is present a test section using jest.    

### package.json content

##reinstalling libraries:

*BEFORE*

```
brew update
if npm -v return unknow -> brew install node
```
*DEPENDENCIES*

the dependencies of an helloworld proj and add:
##change view navigator dependencies
```
npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
``` 
dependencies for navigation  
```
npm install @react-navigation/stack
```
dependencies for bottom navigation:    
```
npm install @react-navigation/bottom-tabs
```
dependencies for maps:    
```
npm install react-native-maps
```

*AFTER*
remove package lock
remove node modules
npm install

### run the project
run in the project directory
```
npm install
npx react-native run-android
```
Link to official page [REACTNATIVE/environment-setup](https://reactnative.dev/docs/environment-setup).