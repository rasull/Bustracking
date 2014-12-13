// JavaScript Document

	
$(document).ready(function(){
	
		// read from cookie  
	  var remember = $.cookie('remember');
	if ( remember == 'true' ) {
		var username = $.cookie('username');
		var password = $.cookie('password');
		// autofill the fields
		$('#userid').val(username);
		$('#password').val(password);
	}
 //************************************************************************
 //*************************** Parent Login *******************************
		$("#Plogin").click(function(){
		// save username and password if remember checked in cookie	
			if ($('#remember').is(':checked')) {
		var username = $('#userid').val();
		var password = $('#password').val();
		// set cookies to expire in 14 days
		$.cookie('username', username, { expires: 14 });
		$.cookie('password', password, { expires: 14 });
		$.cookie('remember', true, { expires: 14 });
		}
	 else {
		// reset cookies
		$.cookie('username', null);
		$.cookie('password', null);
		$.cookie('remember', null);
		}
			
			var login = "Plogin";
			var userid = $("#userid").val();
			var password = $("#password").val();
			// Checking for blank fields.
			if( userid =='' || password ==''){
					$('input[type="text"],input[type="password"]').css("border","2px solid red");
					$('input[type="text"],input[type="password"]').css("box-shadow","0 0 3px red");
					alert("Please fill all fields...!!!!!!");
			}else {
					// send user and pass to check in DataBase
					$.post("Login.php",{ login: login, userID: userid, password1:password},
			
			function(data) {
					if(data=='Invalid User.......') {
						$('input[type="text"]').css({"border":"2px solid red","box-shadow":"0 0 3px red"});
						$('input[type="password"]').css({"border":"2px solid #00F5FF","box-shadow":"0 0 5px #00F5FF"});
						alert(data);
					}
					else if(data=='User or Password is wrong...!!!!'){
						$('input[type="text"],input[type="password"]').css({"border":"2px solid red","box-shadow":"0 0 3px red"});
						alert(data);
						} 
					else if(data=='Successfully Logged in...'){
						$.get("userHolder.php",{ userID: userid});
						//$("form")[0].reset();
						$('input[type="text"],input[type="password"]').css({"border":"2px solid #00F5FF","box-shadow":"0 0 5px #00F5FF"});
						alert(data);
						// function redirect
						$("[data-role='footer']").show(); // to show footer to user
						//myRedirect("index.html", "userID", userid);
						var url = "index.html#detail";    
						$(location).attr('href',url); // redirect to main page after login 
						} 
					else{
						alert(data);
						}
					});
			}
		});
//************************************************************************
//*************************** Staff Login *******************************
		$("#Slogin").click(function(){
		// save username and password if remember checked in cookie	
			if ($('#Sremember').is(':checked')) {
		var username = $('#Suserid').val();
		var password = $('#Spassword').val();
		// set cookies to expire in 14 days
		$.cookie('username', username, { expires: 14 });
		$.cookie('password', password, { expires: 14 });
		$.cookie('remember', true, { expires: 14 });
		}
	 else {
		// reset cookies
		$.cookie('username', null);
		$.cookie('password', null);
		$.cookie('remember', null);
		}
			
			var login = "Slogin";
			var userid = $("#Suserid").val();
			var password = $("#Spassword").val();
			// Checking for blank fields.
			if( userid =='' || password ==''){
					$('input[type="text"],input[type="password"]').css("border","2px solid red");
					$('input[type="text"],input[type="password"]').css("box-shadow","0 0 3px red");
					alert("Please fill all fields...!!!!!!");
			}else {
					// send user and pass to check in DataBase
					$.post("http://www.kahf-313.com/bus/Login.php",{ login:login, userID: userid, password1:password},
			
			function(data) {
					if(data=='Invalid User.......') {
						$('input[type="text"]').css({"border":"2px solid red","box-shadow":"0 0 3px red"});
						$('input[type="password"]').css({"border":"2px solid #00F5FF","box-shadow":"0 0 5px #00F5FF"});
						alert(data);
					}
					else if(data=='User or Password is wrong...!!!!'){
						$('input[type="text"],input[type="password"]').css({"border":"2px solid red","box-shadow":"0 0 3px red"});
						alert(data);
						} 
					else if(data=='Successfully Logged in...'){
						$.get("http://www.kahf-313.com/bus/userHolder.php",{ userID: userid});
						//$("form")[0].reset();
						$('input[type="text"],input[type="password"]').css({"border":"2px solid #00F5FF","box-shadow":"0 0 5px #00F5FF"});
						alert(data);
						// function redirect
						$("[data-role='footer']").show(); // to show footer to user
						//myRedirect("index.html", "userID", userid);
						var url = "http://www.kahf-313.com/bus/AdminCtrl.html";    
						$(location).attr('href',url); // redirect to main page after login 
						} 
					else{
						alert(data);
						}
					});
			}
		});
});

//var myRedirect = function(redirectUrl, arg, value) {
//  var form = $('<form action="' + redirectUrl + '" method="post" data-ajax="false">' +
//  '<input type="hidden" name="'+ arg +'" value="' + value + '"></input>' + '</form>');
//  $('body').append(form);
//  $(form).submit();
//};