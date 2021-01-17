import users from './users.js'
// === 1 ===

//Получить массив имен всех пользователей (поле name). 
const getUserNames = users => {
  // твой код
    return users.map(user=>user.name)
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// === 2 ===

//Получить массив объектов пользователей по цвету глаз (поле eyeColor).

const getUsersWithEyeColor = (users, color) => {
  // твой код
    return users.filter(({eyeColor}) => eyeColor === color);
};

console.log(getUsersWithEyeColor(users, 'blue'));
// [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// === 3 ===

//Получить массив имен пользователей по полу (поле gender).

const getUsersWithGender = (users, gender) => {
  // твой код
  return users.filter(user => user.gender === gender).map(user => user.name);
  
};

console.log(getUsersWithGender(users, 'male'));
// [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// === 4 ===

//Получить массив только неактивных пользователей (поле isActive).
const getInactiveUsers = users => {
  // твой код
  return users.filter( user => !user.isActive)
};

console.log(getInactiveUsers(users));
// [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// === 5 ===

//Получить пользоваля (не массив) по email (поле email, он уникальный).

const getUserWithEmail = (users, email) => {
  // твой код
    return users.find(user => user.email === email)
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

// === 6 ===

//Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).
const getUsersWithAge = (users, min, max) => {
  // твой код
    return users.filter(user => user.age < max  && user.age > min)
};

console.log(getUsersWithAge(users, 20, 30));
// [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// === 7 ===

//Получить общую сумму баланса (поле balance) всех пользователей.
const calculateTotalBalance = users => {
  // твой код
    return users.reduce((totalBalance, user) => totalBalance + user.balance , 0)
};

console.log(calculateTotalBalance(users)); // 20916

// === 8 ===

//Массив имен всех пользователей у которых есть друг с указанным именем.
const getUsersWithFriend = (users, friendName) => {
  // твой код
    return users.filter(user => user.friends.includes(friendName)).map(user => user.name);
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

// === 9 ===

//Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей 
//(поле friends) 
const getNamesSortedByFriendsCount = users => {
  //твой код
    const sortByNumberOfFriends = (a, b) => a.friends.length - b.friends.length
    //const numberOfFriends = user.friends.length;
    
    return users.sort(sortByNumberOfFriends)
        .map(user => user.name)
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// === 10 ===

//Получить массив всех умений всех пользователей (поле skills), 
//при этом не должно быть повторяющихся умений и они должны быть отсортированы 
//в алфавитном порядке.
const getSortedUniqueSkills = users => {
  // твой код
    //const usersSkills = users.map(({skill}) => skill);
   
    return users.map(({ skills }) => skills)
        .reduce((allSkills, skill) => allSkills.concat(skill), [])
        .filter((currentValue, skill, skillsArray) => skillsArray.indexOf(currentValue) === skill).sort()
    
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 
//'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 
//'nulla', 'proident', 'tempor', 'velit', 'veniam' ]