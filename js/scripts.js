var text = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.";
	dinosaur = "triceratops";
	upperDino = dinosaur.toUpperCase();
	newText = text.replace('Velociraptor', upperDino);
	

	console.log(newText.slice(0,(newText.length)/2));