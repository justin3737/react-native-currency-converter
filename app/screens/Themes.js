import React, { Component, PropTypes } from 'react';
import { ScrollView, StatusBar } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';

import { ListItem, Separator } from '../components/List';
import { changePrimaryColor } from '../actions/theme';

const styles = EStyleSheet.create({
    $blue: '$primaryBlue',
    $orange: '$primaryOrange',
    $green: '$primaryGreen',
    $purple: '$primaryPurple',
});

class Themes extends Component {
    static propTypes = {
        navigation: PropTypes.object,
        dispatch: PropTypes.func,
    }

    _handleThemePress = (color) => {
        this.props.dispatch(changePrimaryColor(color));
        this.props.navigation.goBack();
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

export default connect()(Themes);