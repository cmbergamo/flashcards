import React from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { inject, observer } from 'mobx-react';
import styles from '../Components/AppStyles';
import AppButton from '../Components/AppButton';

const Deck = ( props ) => {
	const { store } = props;
	const deck = store.editedDeck;

	return (
		<View style={ styles.container } >
			<Text>Título: { deck.title }</Text>
			<Text>Total de cartões neste baralho: { deck.cards.length }</Text>
			<View style={ styles.options } >
				<AppButton
					disabled={ deck.cards.length <= 0 }
					press={ () => props.navigation.navigate( 'Card', { pos: 0 } ) }
					title='Iniciar' />

				<AppButton 
					title='Editar Baralho'
					press={ () => edit( props.store, props.navigation ) }
					icon='edit' />

				<AppButton
					title='Ad. Cartão'
					press={ () => createCard( props.store, props.navigation ) }
					icon='playlist-add' />
			</View>
		</View>
	);
}

const edit = ( _store, _navigation ) => {
	_navigation.navigate( 'Create' );
}

const createCard = ( _store, _navigation ) => {
	_navigation.navigate( 'CCard' );
}



export default inject( 'store' )( observer( Deck ) );