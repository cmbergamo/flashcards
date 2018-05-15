import { AsyncStorage } from 'react-native';
import { Notifications, Permissions } from 'expo';

const FLASHCARDS_STORAGE_KEY = 'CMB-Udacity';
const NOTIFICATION_KEY = 'CMB-Flashcards';

export function saveDecks( decks ) {
	return AsyncStorage.removeItem( FLASHCARDS_STORAGE_KEY )
		.then( () => {
			return AsyncStorage.setItem( FLASHCARDS_STORAGE_KEY, JSON.stringify( decks ) );
		})
}

export function load( ) {
	return AsyncStorage.getItem( FLASHCARDS_STORAGE_KEY )
		.then( results => {
			const decks = JSON.parse( results );

			return decks;
		} );
}

export function clearLocalNotifications() {
	return AsyncStorage.removeItem( NOTIFICATION_KEY )
		.then( Notifications.cancelAllScheduledNotificationsAsync() );
}

export function setLocalNotifications( _hour, _minute ) {
	AsyncStorage.getItem( NOTIFICATION_KEY )
		.then( JSON.parse )
		.then( data => {
			if ( data === null ) {
				Permissions.askAsync( Permissions.NOTIFICATIONS )
					.then( ( { status } ) => {
						
						if ( status === 'granted' ) {
							Notifications.cancelAllScheduledNotificationsAsync();

							let tomorrow = new Date();
							tomorrow.setDate( tomorrow.getDate() + 1 );
							tomorrow.setHours( _hour );
							tomorrow.setMinutes( _minute );

							Notifications.scheduleLocalNotificationAsync(
								createNotifications(),
								{
									time: tomorrow,
									repeat: 'day'
								}
							).then( () => AsyncStorage.setItem( NOTIFICATION_KEY, JSON.stringify( { able: true, hour: _hour, minute: _minute } ) ) );
						}
					});
			}
		});
}

export function hasNotification() {
	return AsyncStorage.getItem( NOTIFICATION_KEY )
		.then( JSON.parse );
}

function createNotifications( ) {
	return {
		title: 'Hora do estudo!',
		body: 'Você ainda não estou',
		android: {
			sound: true,
			vibrate: true,
			priority: 'high',
			sticky: false
		}
	}
}

/* export function removeDeck ( deck ) {
	return AsyncStorage.getItem( FLASHCARDS_STORAGE_KEY )
		.then( results => {
			const decks = JSON.parse( results );

			decks[ deck.id ] = undefined;
			delete decks[ deck.id ];

			AsyncStorage.setItem( FLASHCARDS_STORAGE_KEY, JSON.stringify( decks ) );
		} );
} */