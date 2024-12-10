/*
Écris une fonction qui, étant donné deux angles d'un triangle, renverra la valeur du troisième.
(Rappel : la somme des valeurs des trois angles dans un triangle est **toujours** 180°)
Ex: 
thirdAngle(90, 30) doit retourner 60
thirdAngle(20, 80) doit retourner 80
*/

function thirdAngle(a, b) {
	//Si la somme des angles est de 180 degres , le 3eme angle est égal à 180 - (le premier angle  +b  le deuxième angle)
	return 180 - (a + b);
}

module.exports = thirdAngle;
