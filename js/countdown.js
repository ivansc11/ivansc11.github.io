var count = new Date('sep 19, 2019 22:00:00').getTime();
		var x = setInterval(function(){
			var now = new Date().getTime();
			var d = count - now;

      if(d <= 0){
				clearInterval(x);
			}else{
				var seconds = Math.floor(d/1000);
				var minutes = Math.floor(seconds/60);
				var hours = Math.floor(minutes/60);
        var days = Math.floor(hours/24);

				seconds%=60;
				minutes%=60;
				hours%=24;


  			document.getElementById('countdown-days').innerHTML ='Days: '+ days;
  			document.getElementById('countdown-hours').innerHTML = hours;
  			document.getElementById('countdown-minutes').innerHTML = minutes;
  			document.getElementById('countdown-sec').innerHTML = seconds;
      }




		},1000);
