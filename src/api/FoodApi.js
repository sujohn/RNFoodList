import firebase from '../../environment/config';
import 'firebase/firestore';

export async function addFood(food, addComplete) {

    await firebase.firestore()
    .collection('Foods')
    .add({
        name: food.name,
        color: food.color,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then((snapshot) => snapshot.get())
    .then((foodData) => addComplete(foodData.data()))
    .catch((error) => console.log(error));
}

export async function getFoods(foodsRetrieved) {

    console.log("getFoods function called")
    var foodList = [];

    var snapshot = await firebase.firestore()
    .collection('Foods')
    .orderBy('createdAt')
    .get()
    .catch((error) => console.log(error));

    snapshot.forEach((doc) => {
        foodList.push(doc.data());
    });

    foodsRetrieved(foodList);
}