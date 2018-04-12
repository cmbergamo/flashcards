
import { observable, computed, decorate, action } from "mobx";

class Store {
	
	decks = [];
	temp = { title: '', cards: [] };

	/* constructor() {
		this.decks = [];
		this.temp = { title: '', cards: [] };
	} */

	get totalCards() {
		return this.temp.cards.length;
	}

	createCard( _card ) {
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

decorate( Store, {
	decks: observable,
	temp: observable,
	// totalCards: computed,
	createCard: action
} )

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
