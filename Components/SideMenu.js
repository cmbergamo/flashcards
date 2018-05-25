import React from 'react';
import {
	TouchableOpacity,
	Text,
	View
} from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

function SideMenu ( props ) {
	return (
		<View style={ { backgroundColor: 'white', flexDirection: 'row' } } >
			<TouchableOpacity style={ { flexDirection: 'row' } } onPress={ () => props.navigation.navigate( "DrawerToggle" ) } >
				<MaterialIcons name="menu" size={ 32 } color="darkblue" />
				<Text style={ { fontSize: 22, marginLeft: 5 } } >Menu</Text>
			</TouchableOpacity>
		</View>
	);
}

export default SideMenu;