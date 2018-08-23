function initMap() {
		  
		  var india = {lat: 21.1821, lng: 72.8088};
		  var usa={lat:37.3496,lng:-121.9390};
		  var india2={lat:23.1960,lng:72.6346};
		  var map = new google.maps.Map(
		      document.getElementById('map'), {zoom: 2, center: usa, clickableIcons:true});
		 

		  var marker = new google.maps.Marker({position: india, map: map,title:"Sarvajanik College of Engineering and Technology"});
		  var marker2=new google.maps.Marker({position: usa,map:map,title:"Santa Clara University"});
		  var marker3=new google.maps.Marker({position: india2,map:map,title:"Infocity Junior Science College"});
		  var infoWindowContent = [
	        ['<div class="info_content">' +
	        '<h3>Sarvajanik College of Engineering and Technology, Gujarat, India</h3>' +
	        '<p>Bachelor of Engineering in Information Technology (2012-2016)</p>' +        '</div>'],
	        ['<div class="info_content">' +
	        '<h3>Santa Clara University, California, United States</h3>' +
	        '<p>Master of Science in Computer Science and Engineering (2016-2018)</p>' +
	        '</div>'],
	        ['<div class="info_content">' +
	        '<h3>Infocity Junior Science College, Gujarat,India</h3>' +
	        '<p>High School (2010-2012)</p>' +
	        '</div>']
	    	];
	    	var infoWindow = new google.maps.InfoWindow(), marker;
	    	var infoWindow2 = new google.maps.InfoWindow(), marker2;
	    	var infoWindow3 = new google.maps.InfoWindow(), marker3;
	    	google.maps.event.addListener(marker, 'click', (function() {
            	return function() {
	                infoWindow.setContent(infoWindowContent[0][0]);
	                infoWindow.open(map, marker);
            	}
        	})(marker, 0));
        	google.maps.event.addListener(marker2, 'click', (function() {
	            return function() {
	                infoWindow2.setContent(infoWindowContent[1][0]);
	                infoWindow2.open(map, marker2);
	            }
	        })(marker2, 1));
        	google.maps.event.addListener(marker3, 'click', (function() {
	            return function() {
	                infoWindow3.setContent(infoWindowContent[2][0]);
	                infoWindow3.open(map, marker3);
	            }
	        })(marker3, 2));
		}
		var span = document.getElementsByClassName("close")[0];
		var span1=document.getElementsByClassName("close1")[0];
		var m=document.getElementById("description");
		var p=document.getElementById("d");
		var h=document.getElementById("name");
		var button=document.createElement("BUTTON");
		var btn=document.getElementById("btn");
		var x = document.createElement("IMG");
		x.setAttribute("src", "img/github.png");
	    x.setAttribute("width", "100px");
	    x.setAttribute("height", "40px");
	    var cont=document.getElementById("contact");
	    var sh=document.getElementById("connect");
		function display(p_no){
			
			m.style.display="block";
			if(p_no==1){
				h.innerHTML="Analysis Application for IMDB’s User Review Data";
				var l=document.createElement("li");
				l.appendChild(document.createTextNode("Java based desktop application for running queries on MovieLens dataset and extract useful results as per search criteria."));
				var l2=document.createElement("li");
				l2.appendChild(document.createTextNode("Oracle 12c was used for backend data storage."));
				var l3=document.createElement("li");
				l3.appendChild(document.createTextNode("Indexing and Caching were used for fast performance. Swing was used for UI."));
				var l4=document.createElement("li");
				l4.appendChild(document.createTextNode("Populated more than 100K data."));
				var t = document.createTextNode("Github");
				button.appendChild(x);
				p.appendChild(l);
				p.appendChild(l2);
				p.appendChild(l3);
				p.appendChild(l4);
				btn.appendChild(button);
				//btn.appendChild(x);
				
			}
			if(p_no==2){
				h.innerHTML="Movie Recommendation System";
				var l=document.createElement("li");
				l.appendChild(document.createTextNode("Implemented user based collaborative Filtering Algorithm using Python for predicting user ratings for movies."));
				var l2=document.createElement("li");
				l2.appendChild(document.createTextNode("Used Netflix data for testing and training the system."));
				var l3=document.createElement("li");
				l3.appendChild(document.createTextNode("Analysed and compared the results obtained by various algorithm."));
				var l4=document.createElement("li");
				l4.appendChild(document.createTextNode("Implemented own algorithm which decreased the error rate by 15%."));
				p.appendChild(l);
				p.appendChild(l2);
				p.appendChild(l3);
				p.appendChild(l4);
				var t = document.createTextNode("Github");
				button.appendChild(x);
				btn.appendChild(button);
				//btn.appendChild(x);
				
			}
			if(p_no==3){
				h.innerHTML="Online Bookstore";
				var l=document.createElement("li");
				l.appendChild(document.createTextNode("Developed a web application using Ruby on Rails, JQuery, and JavaScript."));
				var l2=document.createElement("li");
				l2.appendChild(document.createTextNode("Implemented various functionalities like shopping carts, simple payment scenario, save credit card details and responsive pages."));
				var l3=document.createElement("li");
				l3.appendChild(document.createTextNode("Postgress was used for data storage."));
				p.appendChild(l);
				p.appendChild(l2);
				p.appendChild(l3);
				var t = document.createTextNode("Github");
				button.appendChild(x);
				btn.appendChild(button);
				//btn.appendChild(x);
				
			}
			if(p_no==4){
				h.innerHTML="Automatic Shift Scheduling Algorithm for Cafeteria";
				var l=document.createElement("li");
				l.appendChild(document.createTextNode("Web Application using Spring MVC for automatic assigning shifts to employees based on their availability."));
				var l2=document.createElement("li");
				l2.appendChild(document.createTextNode("Front-end developed using HTML, CSS and Javascript."));
				var l3=document.createElement("li");
				l3.appendChild(document.createTextNode(" AJAX is used in background."));
				p.appendChild(l);
				p.appendChild(l2);
				p.appendChild(l3);
				
				
			}
			if(p_no==5){
				h.innerHTML="Mobile Application for Vehicle Service Assistance";
				var l=document.createElement("li");
				l.appendChild(document.createTextNode("Android application to search the nearest available service station with ecommerce facility for buying spare parts."));
				var l2=document.createElement("li");
				l2.appendChild(document.createTextNode("Website for managing work at the service station was developed using Asp.net."));
				var l3=document.createElement("li");
				l3.appendChild(document.createTextNode("SOAP libraries were used for invoking .net services from android application."));
				var l4=document.createElement("li");
				l4.appendChild(document.createTextNode("GCM service was used to send notification to the users regarding their vehicle’s service station."));
				p.appendChild(l);
				p.appendChild(l2);
				p.appendChild(l3);
				p.appendChild(l4);
				
			}
			if(p_no==6){
				h.innerHTML="Online Job Portal";
				var l=document.createElement("li");
				l.appendChild(document.createTextNode("PHP based website providing opportunities for job seekers as well as employers."));
				var l2=document.createElement("li");
				l2.appendChild(document.createTextNode("User interface was designed using HTML, CSS and Javascript."));
				p.appendChild(l);
				p.appendChild(l2);
				
				
			}
			if(p_no==7){
				h.innerHTML="Real Estate Website";
				var l=document.createElement("li");
				l.appendChild(document.createTextNode("A website developed using Asp.net for online buying and selling of any property."));
				var l2=document.createElement("li");
				l2.appendChild(document.createTextNode("SQL queries were used for managing the data."));
				var l3=document.createElement("li");
				l3.appendChild(document.createTextNode("Features such as buying, renting and online payment, etc were developed."));
				p.appendChild(l);
				p.appendChild(l2);
				p.appendChild(l3);
				
			}
			if(p_no==8){
				h.innerHTML="Online Vehicle rental service";
				var l=document.createElement("li");
				l.appendChild(document.createTextNode("It is a website for renting vehicle online."));
				var l2=document.createElement("li");
				l2.appendChild(document.createTextNode("People can search for the availability of the vehicles according to their need like number of travellers and date they want to travel."));
				var l3=document.createElement("li");
				l3.appendChild(document.createTextNode("Users can rent the vehicle and can choose the appropriate way for making payment.Confirmation will be send to users.Users can cancel the booking prior to date of travel with refund policy."));
				p.appendChild(l);
				p.appendChild(l2);
				p.appendChild(l3);
				
			}

		}
		span.onclick = function() {
			p.innerHTML="";
			btn.innerHTML="";
		    m.style.display = "none";
		    sh.style.display="none";
		}
		button.onclick=function(){
			window.open('http://github.com/netraagrawal', '_blank');
		}
		
		function mail(){
			sh.style.display="block";
		}

		span1.onclick=function(){
			sh.style.display="none";
		}