//  l'objet student
 let student = {    name: "Marie",    age: 20,    courses: []};
//Changer l'âge à 21
student.age = 21;
//Ajouter le grade
student.grade = "A";
//3. Travailler avec le tableau courses
student.courses.push("Math", "Physics", "Chemistry");
// 4. Trouver l'index de "Physics"
let physicsIndex = student.courses.indexOf("Physics");
// 5. Utiliser slice pour créer un nouveau tableau avec les deux premiers éléments
let firstTwoCourses = student.courses.slice(0, 2)
//6. Afficher les résultats dans la console
console.log("Objet student complet :", student);
console.log("Index de 'Physics' :", physicsIndex);
console.log("Nouveau tableau avec slice :", firstTwoCourses);