
import { observable, computed, decorate, action } from "mobx";

class Store {
	
	decks = [
		{ title: 'T1', cards: [
			{ pergunta: 'p1', resposta: 'r1' }, { pergunta: 'p2', resposta: 'r2' }
		] },
		{ title: 'T2', cards: [
			{ pergunta: 'p3', resposta: 'r3' }, { pergunta: 'p4', resposta: 'r4' }
		]}
	];
	temp = { title: '', cards: [] };

	/* constructor() {
		this.decks = [];
		this.temp = { title: '', cards: [] };
	} */

	get listDecks() {
		return this.decks;
	}

	get totalCards() {
		return this.temp.cards.length;
	}

	createCard( _card ) {
		
		if ( this.temp.cards )
			this.temp.cards.push( _card );
		else
			this.temp.cards = [ _card ];
	}

	createDeck( _deck ) {
		
	}

	/* @computed get totalCards() {
		if ( this.temp.cards )
			return 0;
		else
			return this.temp.cards.lenght;
	} */

	/* get title( _index ) {
		if ( _index < 0 )
			return this.temp.title;
		else
			return this.decks[ _index ].title;
	} */
}

decorate( Store, {
	decks: observable,
	temp: observable,
	totalCards: computed,
	listDecks: computed,
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
