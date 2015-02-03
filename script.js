var clock;
// var url = "http://192.168.33.10:8000/";
var url = "http://thinhvoxuan.me:8000";
$(document).ready(function() {
	//clock = $('.clock').FlipClock(val, {
	clock = $('.clock').FlipClock(10000, {
        //clockFace: 'MinuteCounter',
		clockFace: 'HourlyCounter',
        countdown: true,
        callbacks: {
        	stop: function() {
        		$('.message').html('The clock has stopped!');
        	}
        }
    });
});
$("#ajaxform").submit(function(e)
	{
	    var postData = $(this).serializeArray();
	    var formURL = $(this).attr("action");
	    $.ajax(
	    {
	        url : url,
	        data : postData,
	        success:function(data, textStatus, jqXHR) 
	        {
				console.log(data);
				clock.setTime(data);
	            //data: return data from server
	        },
	        error: function(jqXHR, textStatus, errorThrown) 
	        {
				console.log(jqXHR);
				console.log(textStatus);
				console.log(errorThrown);
	            //if fails      
	        }
	    });
	    e.preventDefault(); //STOP default action
	//unbind. to stop multiple form submit.
	});