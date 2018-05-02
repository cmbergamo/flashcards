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
			<Button title='Escolher outro Deck' onPress={ () => fim( props.store, props.navigation ) } />
		</View>
	)
}

const fim = ( _store, _navigation ) => {
	_store.resetStats();
	_navigation.navigate( 'List' );
}

export default inject( "store" )( observer( Stats ) );