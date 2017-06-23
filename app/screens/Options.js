import React, { Component, PropTypes } from 'react';
import { ScrollView, StatusBar, Platform, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ListItem, Separator } from '../components/List';

const ICON_PRIFIX = Platform.OS === 'ios'?'ios':'md';
const ICON_COLOR = "#868686";
const ICON_SIZE = 23;

class Options extends Component {
    static propTypes = {
        navigation: PropTypes.object,
    }

    _handleThemePress = () => {
        this.props.navigation.navigate('Themes');
    }

    _handleSitePress = () => {
        Linking.openURL('http://fixer.io').catch(()=>{alert("An error occured.")})
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