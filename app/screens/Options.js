import React, { Component } from 'react';
import { ScrollView, StatusBar, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ListItem, Separator } from '../components/List';

const ICON_PRIFIX = Platform.OS === 'ios'?'ios':'md';
const ICON_COLOR = "#868686";
const ICON_SIZE = 23;

class Options extends Component {
    _handleThemePress = () => {
        console.log('on theme press!');
    }

    _handleSitePress = () => {
        console.log('on site press!');
    }

    render () {
        return (
            <ScrollView>
                <StatusBar translucent={false} barStyle="default" />
                <ListItem
                    text="Theme"
                    onPress={this._handleThemePress}
                    customIcon={<Ionicons name={`${ICON_PRIFIX}-arrow-forward`} color={ICON_COLOR} size={ICON_SIZE}/>}
                />
                <Separator/>
                <ListItem
                    text="Fixer.io"
                    onPress={this._handleSitePress}
                    customIcon={<Ionicons name={`${ICON_PRIFIX}-link`} color={ICON_COLOR} size={ICON_SIZE}/>}
                />
                <Separator/>
            </ScrollView>
        );
    }
}

export default Options;