import React from 'react';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Button,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View, useWindowDimensions } from 'react-native';

const EnableLocationScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;
  const { navigation } = props;

  const [checkboxRowValue, setCheckboxRowValue] = React.useState('');

  return (
    <ScreenContainer
      style={StyleSheet.applyWidth(
        { justifyContent: 'space-between' },
        dimensions.width
      )}
      hasSafeArea={true}
      scrollable={false}
      hasTopSafeArea={false}
    >
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          { alignItems: 'center', flexDirection: 'row', paddingLeft: 10 },
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
          <Touchable>
            <Icon size={24} name={'AntDesign/arrowleft'} />
          </Touchable>
        </View>
      </View>

      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flex: 1,
            justifyContent: 'center',
            paddingBottom: 5,
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 16,
          },
          dimensions.width
        )}
      >
        {/* Pin */}
        <Image
          style={StyleSheet.applyWidth(
            { height: 130, width: 130 },
            dimensions.width
          )}
          resizeMode={'cover'}
          source={Images.Pin}
        />
        {/* Enable Location */}
        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors['App Green'],
              fontFamily: 'Poppins_700Bold',
              fontSize: 35,
              marginLeft: 40,
              marginRight: 40,
              marginTop: 50,
              textAlign: 'center',
            },
            dimensions.width
          )}
        >
          {'Enable \nLocation'}
        </Text>

        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors['Custom Color_8'],
              fontFamily: 'Poppins_400Regular',
              fontSize: 15,
              marginLeft: 40,
              marginRight: 40,
              marginTop: 30,
              textAlign: 'center',
            },
            dimensions.width
          )}
        >
          {'Please enable your location for using the app smoothly'}
        </Text>
      </View>
      {/* Clicks */}
      <View>
        {/* Allow Location */}
        <Button
          onPress={() => {
            try {
              navigation.navigate('RootNavigator');
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors['App Green'],
              borderRadius: 24,
              fontFamily: 'Poppins_500Medium',
              fontSize: 17,
              height: 48,
              marginBottom: 25,
              marginLeft: 40,
              marginRight: 40,
              marginTop: 25,
              textAlign: 'center',
            },
            dimensions.width
          )}
          title={'Allow Location'}
        />
        {/* May be later */}
        <Touchable
          style={StyleSheet.applyWidth({ marginBottom: 10 }, dimensions.width)}
        >
          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'center', height: 48, justifyContent: 'center' },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Custom Color'],
                  fontFamily: 'Poppins_400Regular',
                  fontSize: 13,
                  textDecorationLine: 'underline',
                },
                dimensions.width
              )}
            >
              {'May be later'}
            </Text>
          </View>
        </Touchable>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(EnableLocationScreen);
