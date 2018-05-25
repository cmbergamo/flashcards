import React from 'react';
import { View, Text, Button } from 'react-native';
import { inject, observer } from 'mobx-react';
import AppButton from '../Components/AppButton';
import styles from '../Components/AppStyles';
import { setLocalNotifications, hasNotification } from '../api/Storage'

const Stats = ( props ) => {

	hasNotification().then(
		( info ) => {
			
			if( info !== null ) {
				const { able, hour, minute } = info;

				if ( able ) {
					setLocalNotifications( hour, minute );
				}
			}
		}
	)

	const { correct, wrong } = props.store.statisticsTotal;

	const percent = correct * 100 / ( correct + wrong );

	return (
		<View>
			<Text>Sua porcentagem de acerto foi: { percent }%</Text>
			<Text>Questões corretas: { correct }</Text>
			<Text>Questões incorretas: { wrong }</Text>
			<View style={ styles.options } >
				<AppButton title='Escolher outro Baralho' press={ () => end( props.store, props.navigation ) } />
				<AppButton title='Reiniciar Quiz' press={ () => restart( props.store, props.navigation ) } />
				<AppButton title='Voltar para o Baralho' press={ () => gotoDeck( props.store, props.navigation ) } />
			</View>
		</View>
	)
}

const end = ( _store, _navigation ) => {
	_store.resetStats();
	_navigation.navigate( 'List' );
}

const restart = ( _store, _navigation ) => {
	_store.resetStats();
	_navigation.navigate( 'Card', { pos: 0 } );
}

const gotoDeck = ( _store, _navigation ) => {
	_store.resetStats();
	_navigation.navigate( 'Deck' );
}

export default inject( "store" )( observer( Stats ) );