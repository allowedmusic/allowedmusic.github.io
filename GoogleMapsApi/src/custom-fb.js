//share doesn't work from localhost
//response will return empty array if login didn't scope with 'publish_actions' or the user didn't log in to the app
  function customshare() {		    
   FB.ui({
    method: 'share_open_graph',
    action_type: 'og.shares',
    action_properties: JSON.stringify({
        object : {
           'og:url': 'https://github.io/fbml', 
           'og:title': 'Here my custom title',
           'og:description': 'here custom description'
        }
		    })
}, function(response){
  // Debug response (optional)
  console.log(response);
  console.log('console log');
});
    }
	
    function init() {
        FB.api(
          '/l214.animaux',
          {"fields":"fan_count"},
          function(response) {
            alert(response.fan_count);
          }
        );
    }
	
	  // This is called with the results from from FB.getLoginStatus().
  function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
      testAPI();
    } else {
      // The person is not logged into your app or we are unable to tell.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into this app.';
    }
  }

  // This function is called when someone finishes with the Login
  // Button.  See the onlogin handler attached to it in the sample
  // code below.
  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }
  
  
	//appId 126818527474122
	//Samsung TV 156122217846925
    window.fbAsyncInit = function() {
      FB.init({
        appId      : '126818527474122',
        xfbml      : true,
        version    : 'v2.5'
      });
	  
      //custom-share();
	  //init();
	  
	  
  // Now that we've initialized the JavaScript SDK, we call 
  // FB.getLoginStatus().  This function gets the state of the
  // person visiting this page and can return one of three states to
  // the callback you provide.  They can be:
  //
  // 1. Logged into your app ('connected')
  // 2. Logged into Facebook, but not your app ('not_authorized')
  // 3. Not logged into Facebook and can't tell if they are logged into
  //    your app or not.
  //
  // These three cases are handled in the callback function.
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
    
	};
	  // Load the SDK asynchronously
    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/all.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

  // Here we run a very simple test of the Graph API after login is
  // successful.  See statusChangeCallback() for when this call is made.
  function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name);
      document.getElementById('status').innerHTML =
        'Thanks for logging in, ' + response.name + '!'+ '<br/><br/>' + '<img src="https://graph.facebook.com/' + response.id + '/picture">';
	    
	     
	    
    });
  }
