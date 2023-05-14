import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Button, ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import {
  Image,
  Text,
  TextInput,
  View,
  useWindowDimensions,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const SignUpScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;
  const { navigation } = props;

  const [textInputValue, setTextInputValue] = React.useState('');
  const [textInputValue2, setTextInputValue2] = React.useState('');
  const [textInputValue3, setTextInputValue3] = React.useState('');

  return (
    <ScreenContainer
      style={StyleSheet.applyWidth(
        { backgroundColor: theme.colors['App Green'] },
        dimensions.width
      )}
      scrollable={true}
      hasBottomSafeArea={false}
      hasSafeArea={true}
    >
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            backgroundColor: theme.colors['App Green'],
            height: '20%',
            justifyContent: 'center',
          },
          dimensions.width
        )}
      >
        <Text
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
              color: theme.colors['Custom Color_4'],
              fontSize: 32,
            }),
            dimensions.width
          )}
        >
          {'Sign up'}
        </Text>
      </View>

      <KeyboardAwareScrollView
        contentContainerStyle={StyleSheet.applyWidth(
          { flex: 1 },
          dimensions.width
        )}
        showsVerticalScrollIndicator={true}
        keyboardShouldPersistTaps={'never'}
      >
        {/* Form */}
        <View
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors['Background'],
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              flex: 1,
              overflow: 'hidden',
              paddingBottom: 20,
              paddingLeft: 20,
              paddingRight: 20,
              paddingTop: 20,
            },
            dimensions.width
          )}
        >
          {/* Name */}
          <View
            style={StyleSheet.applyWidth({ marginTop: 20 }, dimensions.width)}
          >
            {/* Label */}
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Custom Color'],
                  fontFamily: 'Poppins_400Regular',
                  fontSize: 12,
                },
                dimensions.width
              )}
            >
              {'Name'}
            </Text>
            <TextInput
              onChangeText={newTextInputValue => {
                try {
                  setTextInputValue(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={StyleSheet.applyWidth(
                {
                  borderBottomWidth: 1,
                  borderColor: theme.colors['Border Color'],
                  borderLeftWidth: 1,
                  borderRadius: 10,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  color: theme.colors['Custom Color'],
                  fontFamily: 'Poppins_400Regular',
                  fontSize: 12,
                  height: 48,
                  marginTop: 10,
                  paddingBottom: 8,
                  paddingLeft: 15,
                  paddingRight: 8,
                  paddingTop: 8,
                },
                dimensions.width
              )}
              value={textInputValue}
              placeholder={'Arvind Limba'}
              editable={true}
              placeholderTextColor={theme.colors['Border Color']}
            />
          </View>
          {/* Email */}
          <View
            style={StyleSheet.applyWidth({ marginTop: 20 }, dimensions.width)}
          >
            {/* Label */}
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Custom Color'],
                  fontFamily: 'Poppins_400Regular',
                  fontSize: 12,
                },
                dimensions.width
              )}
            >
              {'Email'}
            </Text>
            <TextInput
              onChangeText={newTextInputValue => {
                try {
                } catch (err) {
                  console.error(err);
                }
              }}
              style={StyleSheet.applyWidth(
                {
                  borderBottomWidth: 1,
                  borderColor: theme.colors['Border Color'],
                  borderLeftWidth: 1,
                  borderRadius: 10,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  color: theme.colors['Custom Color'],
                  fontFamily: 'Poppins_400Regular',
                  fontSize: 12,
                  height: 48,
                  marginTop: 10,
                  paddingBottom: 8,
                  paddingLeft: 15,
                  paddingRight: 8,
                  paddingTop: 8,
                },
                dimensions.width
              )}
              placeholder={'alimba@draftbit.com'}
              editable={true}
              placeholderTextColor={theme.colors['Border Color']}
            />
          </View>
          {/* Password */}
          <View
            style={StyleSheet.applyWidth({ marginTop: 20 }, dimensions.width)}
          >
            {/* Label */}
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Custom Color'],
                  fontFamily: 'Poppins_400Regular',
                  fontSize: 12,
                },
                dimensions.width
              )}
            >
              {'Password'}
            </Text>
            <TextInput
              onChangeText={newTextInputValue => {
                try {
                } catch (err) {
                  console.error(err);
                }
              }}
              style={StyleSheet.applyWidth(
                {
                  borderBottomWidth: 1,
                  borderColor: theme.colors['Border Color'],
                  borderLeftWidth: 1,
                  borderRadius: 10,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  color: theme.colors['Custom Color'],
                  fontFamily: 'Poppins_400Regular',
                  fontSize: 12,
                  height: 48,
                  marginTop: 10,
                  paddingBottom: 8,
                  paddingLeft: 15,
                  paddingRight: 8,
                  paddingTop: 8,
                },
                dimensions.width
              )}
              placeholder={'********'}
              editable={true}
              placeholderTextColor={theme.colors['Border Color']}
              secureTextEntry={true}
            />
          </View>
          {/* Sign up */}
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
                borderRadius: 8,
                fontFamily: 'Poppins_600SemiBold',
                height: 50,
                marginTop: 30,
                textAlign: 'center',
              },
              dimensions.width
            )}
            title={'Register'}
          />
          {/* Continue with existing account? */}
          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'center' },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Custom Color'],
                  fontFamily: 'Poppins_400Regular',
                  fontSize: 12,
                  marginTop: 30,
                },
                dimensions.width
              )}
            >
              {'Continue with the existing account?'}
            </Text>
          </View>
          {/* Social Options */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 25,
              },
              dimensions.width
            )}
          >
            <Touchable
              style={StyleSheet.applyWidth({ width: '31%' }, dimensions.width)}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    borderBottomWidth: 1,
                    borderColor: theme.colors['Border Color'],
                    borderLeftWidth: 1,
                    borderRadius: 12,
                    borderRightWidth: 1,
                    borderTopWidth: 1,
                    height: 60,
                    justifyContent: 'center',
                  },
                  dimensions.width
                )}
              >
                <Image
                  style={StyleSheet.applyWidth(
                    { height: 24, width: 24 },
                    dimensions.width
                  )}
                  resizeMode={'cover'}
                  source={Images.Google}
                />
              </View>
            </Touchable>

            <Touchable
              style={StyleSheet.applyWidth({ width: '31%' }, dimensions.width)}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    borderBottomWidth: 1,
                    borderColor: theme.colors['Border Color'],
                    borderLeftWidth: 1,
                    borderRadius: 12,
                    borderRightWidth: 1,
                    borderTopWidth: 1,
                    height: 60,
                    justifyContent: 'center',
                  },
                  dimensions.width
                )}
              >
                <Image
                  style={StyleSheet.applyWidth(
                    { height: 24, width: 24 },
                    dimensions.width
                  )}
                  resizeMode={'cover'}
                  source={Images.Apple}
                />
              </View>
            </Touchable>

            <Touchable
              style={StyleSheet.applyWidth({ width: '31%' }, dimensions.width)}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    borderBottomWidth: 1,
                    borderColor: theme.colors['Border Color'],
                    borderLeftWidth: 1,
                    borderRadius: 12,
                    borderRightWidth: 1,
                    borderTopWidth: 1,
                    height: 60,
                    justifyContent: 'center',
                  },
                  dimensions.width
                )}
              >
                <Image
                  style={StyleSheet.applyWidth(
                    { height: 24, width: 24 },
                    dimensions.width
                  )}
                  resizeMode={'cover'}
                  source={Images.FB}
                />
              </View>
            </Touchable>
          </View>
          {/* Already have an account  */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 30,
              },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Custom Color'],
                  fontFamily: 'Poppins_400Regular',
                  fontSize: 12,
                },
                dimensions.width
              )}
            >
              {'Already have an account?'}
            </Text>

            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('LoginScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
              style={StyleSheet.applyWidth({ marginLeft: 8 }, dimensions.width)}
            >
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors['App Green'],
                    fontFamily: 'Poppins_400Regular',
                    fontSize: 12,
                  },
                  dimensions.width
                )}
              >
                {'Log in'}
              </Text>
            </Touchable>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

export default withTheme(SignUpScreen);
