function hacerCafe(cafe, azucar, leche) {
	var instrucciones = "Hervir agua,";
	instrucciones += " verter el agua en una taza, "
	instrucciones += " agregar " + cafe + " cucharadas de caf�,";
	instrucciones += " agregar " + leche + " % de leche,";
	instrucciones += " agregar " + cafe + " cucharadas de az�car,";
	instrucciones += " revolver"
	return instrucciones;
}

console.log(hacerCafe(2,3,17));