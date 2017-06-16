import React, { PropTypes } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

import Icon from './Icon';
import styles from './styles';

const ListItem = ({ 
    text, onPress, selected = false, checkmark = true, visible = true, customIcon = null 
}) => (
    <TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColr}>
        <View style={styles.row}>
            <Text style={styles.text}>{text}</Text>
            {selected ? <Icon checkmark={checkmark} visible={visible}/> : <Icon/>}
            {customIcon}
        </View>
    </TouchableHighlight>
);

ListItem.propTypes = {
    onPress: PropTypes.func,
    text: PropTypes.string,
    selected: PropTypes.bool,
    checkmark: PropTypes.bool,
    visible: PropTypes.bool,
    customIcon: PropTypes.element
};

export default ListItem;