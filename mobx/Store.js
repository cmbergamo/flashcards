
import { observable, computed, decorate, action } from "mobx";
import { load } from '../api/Storage';

class Store {

	constructor( ) {
		load( ).then( res => {
			if ( res )
				this.initialLoad( res );
			else
				this.initialLoad( [] );
		} );
	}
	
	decks = [ ];
	temp = { title: '', cards: [ ], id: 0 };
	statistics = { correct: 0, wrong: 0 };

	get listDecks() {
		return this.decks;
	}

	get totalCards() {
		return this.temp.cards.length;
	}

	get onCreationCards() {
		return this.temp.cards;
	}

	get statisticsTotal() {
		return this.statistics;
	}

	get editedDeck() {
		return this.temp;
	}

	get editedTitle() {
		return this.temp.title;
	}

	createCard( _card ) {
		if ( _card.id && _card.id > 0 ) {
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

	createDeck( ) {
		this.temp
		if ( this.temp.id && this.temp.id > 0 ) {
			const deck = this.decks.filter( d => d.id !== this.temp.id ) || [] ;

			deck.push( this.temp );

			this.decks = deck;

		} else {

			this.temp.id = Date.now();

			this.decks.push( this.temp );
		}

		this.temp = { title: '', cards: [], id: 0 };
	}

	removeCard( _id ) {
		const newCards = this.temp.cards.filter( card => {
			return card.id !== _id ;
		});

		this.temp.cards = newCards
	}

	initialLoad( _decks ) {
		this.decks = _decks;
	}

	correctAnswer() {
		this.statistics.correct = this.statistics.correct + 1;
	}

	wrongAnswer() {
		this.statistics.wrong = this.statistics.wrong + 1;
	}

	resetStats() {
		this.statistics = { correct: 0, wrong: 0 };
	}

	editDeck( _deck ) {
		this.temp = _deck;
	}

	editTitle( _title ) {
		this.temp.title = _title;
	}
}

decorate( Store, {
	decks: observable,
	temp: observable,
	statistics: observable,
	totalCards: computed,
	listDecks: computed,
	onCreationCards: computed,
	editedDeck: computed,
	editedTitle: computed,
	createCard: action,
	removeCard: action,
	initialLoad: action,
	correctAnswer: action,
	wrongAnswer: action,
	editDeck: action,
	editTitle: action,
	resetStats: action
} )

const store = new Store();

export default store;
