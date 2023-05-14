import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as APIApi from '../apis/APIApi.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Icon,
  ScreenContainer,
  Spacer,
  Touchable,
  YoutubePlayer,
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

const GardenBedDetailViewScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer
      hasTopSafeArea={true}
      hasSafeArea={false}
      scrollable={true}
    >
      {/* BackHeader */}
      <View
        style={StyleSheet.applyWidth(
          GlobalStyles.ViewStyles(theme)['BackHeader 3'],
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
          {'Subgarden details'}
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

      <APIApi.FetchFetchSubgardenByIdGET
        method={'GET'}
        id={props.route?.params?.garden_id ?? 1}
      >
        {({ loading, error, data, refetchFetchSubgardenById }) => {
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
              <View />
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
                  {/* View 2 */}
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
                      {(fetchData && fetchData[0])?.title}
                      {'\n'}
                    </Text>
                    {/* Text 2 */}
                    <Text
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Text'],
                          {
                            color: theme.colors['Light'],
                            fontFamily: 'Poppins_400Regular',
                            fontSize: 12,
                            marginLeft: 12,
                            textTransform: 'capitalize',
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      {'Status: '}
                      {(fetchData && fetchData[0])?.status}
                    </Text>
                  </View>
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
                          color={theme.colors['App Green']}
                          name={'MaterialCommunityIcons/roman-numeral-10'}
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
                          {(fetchData && fetchData[0])?.width}
                          {' x '}
                          {(fetchData && fetchData[0])?.height}
                          {' metres'}
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
                          {(fetchData && fetchData[0])?.crops?.length}
                          {' types of crops'}
                        </Text>
                      </View>
                      <Spacer top={8} right={6} bottom={8} left={6} />
                    </View>
                  </View>
                </View>
              </View>
              <FlatList
                data={(fetchData && fetchData[0])?.crops}
                listKey={'NKUBSB4a'}
                keyExtractor={listData =>
                  listData?.id || listData?.uuid || JSON.stringify(listData)
                }
                renderItem={({ item }) => {
                  const listData = item;
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
                        {listData?.crop}
                        {':'}
                      </Text>
                      <Spacer top={8} right={8} bottom={8} left={8} />
                      {/* Text 2 */}
                      <Text
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text'],
                            { fontFamily: 'Poppins_400Regular', fontSize: 18 }
                          ),
                          dimensions.width
                        )}
                      >
                        {listData?.percent}
                      </Text>
                    </View>
                  );
                }}
                numColumns={1}
                onEndReachedThreshold={0.5}
                showsHorizontalScrollIndicator={true}
                showsVerticalScrollIndicator={true}
              />
              {/* Crop details AD */}
              <View
                style={StyleSheet.applyWidth(
                  { marginLeft: 20, marginRight: 20 },
                  dimensions.width
                )}
              >
                {/* Item Description */}
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.medium,
                      fontFamily: 'Poppins_400Regular',
                      fontSize: 15,
                      lineHeight: 24,
                      marginTop: 6,
                      textAlign: 'auto',
                      width: '100%',
                    },
                    dimensions.width
                  )}
                >
                  {(fetchData && fetchData[0])?.description}
                </Text>
                {/* Item Good Neighbours */}
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors['Medium'],
                      fontFamily: 'Poppins_400Regular',
                      fontSize: 14,
                      marginTop: 6,
                      textAlign: 'auto',
                      width: '100%',
                    },
                    dimensions.width
                  )}
                >
                  {'Good neighbours: '}
                  {(fetchData && fetchData[0])?.good_neighbours}
                </Text>
                {/* Item Bad Neighbours */}
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors['Medium'],
                      fontFamily: 'Poppins_400Regular',
                      fontSize: 14,
                      marginTop: 6,
                      textAlign: 'auto',
                      width: '100%',
                    },
                    dimensions.width
                  )}
                >
                  {'Bad neighbours: '}
                  {(fetchData && fetchData[0])?.bad_neighbours}
                </Text>
                {/* Item Bad Neighbours */}
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors['Medium'],
                      fontFamily: 'Poppins_400Regular',
                      fontSize: 14,
                      marginTop: 6,
                      textAlign: 'auto',
                      width: '100%',
                    },
                    dimensions.width
                  )}
                >
                  {'Watering: '}
                  {(fetchData && fetchData[0])?.watering}
                </Text>
                {/* Item Bad Neighbours */}
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors['Medium'],
                      fontFamily: 'Poppins_400Regular',
                      fontSize: 14,
                      marginTop: 6,
                      textAlign: 'auto',
                      width: '100%',
                    },
                    dimensions.width
                  )}
                >
                  {'Growth time: '}
                  {(fetchData && fetchData[0])?.growth_time}
                </Text>

                <Text
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                      fontFamily: 'Poppins_600SemiBold',
                      fontSize: 24,
                      marginBottom: 10,
                      marginTop: 10,
                    }),
                    dimensions.width
                  )}
                >
                  {'Example video\n'}
                </Text>
                {/* View 2 */}
                <View
                  style={StyleSheet.applyWidth(
                    { alignItems: 'center', justifyContent: 'center' },
                    dimensions.width
                  )}
                >
                  <YoutubePlayer
                    style={StyleSheet.applyWidth(
                      GlobalStyles.YoutubePlayerStyles(theme)['Youtube Player'],
                      dimensions.width
                    )}
                    videoId={(fetchData && fetchData[0])?.video_url}
                  />
                </View>
              </View>
            </>
          );
        }}
      </APIApi.FetchFetchSubgardenByIdGET>
    </ScreenContainer>
  );
};

export default withTheme(GardenBedDetailViewScreen);
