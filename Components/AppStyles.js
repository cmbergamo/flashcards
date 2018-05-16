import { StyleSheet } from 'react-native';

const styles = StyleSheet.create( {
	options: {
		flexDirection: 'row',
		flex: 1,
		justifyContent: 'space-between',
		padding: 10
	},
	buttons: {
		flexDirection: 'row',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'darkblue',
		margin: 2,
		height: 40,
		padding: 5
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
	},
	field: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		flexWrap: 'wrap'
	},
	label: {
		flex: 1,
		color: 'black',
		fontSize: 15
	},
	input: {
		flex: 4,
		backgroundColor: 'white',
		margin: 0,
		padding: 0,
		height: 33
	}
} );

export default styles;