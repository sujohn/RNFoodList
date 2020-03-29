import firebase from '../../environment/config';
import 'firebase/firestore';

export function addFood(food, addComplete) {

    firebase.firestore()
    .collection('Foods')
    .add({
        name: food.name,
        color: food.color,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then((data) => addComplete(data))
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

    console.log(snapshot)
    snapshot.forEach((doc) => {
        foodList.push(doc.data());
    });

    foodsRetrieved(foodList);
}