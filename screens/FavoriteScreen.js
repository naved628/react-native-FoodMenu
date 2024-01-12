import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";
import { FavoriteContext } from "../store/context/favorites-context";

function FavoriteScreen(){
    // const favoriteMealCtx = useContext(FavoriteContext);
    const favoriteMealIds = useSelector((state)=> state.favoriteMeals.ids);

    // const favoriteMeals = MEALS.filter((meal)=>
    //     favoriteMealCtx.ids.includes(meal.id)
    // )

    const favoriteMeals = MEALS.filter((meal)=>
        favoriteMealIds.includes(meal.id)
    )

    if(favoriteMeals.length === 0){
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.text}>You have no favorite meals yet.</Text>
            </View>
        )
    }
    return <MealsList items={favoriteMeals}/>
}

export default FavoriteScreen;

const styles= StyleSheet.create({
    rootContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontSize:18,
        fontWeight:'bold',
        color:'white'
    }
})