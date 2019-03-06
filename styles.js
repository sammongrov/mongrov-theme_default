import { material, human, iOSColors, systemWeights } from 'react-native-typography';
import { Dimensions, Platform } from 'react-native';

import * as Colors from './colors';

const baseFontFamily = {
  fontFamily: 'OpenSans-Regular',
};

const fontSizes = {
  xxs: 10,
  xs: 11,
  sm: 12,
  base: 14,
  md: 16,
  xl: 18,
  xxl: 20,
};

const spacingSizes = {
  xxs: 5,
  xs: 10,
  sm: 12,
  base: 15,
  md: 18,
  xl: 20,
  xxl: 25,
};

const borderRads = {
  xs: 5,
  sm: 10,
  base: 15,
  md: 20,
  xl: 25,
};

const styles = {
  // General
  // Text operations, color operations, utilities (padding, margin, fontsizes)
  // base sizes for utils, (5)xs, (8)s, (10)n, m(12), l(15), xl(18)
  // font base sizes - take it from rn-typo, inv,

  // flex styles
  flex1: {
    flex: 1,
  },

  container: {
    flex: 1,
    backgroundColor: Colors.BG_WHITE,
  },

  rowFlex: {
    flex: 1,
    flexDirection: 'row',
  },

  columnDirection: {
    flexDirection: 'column',
  },

  columnFlex: {
    flex: 1,
    flexDirection: 'column',
  },

  rowDirection: {
    flexDirection: 'row',
  },

  alignCenterJustifyEnd: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  alignCenterJustifyAround: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  // padding styles
  padding3: {
    padding: 3,
  },

  padding15: {
    padding: spacingSizes.base,
  },

  padding20: {
    padding: 20,
  },

  padding30: {
    padding: 30,
  },

  // padding top styles
  paddingTop3: {
    paddingTop: 3,
  },

  paddingTop5: {
    paddingTop: 5,
  },

  paddingTop10: {
    paddingTop: 10,
  },
  // padding Horizontal styles
  paddingHorizontal80: {
    paddingHorizontal: 80,
  },
  paddingHorizontal40: {
    paddingHorizontal: 40,
  },
  paddingHorizontal25: {
    paddingHorizontal: 25,
  },
  paddingHorizontal20: {
    paddingHorizontal: 20,
  },
  paddingHorizontal10: {
    paddingHorizontal: spacingSizes.xs,
  },
  paddingHorizontal15: {
    paddingHorizontal: spacingSizes.base,
  },
  // padding Vertical styles
  paddingVertical5: {
    paddingVertical: 5,
  },
  paddingVertical10: {
    paddingVertical: 10,
  },
  paddingVertical15: {
    paddingVertical: 15,
  },
  paddingVertical30: {
    paddingVertical: 30,
  },
  paddingVertical8: {
    paddingVertical: 8,
  },
  // padding Left styles
  paddingLeft3: {
    paddingLeft: 3,
  },

  paddingLeft5: {
    paddingLeft: 5,
  },

  paddingLeft10: {
    paddingLeft: 10,
  },

  paddingLeft6: {
    paddingLeft: 10,
  },
  // padding Right style
  paddingRight30: {
    paddingRight: 30,
  },

  paddingRight10: {
    paddingRight: 10,
  },

  // padding bottom styles
  paddingBottom3: {
    paddingBottom: 3,
  },

  paddingBottom10: {
    paddingBottom: 10,
  },

  paddingBottom15: {
    paddingBottom: 15,
  },

  // margin styles
  margin5: {
    margin: spacingSizes.xxs,
  },

  // marginBottom styles
  marginBottom3: {
    marginBottom: 3,
  },

  marginBottom10: {
    marginBottom: 10,
  },

  marginBottom15: {
    marginBottom: 15,
  },

  marginBottom20: {
    marginBottom: 20,
  },

  // marginTop styles
  marginTop8: {
    marginTop: 8,
  },
  marginTop10: {
    marginTop: 10,
  },
  marginTop20: {
    marginTop: 20,
  },
  marginTop15: {
    marginTop: 15,
  },

  // marginRight styles
  marginRight10: {
    marginRight: 10,
  },

  marginRight15: {
    marginRight: 15,
  },

  marginRight5: {
    marginRight: 5,
  },

  marginRight6: {
    marginRight: 6,
  },

  marginRight8: {
    marginRight: 8,
  },

  marginRight20: {
    marginRight: 20,
  },
  // marginleft
  marginLeft15: {
    marginLeft: 15,
  },
  // marginHorizontal styles
  marginHorizontal18: {
    marginHorizontal: 18,
  },
  // marginVertical styles
  marginVertical5: {
    marginVertical: 5,
  },

  centerColumnContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },

  centerContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  justifyStartAlignCenterContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  rowAlignStartContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  textContainer: {
    paddingHorizontal: 30,
    textAlign: 'center',
    marginTop: spacingSizes.xs,
  },

  textAlignLeft: {
    flex: 1,
    textAlign: 'left',
  },

  textAlignLeftWithNoFlex: {
    textAlign: 'left',
  },

  grayColorText: {
    color: iOSColors.gray,
  },

  heading: {
    fontSize: fontSizes.xl,
    color: Colors.TEXT_HEADER,
    textAlign: 'center',
  },

  subtextBlack1: {
    ...human.bodyObject,
    ...baseFontFamily,
  },

  subtextBlackbody: {
    color: iOSColors.black,
    fontSize: fontSizes.md,
    ...baseFontFamily,
  },

  alignRowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  alignJustifyCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  alignItemsEnd: {
    alignItems: 'flex-end',
  },

  alignJustifyEnd: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },

  alignJustifyStart: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },

  alignCenterJustifyStart: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  rowAlignJustifyCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  grayLine: {
    borderBottomWidth: 1,
    height: 1,
    borderBottomColor: iOSColors.lightGray,
  },

  fontSize16: {
    fontSize: fontSizes.md,
  },

  fontSize12: {
    fontSize: fontSizes.sm,
  },

  whiteBackground: {
    backgroundColor: '#FFF',
  },

  blackBackground: {
    backgroundColor: '#000',
  },

  changeAuthHeader: {
    backgroundColor: Colors.BG_THIRD,
  },

  // Screens
  // Events Tab
  // Timeline Screen
  timeLineContainer: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 10,
    backgroundColor: '#F6F7F9',
  },

  timeLineDetailContainer: {
    marginBottom: 30,
    paddingHorizontal: 10,
    backgroundColor: '#FFF',
    borderRadius: 5,
    shadowColor: '#ccc',
    shadowOpacity: 0.3,
    elevation: 2,
  },

  timeLineSRItemContainer: {
    minHeight: 50,
    backgroundColor: '#FFF',
    borderRadius: 5,
    marginBottom: 15,
    padding: 10,
    flexDirection: 'column',
    shadowColor: '#ccc',
    shadowOpacity: 0.3,
    elevation: 2,
    justifyContent: 'center',
  },

  timeLineTRContentContainer: {
    paddingHorizontal: 10,
    paddingTop: 10,
    backgroundColor: '#F6F7F9',
  },

  timeLineTRCardContainer: {
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 10,
    backgroundColor: '#FFF',
    borderRadius: 5,
    shadowColor: '#ccc',
    shadowOpacity: 0.3,
    elevation: 2,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  timeLineTRContentTextSpacing: {
    paddingLeft: 3,
    paddingVertical: 5,
  },

  timeLineTabbarContainer: {
    height: 50,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },

  timeLineTabStyle: {
    height: 30,
    marginHorizontal: 5,
    alignItems: 'stretch',
  },

  timeLineTabIndicatorStyle: {
    backgroundColor: Colors.TEXT_NAV_TITLE,
    height: 2,
  },

  timeLineTabTitle: {
    color: Colors.TEXT_NAV_TITLE,
    fontSize: fontSizes.base,
    ...systemWeights.regular,
    ...baseFontFamily,
  },

  timeLineTRSubTitle: {
    color: Colors.TEXT_BLACK,
    fontSize: fontSizes.base,
    ...baseFontFamily,
  },

  // Change Password
  changePasswordContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 40,
    paddingHorizontal: 20,
  },

  changePasswordTitleStyle: {
    paddingHorizontal: 10,
    marginBottom: 3,
  },

  // Settings screen
  walletDetailContainerSpace: {
    paddingHorizontal: 25,
    borderBottomWidth: 1,
    borderBottomColor: Colors.TEXT_HEADER,
  },
  walletDetailHeaderText: {
    fontSize: 18,
    textAlign: 'center',
    margin: 5,
    color: Colors.TEXT_HEADER,
    marginBottom: 5,
  },
  walletDetailSubHeaderText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#ACACAF',
  },

  // News
  newsContainerBorder: {
    borderRadius: 3,
    borderColor: '#DEDEDE',
  },
  newsUserNamePadding: {
    paddingLeft: 10,
    paddingBottom: 5,
  },
  newsUsernameText: {
    color: Colors.TEXT_BLACK,
    fontSize: fontSizes.xl,
    fontWeight: '400',
    ...baseFontFamily,
  },
  newsTimeText: {
    color: Colors.TYP_GRAY,
    fontSize: fontSizes.sm,
    ...baseFontFamily,
  },
  newsTitleText: {
    color: Colors.TEXT_BLACK,
    fontSize: 16,
    fontWeight: '400',
    ...baseFontFamily,
  },
  newsExcerptView: {
    paddingBottom: 10,
  },
  newsExcerptText: {
    color: Colors.TYP_GRAY,
    fontSize: 16,
    fontWeight: '400',
    ...baseFontFamily,
  },
  newsImageView: {
    marginVertical: 15,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'transparent',
    borderColor: '#DEDEDE',
  },
  newsImageHeight: {
    height: 200,
  },
  newsBg: {
    backgroundColor: Colors.BG_NEWS,
  },
  newsStatisticsText: {
    marginLeft: 5,
    fontSize: 16,
    textAlign: 'center',
    ...baseFontFamily,
  },

  newsInfoText: {
    marginLeft: 5,
    fontSize: 14,
    textAlign: 'center',
    ...baseFontFamily,
  },
  // ends
  // Disclaimer
  disclaimerContainer: {
    padding: spacingSizes.xl,
    paddingBottom: 70,
  },
  primaryContent: {
    backgroundColor: Colors.BG_WHITE,
    borderWidth: 1,
    borderColor: Colors.BORDER,
    borderRadius: 5,
    padding: spacingSizes.xs,
    marginBottom: spacingSizes.xs,
  },

  disclaimerButtonStyle: {
    backgroundColor: Colors.BG_BTN,
    height: 45,
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: 30,
  },

  paraText: {
    flex: 1,
    padding: spacingSizes.xs,
    ...human.subheadObject,
    color: Colors.TEXT_DISCLAIMER_CONTENT,
  },

  // About
  scrollContentContainer: {
    flexGrow: 1,
    backgroundColor: Colors.BG_WHITE,
  },

  logo: {
    opacity: 1,
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },

  subtext: {
    ...human.calloutWhiteObject,
    color: Colors.TEXT_HEADER,
  },
  subtext3: {
    ...human.caption1WhiteObject,
    color: Colors.TEXT_HEADER,
  },

  btnPrimaryBg: {
    backgroundColor: Colors.BG_BTN,
    borderRadius: 30,
    paddingHorizontal: spacingSizes.base,
  },

  subtext1: {
    ...human.subheadWhiteObject,
    color: Colors.TEXT_HEADER,
  },

  // Select Server
  serverContainer: {
    justifyContent: 'flex-start',
    flex: 1,
    padding: 20,
  },

  serverBottomContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 80,
    marginBottom: 10,
  },

  serverDisableButton: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: Colors.BG_BACK_BTN,
    borderRadius: 20,
    flexDirection: 'row',
    height: 45,
    justifyContent: 'center',
  },

  serverConfirmButton: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: Colors.BG_BTN,
    borderRadius: 20,
    flexDirection: 'row',
    height: 45,
    justifyContent: 'center',
  },

  joinCallButton: {
    alignItems: 'center',
    alignSelf: 'stretch',
    // backgroundColor: Colors.VIDEO_BUTTON,
    borderRadius: 7,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 5,
  },

  // Chat List
  cListNavLogo: {
    width: 35,
    height: 35,
  },
  cListSerachButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: Colors.BG_PLUS_BUTTON,
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cListRowContainer: {
    flex: 1,
    flexDirection: 'column',
    borderBottomWidth: 1,
    borderColor: Colors.NAV_BORDER,
    paddingVertical: 7,
    marginLeft: 10,
  },
  cListTitle: {
    fontSize: fontSizes.xl,
    color: iOSColors.black,
    ...systemWeights.regular,
    ...baseFontFamily,
  },
  cListSubtitle: {
    fontSize: 14,
    color: iOSColors.gray,
    ...baseFontFamily,
  },
  cListCheckMark: {
    marginTop: 3,
    paddingRight: 3,
  },
  cListLastMessage: {
    fontSize: 14,
    color: '#bcbcbf',
    ...baseFontFamily,
  },

  cText: {
    marginLeft: 3,
    fontSize: 12,
  },

  cMainIcon: {
    flexDirection: 'row',
    marginLeft: 5,
    marginTop: 3,
  },

  cIcon: {
    flexDirection: 'row',
    marginRight: 10,
  },

  // chat message screen

  announcement: {
    backgroundColor: Colors.BG_ANNOUNCEMENT,
    color: Colors.TEXT_WHITE,
    height: 40,
    fontSize: 16,
    padding: 10,
    textAlign: 'center',
  },

  chatDetailContainer: {
    backgroundColor: Colors.BG_CHAT_DETAIL,
  },

  chatDetailLeftBubble: {
    backgroundColor: Colors.BG_CHAT_DETAIL_BUBBLE_LEFT,
    borderRadius: 8,
  },

  chatDetailRightBubble: {
    backgroundColor: Colors.BG_CHAT_DETAIL_BUBBLE_RIGHT,
    borderRadius: 8,
  },

  chatDetailBubbleLeftText: {
    color: Colors.TEXT_BLACK,
    fontSize: 16,
    ...baseFontFamily,
  },

  chatDetailTextInput: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: iOSColors.lightGray,
    paddingHorizontal: 15,
    marginLeft: 0,
    color: Colors.TEXT_BLACK,
    fontSize: 16,
    lineHeight: 20,
    ...baseFontFamily,
  },

  chatDetailBubbleRightText: {
    color: Colors.TEXT_WHITE,
    fontSize: 16,
    ...baseFontFamily,
  },

  chatDetailImageMessageView: {
    minWidth: 250,
    height: 150,
    borderRadius: 5,
  },

  chatDetailFooterContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: Colors.BG_THIRD,
  },

  chatDetailFooterContentButton: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },

  chatDetailFooterIconView: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },

  chatDetailActionContainer: {
    width: 30,
    height: 40,
    marginBottom: 5,
    alignSelf: 'center',
  },

  chatDetailSendView: {
    paddingHorizontal: 5,
    width: 40,
    height: 40,
  },

  chatDetailAudioButtonDimension: {
    width: 44,
    height: 44,
    paddingTop: 5,
  },

  chatDetailTickMark: {
    fontSize: 12,
    color: Colors.TEXT_WHITE,
    marginRight: -3,
  },

  chatUserName: {
    color: Colors.TYP_GRAY,
    fontSize: fontSizes.base,
    ...baseFontFamily,
  },
  // attach audio
  audioAttachContainer: {
    backgroundColor: Colors.BG_PRIMARY,
    paddingBottom: Platform.OS === 'ios' ? 35 : null,
  },

  audioAttachiconButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 44,
    height: 44,
    borderRadius: 44 / 2,
  },

  audioAttachText: {
    color: Colors.TEXT_WHITE,
    fontSize: 14,
    ...baseFontFamily,
  },

  audioAttachTimerText: {
    color: Colors.TEXT_WHITE,
    paddingBottom: 20,
    fontSize: 24,
    ...baseFontFamily,
  },

  audioAttachTimerView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },

  audioAttachRecordIconView: {
    borderColor: Colors.BG_ORANGE,
    backgroundColor: Colors.BG_ORANGE,
  },

  audioAttachSendIconView: {
    borderColor: iOSColors.green,
    backgroundColor: iOSColors.green,
  },

  audioAttachCancelIconView: {
    borderColor: Colors.ICON_RED,
    backgroundColor: Colors.ICON_RED,
  },

  // Audioplayer

  audioPlayerContainer: {
    width: 250,
    paddingTop: 10,
    marginBottom: -5,
  },

  audioPlayerRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  audioPlayerSliderContainer: {
    flex: 2,
    zIndex: 50,
    height: 40,
    justifyContent: 'center',
  },

  audioPlayerButton: {
    backgroundColor: Colors.BG_CHAT_DETAIL_BUBBLE_RIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
  },

  audioPlayerTimerContainer: {
    marginLeft: 85,
    marginTop: -14,
  },

  audioPlayerTimerText: {
    fontSize: fontSizes.base,
    color: Colors.TEXT_WHITE,
  },

  audioPlayerDeleteButton: {
    marginVertical: 5,
    marginRight: 10,
    marginLeft: 5,
  },
  // image preview

  imagePreviewOverlay: {
    position: 'absolute',
    right: 0,
    left: 0,
    alignItems: 'center',
  },

  imagePreviewMessagecontainer: {
    padding: 15,
    marginBottom: Platform.OS === 'ios' ? 16 : 0,
  },

  imagePreviewSendButton: {
    height: 40,
    width: 40,
    backgroundColor: Colors.TEXT_HEADER,
    borderRadius: 40,
  },

  imagePreviewKeyboardView: {
    bottom: 0,
    backgroundColor: 'transparent',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  imagePreviewTextInput: {
    backgroundColor: Colors.BG_WHITE,
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginRight: 8,
    minHeight: 40,
    maxHeight: 80,
    fontSize: 16,
    borderWidth: 1,
    borderColor: iOSColors.lightGray,
    ...baseFontFamily,
  },
  // Group Info
  groupTopContainer: {
    flexDirection: 'column',
    paddingVertical: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },

  groupTitleText: {
    ...human.title3Object,
    color: Colors.TEXT_HEADER,
    ...baseFontFamily,
  },

  // Member Info
  statusCircle: {
    width: 8,
    height: 8,
    marginTop: 8,
    borderRadius: 7,
    marginLeft: 5,
    right: 5,
    flexDirection: 'column',
  },
  memberSubView: {
    flexDirection: 'row',
    paddingHorizontal: 30,
    marginTop: 10,
  },

  // Error Info Component
  errorInfoError: {
    backgroundColor: Colors.BG_DANGER,
    padding: 10,
    borderRadius: 10,
  },
  errorInfoErrorText: {
    color: Colors.TEXT_WHITE,
  },
  errorInfoWarning: {
    backgroundColor: Colors.BG_WARNING,
    padding: 10,
    borderRadius: 10,
  },
  errorInfoWarningText: {
    color: Colors.TEXT_WHITE,
  },

  // Components
  // Navbar
  navContainer: {
    height: 50,
    flexDirection: 'row',
    // paddingVertical: spacingSizes.xxs,
    backgroundColor: Colors.BG_NAVBAR,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: Colors.NAV_BORDER,
  },

  navSideButtonDimension: {
    height: 50,
    minWidth: 40,
  },

  navTitleStyle: {
    color: Colors.TEXT_NAV_TITLE,
    fontSize: fontSizes.xl,
    ...baseFontFamily,
  },

  navTitleStyleWhite: {
    color: Colors.TEXT_WHITE,
    fontSize: fontSizes.xl,
    ...baseFontFamily,
  },

  navChatTitle: {
    color: Colors.TEXT_NAV_TITLE,
    fontSize: fontSizes.md,
    ...systemWeights.regular,
    ...baseFontFamily,
  },

  navChatInfo: {
    color: iOSColors.gray,
    fontSize: fontSizes.base,
    ...baseFontFamily,
  },

  // TabIcon
  // Profile
  profileIconContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    height: 40,
    width: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.BG_BTN,
  },

  profileIconSpace: {
    marginTop: Platform.OS === 'ios' ? 3 : 0,
  },

  profileSubIconStyle: {
    right: 10,
    marginTop: 3,
  },

  // ProfileList
  listItemContainerStyle: {
    borderBottomColor: iOSColors.lightGray,
    borderBottomWidth: 1,
  },
  listItemTitle: {
    color: iOSColors.black,
    fontSize: fontSizes.md,
    fontWeight: '400',
    ...baseFontFamily,
  },
  listItemSubTitle: {
    color: iOSColors.gray,
    fontSize: fontSizes.base,
    fontWeight: '500',
    ...baseFontFamily,
  },

  // Avatar
  avatarContainer: {
    width: 60,
    height: 60,
  },
  avatarImageContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarStatusDot: {
    height: 10,
    width: 10,
    borderRadius: 5,
  },
  avatarImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  avatarText: {
    color: iOSColors.white,
    fontSize: 22,
    ...systemWeights.semibold,
    ...baseFontFamily,
  },

  // Badge
  badgeContainer: {
    backgroundColor: iOSColors.green,
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  badgeText: {
    color: iOSColors.white,
    fontSize: fontSizes.sm,
    ...baseFontFamily,
    ...systemWeights.bold,
  },

  // Camera

  cameraNavContainer: {
    position: 'absolute',
    zIndex: 100,
    width: '100%',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    borderBottomWidth: 1,
    borderColor: 'transparent',
  },

  cameraOverlayBottom: {
    position: 'absolute',
    flexDirection: 'row',
    right: 0,
    left: 0,
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'space-around',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    paddingVertical: 20,
    paddingHorizontal: 40,
  },

  cameraBackButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    padding: 5,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    borderRadius: 40,
    zIndex: 100,
  },

  cameraCaptureButtonView: {
    backgroundColor: Colors.TEXT_HEADER,
    borderRadius: 30,
    marginHorizontal: 15,
    opacity: 0.8,
    height: 60,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },

  videoCaptureButtonView: {
    backgroundColor: '#000',
    borderRadius: 30,
    marginHorizontal: 15,
    opacity: 0.8,
    height: 60,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },

  timerText: {
    color: '#fff',
    fontSize: 16,
  },

  // Old Ones
  baseFont: {
    fontFamily: 'OpenSans-Regular',
    fontWeight: '400',
  },
  header: {
    height: 60,
    backgroundColor: Colors.BG_NAVBAR,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    color: Colors.TEXT_HEADER,
    textAlign: 'center',
    fontSize: 18,
    // ...material.subheadingObject, // example for typography imports
  },
  btnPrimaryBlock: {
    height: 50,
    borderRadius: 25,
    marginHorizontal: 70,
    marginTop: 7,
  },
  btnIconRounded: {
    width: 40,
    height: 40,
    backgroundColor: Colors.BG_BTN_ICON_ROUNDED,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  safeContainer: {
    flex: 1,
    backgroundColor: '#2B5EBF',
  },

  wholeContainer: {
    flex: 1,
  },

  headerTitleWhite: {
    ...material.subheadingWhiteObject,
  },

  // Auth screen component styles
  authHeaderStyle: {
    backgroundColor: 'red',
  },
  // Button
  btnAuthContainer: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: Colors.BG_BTN,
    borderRadius: 20,
    flexDirection: 'row',
    height: 45,
    justifyContent: 'center',
    margin: 7,
  },
  btnAuthdisabled: {
    backgroundColor: Colors.BUTTON_DISABLED,
  },
  btnAuthicon: {
    color: Colors.ICON_WHITE,
    margin: 4,
    width: 45,
  },
  btnAuthtext: {
    color: Colors.TEXT_WHITE,
    marginLeft: 8,
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
  },
  // IconButton
  authIBtnContainer: {
    alignItems: 'center',
    borderRadius: 22.5,
    height: 45,
    justifyContent: 'center',
    margin: 4,
    width: 45,
  },
  authIBtnIcon: {
    fontSize: 30,
    height: 30,
    lineHeight: 30,
  },
  // LinkButton
  authLBtncontainer: {
    alignItems: 'center',
    flexDirection: 'row',
    margin: 4,
  },
  // Form Error
  authFormError: {
    color: Colors.ERROR_COLOR,
    lineHeight: 20,
    padding: 8,
    textAlign: 'center',
  },
  authFormSpacer: {
    // height: 36,
  },
  // Text Field
  authTFContainer: {
    // alignItems: 'center',
    // backgroundColor: Colors.BG_AUTH_TF,
    // borderColor: Colors.BORDER_COLOR,
    // borderRadius: 30,
    // borderWidth: 1,
    // flexDirection: 'row',
    // margin: 8,
    marginTop: 5,
    marginBottom: 5,
  },
  authTFContainerError: {
    borderColor: Colors.ERROR_COLOR,
  },
  authTFIcon: {
    backgroundColor: Colors.TRANSPARENT,
    color: Colors.ICON_AUTH_TF,
    fontSize: 18,
    marginLeft: 16,
    textAlign: 'center',
    width: 24,
  },
  authTFInput: {
    height: 40,
    // paddingVertical: 5,
    paddingHorizontal: 20,
    margin: 1,
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'rgba(0,0,0,0.2)',
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#222',
    fontFamily: 'OpenSans-Regular',
    // color: Colors.TEXT_BLACK,
    // flex: 1,
    // lineHeight: 24,
    // height: 50,
    // marginLeft: 8,
    // marginRight: 16,
    // ...human.bodyObject,
  },
  authTFView: {
    backgroundColor: Colors.TRANSPARENT,
    top: 0,
    marginTop: 5,
    paddingHorizontal: 15,
  },
  authTFLabelView: {
    color: Colors.INACTIVE,
    paddingHorizontal: 20,
    fontSize: 16,
    fontFamily: 'OpenSans-Regular',
  },
  // Tab
  authTabContainer: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: Colors.BORDER_COLOR,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
  },
  authTabContainerActive: {
    borderBottomWidth: 2,
    borderColor: Colors.PRIMARY,
  },
  authTabIcon: {
    fontSize: 24,
    marginRight: 8,
    color: Colors.INACTIVE,
  },
  authTabIconActive: {
    color: Colors.PRIMARY,
    paddingTop: 3,
  },
  authTabText: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
    color: Colors.INACTIVE,
  },
  authTabTextActive: {
    color: Colors.PRIMARY,
    paddingTop: 3,
  },
  // List
  authListContainer: {
    backgroundColor: Colors.BG_WHITE,
    borderColor: Colors.BORDER_COLOR,
    borderTopWidth: 1,
    flex: 1,
    marginTop: 16,
  },
  // ListHeader
  authListHeaderStyle: {
    backgroundColor: Colors.PRIMARY,
    borderColor: Colors.BORDER_COLOR_DARK,
    padding: 16,
  },
  authListHeaderText: {
    color: Colors.TEXT_WHITE,
    fontSize: 16,
    fontWeight: '500',
  },
  // ListItem
  authListItemBtnIcon: {
    fontSize: 24,
    color: Colors.ICON_AUTH_LI_BTN,
    marginLeft: 18,
  },
  authListItemContainer: {
    alignItems: 'center',
    alignSelf: 'stretch',
    borderBottomWidth: 1,
    borderColor: Colors.BORDER_COLOR,
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  authListItemIcon: {
    color: Colors.PRIMARY,
    fontSize: 24,
    marginRight: 16,
    textAlign: 'center',
    width: 30,
  },
  authListItemTextStyle: {
    flex: 1,
  },
  // Tabs
  authTabsContainer: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: Colors.BG_WHITE,
  },
  // LoadingModal
  authLMContainer: {
    alignItems: 'center',
    backgroundColor: Colors.BG_WHITE,
    borderRadius: 15,
    height: 150,
    justifyContent: 'center',
    width: 150,
  },
  authLMOverlay: {
    alignItems: 'center',
    backgroundColor: Colors.BG_AUTH_LM_OVERLAY,
    flex: 1,
    justifyContent: 'center',
  },
  // Screen
  authScreenContainer: {
    backgroundColor: Colors.SCREEN_BACKGROUND_COLOR,
    // paddingHorizontal: 20,
    flex: 1,
  },
  // email component styles
  // EmailAuth
  authEAContainer: {
    flex: 1,
    padding: 20,
  },
  authEAForgottenPasswordContainer: {
    alignSelf: 'center',
    marginVertical: 15,
    marginRight: 8,
  },
  authEAForgottenPasswordText: {
    color: Colors.PRIMARY,
    fontSize: 13,
    alignSelf: 'center',
    ...baseFontFamily,
  },
  // login screen styles
  // LoggedInHome
  authLIHImage: {
    height: 250,
    width: 250,
  },
  authLIHContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  authLIHWelcomeText: {
    fontSize: 20,
    marginTop: 24,
    textAlign: 'center',
  },
  // Profile
  authProfileNameText: {
    alignSelf: 'center',
    fontSize: 18,
  },
  authProfilePhoto: {
    alignSelf: 'center',
    borderRadius: 50,
    marginBottom: 8,
    marginTop: 16,
  },
  authProfilePhotoImage: {
    height: 100,
    width: 100,
  },
  authProfilePhotoIcon: {
    fontSize: 100,
    height: 100,
  },
  // Logout screen styles
  // LoggedOutHome
  authLOHLogo: {
    height: 250,
    width: 250,
  },
  authLOHLinkContainer: {
    alignSelf: 'center',
    height: 45,
    marginTop: 20,
  },
  authLOHLoginOptionsContainer: {
    padding: 8,
  },
  authLOHSignUpText: {
    fontWeight: '700',
    color: Colors.PRIMARY,
  },
  authLOHWelcomeContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  authLOHWelcomeText: {
    fontSize: 20,
    marginTop: 24,
    textAlign: 'center',
  },
  // auth/core - screen styles
  // Login Screen
  loginHeaderCurve: {
    width: '100%',
    height: 70,
  },
  loginBrandLogoView: {
    paddingTop: 40,
    paddingBottom: spacingSizes.xl,
    backgroundColor: Colors.BG_WHITE,
  },
  loginBottomTabView: {
    backgroundColor: Colors.BG_LOGIN_BOTTOM_TAB,
    height: 60,
    borderTopColor: Colors.BORDER_LOGIN_BOTTOM_TAB,
    borderTopWidth: 1,
  },
  loginBottomTabText: {
    fontSize: fontSizes.base,
    color: Colors.TEXT_HEADER,
    ...baseFontFamily,
  },
  loginErrorMessage: {
    backgroundColor: Colors.BG_LOGIN_ERROR_MESSAGE,
    marginHorizontal: 14,
    padding: spacingSizes.xs,
    borderRadius: borderRads.xs,
  },

  loginServerChangeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    paddingTop: 30,
  },

  // Forgotten Password Screen
  passwordContainerSpacing: {
    paddingHorizontal: 15,
    marginTop: 15,
  },

  // ReAuthScreen
  authRASContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    height: 300,
    justifyContent: 'center',
    padding: 8,
    width: Dimensions.get('window').width - 32,
  },
  authRASHeader: {
    fontSize: 16,
    marginBottom: 8,
    marginTop: 8,
  },
  authRASOverlay: {
    alignItems: 'center',
    backgroundColor: Colors.BG_AUTH_LM_OVERLAY,
    flex: 1,
    justifyContent: 'center',
  },
  // phone component styles
  // PhoneNumeberForm
  authPNFContainer: {
    alignSelf: 'stretch',
    flex: 1,
    padding: 20,
  },
  // VerificationCodeForm
  authVCFContainer: {
    flex: 1,
    padding: 20,
  },
  authVCFVerifyHeading: {
    fontWeight: '500',
    marginHorizontal: 32,
    marginVertical: 4,
    textAlign: 'center',
  },
  // social components styles
  // SocialLogin
  authSLIconContainer: {
    backgroundColor: Colors.BG_WHITE,
  },
  authSLIconStyle: {
    color: Colors.PRIMARY,
  },
  authSLOptionsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.PRIMARY,
    height: 140,
  },
  authSLOptionsContainerHidden: {
    height: 0,
  },
  authSLOrContainer: {
    alignItems: 'center',
    backgroundColor: Colors.BG_WHITE,
    borderBottomLeftRadius: 22.5,
    borderBottomRightRadius: 22.5,
    borderColor: Colors.PRIMARY,
    borderWidth: 1,
    height: 22.5,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 45,
  },
  authSLOrText: {
    color: Colors.PRIMARY,
    fontWeight: '700',
    marginTop: -2,
  },
  authSLSocialBtnsContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  authSLSocialTitle: {
    color: Colors.TEXT_WHITE,
    fontSize: 16,
    fontWeight: '500',
    marginTop: 16,
  },
  // margin styles
  m_5: {
    margin: 5,
  },
  m_15: {
    padding: 20,
  },
  // padding styles

  p_20: {
    padding: 20,
  },
  fl_1: {
    flex: 1,
  },
  brandLogo_auth: {
    width: 100,
    height: 100,
  },
  button_s1: {
    backgroundColor: Colors.BG_WHITE,
    height: 34,
    // color: '#FFF',
  },
  marginTop30: {
    marginTop: 30,
  },
  // new styles
  // paddingLeft styles

  // Icon styles
  arrowBackWhite: {
    color: Colors.ICON_WHITE,
  },
  // marginBottom
  minus_Mb_18: {
    marginBottom: -18,
  },
  // message composer
  composerInput: {
    flex: 1,
    padding: 5,
    fontSize: 16,
    borderWidth: 1,
    borderColor: Colors.TYP_MIDGRAY,
    borderRadius: 44 / 2,
    minHeight: 44,
    maxHeight: 120,
    backgroundColor: Colors.BG_WHITE,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginBottom: 3,
    ...baseFontFamily,
  },
  composerContainerAndroid: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingRight: 7,
  },
  // threaded message
  threadedMessageContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: 8,
    margin: 5,
    backgroundColor: 'rgba(0,0,0,0.16)',
    borderRadius: 5,
  },
  threadedMessageView: {
    flexDirection: 'column',
    minWidth: 100,
  },
  threadedMessageText: {
    fontWeight: '500',
  },
  threadedMessageImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginLeft: 5,
  },
};

module.exports = styles;
