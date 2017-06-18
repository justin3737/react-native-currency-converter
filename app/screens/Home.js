import React, { Component, PropTypes } from 'react';
import { StatusBar, KeyboardAvoidingView } from 'react-native';

import { Header } from '../components/Header';
import { Logo } from '../components/Logo';
import { Container } from '../components/Container';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Buttons';
import { LastConverted } from '../components/Text';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.74';
const TEMP_CONVERSION_RATE = 0.7974;
const TEMP_CONVERSION_DATE = new Date();

class Home extends Component {
  static propstype = {
    navigation: PropTypes.object,
  }
  _handlePressBaseCurrency = () => {
    this.props.navigation.navigate('CurrencyList', { title: 'Base Currency'});
  }
  _handlePressQuoteCurrency = () => {
    this.props.navigation.navigate('CurrencyList', { title: 'Quote Currency'});
  }
  _handleTextChange = (text) => {
    console.log('handle text change!');
  }
  _handleSwapCurrency = () => {
    console.log('handle swap currency!');
  }
  _handleOptionsPress = () => {
    console.log('handle options press')
  }
  render() {
    return(
      <Container>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <Header onPress={this._handleOptionsPress} />
        <KeyboardAvoidingView behavior="padding">
          <Logo />
          <InputWithButton 
            onPress={this._handlePressBaseCurrency}
            buttonText={TEMP_BASE_CURRENCY}
            defaultValue={TEMP_BASE_PRICE}
            keyboardType="numeric"
            onChange={this._handleTextChange}/>
          <InputWithButton 
            onPress={this._handlePressQuoteCurrency}
            buttonText={TEMP_QUOTE_CURRENCY}
            editable={false}
            value={TEMP_QUOTE_PRICE}/>
          <LastConverted
            base={TEMP_BASE_CURRENCY}
            quote={TEMP_QUOTE_CURRENCY}
            date={TEMP_CONVERSION_DATE}
            conversionRate={TEMP_CONVERSION_RATE}
          />
          <ClearButton
            text="Reverse Currencies"
            onPress={this._handleSwapCurrency}
          />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

export default Home;
