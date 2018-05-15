import { StyleSheet } from 'react-native';

const styles = StyleSheet.create( {
	opcions: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 10
	},
	buttons: {
		flexDirection: 'row',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'darkblue',
		margin: 5,
		height: 40,
	},
	buttonsLabel: {
		color: 'white',
		fontWeight: 'bold'
    },
    container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
	}
} );

export default styles;