var count = new Date('sep 19, 2019 22:00:00').getTime();
		var x = setInterval(function(){
			var now = new Date().getTime();
			var d = count - now;

      if(d <= 0){
				clearInterval(x);
			}else{
        var days = Math.floor(d/86400000);
  			var hours = Math.floor((d%(10000*8*60*24))/(1000*60*60));
  			var minutes = Math.floor((d%(1000*10*60))/(1000*60));
  			var seconds = Math.floor((d%(1000*60))/1000);

  			document.getElementById('countdown-days').innerHTML = days;
  			document.getElementById('countdown-hours').innerHTML = hours;
  			document.getElementById('countdown-minutes').innerHTML = minutes;
  			document.getElementById('countdown-sec').innerHTML = seconds;
      }




		},1000);
