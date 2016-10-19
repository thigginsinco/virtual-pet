/*jshint esversion:6*/
function Controller(model) {

	this.addPet = function(name) {
		var p = new Pet(name);
		model.addPet(p);
		return p;
	};

	this.playWithPet = function(name, amount) {
		var p = model.getPetByName(name);
		p.play(amount);
		return p;
	};

	this.getAllPets = function() {
		return model.getAllPets();
	};


	this.feedPet = function(name, amount) {
		var f = model.getPetByName(name);
		f.feed(amount);
		return f;
	};

	this.petDecay = function(name, showAllPets){
		var pet = model.getPetByName(name);
		window.setInterval(function() {
			pet.hunger += 3;
			pet.fun -= 3;
			showAllPets();
		}, 5000);
	};


}