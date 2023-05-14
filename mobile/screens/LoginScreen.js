import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Button,
  Divider,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Text, TextInput, View, useWindowDimensions } from 'react-native';

const LoginScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;
  const { navigation } = props;

  const [textInputValue, setTextInputValue] = React.useState('');
  const [textInputValue2, setTextInputValue2] = React.useState('');

  return (
    <ScreenContainer
      style={StyleSheet.applyWidth(
        { justifyContent: 'space-between' },
        dimensions.width
      )}
      scrollable={false}
      hasSafeArea={true}
      hasTopSafeArea={false}
    >
      <View
        style={StyleSheet.applyWidth(
          { flex: 1, paddingLeft: 30, paddingRight: 30, paddingTop: 20 },
          dimensions.width
        )}
      >
        {/* Heading */}
        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors['App Green'],
              fontFamily: 'Poppins_700Bold',
              fontSize: 35,
              marginBottom: 10,
            },
            dimensions.width
          )}
        >
          {'Log into\nyour account'}
        </Text>
        {/* Email */}
        <TextInput
          onChangeText={newEmailValue => {
            try {
              setTextInputValue(newEmailValue);
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors['Custom Color_3'],
              borderBottomWidth: 1,
              borderColor: theme.colors.divider,
              borderLeftWidth: 1,
              borderRadius: 24,
              borderRightWidth: 1,
              borderTopWidth: 1,
              fontFamily: 'Poppins_400Regular',
              fontSize: 15,
              height: 48,
              marginTop: 10,
              paddingBottom: 8,
              paddingLeft: 20,
              paddingRight: 20,
              paddingTop: 8,
            },
            dimensions.width
          )}
          value={textInputValue}
          placeholder={'Email'}
          editable={true}
          placeholderTextColor={theme.colors['Light']}
        />
        {/* Password */}
        <TextInput
          onChangeText={newPasswordValue => {
            try {
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors['Custom Color_3'],
              borderBottomWidth: 1,
              borderColor: theme.colors.divider,
              borderLeftWidth: 1,
              borderRadius: 24,
              borderRightWidth: 1,
              borderTopWidth: 1,
              fontFamily: 'Poppins_400Regular',
              fontSize: 15,
              height: 48,
              marginTop: 15,
              paddingBottom: 8,
              paddingLeft: 20,
              paddingRight: 20,
              paddingTop: 8,
            },
            dimensions.width
          )}
          placeholder={'Password'}
          editable={true}
          secureTextEntry={true}
          placeholderTextColor={theme.colors['Light']}
        />
        {/* Forgot Password */}
        <Touchable
          style={StyleSheet.applyWidth(
            { marginTop: 30, width: '45%' },
            dimensions.width
          )}
        >
          {/* Forgot Password */}
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors['Custom Color'],
                fontFamily: 'Poppins_400Regular',
                fontSize: 13,
                paddingBottom: 10,
                paddingTop: 10,
                textAlign: 'left',
                textDecorationLine: 'underline',
              },
              dimensions.width
            )}
          >
            {'Forgot Password?'}
          </Text>
        </Touchable>
        {/* Login */}
        <Button
          onPress={() => {
            try {
              navigation.navigate('StartScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors['App Green'],
              borderRadius: 24,
              color: theme.colors['Custom Color_4'],
              fontFamily: 'Poppins_500Medium',
              fontSize: 17,
              height: 46,
              marginTop: 35,
              textAlign: 'center',
            },
            dimensions.width
          )}
          title={'Login'}
        />
        {/* OR */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 35,
            },
            dimensions.width
          )}
        >
          <Divider
            style={StyleSheet.applyWidth(
              { height: 2, width: '40%' },
              dimensions.width
            )}
            color={theme.colors['Divider']}
          />
          {/* or */}
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.strong,
                fontFamily: 'Poppins_500Medium',
                fontSize: 17,
              },
              dimensions.width
            )}
          >
            {'or'}
          </Text>
          <Divider
            style={StyleSheet.applyWidth(
              { height: 2, width: '40%' },
              dimensions.width
            )}
            color={theme.colors['Divider']}
          />
        </View>
        {/* Sign Up with Email */}
        <Button
          onPress={() => {
            try {
              navigation.navigate('SignUpScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors['Custom Color_4'],
              borderBottomWidth: 1,
              borderColor: theme.colors['App Green'],
              borderLeftWidth: 1,
              borderRadius: 24,
              borderRightWidth: 1,
              borderTopWidth: 1,
              color: theme.colors['App Green'],
              fontFamily: 'Poppins_500Medium',
              fontSize: 17,
              height: 46,
              marginTop: 35,
              textAlign: 'center',
            },
            dimensions.width
          )}
          title={'Sign Up with Email'}
        />
      </View>
      {/* Terms */}
      <Touchable
        style={StyleSheet.applyWidth({ marginTop: 25 }, dimensions.width)}
      >
        {/* Term of use & Privacy policy */}
        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors['Custom Color'],
              fontFamily: 'Poppins_400Regular',
              fontSize: 13,
              paddingBottom: 10,
              paddingTop: 10,
              textAlign: 'center',
            },
            dimensions.width
          )}
        >
          {'Term of use & Privacy policy'}
        </Text>
      </Touchable>
    </ScreenContainer>
  );
};

export default withTheme(LoginScreen);
