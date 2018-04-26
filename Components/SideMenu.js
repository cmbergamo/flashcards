import React from 'react';
import {
	TouchableOpacity,
	Text,
	View
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function SideMenu ( props ) {
	return (
		<View style={ { backgroundColor: 'white', flexDirection: 'row' } } >
			<TouchableOpacity style={ { flexDirection: 'row' } } onPress={ () => props.navigation.navigate( "DrawerToggle" ) } >
				<Ionicons name="md-menu" size={ 32 } color="skyblue" />
				<Text style={ { fontSize: 22, marginLeft: 5 } } >Menu</Text>
			</TouchableOpacity>
		</View>
	);
}

export default SideMenu;