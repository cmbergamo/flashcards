import React, { Component } from 'react';
import { View, Text, Switch, StatusBar, TimePickerAndroid } from 'react-native';
import SideMenu from './SideMenu';
import { clearLocalNotifications, setLocalNotifications, hasNotification } from '../api/Storage';

class Config extends Component {
	state = {
		able: false,
		hour: -1,
		minute: -1
	}

	UNSAFE_componentWillMount() {
		hasNotification().then( result => this.setState( result ) );
	}

	showTimerPicker(){
		
		TimePickerAndroid.open( { is24Hour: true, mode: 'spinner' } )
			.then( result =>  {
				if( result.action === 'timeSetAction' )
					this.setState ( { hour: result.hour, minute: result.minute } );
					
					setLocalNotifications( result.hour, result.minute );
				}
			);
	}

	render () {
		if ( this.state.able && this.state.hour < 0 && this.state.minute < 0 )
			this.showTimerPicker();

		return (
			<View>
				<StatusBar
					backgroundColor="black"
					barStyle="light-content"
				/>
				<SideMenu navigation={ this.props.navigation } />
				<View style={ { flexDirection: 'row' } }>
					<Text>Habilitar notificações</Text>
					<Switch onValueChange={ ( able ) => this.setState( { able } ) } value={ this.state.able } />
				</View>
				{ this.state.able &&
					<View>
						<Text>Horario do alarme: { this.state.hour }:{ this.state.minute }</Text>
					</View>
				}
			
			</View>
		);
	}
}

export default Config;