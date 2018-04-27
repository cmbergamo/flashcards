
import { observable, computed, decorate, action } from "mobx";

class Store {
	
	decks = [
		{ id: '201804391' , title: 'T1', cards: [
			{ id: '20180439c1', pergunta: 'p1', resposta: 'r1' }, { id: '20180439c2', pergunta: 'p2', resposta: 'r2' }
		] },
		{ id: '201804392' , title: 'T2', cards: [
			{ id: '20180439c3', pergunta: 'p3', resposta: 'r3' }, { id: '20180439c4', pergunta: 'p4', resposta: 'r4' }
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

	get onCreationCards() {
		return this.temp.cards;
	}

	createCard( _card ) {
		if ( _card.id ) {
			const cards = this.temp.cards.filter( card => card.id !== _card.id )
			cards.push( _card );

			this.temp.cards = cards;
		} else {
			_card.id = Date.now();
			
			if ( this.temp.cards )
				this.temp.cards.push( _card );
			else
				this.temp.cards = [ _card ];
			
		}
	}

	createDeck( _deck ) {
		if ( _deck.id ) {
			const deck = this.decks.filter( d => d.id !== _deck.id );
			deck.push( _deck );

			this.decks = deck;
		} else {

			_deck.id = Date.now();
			
			if ( this.decks )
				this.decks.push( _deck );
			else
				this.decks = [ _deck ];
		}
	}

	removeCard( _id ) {
		const newCards = this.temp.cards.filter( card => {
			return card.id !== _id ;
		});

		this.temp.cards = newCards
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
	onCreationCards: computed,
	createCard: action,
	removeCard: action
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
