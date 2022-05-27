//decaring and defining multidimensional array
// let activities = [];
let activities = [
    ['Work', 9],
    ['Eat', 1],
    ['Commute', 2],
    ['Play Game', 1],
    ['Sleep', 7]
];

//printing as it is
console.log(activities);

//printing in a table
console.table(activities);

//accesing the elements by index
const var1 = activities[0][1];

//Adding elements to the JavaScript multidimensional array
activities.push(['Study',2]);

console.table(activities);

//adding in the middle of the array
activities.splice(1, 0, ['Programming', 2]);

console.table(activities);

//This example calculates the percentage of the hours spent on each activity and appends the percentage to the inner array.
activities.forEach(activity => {
    let percentage = ((activity[1] / 24) * 100).toFixed();
    activity[2] = percentage + '%';
});

console.table(activities);

//Removing elements from the JavaScript multidimensional array
activities.pop();

console.table(activities);

//Iterating over elements of the JavaScript multidimensional array
// loop the outer array
for (let i = 0; i < activities.length; i++) {
    // get the size of the inner array
    var innerArrayLength = activities[i].length;
    // loop the inner array
    for (let j = 0; j < innerArrayLength; j++) {
        console.log('[' + i + ',' + j + '] = ' + activities[i][j]);
    }
}

//method 2 for iterating in the multidimensional array
activities.forEach((activity) => {
    activity.forEach((data) => {
        console.log(data);
    });
});















