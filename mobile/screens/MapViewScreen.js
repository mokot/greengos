import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { MapView } from '@draftbit/maps';
import { Button, ScreenContainer, withTheme } from '@draftbit/ui';
import { View, useWindowDimensions } from 'react-native';

const MapViewScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;

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
        />
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
        {/* Actions */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flexDirection: 'row',
              height: 48,
              justifyContent: 'center',
            },
            dimensions.width
          )}
        >
          {/* Call */}
          <Button
            style={StyleSheet.applyWidth(
              {
                backgroundColor: theme.colors['App Green'],
                borderColor: theme.colors['App Green'],
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
            icon={'Entypo/location'}
            title={'Save Location'}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(MapViewScreen);
