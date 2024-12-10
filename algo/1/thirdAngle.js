/*
Écris une fonction qui, étant donné deux angles d'un triangle, renverra la valeur du troisième.
(Rappel : la somme des valeurs des trois angles dans un triangle est **toujours** 180°)
Ex: 
thirdAngle(90, 30) doit retourner 60
thirdAngle(20, 80) doit retourner 80
*/

function thirdAngle(a, b) {
  if (a <= 0 || b <= 0 || a + b >= 180) {
  }
  return 180 - (a + b);
}
// il affiche 60
console.log(thirdAngle(90, 30));
// il affiche 80
console.log(thirdAngle(20, 80));

module.exports = thirdAngle;
