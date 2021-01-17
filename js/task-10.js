//Получить массив всех умений всех пользователей (поле skills), 
//при этом не должно быть повторяющихся умений и они должны быть отсортированы 
//в алфавитном порядке.
import users from './users.js'
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