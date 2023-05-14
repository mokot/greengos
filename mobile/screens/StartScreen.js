import React from 'react';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Button, Icon, ScreenContainer, withTheme } from '@draftbit/ui';
import {
  Image,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';

const StartScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer
      style={StyleSheet.applyWidth(
        { backgroundColor: theme.colors.strongInverse },
        dimensions.width
      )}
      hasSafeArea={true}
      scrollable={true}
    >
      <ScrollView
        contentContainerStyle={StyleSheet.applyWidth(
          { flex: 1, justifyContent: 'space-evenly' },
          dimensions.width
        )}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <View
          style={StyleSheet.applyWidth(
            {
              flex: 1,
              justifyContent: 'space-evenly',
              marginBottom: 32,
              marginLeft: 32,
              marginRight: 32,
              marginTop: 32,
            },
            dimensions.width
          )}
        >
          {/* LogoView */}
          <View
            style={StyleSheet.applyWidth(
              {
                backgroundColor: theme.colors['App Green'],
                borderRadius: 50,
                height: 50,
                width: 50,
              },
              dimensions.width
            )}
          >
            {/* app-logo */}
            <Image
              style={StyleSheet.applyWidth(
                {
                  borderColor: theme.colors['App Green'],
                  height: 50,
                  width: 50,
                },
                dimensions.width
              )}
              resizeMode={'contain'}
              source={Images.AppIcon}
            />
          </View>

          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'flex-start' },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'System',
                  fontSize: 48,
                  fontWeight: '700',
                },
                dimensions.width
              )}
            >
              {'Welcome to Greengo'}
            </Text>
          </View>
          {/* Features View */}
          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'center', alignSelf: 'center' },
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'flex-start',
                  flexDirection: 'row',
                  marginBottom: 12,
                  marginTop: 12,
                },
                dimensions.width
              )}
            >
              <Icon
                style={StyleSheet.applyWidth(
                  { height: 34, marginRight: 14, width: 34 },
                  dimensions.width
                )}
                color={theme.colors.strong}
                size={24}
                name={'MaterialCommunityIcons/information'}
              />
              <View
                style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}
              >
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      typography: theme.typography.subtitle1,
                    },
                    dimensions.width
                  )}
                  allowFontScaling={true}
                >
                  {'Create your garden with garden beds to start'}
                </Text>
              </View>
            </View>

            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'flex-start',
                  flexDirection: 'row',
                  marginBottom: 12,
                  marginTop: 12,
                },
                dimensions.width
              )}
            >
              <Icon
                style={StyleSheet.applyWidth(
                  { height: 34, marginRight: 14, width: 34 },
                  dimensions.width
                )}
                name={'MaterialCommunityIcons/information'}
                size={24}
                color={theme.colors.strong}
              />
              <View
                style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}
              >
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      typography: theme.typography.subtitle1,
                    },
                    dimensions.width
                  )}
                  allowFontScaling={true}
                >
                  {
                    'Select which crops would you like to grow and receive the perfect layout to optimize growth'
                  }
                </Text>
              </View>
            </View>

            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'flex-start',
                  flexDirection: 'row',
                  marginBottom: 12,
                  marginTop: 12,
                },
                dimensions.width
              )}
            >
              <Icon
                style={StyleSheet.applyWidth(
                  { height: 34, marginRight: 14, width: 34 },
                  dimensions.width
                )}
                name={'MaterialCommunityIcons/information'}
                color={theme.colors.strong}
                size={24}
              />
              <View
                style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}
              >
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      typography: theme.typography.subtitle1,
                    },
                    dimensions.width
                  )}
                  allowFontScaling={true}
                >
                  {
                    'Monitor and grow your garden with custom review, tips and reminders'
                  }
                </Text>
              </View>
            </View>
          </View>

          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'center' },
              dimensions.width
            )}
          >
            {/* Button Solid */}
            <Button
              onPress={() => {
                try {
                  navigation.navigate('BottomTabNavigator');
                } catch (err) {
                  console.error(err);
                }
              }}
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors['App Green'],
                  borderRadius: 8,
                  fontFamily: 'System',
                  fontWeight: '700',
                  height: 50,
                  marginBottom: 12,
                  textAlign: 'center',
                  width: '100%',
                },
                dimensions.width
              )}
              title={'Continue'}
            />
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

export default withTheme(StartScreen);
