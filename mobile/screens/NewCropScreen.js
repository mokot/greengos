import React from 'react';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import openImagePickerUtil from '../utils/openImagePicker';
import {
  Button,
  CheckboxRow,
  Circle,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  View,
  useWindowDimensions,
} from 'react-native';

const NewCropScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;
  const { navigation } = props;

  const [checkboxRowValue, setCheckboxRowValue] = React.useState('');
  const [textAreaValue, setTextAreaValue] = React.useState('');

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      {/* Header */}
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
          {'New Post'}
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

      <ScrollView showsVerticalScrollIndicator={true} bounces={true}>
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
                <Circle size={30} bgColor={theme.colors['Social Orange']}>
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
          <TextInput
            onChangeText={newTextAreaValue => {
              try {
                setTextAreaValue(newTextAreaValue);
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              {
                borderRadius: 8,
                color: theme.colors['Custom Color_35'],
                fontFamily: 'Poppins_500Medium',
                fontSize: 18,
                height: 120,
                marginTop: 20,
                paddingBottom: 8,
                paddingTop: 8,
              },
              dimensions.width
            )}
            value={textAreaValue}
            placeholder={'What you want to say?'}
            editable={true}
            textAlignVertical={'top'}
            multiline={true}
            numberOfLines={4}
            placeholderTextColor={theme.colors['Custom Color_35']}
          />
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
                {'Tag people'}
              </Text>
            </Touchable>
          </View>

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
                {'Add music'}
              </Text>
            </Touchable>
          </View>

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
                {'Feeling or activity'}
              </Text>
            </Touchable>
          </View>
        </View>
        {/* Share Options */}
        <View
          style={StyleSheet.applyWidth(
            { marginTop: 40, paddingLeft: 20 },
            dimensions.width
          )}
        >
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors['Custom Color_30'],
                fontFamily: 'Poppins_400Regular',
                fontSize: 12,
                marginBottom: 10,
              },
              dimensions.width
            )}
          >
            {'Share to'}
          </Text>

          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
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
              source={Images.Fbicon}
            />
            <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
              <CheckboxRow
                onPress={newCheckboxRowValue => {
                  try {
                    setCheckboxRowValue(newCheckboxRowValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors['Custom Color'],
                    fontFamily: 'Poppins_400Regular',
                    fontSize: 12,
                    minHeight: 50,
                  },
                  dimensions.width
                )}
                value={checkboxRowValue}
                label={'Facebook'}
                uncheckedColor={theme.colors['Custom Color_34']}
                color={theme.colors['Social Orange']}
              />
            </View>
          </View>

          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
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
              source={Images.Insta}
            />
            <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
              <CheckboxRow
                onPress={newCheckboxRowValue => {
                  try {
                    setCheckboxRowValue(newCheckboxRowValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors['Custom Color'],
                    fontFamily: 'Poppins_400Regular',
                    fontSize: 12,
                    minHeight: 50,
                  },
                  dimensions.width
                )}
                label={'Instagram'}
                uncheckedColor={theme.colors['Custom Color_34']}
                color={theme.colors['Social Orange']}
              />
            </View>
          </View>

          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
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
              source={Images.Twitter}
            />
            <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
              <CheckboxRow
                onPress={newCheckboxRowValue => {
                  try {
                    setCheckboxRowValue(newCheckboxRowValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors['Custom Color'],
                    fontFamily: 'Poppins_400Regular',
                    fontSize: 12,
                    minHeight: 50,
                  },
                  dimensions.width
                )}
                label={'Twitter'}
                uncheckedColor={theme.colors['Custom Color_34']}
                color={theme.colors['Social Orange']}
              />
            </View>
          </View>
        </View>
        {/* Post Now */}
        <Button
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors['Social Orange'],
              borderRadius: 8,
              color: theme.colors['Custom Color'],
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
          title={'Post Now'}
        />
      </ScrollView>
    </ScreenContainer>
  );
};

export default withTheme(NewCropScreen);
