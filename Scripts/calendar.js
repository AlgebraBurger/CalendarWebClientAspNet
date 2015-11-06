 $(document).ready(function() {
     $.getScript('Scripts/fullcalendar.min.js', function () {
			  var date = new Date();
			  var d = date.getDate();
			  var m = date.getMonth();
			  var y = date.getFullYear();
			
			  $('#calendar').fullCalendar({
			    header: {
			      left: 'prev,next today',
			      center: 'title',
			      right: 'Year,month,agendaWeek,agendaDay'
			    },
			    editable: true,
			    events: function (start, end, callback) {
			        $.ajax({
			            url: 'http://localhost:53364/api/events',
			            success: function (doc) {

			                //doc = [{start:"2015-11-10",title:"Mandaloryan"}];
			                var events = [];
			                $(doc).each(function () {
			                    
			                    var event = [];
			                    
			                    var date = new Date($(this).attr('start'));
			                  
			                    var newDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
			                    var t = $(this).attr('title') + " : " + newDate;
			                    event.title = t.toString();
			                    event.start = newDate.toString();
			                    
			                    events.push(event);
			                });

			                console.log(events);
			                
			                callback(events);
			              
			            }
			        });
			    },
		  
		    	dayRender: function (date, cell) {
			        var today = new Date();
			        var end = new Date();
			        end.setDate(today.getDate()+7);
			        if (date.getDate() === today.getDate()) {
			            cell.css("background-color", "#eee");
			        }}
			  });
			});
		}); 
