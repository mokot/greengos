import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as APIApi from '../apis/APIApi.js';
import * as Utils from '../utils';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Icon,
  ScreenContainer,
  Touchable,
  WebView,
  YoutubePlayer,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { Video } from 'expo-av';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { Fetch } from 'react-request';

const CropDetailViewScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer
      style={StyleSheet.applyWidth(
        { backgroundColor: theme.colors.divider },
        dimensions.width
      )}
      scrollable={false}
      hasSafeArea={false}
    >
      {/* Working header */}
      <View
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.ViewStyles(theme)['BackHeader'], {
            marginTop: 30,
          }),
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

      <APIApi.FetchFetchCropByIdGET id={props.route?.params?.crop_id ?? 1}>
        {({ loading, error, data, refetchFetchCropById }) => {
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
            <ScrollView
              showsHorizontalScrollIndicator={true}
              showsVerticalScrollIndicator={true}
              bounces={true}
            >
              {/* Header Wrapper */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    flexGrow: 1,
                    flexShrink: 0,
                    maxHeight: '37%',
                    minHeight: '37%',
                  },
                  dimensions.width
                )}
              >
                {/* Item Image */}
                <Image
                  style={StyleSheet.applyWidth(
                    { alignItems: 'center', height: '100%', width: '100%' },
                    dimensions.width
                  )}
                  resizeMode={'cover'}
                  source={{ uri: `${(fetchData && fetchData[0])?.image}` }}
                />
              </View>
              {/* Content Wrapper */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    backgroundColor: theme.colors['Background'],
                    flex: 1,
                    flexGrow: 1,
                    flexShrink: 0,
                    minHeight: 800,
                    paddingBottom: 12,
                    paddingLeft: 18,
                    paddingRight: 18,
                  },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      flexDirection: 'row',
                      justifyContent: 'center',
                    },
                    dimensions.width
                  )}
                >
                  {/* Text 2 */}
                  <Text
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'],
                        { fontFamily: 'Poppins_600SemiBold', fontSize: 24 }
                      ),
                      dimensions.width
                    )}
                  >
                    {(fetchData && fetchData[0])?.title}
                  </Text>

                  <Text
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'],
                        {
                          alignSelf: 'center',
                          color: theme.colors['Light'],
                          flex: 2,
                          fontFamily: 'Poppins_400Regular_Italic',
                          textAlign: 'center',
                          textTransform: 'capitalize',
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {(fetchData && fetchData[0])?.title_latin}
                  </Text>
                </View>
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
                    autoplay={false}
                  />
                </View>
              </View>
            </ScrollView>
          );
        }}
      </APIApi.FetchFetchCropByIdGET>
    </ScreenContainer>
  );
};

export default withTheme(CropDetailViewScreen);
