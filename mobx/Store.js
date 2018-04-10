
import { observable, computed } from "mobx";

class Store {
	
	@observable decks
	@observable temp

	constructor() {
		this.decks = [];
		this.temp = { title: '', cards: [] };
	}

	totalCards = function() {
		if ( this.temp.cards )
			return 0;
		else
			return this.temp.cards.lenght;
	}

	createCard = function( _card ) {
		console.log('criando cartão');
		if ( this.temp.cards )
			this.temp.cards.push( _card );
		else
			this.temp.cards = [ _card ];
	}

	/* @computed get totalCards() {
		if ( this.temp.cards )
			return 0;
		else
			return this.temp.cards.lenght;
	} */

	/*@computed get title( _index ) {
		if ( _index < 0 )
			return this.temp.title;
		else
			return this.decks[ _index ].title;
	} */
}

/* Store.prototype.createCard = function( _deck ) {
	this.temp = _deck;	
}

Store.prototype.createCard = function( _card ) {
	console.log('criando cartão');
	if ( this.temp.cards )
		this.temp.cards.push( _card );
	else
		this.temp.cards = [ _card ];
} */
const store = new Store();

export default store;
