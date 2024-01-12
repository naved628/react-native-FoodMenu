import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer} from '@react-navigation/native';
import {Ionicons} from '@expo/vector-icons'
import { Provider } from 'react-redux';

import CategoriesScreen from './screens/CategoriesScreen';
import FavoriteScreen from './screens/FavoriteScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import { store } from './store/redux/store';
import FavoritesContextProvider from './store/context/favorites-context';


const Stack= createNativeStackNavigator();
const Drawer= createDrawerNavigator();
  
  function DrawerNavigator(){
    return <Drawer.Navigator screenOptions={{
      headerStyle: { backgroundColor: '#351401'},
      headerTintColor:'white',
      sceneContainerStyle:{backgroundColor:'#3f2f25'},
      drawerContentStyle:{ backgroundColor:'#351401'},
      drawerInactiveTintColor: 'white',
      drawerActiveTintColor: '#351401',
      drawerActiveBackgroundColor:"#e4baa1"
   }}>
            <Drawer.Screen name="Categories" component={CategoriesScreen} 
             options={{
              title: "All Categories",
              drawerIcon:({color, size})=>(
                <Ionicons name="list" color={color} size={size} />
              )              
            }}/>
            <Drawer.Screen name="Favorite" component={FavoriteScreen}
              options={{
                drawerIcon:({color, size})=>(
                  <Ionicons name="star" color={color} size={size} />
                )
              }}
            />
          </Drawer.Navigator>
  }
export default function App() {
  
  
  return  <>
            <StatusBar style='light'/>
            {/* <FavoritesContextProvider> */}
            <Provider store={store}>
            <NavigationContainer>
              <Stack.Navigator 
              screenOptions={{
                 headerStyle: { backgroundColor: '#351401'},
                 headerTintColor:'white',
                 contentStyle:{backgroundColor:'#3f2f25'},
              }}>
                <Stack.Screen name="Drawer" component={DrawerNavigator} 
                  options={{
                    headerShown: false
                  }}
                />
                <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
                <Stack.Screen name="MealDetails" component={MealDetailScreen}
                 options={{
                  title: "All about the Meal"
                }} />
              </Stack.Navigator>
            </NavigationContainer>
            </Provider>
            {/* </FavoritesContextProvider> */}
          </>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
