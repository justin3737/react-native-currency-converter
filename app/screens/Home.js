import React, { Component } from 'react';
import { StatusBar } from 'react-native';

import { Logo } from '../components/Logo';
import { Container } from '../components/Container';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Buttons';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE= '79.74';

class Home extends Component {
  _handlePressBaseUrrency = () => {
    console.log('press');
  }
  _handlePressQuoteUrrency = () => {
    console.log('press quote');
  }
  _handleTextChange = (text) => {
    console.log('handle text change!');
  }
  _handleSwapCurrency = () => {
    console.log('handle swap currency!');
  }
  render() {
    return(
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Logo />
        <InputWithButton 
          onPress={this._handlePressBaseUrrency}
          buttonText={TEMP_BASE_CURRENCY}
          defaultValue={TEMP_BASE_PRICE}
          keyboardType="numeric"
          onChange={this._handleTextChange}/>
        <InputWithButton 
          onPress={this._handlePressQuoteUrrency}
          buttonText={TEMP_QUOTE_CURRENCY}
          editable={false}
          value={TEMP_QUOTE_PRICE}/>
        <ClearButton
          text="Reverse Currencies"
          onPress={this._handleSwapCurrency}
        />
      </Container>
    );
  }
}

export default Home;
