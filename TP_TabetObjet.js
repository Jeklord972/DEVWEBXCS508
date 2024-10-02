//  l'objet student
 const student = {    Prenom: "Marie", Nom:"JANE",    age: 20,    cours: []};
//Changer l'âge à 21
student.age = 21;
//Ajouter le grade
student.grade = "A";
//3. Travailler avec le tableau courses
student.cours.push("Math", "Physique", "Chimie");
// 4. Trouver l'index de "Physics" dans "cours"
const physicsIndex = student.cours.indexOf("Physique");
// 5. Utiliser slice pour créer un nouveau tableau avec les deux premiers éléments
const firstTwoCourses = student.cours.slice(0, 2)
//6. Afficher les résultats dans la console
console.log("Objet student complet :", student);
console.log("Index de 'Physique' dans les cours :", physicsIndex);
console.log("Nouveau tableau avec slice :", firstTwoCourses);