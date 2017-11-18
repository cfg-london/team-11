import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { PowerTranslator, ProviderTypes, Translation } from 'react-native-power-translator';
import { Button } from 'react-native-elements';

/**
 * Main component of Power Translator module.
 * Translate the text and return the view.
 * The source and target language can be specified through the Translation service.
 */
export default class PowerButton extends React.Component {
    translatedText;

    static propTypes = {
      /**
         * text is the prop which pass to the translator service 
         * to translate into target language
         */
      title: PropTypes.string.isRequired,

      /**
         * onTranslationStart is a function callback which trigger 
         * when the translation is start
         */
      onTranslationStart: PropTypes.func,

      /**
         * onTranslationDone is a function callback which trigger 
         * when the translation is done
         */
      onTranslationEnd: PropTypes.func,

      /**
         * style of the translated text. 
         * all the styles for Text component is valid.
         */
      style: PropTypes.object,
    }

    static defaultProps = {
      text: '',
      style: {},
      onTranslationStart: () => { },
      onTranslationEnd: () => { },
    }

    constructor(props) {
      super(props);
      this.state = {
        translatedText: '',
      };
    }

    componentDidMount() {
      this.getTranslation();
    }

    componentWillReceiveProps() {
      this.getTranslation();
    }

    getTranslation() {
      this.props.onTranslationStart();

      Translation.get(this.props.title).then((translated) => {
        this.setState({ translatedText: translated }, () => {
          this.props.onTranslationEnd();
        });
      });
    }

    render() {
      return (
        <Button
          style={this.props.style}
          backgroundColor='#FF8E00'
          borderRadius={this.props.borderRadius}
          padding={this.props.padding}
          margin={this.props.margin}
          width={this.props.width}
          onPress={this.props.onPress}
          title={this.state.translatedText}
          fontSize={this.props.fontSize}
          large={this.props.large}
        />

      );
    }
}

module.exports = PowerButton;