﻿	var aliasConfig = {
appName : ["", "", ""],
totalPageCount : [],
largePageWidth : [],
largePageHeight : [],
normalPath : [],
largePath : [],
thumbPath : [],

ToolBarsSettings:[],
TitleBar:[],
appLogoIcon:["appLogoIcon"],
appLogoLinkURL:["appLogoLinkURL"],
bookTitle : [],
bookDescription : [],
ButtonsBar : [],
ShareButton : [],
ShareButtonVisible : ["socialShareButtonVisible"],
ThumbnailsButton : [],
ThumbnailsButtonVisible : ["enableThumbnail"],
ZoomButton : [],
ZoomButtonVisible : ["enableZoomIn"],
FlashDisplaySettings : [],
MainBgConfig : [],
bgBeginColor : ["bgBeginColor"],
bgEndColor : ["bgEndColor"],
bgMRotation : ["bgMRotation"],
backGroundImgURL : ["mainbgImgUrl","innerMainbgImgUrl"],
pageBackgroundColor : ["pageBackgroundColor"],
flipshortcutbutton : [],
BookMargins : [],
topMargin : [],
bottomMargin : [],
leftMargin : [],
rightMargin : [],
HTMLControlSettings : [],
linkconfig : [],
LinkDownColor : ["linkOverColor"],
LinkAlpha : ["linkOverColorAlpha"],
OpenWindow : ["linkOpenedWindow"],
searchColor : [],
searchAlpha : [],
SearchButtonVisible : ["searchButtonVisible"],

productName : [],
homePage : [],
enableAutoPlay : ["autoPlayAutoStart"],
autoPlayDuration : ["autoPlayDuration"],
autoPlayLoopCount : ["autoPlayLoopCount"],
BookMarkButtonVisible : [],
googleAnalyticsID : ["googleAnalyticsID"],
OriginPageIndex : [],	
HardPageEnable : ["isHardCover"],	
UIBaseURL : [],	
RightToLeft: ["isRightToLeft"],	

LeftShadowWidth : ["leftPageShadowWidth"],	
LeftShadowAlpha : ["pageShadowAlpha"],
RightShadowWidth : ["rightPageShadowWidth"],
RightShadowAlpha : ["pageShadowAlpha"],
ShortcutButtonHeight : [],	
ShortcutButtonWidth : [],
AutoPlayButtonVisible : ["enableAutoPlay"],	
DownloadButtonVisible : ["enableDownload"],	
DownloadURL : ["downloadURL"],
HomeButtonVisible :["homeButtonVisible"],
HomeURL:['btnHomeURL'],
BackgroundSoundURL:['bacgroundSoundURL'],
//TableOfContentButtonVisible:["BookMarkButtonVisible"],
PrintButtonVisible:["enablePrint"],
toolbarColor:["mainColor","barColor"],
loadingBackground:["mainColor","barColor"],
BackgroundSoundButtonVisible:["enableFlipSound"],
FlipSound:["enableFlipSound"],
MiniStyle:["userSmallMode"],
retainBookCenter:["moveFlipBookToCenter"],
totalPagesCaption:["totalPageNumberCaptionStr"],
pageNumberCaption:["pageIndexCaptionStrs"]
};
var aliasLanguage={
frmPrintbtn:["frmPrintCaption"],
frmPrintall : ["frmPrintPrintAll"],
frmPrintcurrent : ["frmPrintPrintCurrentPage"],
frmPrintRange : ["frmPrintPrintRange"],
frmPrintexample : ["frmPrintExampleCaption"],
btnLanguage:["btnSwicthLanguage"],
btnTableOfContent:["btnBookMark"]
}
;
	var bookConfig = {
	appName:'flippdf',
	totalPageCount : 0,
	largePageWidth : 1080,
	largePageHeight : 1440,
	normalPath : "files/page/",
	largePath : "files/large/",
	thumbPath : "files/thumb/",
	
	ToolBarsSettings:"",
	TitleBar:"",
	appLogoLinkURL:"",
	bookTitle:"FLIPBUILDER",
	bookDescription:"",
	ButtonsBar:"",
	ShareButton:"",
	
	ThumbnailsButton:"",
	ThumbnailsButtonVisible:"Show",
	ZoomButton:"",
	ZoomButtonVisible:"Yes",
	FlashDisplaySettings:"",
	MainBgConfig:"",
	bgBeginColor:"#cccccc",
	bgEndColor:"#eeeeee",
	bgMRotation:45,
	pageBackgroundColor:"#FFFFFF",
	flipshortcutbutton:"Show",
	BookMargins:"",
	topMargin:10,
	bottomMargin:10,
	leftMargin:10,
	rightMargin:10,
	HTMLControlSettings:"",
	linkconfig:"",
	LinkDownColor:"#808080",
	LinkAlpha:0.5,
	OpenWindow:"_Blank",

	BookMarkButtonVisible:'true',
	productName : 'Demo created by Flip PDF',
	homePage : 'http://www.flipbuilder.com/',
	isFlipPdf : "true",
	TableOfContentButtonVisible:"true",
	searchTextJS:'javascript/search_config.js',
	searchPositionJS:undefined
};
	
	
	;bookConfig.BookTemplateName="metro";bookConfig.barColor="#000000";bookConfig.toobarClear="No";bookConfig.showToolBarBevel="Hide";bookConfig.formFontColor="#FFFFFF";bookConfig.mainColor="#27181A";bookConfig.appLogoIcon="../files/mobile-ext/appLogoIcon.png";bookConfig.logoTarget="Blank";bookConfig.homeButtonVisible="Hide";bookConfig.btnHomeURL="%first page%";bookConfig.btnHomeURLTarget="Self";bookConfig.aboutButtonVisible="Hide";bookConfig.fullButtonVisible="Show";bookConfig.tryFullScreenInteractive="No";bookConfig.ShowFullScreenTipsOnFirstPage="No";bookConfig.helpButtonVisible="Show";bookConfig.helpContentFileURL="../files/mobile-ext/helpContentFileURL.png";bookConfig.enablePrint="No";bookConfig.printCurrentPageAsDefault="No";bookConfig.enableFlipSound="Enable";bookConfig.bacgroundSoundLoop="-1";bookConfig.bgSoundVol="-1";bookConfig.flipSoundVol="0.3";bookConfig.enableZoomIn="Enable";bookConfig.showSinglePageFirst="No";bookConfig.minZoomWidth="700";bookConfig.maxZoomWidth="1400";bookConfig.defaultZoomWidth="1000";bookConfig.zoomPageDoublePageMode="Yes";bookConfig.isZoomerDefaultFollow="Yes";bookConfig.searchButtonVisible="Show";bookConfig.searchHightlightColor="#ffff00";bookConfig.searchMinialLen="3";bookConfig.isLogicAnd="No";bookConfig.shareWithEmailButtonVisible="Show";bookConfig.btnShareWithEmailBody="{link}";bookConfig.socialShareButtonVisible="Show";shareObj = [];bookConfig.isInsertFrameLinkEnable="Show";bookConfig.languageSetting="English";bookConfig.langaugeChangeable="Yes";bookConfig.enableAutoPlay="Yes";bookConfig.autoPlayDuration="9";bookConfig.autoPlayLoopCount="1";bookConfig.autoPlayAutoStart="No";bookConfig.drawAnnotationsButtonVisible="Disable";bookConfig.bookmarkButtonVisible="Hide";bookConfig.enablePageBack="Show";bookConfig.enablePageForward="Show";bookConfig.selectionTextVisible="Enable";bookConfig.enableCropButton="Disable";bookConfig.enableClickBackgroundToTurn="Disable";bookConfig.isBigButtonEnable="Yes";bookConfig.UIBtnIconColor="#ECF5FB";bookConfig.bigNavButtonColor="#C0C0C0";bookConfig.bigNavBackgroundColor="#999999";bookConfig.bigNavBackgroundAlpha="0.2";bookConfig.bigNavBackgroundHoverAlpha="0.4";bookConfig.enableDisplayModeButton="No";bookConfig.defaultBookStatus="Flip";bookConfig.singleDoubleTogglable="Disable";bookConfig.isPageBrowserEnable="Yes";bookConfig.isVerticalBrowserEnable="Yes";bookConfig.isVerticalBrowseAsDefault="No";bookConfig.isPageBrowserDoubleEnable="Enable";bookConfig.isPageBrowserDoublePageAsDefault="Yes";bookConfig.thicknessWidthType="Thinner";bookConfig.thicknessColor="#ffffff";bookConfig.hotSpotWidthType="Normal";bookConfig.backgroundAlpha="1";bookConfig.moveFlipBookToCenter="Yes";bookConfig.flipBookHelpFlipEnable="True";bookConfig.enableMouseDownToFlip="True";bookConfig.showMouseTraceAtFirstPage="True";bookConfig.openThumbInit="False";bookConfig.tmplPreloader="Default";bookConfig.restorePageVisible="No";bookConfig.flashMenuSetting="Default";bookConfig.UIBtnFontColor="#C6C6C6";bookConfig.UIBtnFont="Tahoma";bookConfig.UIBtnPageIndexFontColor="#000000";bookConfig.hightLightColor="#A4B3F3";bookConfig.bgBeginColor="#E2E2E2";bookConfig.bgEndColor="#E2E2E2";bookConfig.bgMRotation="90";bookConfig.mainbgImgUrl="../files/mobile-ext/mainbgImgUrl.jpg";bookConfig.mainbgImgPosition="Scale to fit";bookConfig.mainColor1="#9D9989";bookConfig.thumbSelectedColor="#FF8000";bookConfig.pageBackgroundColor="#E8E8E8";bookConfig.pageWidth="504.00";bookConfig.pageHeight="720.00";bookConfig.leftPageShadowWidth="90";bookConfig.rightPageShadowWidth="55";bookConfig.pageShadowAlpha="0.6";bookConfig.coverPageShowShadow="Show";bookConfig.isRightToLeft="No";bookConfig.isTheBookOpen="No";bookConfig.isHardCover="No";bookConfig.coverBorderWidth="8";bookConfig.coverBorderColor="#572F0D";bookConfig.showOutterCoverBoarder="Yes";bookConfig.hardCoverBorderRounded="8";bookConfig.hardCoverSpinShow="Show";bookConfig.enableFastFlip="Enable";bookConfig.enableShowingFastFlipPageIndexIcon="Show";bookConfig.pageFlippingTime="0.6";bookConfig.mouseWheelTurnPage="Yes";bookConfig.userSmallMode="Yes";bookConfig.maxWidthToSmallMode="400";bookConfig.maxHeightToSmallMode="300";bookConfig.flipBookMarginWidth="10";bookConfig.flipBookMarginHeight="10";bookConfig.leftRightPnlShowOption="None";bookConfig.LargeLogoPosition="top-left";bookConfig.LargeLogoTarget="Blank";bookConfig.isFixLogoSize="No";bookConfig.logoFixWidth="0";bookConfig.logoFixHeight="0";bookConfig.isTableItemRigthJustified="No";bookConfig.passwordTips="Please contact the <a href=mailto:author@sample.com><u>author</u></a> to access the web";bookConfig.linkOverColor="#800080";bookConfig.linkOverColorAlpha="0.2";bookConfig.linkOpenedWindow="Blank";bookConfig.linkEnableWhenZoom="Enable";bookConfig.MidBgColor="#758867";bookConfig.totalPageCount=4;bookConfig.largePageWidth=1800;bookConfig.largePageHeight=2571;;bookConfig.securityType="1";bookConfig.CreatedTime ="190520141757";bookConfig.bookTitle="animated Tech Communications Brochure";bookConfig.bookmarkCR="ccf9da40a9d44dbfe5fbf6fd3deebe60910eff78";bookConfig.productName="Flip PDF Professional";bookConfig.homePage="http://www.flipbuilder.com";bookConfig.searchPositionJS="javascript/text_position[1].js";bookConfig.searchTextJS="javascript/search_config.js";bookConfig.normalPath="../files/mobile/";bookConfig.largePath="../files/mobile/";bookConfig.thumbPath="../files/thumb/";bookConfig.userListPath="../files/extfiles/users.js";var language = [];; var pageEditor = {"setting":{}, "pageAnnos":[[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.610575","y":"0.969714","width":"0.260737","height":"-0.021991"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://www.energetics.com"}}],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.764814","y":"0.824307","width":"0.158673","height":"-0.018608"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://energetics.com"}}]]}; bookConfig.isFlipPdf=true; var pages_information =[{},{},{},{}];
	bookConfig.hideMiniFullscreen=true;
	if(language&&language.length>0&&language[0]&&language[0].language){
		bookConfig.language=language[0].language;
	}
	
try{
	for(var i=0;pageEditor!=undefined&&i<pageEditor.length;i++){
		if(pageEditor[i].length==0){
			continue;
		}
		for(var j=0;j<pageEditor[i].length;j++){
			var anno=pageEditor[i][j];
			if(anno==undefined)continue;
			if(anno.overAlpha==undefined){
				anno.overAlpha=bookConfig.LinkAlpha;
			}
			if(anno.outAlpha==undefined){
				anno.outAlpha=0;
			}
			if(anno.downAlpha==undefined){
				anno.downAlpha=bookConfig.LinkAlpha;
			}
			if(anno.overColor==undefined){
				anno.overColor=bookConfig.LinkDownColor;
			}
			if(anno.downColor==undefined){
				anno.downColor=bookConfig.LinkDownColor;
			}
			if(anno.outColor==undefined){
				anno.outColor=bookConfig.LinkDownColor;
			}
			if(anno.annotype=='com.mobiano.flipbook.pageeditor.TAnnoLink'){
				anno.alpha=bookConfig.LinkAlpha;
			}
		}
	}
}catch(e){
}
try{
	$.browser.device = 2;
}catch(ee){
}