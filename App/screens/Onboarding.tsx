import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Button} from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: '#9fc85b',
    textAlign: 'center',
  },
  logo: {
    color: 'white',
    fontSize: 56,
    textAlign: 'center',
    fontFamily: 'Ubuntu-R',
  },
  subtitle: {
    color: 'white',
    fontSize: 18,
    paddingTop: 12,
    paddingBottom: 8,
    textAlign: 'center',
    fontFamily: 'Ubuntu-R',
  },
  shield: {
    marginTop: 24,
    marginBottom: 24,
    textAlign: 'center',
    backgroundColor: 'white',
    width: 120,
    height: 130,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 80,
  },
  explanation: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    paddingTop: 12,
    paddingBottom: 38,
    fontFamily: 'Ubuntu-R',
  },
  bottomButtonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 16,
  },
  buttonHow: {
    backgroundColor: 'white',
    borderRadius: 6,
  },
  buttonHowTitle: {
    color: '#9fc85b',
    letterSpacing: 2,
    textTransform: 'uppercase',
    fontSize: 14,
    fontFamily: 'Ubuntu-M',
  },
});

export class Onboarding extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>ito</Text>
        <Text style={styles.subtitle}>privacy-first infection tracking</Text>
        <View style={styles.shield} />
        <Text style={styles.explanation}>
          protect yourself and {'\n'}
          the people surrounding you {'\n'}
          {'\n'}
          ito doesn't track any personal {'\n'}
          or location data {'\n'}- {'\n'}
          we just need to know {'\n'}
          about your health status
        </Text>
        <View style={styles.bottomButtonContainer}>
          <Button
            title="How does this work?"
            onPress={() => this.props.navigation.navigate('OnboardingHow')}
            titleStyle={styles.buttonHowTitle}
            buttonStyle={styles.buttonHow}
          />
        </View>
      </View>
    );
  }
}
