/*jshint esversion:6*/
function View(controller) {

	this.createPetHTML = function(pet) {
		var $playButton = $("<button>Play!</button>");
		var $funInput = $("<input placeholder='Amount (default=20)' type ='text'>");
		var $feedButton = $("<button>Feed!</button>");
		var $foodInput = $("<input placeholder='Amount (default=20)' type ='text'>");


		$playButton.click(function() {
			// debugger;
			var amount = 10;
			if ($funInput.val()) {
				amount = parseInt($funInput.val(), 20);
			}
			controller.playWithPet(pet.name, amount);
			this.showAllPets();
		}.bind(this));
		$feedButton.click(function() {
			var amount = 10; 
			if($foodInput.val()){
				amount = parseInt($foodInput.val(), 20);
			}
			controller.feedPet(pet.name, amount);
			this.showAllPets();

		}.bind(this));

		var $pet = $("<p>" +
			"<b>"+ pet.name + "</b>"+
			": " +
			"hunger: "+
			pet.hunger +
			" - " +
			"fun: " +
			pet.fun +
			"</p>"
			);
		$pet.append($playButton);
		$pet.append($funInput);
		$pet.append($feedButton);
		$pet.append($foodInput);
		return $pet;
	};

	this.showAllPets = function() {
		$('#output').html("");
		var allPets = controller.getAllPets();
		for(var pet of allPets) {
			var petHTML = this.createPetHTML(pet);
			$('#output').append(petHTML);
		}
	};

	this.createPet = function() {
		var name = $('#petname').val();
		controller.addPet(name);
		controller.petDecay(name, this.showAllPets.bind(this));
		this.showAllPets();
	};

}