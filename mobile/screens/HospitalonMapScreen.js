import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { MapMarker, MapView } from '@draftbit/maps';
import {
  Button,
  Circle,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import {
  Image,
  Text,
  TextInput,
  View,
  useWindowDimensions,
} from 'react-native';

const HospitalonMapScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;
  const { navigation } = props;

  const [switchValue, setSwitchValue] = React.useState(false);
  const [textInputValue, setTextInputValue] = React.useState('');
  const [textInputValue2, setTextInputValue2] = React.useState('');

  const mapViewyb7G8NVwRef = React.useRef();

  return (
    <ScreenContainer
      style={StyleSheet.applyWidth(
        { justifyContent: 'space-between' },
        dimensions.width
      )}
      scrollable={false}
      hasBottomSafeArea={false}
      hasTopSafeArea={false}
      hasSafeArea={true}
    >
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          {
            backgroundColor: theme.colors['Custom Color'],
            borderBottomLeftRadius: 24,
            borderBottomRightRadius: 24,
            flexDirection: 'column',
            height: 72,
            justifyContent: 'space-between',
            paddingLeft: 16,
            paddingRight: 16,
          },
          dimensions.width
        )}
      >
        {/* Left View */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flex: 1,
              flexDirection: 'row',
              height: 48,
              justifyContent: 'center',
            },
            dimensions.width
          )}
        >
          {/* Back */}
          <Touchable
            onPress={() => {
              try {
                navigation.goBack();
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  borderBottomWidth: 1,
                  borderColor: theme.colors['Divider'],
                  borderLeftWidth: 1,
                  borderRadius: 10,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  height: 48,
                  width: 48,
                },
                dimensions.width
              )}
            >
              <Circle size={50}>
                <Icon
                  size={24}
                  name={'Ionicons/arrow-back-sharp'}
                  color={theme.colors['Strong']}
                />
              </Circle>
            </View>
          </Touchable>
          {/* Address */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                borderBottomWidth: 1,
                borderColor: theme.colors['Divider'],
                borderLeftWidth: 1,
                borderRadius: 10,
                borderRightWidth: 1,
                borderTopWidth: 1,
                flex: 1,
                flexDirection: 'row',
                marginLeft: 8,
                paddingLeft: 12,
              },
              dimensions.width
            )}
          >
            <Icon
              size={24}
              name={'Ionicons/search-outline'}
              color={theme.colors['Light']}
            />
            <View
              style={StyleSheet.applyWidth(
                { flex: 1, paddingLeft: 8, paddingRight: 8 },
                dimensions.width
              )}
            >
              <TextInput
                style={StyleSheet.applyWidth(
                  {
                    borderRadius: 8,
                    height: 48,
                    paddingBottom: 8,
                    paddingLeft: 8,
                    paddingRight: 8,
                    paddingTop: 8,
                  },
                  dimensions.width
                )}
                autoCapitalize={'none'}
                placeholder={'Enter a value...'}
                defaultValue={'Jl. Prapatan No 26, Labuan, Malang'}
              />
            </View>
          </View>
        </View>
      </View>
      {/* Map */}
      <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
        <MapView
          style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}
          longitude={-122.12125}
          latitude={37.40241}
          zoomEnabled={true}
          rotateEnabled={true}
          scrollEnabled={true}
          loadingEnabled={true}
          showsPointsOfInterest={true}
          showsUserLocation={true}
          showsCompass={true}
          followsUserLocation={true}
          zoom={15}
          apiKey={'AIzaSyBzktToWosjNgrrUawZnbslB9NSXSXCkwo'}
          ref={mapViewyb7G8NVwRef}
        >
          <MapMarker
            longitude={-122.1228}
            title={'Draftbit'}
            latitude={37.4078}
            pinColor={theme.colors['Primary']}
          />
        </MapView>
      </View>
      {/* Hospital Details */}
      <View
        style={StyleSheet.applyWidth(
          {
            backgroundColor: theme.colors['Custom Color'],
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            bottom: 0,
            flexDirection: 'column',
            justifyContent: 'space-between',
            left: 0,
            marginTop: 10,
            paddingBottom: 20,
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 20,
            position: 'absolute',
            right: 0,
          },
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              backgroundColor: theme.colors['Custom Color'],
              borderRadius: 12,
              flexDirection: 'row',
              height: 104,
              marginBottom: 20,
              paddingLeft: 12,
            },
            dimensions.width
          )}
        >
          <Image
            style={StyleSheet.applyWidth(
              { borderRadius: 4, height: 80, width: 80 },
              dimensions.width
            )}
            resizeMode={'cover'}
            source={{ uri: 'https://picsum.photos/64' }}
          />
          <View
            style={StyleSheet.applyWidth(
              { flex: 1, marginLeft: 15 },
              dimensions.width
            )}
          >
            {/* Name */}
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_500Medium',
                  fontSize: 16,
                },
                dimensions.width
              )}
            >
              {'Medika Husada Hospital'}
            </Text>
            {/* Address */}
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_300Light',
                  fontSize: 12,
                  marginTop: 5,
                  opacity: 0.7,
                },
                dimensions.width
              )}
            >
              {'Jl. Prapatan No 26, Labuan, Malang'}
            </Text>
            {/* Distance */}
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flexDirection: 'row', marginTop: 12 },
                dimensions.width
              )}
            >
              <Icon
                size={20}
                color={theme.colors['Primary']}
                name={'FontAwesome/location-arrow'}
              />
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors['Primary'],
                    fontFamily: 'Inter_400Regular',
                    fontSize: 13,
                    marginLeft: 5,
                  },
                  dimensions.width
                )}
              >
                {'1,2 KM'}
              </Text>
            </View>
          </View>
        </View>
        {/* Actions */}
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
          {/* Call */}
          <Button
            style={StyleSheet.applyWidth(
              {
                backgroundColor: theme.colors.primary,
                borderRadius: 8,
                fontFamily: 'Inter_400Regular',
                fontSize: 16,
                textAlign: 'center',
                width: '45%',
              },
              dimensions.width
            )}
            activeOpacity={0.8}
            disabledOpacity={0.8}
            icon={'Ionicons/call-outline'}
            title={' Call '}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(HospitalonMapScreen);
