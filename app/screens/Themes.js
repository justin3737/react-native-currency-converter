import React, { Component } from 'react';
import { ScrollView, StatusBar } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { ListItem, Separator } from '../components/List';

const styles = EStyleSheet.create({
    $blue: '$primaryBlue',
    $orange: '$primaryOrange',
    $green: '$primaryGreen',
    $purple: '$primaryPurple',
});

class Themes extends Component {
    _handleThemePress = (color) => {
        console.log("handle theme press",color);
    }
    render () {
        return(
            <ScrollView>
                <StatusBar translucent={false} barStyle="default"/>
                <ListItem
                    text="Blue"
                    onPress={()=>this._handleThemePress(styles.$blue)}
                    selected
                    checkmark={false}
                    iconBackground={styles.$blue}
                    />
                <Separator/>
                <ListItem
                    text="Orange"
                    onPress={()=>this._handleThemePress(styles.$orange)}
                    selected
                    checkmark={false}
                    iconBackground={styles.$orange}
                    />
                <Separator/>
                <ListItem
                    text="Green"
                    onPress={()=>this._handleThemePress(styles.$green)}
                    selected
                    checkmark={false}
                    iconBackground={styles.$green}
                    />
                <Separator/>
                <ListItem
                    text="Purple"
                    onPress={()=>this._handleThemePress(styles.$purple)}
                    selected
                    checkmark={false}
                    iconBackground={styles.$purple}
                    />
                <Separator/>
            </ScrollView>
        );
    }
}

export default Themes;