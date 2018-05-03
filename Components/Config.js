import React from 'react';
import { View, Text, Picker } from ''

const Config = ( props ) => {
	return (
		<View>
			<Text>Habilitar notificações</Text>
			<Picker>
				<Picker.Item label="Desabilitado" value={ false } />
				<Picker.Item label="Habilitado" value={ true } />
			</Picker>
		</View>
	)
}

export default Config;