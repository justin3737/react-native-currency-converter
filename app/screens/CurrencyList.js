import React, { Component } from 'react';
import { FlatList, View, StatusBar } from 'react-native';

import { ListItem, Separator } from '../components/List'
import currencies from '../data/currencies';

const TEMP_SELECTED_CURRENCY = 'CAD';

class CurrencyList extends Component {
    
    _handlePress = () => {
        console.log("row press!");
    }

    render () {
        return (
             <View style={{ flex: 1 }}>
                <StatusBar barStyle="default" translucent={false}/>
                <FlatList
                    data={currencies}
                    renderItem={({ item }) => 
                        <ListItem
                            text={item}
                            selected={item === TEMP_SELECTED_CURRENCY}
                            onPress={this._handlePress}
                            checkmark={false}
                        />
                    }
                    keyExtractor={item => item}
                    ItemSeparatorComponent={Separator}
                />
            </View>
        );
    }
};

export default CurrencyList;