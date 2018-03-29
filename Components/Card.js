import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,
	Dimensions,
	Button
} from 'react-native';

class Card extends Component {

	state = {
		resposta: false
	}

	showAwnser = () => {
		this.setState( { resposta: true } )
	}

	render() {

		let { width, height} = Dimensions.get('window');
		width -= 20;

		return (
			<View style={ [ styles.card, { width } ] } >
				<View style={ styles.viewTitulo } >
					<Text style={ styles.textTitulo } >{ this.props.title }</Text>
				</View>
				<View style={ styles.divider } />
					<View>
						<Text>Question</Text>
					</View>
				{ ! this.state.resposta && (
					<View style={ styles.botao } >
						<Button title='Resposta' onPress={ this.showAwnser } ></Button>
					</View>
				) }
			</View>
		);
	}
}

const styles = StyleSheet.create( {
	card: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'stretch',
		borderColor: 'black',
		borderRadius: 3,
		borderStyle: 'solid',
		borderWidth: 1,
		padding: 10,
		elevation: 3,
		backgroundColor: '#fcf8e8',
	},
	viewTitulo: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	textTitulo: {
		fontWeight: 'bold',
	},
	botao: {
		flex: 1,
		justifyContent: 'flex-end',
		alignSelf: 'center'
	},
	divider: {
		alignItems: 'stretch',
		borderStyle: "solid",
		borderBottomColor: `black`,
		borderBottomWidth: 1,
	}
} );

export default Card;