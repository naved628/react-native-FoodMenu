import { View, FlatList, StyleSheet } from "react-native";
import MealItems from "./MealItems";

function MealsList({items}){
    function renderMealItem(itemData){
        const item = itemData.item;

        const mealItemProps = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            affordability: item.affordability,
            complexity: item.complexity,
            duration: item.duration
        }
        return <MealItems 
                    {...mealItemProps}
                />
    }

    return (
        <View style={styles.container}>
            <FlatList 
                data={items}
                keyExtractor={(item)=> item.id}
                renderItem={renderMealItem}
            />
        </View>
    )
}

export default MealsList;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 16
    }
})