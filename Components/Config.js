import React, { Component } from 'react';
import { View, Text, Switch, StatusBar, TimePickerAndroid } from 'react-native';
import { Notifications, Permissions } from 'expo';
import SideMenu from './SideMenu';

class Config extends Component {
	state = {
		able: false,
		hour: -1,
		minute: -1
	}

	NOTIFICATION_KEY = 'CMB-Flashcards';

	showTimerPicker(){
		
		TimePickerAndroid.open( { is24Hour: true, mode: 'spinner' } )
			.then( result =>  {
				if( result.action === 'timeSetAction' )
					this.setState ( { hour: result.hour, minute: result.minute } );
				}
			);
	}

	clearLocalNotifications() {
		return AsyncStorage.removeItem( this.NOTIFICATION_KEY )
			.then( Notifications.cancelAllScheduledNotificationsAsync() );
	}

	createNotifications() {
		return {
			title: 'Hora do estudo!',
			body: 'Você ainda não estou',
			android: {
				sound: true,
				vibrate: true,
				priority: 'high',
				sticky: false
			}
		}
	}

	setLocalNotifications() {
		AsyncStorage.getItem( this.NOTIFICATION_KEY )
			.then( JSON.parse )
			.then( data => {
				if ( data === null ) {
					Permissions.askAsync( Permissions.NOTIFICATIONS )
						.then( status => {
							if ( status === 'granted' ) {
								Notifications.cancelAllScheduledNotificationsAsync();

								let tomorrow = new Date();
								tomorrow.setDate( tomorrow.getDate() + 1 );
								tomorrow.setHours( this.state.hour );
								tomorrow.setMinutes( this.state.minute );

								Notifications.scheduleLocalNotificationAsync(
									this.createNotifications(),
									{
										time: tomorrow,
										repeat: 'day'
									}
								).then( () => AsyncStorage.setItem( this.NOTIFICATION_KEY, JSON.stringify( true ) ) );
							}
						})
				}
			})
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