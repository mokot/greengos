import React from 'react';
import * as APIApi from '../apis/APIApi.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useIsOnline from '../utils/useIsOnline';
import {
  Divider,
  Icon,
  IconButton,
  ScreenContainer,
  Spacer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  ImageBackground,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { Fetch } from 'react-request';

const GardenListScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;
  const { navigation } = props;
  const isOnline = useIsOnline();

  return (
    <ScreenContainer
      style={StyleSheet.applyWidth(
        { backgroundColor: theme.colors.background },
        dimensions.width
      )}
      hasSafeArea={false}
      scrollable={true}
      hasTopSafeArea={true}
    >
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-around',
          },
          dimensions.width
        )}
      >
        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors.strong,
              fontFamily: 'Poppins_600SemiBold',
              fontSize: 26,
              paddingBottom: 16,
              paddingLeft: 16,
              paddingRight: 16,
              paddingTop: 32,
            },
            dimensions.width
          )}
        >
          {'Create a garden'}
        </Text>
        <IconButton
          onPress={() => {
            try {
              navigation.navigate('NewGardenScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth({ marginTop: 20 }, dimensions.width)}
          size={32}
          icon={'AntDesign/pluscircle'}
          color={theme.colors['App Green']}
        />
      </View>

      <APIApi.FetchFetchGardensGET method={'GET'}>
        {({ loading, error, data, refetchFetchGardens }) => {
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
            <FlatList
              data={fetchData}
              listKey={'3O52OVQP'}
              keyExtractor={listData =>
                listData?.id || listData?.uuid || JSON.stringify(listData)
              }
              renderItem={({ item }) => {
                const listData = item;
                return (
                  <Touchable
                    onPress={() => {
                      try {
                        navigation.navigate('GardenDetailViewScreen_6Fi5ZXwW', {
                          garden_id: listData?.id,
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
                            navigation.navigate(
                              'GardenDetailViewScreen_6Fi5ZXwW',
                              { garden_id: listData?.id }
                            );
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
                            source={{ uri: `${listData?.image}` }}
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
                                      {listData?.status}
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
                          {listData?.name}
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
                          {listData?.description}
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
                          <View
                            style={StyleSheet.applyWidth(
                              { alignItems: 'center', flexDirection: 'row' },
                              dimensions.width
                            )}
                          >
                            <Icon
                              size={24}
                              name={'Ionicons/location'}
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
                              {listData?.location}{' '}
                            </Text>
                          </View>
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
                              {listData?.width}
                              {' x '}
                              {listData?.length}
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
              contentContainerStyle={StyleSheet.applyWidth(
                {
                  paddingBottom: 16,
                  paddingLeft: 16,
                  paddingRight: 16,
                  paddingTop: 16,
                },
                dimensions.width
              )}
            />
          );
        }}
      </APIApi.FetchFetchGardensGET>
    </ScreenContainer>
  );
};

export default withTheme(GardenListScreen);
