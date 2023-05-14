import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as APIApi from '../apis/APIApi.js';
import * as WeatherAPIApi from '../apis/WeatherAPIApi.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useIsOnline from '../utils/useIsOnline';
import { MapMarker, MapView } from '@draftbit/maps';
import {
  Button,
  Divider,
  Icon,
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
  ImageBackground,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { Fetch } from 'react-request';

const GardenDetailViewScreen_6Fi5ZXwW = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;
  const { navigation } = props;
  const isOnline = useIsOnline();

  const mapViewwIaDAHIXRef = React.useRef();

  return (
    <ScreenContainer
      style={StyleSheet.applyWidth(
        { alignItems: 'center', backgroundColor: theme.colors['Background'] },
        dimensions.width
      )}
      hasTopSafeArea={true}
      hasSafeArea={false}
      scrollable={true}
    >
      {/* BackHeader */}
      <View
        style={StyleSheet.applyWidth(
          GlobalStyles.ViewStyles(theme)['BackHeader'],
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
            <Icon size={24} name={'AntDesign/arrowleft'} />
          </Touchable>
        </View>
        {/* Screen Heading */}
        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors.strong,
              fontFamily: 'Poppins_400Regular',
              fontSize: 15,
            },
            dimensions.width
          )}
        >
          {'Garden details'}
        </Text>
        {/* Blank */}
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

      <APIApi.FetchFetchGardenByIdGET
        method={'GET'}
        garden_id={props.route?.params?.garden_id ?? 1}
      >
        {({ loading, error, data, refetchFetchGardenById }) => {
          const fetchData = data;
          if (!fetchData || loading) {
            return <ActivityIndicator />;
          }

          if (error) {
            return (
              <Text style={{ textAlign: 'center' }}>
                There was a problem fetching this data
              </Text>
            );
          }

          return (
            <>
              <View
                style={StyleSheet.applyWidth(
                  { height: 420, width: '100%' },
                  dimensions.width
                )}
              >
                <ImageBackground
                  style={StyleSheet.applyWidth(
                    {
                      height: '100%',
                      justifyContent: 'flex-end',
                      width: '100%',
                    },
                    dimensions.width
                  )}
                  source={{ uri: `${(fetchData && fetchData[0])?.image}` }}
                  resizeMode={'cover'}
                >
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        paddingBottom: 24,
                        paddingLeft: 24,
                        paddingRight: 24,
                        paddingTop: 24,
                      },
                      dimensions.width
                    )}
                  />
                </ImageBackground>
              </View>

              <View>
                <View
                  style={StyleSheet.applyWidth(
                    {
                      paddingBottom: 24,
                      paddingLeft: 24,
                      paddingRight: 24,
                      paddingTop: 24,
                    },
                    dimensions.width
                  )}
                >
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors.strong,
                        fontFamily: 'Poppins_600SemiBold',
                        fontSize: 22,
                      },
                      dimensions.width
                    )}
                    textBreakStrategy={'highQuality'}
                    ellipsizeMode={'tail'}
                    allowFontScaling={true}
                    numberOfLines={2}
                  >
                    {(fetchData && fetchData[0])?.name}
                  </Text>
                  <Spacer top={8} right={8} bottom={8} left={8} />
                  <View>
                    <View
                      style={StyleSheet.applyWidth(
                        { flexDirection: 'row' },
                        dimensions.width
                      )}
                    >
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'center',
                            alignSelf: 'stretch',
                            backgroundColor: theme.colors.surface,
                            borderBottomWidth: 1,
                            borderColor: theme.colors.divider,
                            borderLeftWidth: 1,
                            borderRadius: 8,
                            borderRightWidth: 1,
                            borderTopWidth: 1,
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            paddingBottom: 8,
                            paddingLeft: 8,
                            paddingRight: 8,
                            paddingTop: 8,
                          },
                          dimensions.width
                        )}
                      >
                        <Icon
                          size={24}
                          name={'Ionicons/md-earth-sharp'}
                          color={theme.colors['App Green']}
                        />
                        <Spacer right={2} left={2} />
                        <Text
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors.medium,
                              fontFamily: 'Poppins_400Regular',
                              fontSize: 12,
                            },
                            dimensions.width
                          )}
                        >
                          {(fetchData && fetchData[0])?.num_crops}
                          {' crops'}
                        </Text>
                      </View>
                      <Spacer top={8} right={6} bottom={8} left={6} />
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'center',
                            alignSelf: 'stretch',
                            backgroundColor: theme.colors.surface,
                            borderBottomWidth: 1,
                            borderColor: theme.colors.divider,
                            borderLeftWidth: 1,
                            borderRadius: 8,
                            borderRightWidth: 1,
                            borderTopWidth: 1,
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            paddingBottom: 8,
                            paddingLeft: 8,
                            paddingRight: 8,
                            paddingTop: 8,
                          },
                          dimensions.width
                        )}
                      >
                        <Icon
                          size={20}
                          name={'MaterialCommunityIcons/fruit-grapes'}
                          color={theme.colors['App Green']}
                        />
                        <Spacer right={2} left={2} />
                        <Text
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors.medium,
                              fontFamily: 'Poppins_400Regular',
                              fontSize: 12,
                            },
                            dimensions.width
                          )}
                        >
                          {(fetchData && fetchData[0])?.num_plants}
                          {' types of plants'}
                        </Text>
                      </View>
                      <Spacer top={8} right={6} bottom={8} left={6} />
                    </View>
                  </View>
                  <Spacer top={12} right={8} bottom={12} left={8} />
                  {/* Crops percent list */}
                  <FlatList
                    data={(fetchData && fetchData[0])?.crops}
                    listKey={'1ZoChYk1'}
                    keyExtractor={cropsPercentListData =>
                      cropsPercentListData?.id ||
                      cropsPercentListData?.uuid ||
                      JSON.stringify(cropsPercentListData)
                    }
                    renderItem={({ item }) => {
                      const cropsPercentListData = item;
                      return (
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              alignItems: 'center',
                              flexDirection: 'row',
                              justifyContent: 'flex-start',
                            },
                            dimensions.width
                          )}
                        >
                          <Text
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text'],
                                {
                                  fontFamily: 'Poppins_400Regular',
                                  fontSize: 18,
                                  marginLeft: 20,
                                  marginRight: 20,
                                }
                              ),
                              dimensions.width
                            )}
                          >
                            {cropsPercentListData?.crop}
                            {':'}
                          </Text>
                          <Spacer top={8} right={8} bottom={8} left={8} />
                          {/* Text 2 */}
                          <Text
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text'],
                                {
                                  fontFamily: 'Poppins_400Regular',
                                  fontSize: 18,
                                }
                              ),
                              dimensions.width
                            )}
                          >
                            {cropsPercentListData?.percent}
                          </Text>
                        </View>
                      );
                    }}
                    numColumns={1}
                    onEndReachedThreshold={0.5}
                    showsHorizontalScrollIndicator={true}
                    showsVerticalScrollIndicator={true}
                  />
                  {/* Spacer 2 */}
                  <Spacer top={8} right={8} bottom={8} left={8} />
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        backgroundColor: theme.colors.surface,
                        borderRadius: 16,
                        paddingBottom: 8,
                        paddingLeft: 8,
                        paddingRight: 8,
                        paddingTop: 8,
                      },
                      dimensions.width
                    )}
                  >
                    <View
                      style={StyleSheet.applyWidth(
                        { borderRadius: 10, height: 240, overflow: 'hidden' },
                        dimensions.width
                      )}
                    >
                      <MapView
                        style={StyleSheet.applyWidth(
                          { flex: 1 },
                          dimensions.width
                        )}
                        latitude={(fetchData && fetchData[0])?.lat}
                        longitude={(fetchData && fetchData[0])?.long}
                        zoomEnabled={true}
                        rotateEnabled={true}
                        scrollEnabled={true}
                        loadingEnabled={true}
                        showsPointsOfInterest={true}
                        zoom={16}
                        apiKey={'AIzaSyBzktToWosjNgrrUawZnbslB9NSXSXCkwo'}
                        ref={mapViewwIaDAHIXRef}
                      >
                        <MapMarker
                          longitude={(fetchData && fetchData[0])?.long}
                          title={fetchData?.name}
                          latitude={(fetchData && fetchData[0])?.lat}
                          pinColor={theme.colors.primary}
                          pinImage={''}
                        />
                      </MapView>
                    </View>
                  </View>
                  {/* Spacer 3 */}
                  <Spacer top={8} right={8} bottom={8} left={8} />
                  <Text
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'],
                        {
                          alignSelf: 'center',
                          fontFamily: 'Poppins_600SemiBold',
                          fontSize: 18,
                          marginBottom: 10,
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'Garden layout'}
                  </Text>
                  {/* View 2 */}
                  <View
                    style={StyleSheet.applyWidth(
                      { alignItems: 'center', justifyContent: 'center' },
                      dimensions.width
                    )}
                  >
                    <Image
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.ImageStyles(theme)['Image'],
                          { height: 150, width: 300 }
                        ),
                        dimensions.width
                      )}
                      resizeMode={'cover'}
                      source={{
                        uri: `${(fetchData && fetchData[0])?.layout_image}`,
                      }}
                    />
                  </View>
                  <Spacer top={8} right={8} bottom={8} left={8} />
                </View>
              </View>
              <View />
            </>
          );
        }}
      </APIApi.FetchFetchGardenByIdGET>
      <Button
        onPress={() => {
          try {
            navigation.navigate('NewSubgardenScreen');
          } catch (err) {
            console.error(err);
          }
        }}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.ButtonStyles(theme)['Button'], {
            backgroundColor: theme.colors['App Green'],
            fontFamily: 'Poppins_600SemiBold',
            marginBottom: 20,
            width: 350,
          }),
          dimensions.width
        )}
        title={'Create subgarden'}
      />
      <Text
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
            fontFamily: 'Poppins_600SemiBold',
            fontSize: 24,
            textAlign: 'center',
          }),
          dimensions.width
        )}
      >
        {'Subgardens'}
      </Text>

      <APIApi.FetchFetchSubgardenByGardenIdGET
        method={'GET'}
        garden_id={props.route?.params?.garden_id ?? 1}
      >
        {({ loading, error, data, refetchFetchSubgardenByGardenId }) => {
          const fetchData = data;
          if (!fetchData || loading) {
            return <ActivityIndicator />;
          }

          if (error) {
            return (
              <Text style={{ textAlign: 'center' }}>
                There was a problem fetching this data
              </Text>
            );
          }

          return (
            <>
              {/* Garden List */}
              <FlatList
                data={data}
                listKey={'17j1z2VI'}
                keyExtractor={gardenListData =>
                  gardenListData?.id ||
                  gardenListData?.uuid ||
                  JSON.stringify(gardenListData)
                }
                renderItem={({ item }) => {
                  const gardenListData = item;
                  return (
                    <Touchable
                      onPress={() => {
                        try {
                          navigation.navigate('GardenBedDetailViewScreen', {
                            garden_id: gardenListData?.crop_id,
                          });
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                    >
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            backgroundColor: theme.colors.surface,
                            borderBottomWidth: 1,
                            borderColor: theme.colors.divider,
                            borderLeftWidth: 1,
                            borderRadius: 8,
                            borderRightWidth: 1,
                            borderTopWidth: 1,
                            overflow: 'hidden',
                          },
                          dimensions.width
                        )}
                      >
                        <Touchable
                          onPress={() => {
                            try {
                              navigation.navigate('GardenBedDetailViewScreen', {
                                garden_id: gardenListData?.crop_id,
                              });
                            } catch (err) {
                              console.error(err);
                            }
                          }}
                        >
                          <View
                            style={StyleSheet.applyWidth(
                              { height: 240 },
                              dimensions.width
                            )}
                          >
                            <ImageBackground
                              style={StyleSheet.applyWidth(
                                {
                                  borderRadius: theme.roundness,
                                  height: '100%',
                                  width: '100%',
                                },
                                dimensions.width
                              )}
                              resizeMode={'cover'}
                              source={{ uri: `${gardenListData?.image}` }}
                            >
                              <View
                                style={StyleSheet.applyWidth(
                                  { alignItems: 'flex-end', marginTop: 16 },
                                  dimensions.width
                                )}
                              >
                                <>
                                  {!isOnline ? null : (
                                    <View
                                      style={StyleSheet.applyWidth(
                                        {
                                          alignItems: 'center',
                                          backgroundColor:
                                            theme.colors['App Green'],
                                          borderBottomLeftRadius: 8,
                                          borderTopLeftRadius: 8,
                                          flexDirection: 'row',
                                          paddingBottom: 4,
                                          paddingLeft: 8,
                                          paddingRight: 8,
                                          paddingTop: 4,
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      <Text
                                        style={StyleSheet.applyWidth(
                                          {
                                            color: theme.colors.surface,
                                            fontFamily: 'Poppins_600SemiBold',
                                            fontSize: 16,
                                          },
                                          dimensions.width
                                        )}
                                        allowFontScaling={true}
                                        ellipsizeMode={'tail'}
                                        textBreakStrategy={'highQuality'}
                                      >
                                        {gardenListData?.status}
                                      </Text>
                                    </View>
                                  )}
                                </>
                              </View>
                            </ImageBackground>
                          </View>
                        </Touchable>
                      </View>
                      {/* Spacer 2 */}
                      <Spacer top={8} right={8} bottom={8} left={8} />
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            paddingBottom: 16,
                            paddingLeft: 16,
                            paddingRight: 16,
                            paddingTop: 16,
                          },
                          dimensions.width
                        )}
                      >
                        <View>
                          <Text
                            style={StyleSheet.applyWidth(
                              {
                                color: theme.colors.strong,
                                fontFamily: 'Poppins_600SemiBold',
                                fontSize: 18,
                              },
                              dimensions.width
                            )}
                            textBreakStrategy={'highQuality'}
                            ellipsizeMode={'tail'}
                            allowFontScaling={true}
                            numberOfLines={2}
                          >
                            {gardenListData?.title}
                          </Text>
                          <Spacer top={4} right={8} bottom={4} left={8} />
                          <Text
                            style={StyleSheet.applyWidth(
                              { color: theme.colors.medium, lineHeight: 24 },
                              dimensions.width
                            )}
                            ellipsizeMode={'tail'}
                            numberOfLines={2}
                          >
                            {gardenListData?.description}
                          </Text>
                          <Divider
                            style={StyleSheet.applyWidth(
                              { height: 1, marginBottom: 12, marginTop: 12 },
                              dimensions.width
                            )}
                            color={theme.colors.divider}
                          />
                          <View
                            style={StyleSheet.applyWidth(
                              { alignItems: 'center', flexDirection: 'row' },
                              dimensions.width
                            )}
                          >
                            <Spacer top={8} right={8} bottom={8} left={8} />
                            <View
                              style={StyleSheet.applyWidth(
                                { alignItems: 'center', flexDirection: 'row' },
                                dimensions.width
                              )}
                            >
                              <Icon
                                size={20}
                                name={'MaterialCommunityIcons/roman-numeral-10'}
                                color={theme.colors['App Green']}
                              />
                              <Spacer right={2} left={2} />
                              <Text
                                style={StyleSheet.applyWidth(
                                  {
                                    color: theme.colors.medium,
                                    fontFamily: 'Poppins_400Regular',
                                    fontSize: 12,
                                  },
                                  dimensions.width
                                )}
                              >
                                {gardenListData?.width}
                                {' x '}
                                {gardenListData?.height}
                                {' meters '}
                              </Text>
                            </View>
                            <Spacer top={8} right={8} bottom={8} left={8} />
                          </View>
                        </View>
                      </View>
                      <Spacer top={12} right={8} bottom={12} left={8} />
                    </Touchable>
                  );
                }}
                style={StyleSheet.applyWidth(
                  GlobalStyles.FlatListStyles(theme)['Garden List'],
                  dimensions.width
                )}
                contentContainerStyle={StyleSheet.applyWidth(
                  GlobalStyles.FlatListStyles(theme)['Garden List'],
                  dimensions.width
                )}
                data={data}
              />
            </>
          );
        }}
      </APIApi.FetchFetchSubgardenByGardenIdGET>
    </ScreenContainer>
  );
};

export default withTheme(GardenDetailViewScreen_6Fi5ZXwW);
