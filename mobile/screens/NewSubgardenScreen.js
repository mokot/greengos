import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as APIApi from '../apis/APIApi.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import openImagePickerUtil from '../utils/openImagePicker';
import {
  Button,
  Circle,
  Icon,
  NumberInput,
  Picker,
  ScreenContainer,
  Spacer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  TextInput,
  View,
  useWindowDimensions,
} from 'react-native';
import { Fetch } from 'react-request';

const NewSubgardenScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;
  const { navigation } = props;

  const [checkboxRowValue, setCheckboxRowValue] = React.useState('');
  const [numberInput2Value, setNumberInput2Value] = React.useState('');
  const [numberInputValue, setNumberInputValue] = React.useState('');
  const [pickerValue, setPickerValue] = React.useState([
    { label: 'Active', value: 'active' },
    { label: 'Needs work', value: 'Needs work' },
    { label: 'Empty', value: 'Empty' },
  ]);
  const [popupVisible, setPopupVisible] = React.useState(false);
  const [statusVariables, setStatusVariables] = React.useState([
    { label: 'Active', value: 'active' },
    { label: 'Needs work', value: 'Needs work' },
    { label: 'Empty', value: 'Empty' },
  ]);
  const [textAreaValue, setTextAreaValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      {/* Header */}
      <>
        {popupVisible ? null : (
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                height: 48,
                justifyContent: 'space-between',
              },
              dimensions.width
            )}
          >
            {/* Back */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  height: 48,
                  justifyContent: 'center',
                  width: 48,
                },
                dimensions.width
              )}
            >
              <Touchable
                onPress={() => {
                  try {
                    navigation.goBack();
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                <Icon
                  size={24}
                  name={'Ionicons/arrow-back'}
                  color={theme.colors['Custom Color']}
                />
              </Touchable>
            </View>

            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Custom Color'],
                  fontFamily: 'Poppins_500Medium',
                  fontSize: 20,
                  textAlign: 'center',
                },
                dimensions.width
              )}
            >
              {'New Subgarden'}
            </Text>
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  height: 48,
                  justifyContent: 'center',
                  width: 48,
                },
                dimensions.width
              )}
            />
          </View>
        )}
      </>
      <>
        {popupVisible ? null : (
          <ScrollView showsVerticalScrollIndicator={true} bounces={true}>
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  flexWrap: 'nowrap',
                  justifyContent: 'flex-start',
                  marginLeft: 20,
                  marginRight: 20,
                },
                dimensions.width
              )}
            >
              <Text
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                    marginRight: 5,
                  }),
                  dimensions.width
                )}
              >
                {'Subgarden name:'}
              </Text>
              <TextInput
                onChangeText={newTextInputValue => {
                  const textInputValue = newTextInputValue;
                  try {
                    setTextInputValue(newTextInputValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextInputStyles(theme)['Text Input'],
                    { width: 300 }
                  ),
                  dimensions.width
                )}
                value={textInputValue}
                autoCapitalize={'none'}
                placeholder={'Enter a value...'}
              />
            </View>
            {/* Post Content */}
            <View
              style={StyleSheet.applyWidth(
                { marginTop: 20, paddingLeft: 20, paddingRight: 20 },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', flexDirection: 'row' },
                  dimensions.width
                )}
              >
                <Touchable
                  onPress={() => {
                    const handler = async () => {
                      try {
                        await openImagePickerUtil({});
                      } catch (err) {
                        console.error(err);
                      }
                    };
                    handler();
                  }}
                >
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        borderBottomWidth: 1,
                        borderColor: theme.colors['Custom Color'],
                        borderLeftWidth: 1,
                        borderRadius: 5,
                        borderRightWidth: 1,
                        borderTopWidth: 1,
                        height: 60,
                        justifyContent: 'center',
                        width: 60,
                      },
                      dimensions.width
                    )}
                  >
                    <Circle size={30} bgColor={theme.colors['App Green']}>
                      <Icon
                        name={'AntDesign/plus'}
                        size={16}
                        color={theme.colors['Background']}
                      />
                    </Circle>
                  </View>
                </Touchable>
                <Image
                  style={StyleSheet.applyWidth(
                    { borderRadius: 5, height: 60, marginLeft: 15, width: 60 },
                    dimensions.width
                  )}
                  resizeMode={'cover'}
                  source={{ uri: 'https://picsum.photos/60' }}
                />
              </View>
            </View>
            {/* Actions */}
            <View
              style={StyleSheet.applyWidth(
                { paddingLeft: 20, paddingRight: 20 },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    borderBottomWidth: 1,
                    borderColor: theme.colors['Custom Color_34'],
                    height: 44,
                    justifyContent: 'center',
                  },
                  dimensions.width
                )}
              >
                <Touchable>
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors['Custom Color'],
                        fontFamily: 'Poppins_400Regular',
                        fontSize: 12,
                        lineHeight: 44,
                      },
                      dimensions.width
                    )}
                  >
                    {'Add location'}
                  </Text>
                </Touchable>
              </View>
            </View>

            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  flexWrap: 'nowrap',
                  justifyContent: 'flex-start',
                  marginLeft: 20,
                  marginRight: 20,
                },
                dimensions.width
              )}
            >
              <Text
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                    marginRight: 5,
                  }),
                  dimensions.width
                )}
              >
                {'Subgarden status:'}
              </Text>
              <Picker
                style={StyleSheet.applyWidth({ height: 40 }, dimensions.width)}
                options={pickerValue}
                placeholder={'Select an option'}
                leftIconMode={'inset'}
                type={'solid'}
                iconSize={24}
                autoDismissKeyboard={true}
              />
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    flexDirection: 'row',
                    flexWrap: 'nowrap',
                    justifyContent: 'flex-start',
                    marginLeft: 20,
                    marginRight: 20,
                  },
                  dimensions.width
                )}
              >
                <Text
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                      marginRight: 5,
                    }),
                    dimensions.width
                  )}
                >
                  {'Garden name:'}
                </Text>
                <TextInput
                  onChangeText={newTextInputValue => {
                    const textInputValue = newTextInputValue;
                    try {
                      setTextInputValue(newTextInputValue);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextInputStyles(theme)['Text Input'],
                      { width: 300 }
                    ),
                    dimensions.width
                  )}
                  autoCapitalize={'none'}
                  placeholder={'Enter a value...'}
                  value={textInputValue}
                />
              </View>
            </View>

            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  flexWrap: 'nowrap',
                  justifyContent: 'flex-start',
                  marginLeft: 20,
                  marginRight: 20,
                },
                dimensions.width
              )}
            >
              <Text
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                    marginRight: 5,
                  }),
                  dimensions.width
                )}
              >
                {'Subgarden width (m):'}
              </Text>
              {/* Number Input 2 */}
              <NumberInput
                onChangeText={newNumberInput2Value => {
                  const numberInputValue = newNumberInput2Value;
                  try {
                    setNumberInput2Value(newNumberInput2Value);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.NumberInputStyles(theme)['Number Input'],
                    { width: 300 }
                  ),
                  dimensions.width
                )}
                value={numberInput2Value}
                editable={true}
                placeholder={'Enter a number...'}
              />
            </View>

            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  flexWrap: 'nowrap',
                  justifyContent: 'flex-start',
                  marginLeft: 20,
                  marginRight: 20,
                },
                dimensions.width
              )}
            >
              <Text
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                    marginRight: 5,
                  }),
                  dimensions.width
                )}
              >
                {'Subgarden length (m):'}
              </Text>
              <NumberInput
                onChangeText={newNumberInputValue => {
                  const numberInputValue = newNumberInputValue;
                  try {
                    setNumberInputValue(newNumberInputValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.NumberInputStyles(theme)['Number Input'],
                    { width: 300 }
                  ),
                  dimensions.width
                )}
                value={numberInputValue}
                editable={true}
                placeholder={'Enter a number...'}
              />
            </View>
            <Spacer top={8} right={8} bottom={8} left={8} />
            {/* Post Now */}
            <Button
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors['App Green'],
                  borderRadius: 8,
                  color: theme.colors['Custom Color_15'],
                  fontFamily: 'Poppins_600SemiBold',
                  height: 50,
                  marginBottom: 20,
                  marginLeft: 20,
                  marginRight: 20,
                  marginTop: 50,
                  textAlign: 'center',
                },
                dimensions.width
              )}
              title={'Create Garden'}
            />
          </ScrollView>
        )}
      </>
    </ScreenContainer>
  );
};

export default withTheme(NewSubgardenScreen);
