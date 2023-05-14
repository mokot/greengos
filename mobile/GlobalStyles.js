import * as StyleSheet from './utils/StyleSheet';

import Breakpoints from './utils/Breakpoints';

export const ViewStyles = theme =>
  StyleSheet.create({
    BackHeader: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    'BackHeader 2': {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    'BackHeader 3': {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    'BackHeader 4': {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });

export const ButtonStyles = theme =>
  StyleSheet.create({
    Button: {
      backgroundColor: theme.colors.primary,
      borderRadius: 8,
      fontFamily: 'System',
      fontWeight: '700',
      textAlign: 'center',
    },
  });

export const FetchStyles = theme =>
  StyleSheet.create({ Fetch: { minHeight: 40 } });

export const FlatListStyles = theme =>
  StyleSheet.create({
    'Garden List': {
      paddingBottom: 16,
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 16,
    },
  });

export const ImageStyles = theme => StyleSheet.create({});

export const ImageBackgroundStyles = theme =>
  StyleSheet.create({ 'Image Background': { height: '100%', width: '100%' } });

export const NumberInputStyles = theme =>
  StyleSheet.create({
    'Number Input': {
      borderBottomWidth: 1,
      borderColor: theme.colors.divider,
      borderLeftWidth: 1,
      borderRadius: 8,
      borderRightWidth: 1,
      borderTopWidth: 1,
      paddingBottom: 8,
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 8,
    },
  });

export const TextStyles = theme =>
  StyleSheet.create({ Text: { color: theme.colors.strong } });

export const TextInputStyles = theme =>
  StyleSheet.create({
    'Text Input': {
      borderBottomWidth: 1,
      borderColor: theme.colors.divider,
      borderLeftWidth: 1,
      borderRadius: 8,
      borderRightWidth: 1,
      borderTopWidth: 1,
      paddingBottom: 8,
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 8,
    },
  });

export const VideoStyles = theme =>
  StyleSheet.create({ Video: { height: 215 } });

export const WebViewStyles = theme =>
  StyleSheet.create({ 'Web View': { flex: 1 } });

export const YoutubePlayerStyles = theme =>
  StyleSheet.create({ 'Youtube Player': { height: 250 } });
