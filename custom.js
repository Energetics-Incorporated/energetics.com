//$(".renewable-energy h1.page-title").html("Business Areas");
//$(".critical-infrastructure h1.page-title").html("Business Areas");

// Forced to do this because of the Tiger Team mockups and the direction by PM. 

/*
$(".renewable-energy h1.page-title, .critical-infrastructure-resilience h1.page-title, .climate-changesustainability h1.page-title, .industrial h1.page-title, .grid-modernization h1.page-title, .transportation h1.page-title, .eip h1.page-title, .energy-efficiency h1.page-title")
  .filter(function( index ) {
    return index == 0;
  })
    .html("Business Areas");

	
$(".strategic-planning-roadmapping h1.page-title, .communications h1.page-title")
  .filter(function( index ) {
    return index == 0;
  })
    .html("Services");	
*/

// Added to make the sections background colors adhere to the stupid mockups that the Tiger Team created.    
var whiteStuff = $(".content, .content-inner, .title--description-position-over-image .title-desc-wrapper:not(.has-main-image)")
	$( ".parallax-item:even" ).find(whiteStuff).css( "background-color", "#ffffff" );    
  
// Remove hyperlinks from "Key Activities" area below the Business Area and Services page title. I know this is stupid but don't ask me why I'm doing this. 
//  $('a.sqs-block-button-element--small').contents().unwrap();