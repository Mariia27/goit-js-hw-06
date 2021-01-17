//Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей 
//(поле friends)
import users from './users.js'
 
// console.log(numberOfFriends)
const getNamesSortedByFriendsCount = users => {
  //твой код
    const sortByNumberOfFriends = (a, b) => a.friends.length -b.friends.length
    //const numberOfFriends = user.friends.length;
    
    return users.sort(sortByNumberOfFriends)
        .map(user => user.name)
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// const users = [
//   { name: 'Mango', daysActive: [1, 5] },
//   { name: 'Poly', daysActive: [4] },
//   { name: 'Ajax', daysActive: [2, 0, 7] },
//   { name: 'Chelsey', daysActive: [2,3,4,5] },
// ];

// const sortByActiveDays = (a, b) => a.daysActive.length - b.daysActive.length;

// console.log(users.sort(sortByActiveDays));
