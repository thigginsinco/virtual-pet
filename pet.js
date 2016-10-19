
function Pet(name) {
	this.name = name;
	this.hunger = 0;
	this.fun = 100;

	this.feed = function(food) {
		this.hunger -= food;
		this.hunger = Math.max(this.hunger, 0);
		this.fun -= food / 2;
		this.fun = Math.max(this.fun, 0);
	};

	this.play = function(fun) {
		this.fun += fun;

		this.hunger += fun / 2;
	};
}