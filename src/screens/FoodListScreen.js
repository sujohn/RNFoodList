import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView, TextInput, Button, FlatList } from 'react-native'
import { ListItem, Divider } from 'react-native-elements';
import { addFood, getFoods } from '../api/FoodApi'

class FoodListScreen extends Component {

    colors = [
        'red', 'black', 'blue', 'green', 'orange', 'yellow', 'purple', 'white', 'brown'
    ]

    state = {
        foodList: [],
        currentFoodItem: null
    }

    onFoodAdded = (food) => {
        console.log("Food added.");
        console.log(food);
    }

    onFoodsRetrieved = (foodList) => {
        console.log(foodList);
        this.setState(prevState => ({
            foodList: prevState.foodList = foodList
        }));
    }

    componentDidMount() {
        getFoods(this.onFoodsRetrieved);
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.row}>
                    <TextInput
                        style={styles.input}
                        placeholder="Add Food"
                        value={this.state.currentFoodItem}
                        onChangeText={(text) => this.setState(prevState => ({
                            currentFoodItem: prevState.currentFoodItem = text
                        }))}
                    />
                    <Button
                        title="Submit"
                        style={styles.button}
                        onPress={() => {
                            addFood({
                                name: this.state.currentFoodItem,
                                color: this.colors[Math.floor(Math.random() * this.colors.length)]
                            }),
                            this.onFoodAdded
                        }}
                    />
                </View>
                <FlatList
                    data={this.state.foodList}
                    ItemSeparatorComponent={() => <Divider style={styles.divider}/>}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={(item) => {
                        console.log(item);
                        return (
                            <ListItem
                                title={item.name}
                                subtitle={item.color}
                                onPress={() => {}}
                            />
                        );
                    }}
                />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    row: {
        
    },
    input: {
        
    },
    button: {

    },
    divider: {
        
    }
});

export default FoodListScreen;
