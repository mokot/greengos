import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as APIApi from '../apis/APIApi.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Icon,
  Link,
  ScreenContainer,
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
  View,
  useWindowDimensions,
} from 'react-native';
import { Fetch } from 'react-request';

const CropListScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;
  const { navigation } = props;

  const [checkboxValue, setCheckboxValue] = React.useState(false);
  const [menuTab1, setMenuTab1] = React.useState(true);
  const [menuTab2, setMenuTab2] = React.useState(false);
  const [menuTab3, setMenuTab3] = React.useState(false);
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      hasTopSafeArea={true}
    >
      {/* Header Frame */}
      <View
        style={StyleSheet.applyWidth(
          { flexGrow: 0, flexShrink: 0 },
          dimensions.width
        )}
      >
        {/* Navigation Frame */}
        <View
          style={StyleSheet.applyWidth(
            { flexDirection: 'row', flexGrow: 0, flexShrink: 0 },
            dimensions.width
          )}
        ></View>
      </View>
      {/* Scroll Content Frame */}
      <ScrollView
        style={StyleSheet.applyWidth({ flexGrow: 1 }, dimensions.width)}
        contentContainerStyle={StyleSheet.applyWidth(
          { flexShrink: 0 },
          dimensions.width
        )}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        {/* Following List Frame */}
        <View
          style={StyleSheet.applyWidth({ marginTop: 12 }, dimensions.width)}
        >
          {/* List Content Frame */}
          <View>
            {/* List Title Frame  */}
            <View
              style={StyleSheet.applyWidth(
                {
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingBottom: 12,
                  paddingLeft: 12,
                  paddingRight: 12,
                  paddingTop: 12,
                },
                dimensions.width
              )}
            >
              {/* Rich Text Title */}
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Poppins_700Bold',
                    fontSize: 24,
                  },
                  dimensions.width
                )}
              >
                {'Crop List'}
              </Text>
            </View>

            <APIApi.FetchFetchCropsGET>
              {({ loading, error, data, refetchFetchCrops }) => {
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
                    listKey={'URhxD5Dd'}
                    keyExtractor={listData =>
                      listData?.id || listData?.uuid || JSON.stringify(listData)
                    }
                    renderItem={({ item }) => {
                      const listData = item;
                      return (
                        <Touchable
                          onPress={() => {
                            try {
                              navigation.navigate('CropDetailViewScreen', {
                                crop_id: listData?.id,
                              });
                            } catch (err) {
                              console.error(err);
                            }
                          }}
                        >
                          {/* Records Frame */}
                          <View
                            style={StyleSheet.applyWidth(
                              { marginTop: 12 },
                              dimensions.width
                            )}
                          >
                            {/* Flex Touchable */}
                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  marginBottom: 12,
                                  marginLeft: 12,
                                  marginRight: 12,
                                },
                                dimensions.width
                              )}
                            >
                              <Touchable
                                onPress={() => {
                                  try {
                                    navigation.navigate(
                                      'CropDetailViewScreen',
                                      { crop_id: listData?.id }
                                    );
                                  } catch (err) {
                                    console.error(err);
                                  }
                                }}
                              >
                                {/* Record Item Frame */}
                                <View
                                  style={StyleSheet.applyWidth(
                                    {
                                      borderBottomWidth: 1,
                                      borderColor:
                                        theme.colors.custom_rgb218_218_218,
                                      borderLeftWidth: 1,
                                      borderRadius: 12,
                                      borderRightWidth: 1,
                                      borderTopWidth: 1,
                                      flexDirection: 'row',
                                      flexGrow: 0,
                                      flexShrink: 0,
                                      paddingBottom: 12,
                                      paddingTop: 12,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {/* Left Side Frame */}
                                  <View
                                    style={StyleSheet.applyWidth(
                                      {
                                        alignItems: 'center',
                                        borderBottomLeftRadius: 12,
                                        borderTopLeftRadius: 12,
                                        flexGrow: 0,
                                        flexShrink: 0,
                                        justifyContent: 'center',
                                        paddingLeft: 12,
                                      },
                                      dimensions.width
                                    )}
                                  >
                                    <Image
                                      style={StyleSheet.applyWidth(
                                        StyleSheet.compose(
                                          GlobalStyles.ImageStyles(theme)[
                                            'Image'
                                          ],
                                          { height: 40, width: 40 }
                                        ),
                                        dimensions.width
                                      )}
                                      resizeMode={'cover'}
                                      source={{
                                        uri: `${listData?.image_icon}`,
                                      }}
                                    />
                                  </View>
                                  {/* Middle Frame */}
                                  <View
                                    style={StyleSheet.applyWidth(
                                      {
                                        flexGrow: 1,
                                        flexShrink: 0,
                                        justifyContent: 'center',
                                        marginLeft: 18,
                                      },
                                      dimensions.width
                                    )}
                                  >
                                    {/* Top Frame */}
                                    <View
                                      style={StyleSheet.applyWidth(
                                        { marginRight: 12 },
                                        dimensions.width
                                      )}
                                    >
                                      {/* Record Name */}
                                      <Text
                                        style={StyleSheet.applyWidth(
                                          {
                                            color: theme.colors.strong,
                                            fontFamily: 'Poppins_700Bold',
                                            fontSize: 18,
                                            paddingBottom: 9,
                                          },
                                          dimensions.width
                                        )}
                                        ellipsizeMode={'tail'}
                                      >
                                        {listData?.title}
                                        {'\n'}
                                      </Text>
                                    </View>
                                  </View>
                                </View>
                              </Touchable>
                            </View>
                          </View>
                        </Touchable>
                      );
                    }}
                    contentContainerStyle={StyleSheet.applyWidth(
                      { flex: 1 },
                      dimensions.width
                    )}
                    numColumns={1}
                  />
                );
              }}
            </APIApi.FetchFetchCropsGET>
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

export default withTheme(CropListScreen);
