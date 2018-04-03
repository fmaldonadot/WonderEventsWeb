/***************************************** PAGE 1 Index.html **********************************************/
/*************************** Function to autenticate and enable the menu **********************************/
var login_username="admin";
var login_password="12345";

// To make the login and logout process 
function authenticate_login()
{
  var v1, v2;
 
  v1 = document.getElementById("UserName").value;
  v2 = document.getElementById("Pass").value;
	if ((v1 == login_username) &&
	   (v2 ==  login_password))
	{
	  alert('Welcome to our website');
	  $(document).ready(function(){
		  $(".Nav").show();
		  $("#menufooter").show();
      });
	  $(document).ready(function(){
		  $("#login").hide();
		  $("#logout").show();
      });
	}
	else
	{
	  alert('Invalid User or Password Login');
	  $(document).ready(function(){
		  $("#login").show();
		  $("#logout").hide();
         });

	}
}


/***************************************** PAGE 3 Our service.html **********************************************/
/*********************************** Function to show mapping stages ********************************************/
function showEstage(stage)
{
	document.getElementById("stage01").innerHTML = ('<a href="javascript:history.go(0)"></a>');
	document.getElementById("stage02").innerHTML = ('<a href="javascript:history.go(0)"></a>');
	document.getElementById("stage03").innerHTML = ('<a href="javascript:history.go(0)"></a>');
	document.getElementById("stage04").innerHTML = ('<a href="javascript:history.go(0)"></a>');
	document.getElementById("stage05").innerHTML = ('<a href="javascript:history.go(0)"></a>');
	switch (stage)
	{
		case 1:
			document.getElementById("stage01").innerHTML = ('<div class = "maptextinfo" style="background-size: 100% ; background-image: url(../img/pas0'+stage+'.jpg);"><b><u>Pre-Event planning: </b></u><a href="javascript:history.go(0)"><span style="font-size: 22px; color:purple; margin-left:700px;">X</span></a><br />At Least 3 Months Before.<br />1. Brainstorm and decide what kind of event you are organizing. Choose a theme if appropriate.<br />2. Organize an event planning committee if needed.<br />3. Draft your budget and set a fundraising goal that is attainable.<br />4. Set a date. Check to see if your preferred venue(s) are available for this date.<br />5. Book the venue.<br />6. Book any equipment.<br />7. Decide on what suppliers you need to make your event successful. Consider entertainment, food, decor,audio visual, and printing.<br />8. Decide on (and order if necessary) any food that is required.<br />9. Solicit sponsors if required.<br />10. Decide if you need any volunteers on the day of your event. If so, how many? Recruit them now.<br />11. Prepare promotional materials like flyers and posters. Ask your Foundation representative for help.<br />12. Complete and submit your Event Proposal Form to your Foundation representative.<br />13. Apply for a liquor license/lottery license if required.<br />14. Choose and Invite speakers.<br />15. Send out invitations if required. Send your event information to all of your contacts.</div>');
		break;
		case 2:
			document.getElementById("stage02").innerHTML = ('<div class = "maptextinfo" style="background-size: 50% ; background-image: url(../img/pas0'+stage+'.jpg);"><b><u>Tracking Process: </b></u><a href="javascript:history.go(0)"><span style="font-size: 22px; color:purple; margin-left:700px;">X</span></a><br />1 Month Before. <br />1. Keep track of your event guests/participants, number of tickets sold, sponsors, etc.<br />2. Submit event details to local events calendars and local media.');
		break;
		case 3:
			document.getElementById("stage03").innerHTML = ('<div class = "maptextinfo" style="background-size: 50% ; background-image: url(../img/pas0'+stage+'.jpg);"><b><u>Checking Process Progress: </b></u><a href="javascript:history.go(0)"><span style="font-size: 22px; color:purple; margin-left:650px;">X</span></a><br />2 Weeks Before. <br />1. Create a final list of volunteers and determine their day-of duties. Send out a reminder.<br />2. Confirm event information with all suppliers.<br />3. Contact local media to attend the event.');
		break;
		case 4:
			document.getElementById("stage04").innerHTML = ('<div class = "maptextinfo" style="background-size: 100% ; background-image: url(../img/pas0'+stage+'.jpg);"><b><u>Installing and Supervise Event: </b></u><a href="javascript:history.go(0)"><span style="font-size: 22px; color:purple; margin-left:900px;">X</span></a><br />Day of Your Event. <br />1. Meet with your committee and volunteers before the event starts to make sure everyone knows theirroles/duties.<br />2. Set up for the event.<br />3. Fill out Pledge Forms.<br />4. HAVE FUN!<br />5. Take plenty of pictures.<br />6. Thank everyone for their help.<br />7. Collect funds and financial/donor information in a secure place.');
		break;
		case 5:
			document.getElementById("stage05").innerHTML = ('<div class = "maptextinfo" style="background-size: 50% ; background-image: url(../img/pas0'+stage+'.jpg);"><b><u>Post-Event analysis: </b></u><a href="javascript:history.go(0)"><span style="font-size: 22px; color:purple; margin-left:700px;">X</span></a><br />2 Weeks Before. <br />1. Tally your finances and determine the total donation amount. Use our Post-Event Checklist.<br />2. Send thank you letters to participants, sponsors and volunteers.<br />3. Evaluate the success of your event and document any changes you would make next year.<br />4. Begin planning for your event next year!');
		break;
	}
}

/***************************************** PAGE 4 package.html **********************************************/
/*********************************** Function to search packages ********************************************/
var package_option = [ "weddings" , "private" , "corporate" ];

function showPackage()
{
	var option = document.getElementById("packageinfo").value;
	var pack_height = 0;
	try
	{
		for( i = 0 ; i < package_option.length ; i++)
		{
			if ( option.toUpperCase() == package_option[i].toUpperCase() )
			{
				switch (i)
				{
					case 0:
						pack_height = "1190";
						break;
					case 1:
						pack_height = "1201";
						break;
					case 2:
						pack_height = "1780";
						break;

				}
				document.getElementById("package_search").innerHTML = ('<iframe src="pack_search'+(i+1)+'.html" style="height:'+pack_height+'px"></iframe>');
				break;
			}
			
		}
		if ( ( i == 3 ) && (option != "") )	
			document.getElementById("package_search").innerHTML = ('<iframe src="pack_custom.html" style="height:580px"></iframe>');
		else if (option == "")
			alert('Enter a name of package');
	}
	catch(err)
	{
		alert('Package not found');
		document.getElementById("package_search").innerHTML = ('<iframe src="pack_custom.html" style="height:580px"></iframe>');
	}

}
/*************************************************************************************************************/

/************************************ PAGE 5 prepare_pack.html **********************************************/
/************************ Function to find a best budget accordind to form filled ***************************/
function show_SubMenu()
{
	var option = document.getElementById("type_event").value;

	switch (option)
	{
		case 'Private Parties':
			// Display Private Parties sub menu
			$(document).ready(function(){
    			$("#private_opt").show();
        	});   	
        	$(document).ready(function(){
    			$("#corporate_opt").hide();
        	});   
        	
		break;
		case "Corporate":
			// Display Private Parties sub menu
			$(document).ready(function(){
    			$("#corporate_opt").show();
        	});  
        	$(document).ready(function(){
    			$("#private_opt").hide();
        	});   	
        	
		break;
		default:
			$(document).ready(function(){
    			$("#private_opt").hide();
        	});   				

			$(document).ready(function(){
    			$("#corporate_opt").hide();
        	});   
        	$(document).ready(function(){
    			$("#show_spec").hide();
			});    
        
        break;				

	} 

}

/********* Show option to write a Party or Corporate context when "Others" option is selected *******************/
function show_SpecifyOthers( id )
{
	var option = document.getElementById( id ).value;

	if (option == "Others")
    {
        $(document).ready(function(){
    			$("#show_spec").show();
        });  
    }
    else
    {
    	$(document).ready(function(){
    		$("#show_spec").hide();
    	});   
    }

}

/*************************** To Show a Budget result according with the form result *************************/
var guests_quant_prices = [ [ 50 , 1100 ] , [ 150 , 2980 ] , [ 500 , 9800 ] ];

var pack_category = [ "Intimate" , "Standard" , "VIP" , "Deluxe VIP"];

var extra_service = [ "Add Location " , "VIP Cattering" , "Design, Print and Delivery Invitations " , 
					  "Photography service" , "Drone event recording service" , "Organic food menu" , "Guests accommodation and transport"];

var additional_guests = 20;

var cookie_time = 10;

function BudgetCalcul()
{
	var guests = document.getElementById("Guests").value;
	var guests_rem = 0;
	var subtotal = 0;
	var package_price = 0;
	var extras = document.forms[0]; //My checkboxes begins at index 8

	if ( guests <=  guests_quant_prices [0][0] )
	{
		subtotal += guests_quant_prices [0][1];
	}
	
	else if (( guests >  guests_quant_prices [0][0] )&& (guests <  guests_quant_prices [1][0] ))
	{
		subtotal += guests_quant_prices [0][1];
		guests_rem = guests - guests_quant_prices [0][0];
	}
	
	else if (( guests >=  guests_quant_prices [1][0] )&& (guests <  guests_quant_prices [2][0] ))
	{
		subtotal += guests_quant_prices [1][1];
		guests_rem = guests - guests_quant_prices [1][0];
	}
	
	else if ( guests >=  guests_quant_prices [2][0] )
	{
		subtotal += guests_quant_prices [2][1];
		guests_rem = guests - guests_quant_prices [2][0];
	}

	subtotal += guests_rem * additional_guests;
	package_price = subtotal; 
	// Setting cookie package_price
	setCookie("BPackPrice" , package_price, cookie_time );

	for ( i = 8 ; i < extras.length ; i++ )
	{
		if ( extras[i].checked )
			subtotal += Number(extras[i].value);
	}

	showBudget( subtotal , package_price );
}

/*************************** to show all the information about the budget requested ***********************************/
function showBudget( subtotal , package_price )
{
	var name = document.getElementById("FName").value + " "+ document.getElementById("LName").value;
	var ev_type = document.getElementById("type_event").value;
	var event = document.getElementById("type_event").value + " "+ document.getElementById("opt1").value + " "+ document.getElementById("opt2").value + " "+ document.getElementById("Specify").value;
	var guest = document.getElementById("Guests").value;
	var category = "";
	var extras = document.forms[0]; //My checkboxes begins at index 8

	document.getElementById("opt1").value = "";
	document.getElementById("opt2").value = "";

	if (check_Form_Values())
	{
		document.getElementById("FNClient").innerHTML = name;
		document.getElementById("SHEvent").innerHTML = event;
		document.getElementById("SHGuests").innerHTML = guest;

		// Setting Name, type, event and guests cookies for a cookie_time specied at top
		setCookie("Client", name, cookie_time );
		setCookie("Event", event, cookie_time );
		setCookie("Guests", guest, cookie_time );
		setCookie("Type", ev_type, cookie_time );

		if ( guest < 50 )
			category = pack_category[0];
		else if (( guest >= 50 )&&( guest < 150 ))
			category = pack_category[1];
		else if (( guest >= 150 )&&( guest < 500 ))
			category = pack_category[2];
		else if ( guest >= 500 )
			category = pack_category[3];

		// Setting event category cookie for a cookie_time specied at top
		setCookie("Category", category, cookie_time );

		document.getElementById("SHPackage").innerHTML = "Recommended "+ category + " Category Budget ................................................ "+package_price+" CAD$" ;

		for ( i = 8 ; i < extras.length ; i++ )
		{
			if ( extras[i].checked )
			{
				document.getElementById( "extra"+(i-8) ).innerHTML = extra_service[i-8] +" ................................................. "+Number(extras[i].value)+" CAD$";
				// Setting extra services cookies
				setCookie("Extra"+(i-8) , extras[i].value , cookie_time );
			}
			else
				document.getElementById( "extra"+(i-8) ).innerHTML = "";
		}

		document.getElementById("SHSubtotal").innerHTML ="SUBTOTAL ................................................ " + subtotal + " CAD$";
		
		// Setting subtotal cookie
		setCookie("Subtotal" , subtotal, cookie_time );

		if( document.getElementById("type_event").value == "Weddings")
			document.getElementById( "EventPic" ).innerHTML = ('<img src="../img/package_wedding.jpg" style = "width: 200px; float:right; margin-right: 20px; margin-top: 10px; border-radius: 10px; box-shadow: 2px 2px 2px black">');
		else if( document.getElementById("type_event").value == "Private Parties")
			document.getElementById( "EventPic" ).innerHTML = ('<img src="../img/package_private.jpg" style = "width: 200px; float:right; margin-right: 20px; margin-top: 10px; border-radius: 10px; box-shadow: 2px 2px 2px black">');
		else if( document.getElementById("type_event").value == "Corporate")
			document.getElementById( "EventPic" ).innerHTML = ('<img src="../img/package_corporate.jpg" style = "width: 200px; float:right; margin-right: 20px; margin-top: 10px; border-radius: 10px; box-shadow: 2px 2px 2px black">');

		// Show Add to Cart Buttom
		// Keep hide submenu until selected
		$(document).ready(function(){
			$("#Cart").show();
		});   				
	}

// Only for test
/*	showCookie("Client");
	showCookie("Event");
	showCookie("Guests");
	showCookie("Type");
	showCookie("Category");
	showCookie("Extra0");
	showCookie("Extra1");
	showCookie("Extra2");
	showCookie("Extra3");
	showCookie("Extra4");
	showCookie("Extra5");
	showCookie("Extra6");
	showCookie("Extra7");
	showCookie("Subtotal");
*/
}

/*************************** To Show a Budget result according with the form result *************************/

function check_Form_Values()
{

	var fname = document.getElementById( "FName" ).value;
	var lname = document.getElementById( "LName" ).value;
	var guests = document.getElementById( "Guests" ).value;
	

	
	if (/^[\w]{2,}$/.test(fname)==false)
	{
		alert("Invalid First Name.  Enter at least 2 characters");
		return false;
	}
	else if (/^[\w]{2,}$/.test(lname)==false)
	{
		alert("Invalid Last Name.  Enter at least 2 characters");
		return false;
	}
	else if ((/^[0-9]+$/.test(guests)==false)||(guests <= 0))
	{
		alert("Invalid quantity.  Value must be a number bigger than 0");
		return false;
	}
	else
		return true;
	
}

/********************************************* Cookies Functions ******************************************/
// Create a Cookie
function setCookie(cname, cvalue, exmin) {
    var d = new Date();
    d.setTime(d.getTime() + (exmin*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

// Call a cookie
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) 
        	return c.substring(name.length, c.length);
    }
    return "";
}

// Show a cookie
function showCookie(cname , id )
{
	var tcookie = getCookie(cname);
//	document.getElementById( id ).innerHTML = tcookie;
	alert(tcookie);
}

// To open a cart page with a buttom
function openCart( page ) 
{
    window.open(page);

}


/************************************ PAGE 6 cart.html **********************************************/
/************* Functions to get cookies and prepare the bill with taxes and show cash ***************/

function getTheBill()
{
	var GST = 0; //GST tax 9.975%
	var QST = 0; //QST tax 5%
	var total = 0; //Total amount 

	//Get all cookies values
	name = getCookie("Client");
	event = getCookie("Event");
	guest = getCookie("Guests");
	type = getCookie("Type");
	category = getCookie("Category");
	subtotal = getCookie("Subtotal");
	package_price = getCookie("BPackPrice");

//	alert(subtotal);
	
	extrack = [ getCookie("Extra0") , getCookie("Extra1") , getCookie("Extra2") , getCookie("Extra3") , 
			    getCookie("Extra4") , getCookie("Extra5") , getCookie("Extra6") , getCookie("Extra7") ];	

	//Preparing the Bill
	document.getElementById("BFNClient").innerHTML = name;
	document.getElementById("BSHEvent").innerHTML = event;
	document.getElementById("BSHGuests").innerHTML = guest;
	document.getElementById("BSHPackage").innerHTML = "Recommended "+ category + " Category Budget ................................................ "+package_price+" CAD$" ;
	document.getElementById("BSHSubtotal").innerHTML ="SUBTOTAL ................................................ " + subtotal + " CAD$";
	
	//Erase all the cookies
	setCookie("Client" , "", -10 );
	setCookie("Event" , "", -10 );
	setCookie("Guests" , "", -10 );
	setCookie("Type" , "", -10 );
	setCookie("Category" , "", -10 );
//	setCookie("Subtotal" , "", -10 );
	setCookie("BPackPrice" , "", -10 );
	setCookie("Extra0" , "", -10 );
	setCookie("Extra1" , "", -10 );
	setCookie("Extra2" , "", -10 );
	setCookie("Extra3" , "", -10 );
	setCookie("Extra4" , "", -10 );
	setCookie("Extra5" , "", -10 );
	setCookie("Extra6" , "", -10 );
	setCookie("Extra7" , "", -10 );

	// Taxes Calculation and total

	GST = Number(subtotal*0.09975).toFixed(2);
	QST = Number(subtotal * 0.05).toFixed(2);

	var tax = Number(GST) + Number(QST);
	setCookie("Tax" , tax, cookie_time );

	total = Number(subtotal) + Number(GST) + Number(QST);
	total = total.toFixed(2);
	setCookie("Total" , total, cookie_time );

	document.getElementById("BGST").innerHTML ="GST Tax ................................................ " + GST + " CAD$";
	document.getElementById("BQST").innerHTML ="QST Tax ................................................ " + QST + " CAD$";
	document.getElementById("BTOTAL").innerHTML ="TOTAL AMOUNT ................................................ " + total + " CAD$";

	CalculateCash(total);

	for ( i = 0 ; i < 8 ; i++ )
	{
		if ( extrack[i] != "" )
		{
			document.getElementById( "Bextra"+(i) ).innerHTML = extra_service[i] +" ................................................. "+Number(extrack[i])+" CAD$";
		}
		else
		{
			document.getElementById( "Bextra"+(i) ).innerHTML = "";
		}
	}


}

/******************************************** Function to calculate Cash Amount *****************************************************/

function CalculateCash(amount)
{
	var cent , dec , unit, cents;

	cent = parseInt(amount/100);
	dec = parseInt((amount - cent*100)/10);
	unit = parseInt(amount - cent*100 - dec*10);
	cents = parseInt((amount - cent*100 - dec*10 - unit )*100);

	
/********************************/
	if (cent > 0)
	{
		document.getElementById("CAD100").innerHTML = "Its needs "+cent+" billets";
		document.getElementById("CAD100pic").src = "../img/100$.jpg";
	}

/******************************/	
	if (dec >= 5)
	{
		var aux5 = parseInt(dec/5);
		document.getElementById("CAD50").innerHTML = "Its needs "+aux5+" billets";
		document.getElementById("CAD50pic").src = "../img/50$.jpg";
		dec = dec-aux5*5;
	}
	if (dec >= 2)
	{
		var aux = parseInt(dec/2)
		document.getElementById("CAD20").innerHTML = "Its needs "+aux+" billets";
		document.getElementById("CAD20pic").src = "../img/20$.jpg";
		dec = dec-aux*2;
	}
	if (dec >= 1)
	{
		document.getElementById("CAD10").innerHTML = "Its needs "+dec+" billets";
		document.getElementById("CAD10pic").src = "../img/10$.jpg";
	}
/*******************************/

	
	if (unit >= 5)
	{
		var aux2 = parseInt(unit/5);
		document.getElementById("CAD5").innerHTML = "Its needs "+aux2+" billets";
		document.getElementById("CAD5pic").src = "../img/5$.jpg";
		unit = unit - aux2*5;
	}
	if (unit >= 2)
	{
		var aux3 = parseInt(unit/2);
		document.getElementById("CAD2").innerHTML = "Its needs "+aux3+" toonies";
		document.getElementById("CAD2pic").src = "../img/title-2-dollars.jpg";
		unit = unit - aux3*2;
	}
	if (unit >= 1)
	{
		document.getElementById("CAD1").innerHTML = "Its needs "+unit+" loonies";
		document.getElementById("CAD1pic").src = "../img/title-1-dollar-1987.jpg";
	}
/***********************************/
	
	if (cents >= 50)
	{
		var aux50c = parseInt(cents/50);
		document.getElementById("CAD50cent").innerHTML = "Its needs "+aux50c+" coins";
		document.getElementById("CAD50centpic").src = "../img/title-50-cents-2002.jpg";
		cents = cents - aux50c*50;
	}

	if (cents >= 25)
	{
		var aux25c = parseInt(cents/25);
		document.getElementById("CAD25cent").innerHTML = "Its needs "+aux25c+" coins";
		document.getElementById("CAD25centpic").src = "../img/title-25-cents-2006.jpg";
		cents = cents - aux25c*25;
	}
	if (cents >= 10)
	{
		var aux10c = parseInt(cents/10);
		document.getElementById("CAD10cent").innerHTML = "Its needs "+aux10c+" coins";
		document.getElementById("CAD10centpic").src = "../img/title-10-cents-1969.jpg";
		cents = cents - aux10c*10;
	}
	if (cents >= 5)
	{
		var aux5c = parseInt(cents/5);
		document.getElementById("CAD5cent").innerHTML = "Its needs "+aux5c+" coins";
		document.getElementById("CAD5centpic").src = "../img/title-5-cents-1989.jpg";
		cents = cents - aux5c*5;
	}


}

/*********************************************** To Print Receipt **********************************************/
//Function extracted from an internet refference
function PrintDiv(printpage)
{
	var headstr = "<html><head><title></title></head><body>";
	var footstr = "</body>";
	var newstr = document.all.item(printpage).innerHTML;
	var oldstr = document.body.innerHTML;
	document.body.innerHTML = headstr+newstr+footstr;
	window.print();
	document.body.innerHTML = oldstr;
	return false;
}

/************************************ PAGE 7 buy.html **********************************************/
/*************************** Functions to Place the Service Order **********************************/
function GetAmounts()
{
	// Amounts get the cookies
	document.getElementById("CCSubT").innerHTML = getCookie("Subtotal") + " CAD$";
	document.getElementById("CCTax").innerHTML = getCookie("Tax") + " CAD$";
	document.getElementById("CCTot").innerHTML = getCookie("Total") + " CAD$";
}

function GetSoldData()
{
	// Amounts get the cookies
//	document.getElementById("LCCSubT").innerHTML = getCookie("Subtotal") + " CAD$";
//	document.getElementById("LCCTax").innerHTML = getCookie("Tax") + " CAD$";
	document.getElementById("LCCTot").innerHTML = getCookie("Total") + " CAD$";

	document.getElementById("LCDate").innerHTML = Date();

//	document.getElementById("LCCard").innerHTML = getCookie("CreditCard");
//	document.getElementById("LCNumber").innerHTML = getCookie("CreditNumber");
//	document.getElementById("LCMonth").innerHTML = getCookie("CreditMonth");
//	document.getElementById("LCYear").innerHTML = getCookie("CreditYear");
	document.getElementById("LCFName").innerHTML = getCookie("CreditFName");
	document.getElementById("LCLName").innerHTML = getCookie("CreditLName");
//	document.getElementById("LCCountry").innerHTML = getCookie("CreditCountry");
//	document.getElementById("LCCity").innerHTML = getCookie("CreditCity");
//	document.getElementById("LCStreet").innerHTML = getCookie("CreditStreet");
//	document.getElementById("LCZP").innerHTML = getCookie("CreditZP");
	document.getElementById("LCPhone").innerHTML = getCookie("CreditPhone");

}

// To check all the values entered in the buy form and set the cookies

function check_BUYForm_Values()
{
	// Credit Card Values
	var ccard = document.getElementById( "CCardSelect" ).value;
	var ccnumber = document.getElementById( "CCNumber" ).value;
	var ccmonth = document.getElementById( "CCMonth" ).value;
	var ccmyear = document.getElementById( "CCYear" ).value;
	var ccsecurity = document.getElementById( "CCSecNumb" ).value;

	// Billing Address Info
	var fname = document.getElementById( "CCFName" ).value;
	var lname = document.getElementById( "CCLName" ).value;
	var country = document.getElementById( "CCountry" ).value;
	var city = document.getElementById( "opt1" ).value + " " + document.getElementById( "opt2" ).value;
	document.getElementById( "opt1" ).value = "";
	document.getElementById( "opt2" ).value = "";
	var street = document.getElementById( "CCStreet" ).value + " " + document.getElementById( "CCStreet2" ).value;
	var zipcode = document.getElementById( "CCZip" ).value;
	var phone = document.getElementById( "CPhone" ).value;

	if (ccard == "")
	{
		alert("Must to select a Credit Card");
		return false;
	}	
	else if (street == " ")
	{
		alert("Enter an address");
		return false;
	}	
	else if (/^[0-9]{16,}$/.test(ccnumber)==false)     
	{
		alert("Invalid Credit Card Number.  Must be has 16 numbers");
		return false;
	}
	else if ((/^[0-9]{4,}$/.test(ccmyear)==false)||(ccmyear < 2017 ))
	{
		alert("Invalid Expiration Year.  Only 4 digits more than 2017");
		return false;
	}
	else if (/^[0-9]{3,4}$/.test(ccsecurity)==false)
	{
		alert("Invalid Seccurity Code.  Must has at least 3 numbers");
		return false;
	}
	else if (/^[\w]{2,}$/.test(fname)==false)
	{
		alert("Invalid First Name.  Enter at least 2 characters");
		return false;
	}
	else if (/^[\w]{2,}$/.test(lname)==false)
	{
		alert("Invalid Last Name.  Enter at least 2 characters");
		return false;
	}
	else if (country == "")
	{
		alert("It must to choise a Country");
		return false;
	}
	else if (city == "")
	{
		alert("It must to choise a City");
		return false;
	}
	else if (/^[A-Z][0-9][A-Z][0-9][A-Z][0-9]$/.test(zipcode)==false)
	{
		alert("Invalid Zip Code.  Must be 6 uppercase characters begining with letter and alternate with number like X9X9X9");
		return false;
	}
	else if (/^[0-9]{10,}$/.test(phone)==false)
	{
		alert("Invalid Phone Number.  Must be has at least 10 numbers only");
		return false;
	}
	else
	{		
		// Set de cookies
		setCookie("CreditCard", ccard, cookie_time );
		setCookie("CreditNumber", ccnumber, cookie_time );
		setCookie("CreditMonth", ccmonth, cookie_time );
		setCookie("CreditYear", ccmyear, cookie_time );
		setCookie("CreditSecurity", ccsecurity, cookie_time );
		setCookie("CreditFName", fname, cookie_time );
		setCookie("CreditLName", lname, cookie_time );
		setCookie("CreditCountry", country, cookie_time );
		setCookie("CreditCity", city, cookie_time );
		setCookie("CreditStreet", street, cookie_time );
		setCookie("CreditZP", zipcode, cookie_time );
		setCookie("CreditPhone", phone, cookie_time );

		//Open Confirmation Page
		openCart('../pages/confirmation.html');
		return true;

	}
	
}

// To display city submenus
function show_BSubMenu()
{
	var option = document.getElementById("CCountry").value;

	switch (option)
	{
		case 'Canada':
			
			$(document).ready(function(){
    			$("#CCanada").show();
        	});   	
        	$(document).ready(function(){
    			$("#CCUSA").hide();
        	});   
        	
		break;
		case "United Estates":
			
			$(document).ready(function(){
    			$("#CCUSA").show();
        	});  
        	$(document).ready(function(){
    			$("#CCanada").hide();
        	});   	
        	
		break;
		default:
			$(document).ready(function(){
    			$("#CCanada").hide();
        	});   				

			$(document).ready(function(){
    			$("#CCUSA").hide();
        	});     
        
        break;				

	} 

}
/************************************************************************************************************/

/****************************************************************************************************************************************/
/****************************************************************************************************************************************/
/****************************************************************************************************************************************/
/*********************************************************** ALONE JQUERY REQUESTS ******************************************************/
/****************************************************************************************************************************************/
/****************************************************************************************************************************************/
/****************************************************************************************************************************************/

// Displays submenus at the main Menu
$(document).ready(function(){
    $(".dropdown").mouseover(function(){
        $(".dropdown-content").slideDown(function(){
            $(".dropdown-content").show();
        });
    });
       
    $(".dropdown-content").mouseleave(function(){
        $(".dropdown-content").slideUp(function(){
            $(".dropdown-content").hide();
        });
    });
});

// Keep hide submenu until selected
$(document).ready(function(){
	$("#private_opt").hide();
});   				

$(document).ready(function(){
    $("#corporate_opt").hide();
});

$(document).ready(function(){
    $("#show_spec").hide();
});     

$(document).ready(function(){
	$("#Cart").hide();
}); 

$(document).ready(function(){
 	$("#CCanada").hide();
});   				

$(document).ready(function(){
	$("#CCUSA").hide();
});     
