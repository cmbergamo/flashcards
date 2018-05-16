import React from 'react';
import { Text, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import styles from './AppStyles';

const AppButton = (props) => {
	return (
		<TouchableOpacity style={ [styles.buttons ] } onPress={ props.press } disabled={ props.disabled } >
			{
				props.icon &&
				<MaterialIcons style={ styles.buttonsLabel } name={ props.icon } size={20} />
			}
			{
				props.title &&
				<Text style={ styles.buttonsLabel } >{ props.title }</Text>
			}
		</TouchableOpacity>
	)
}

export default AppButton;