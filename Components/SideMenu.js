import React from 'react';
import {
	TouchableOpacity, 
	View
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function SideMenu ( props ) {
	return (
		<View>
			<TouchableOpacity onPress={ () => props.navigation.navigate( "DrawerToggle" ) } >
				<Ionicons name="md-menu" size={32} color="green" />
			</TouchableOpacity>
		</View>
	);
}

export default SideMenu;