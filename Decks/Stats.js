import React from 'react';
import { View, Text, Button } from 'react-native';
import { inject, observer } from 'mobx-react';

const Stats = ( props ) => {
	const { correct, wrong } = props.store.statisticsTotal;

	const percent = correct * 100 / ( correct + wrong );

	return (
		<View>
			<Text>Sua porcentagem de acerto foi: { percent }%</Text>
			<Text>Questões corretas: { correct }</Text>
			<Text>Questões incorretas: { wrong }</Text>
			<View style={ { flexDirection: 'row' } } >
				<Button title='Escolher outro Baralho' onPress={ () => end( props.store, props.navigation ) } />
				<Button title='Reiniciar Quiz' onPress={ () => fim( props.store, props.navigation ) } />
				<Button title='Voltar para o Baralho' onPress={ () => fim( props.store, props.navigation ) } />
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
	_navigation.navigate( 'List' );
}

const gotoDeck = ( _store, _navigation ) => {
	_store.resetStats();
	_navigation.navigate( 'Deck' );
}

export default inject( "store" )( observer( Stats ) );