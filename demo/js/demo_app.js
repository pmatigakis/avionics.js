var myhud;

function main(){
	var primaryFlightDisplayCanvas = document.getElementById("primary-flight-data-display");
      
	myhud = new Avionics.PrimaryFlightDisplay(primaryFlightDisplayCanvas);
		
	myhud.roll = 0.0;
	myhud.pitch = 0.0;
	myhud.airspeed = 70.0;
	myhud.altitude = 1100.0;
	myhud.heading = 90.0;
	myhud.textSize = 18;

	myhud.draw();

	
	$("#pfd-roll").slider({
		min: -360,
	    max: 360,
	    value: myhud.roll,
	    slide: function(event, ui){
	    	myhud.roll = ui.value;
	    	myhud.draw();
	    }
	});
	
	$("#pfd-pitch").slider({
		min: -180,
	    max: 180,
	    value: myhud.pitch,
	    slide: function(event, ui){
	    	myhud.pitch = ui.value;
	    	myhud.draw();
	    }
	});

	$("#pfd-heading").slider({
		min: 0,
	    max: 360,
	    value: myhud.heading,
	    slide: function(event, ui){
	    	myhud.heading = ui.value;
	    	myhud.draw();
	    }
	});
	
	$("#pfd-airspeed").slider({
		min: 0,
	    max: 100,
	    value: myhud.airspeed,
	    slide: function(event, ui){
	    	myhud.airspeed = ui.value;
	    	myhud.draw();
	    }
	});

	$("#pfd-altitude").slider({
		min: 0,
	    max: 10000,
	    value: myhud.altitude,
	    slide: function(event, ui){
	    	myhud.altitude = ui.value;
	    	myhud.draw();
	    }
	});
}

window.onload = function(){
	main();
}