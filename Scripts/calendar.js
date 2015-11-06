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
			      right: 'month,agendaWeek,agendaDay'
			    },
			    editable: true,
			    events: [
                    {
		        			title: '',
		        			start: new Date('','','', 20, 0),
		        			color: '',
		      			},
		      	],
		  
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
