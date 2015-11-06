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
			    eventRender: function (event, element) {
			        element.attr('href', 'javascript:void(0);');
			    },
			    dayClick: function (date, jsEvent, view) { },
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
			                    event.description = $(this).attr('description');
			                    event.url = $(this).attr('link');
			                    events.push(event);
			                });
			                callback(events);
			              
			            }
			        });
			    },
			    eventClick:  function(event, jsEvent, view) {
			        $('#modalTitle').html(event.title);
			        $('#modalBody').html(event.description);
			        $('#eventUrl').attr('href', event.url);
			        $('#fullCalModal').modal();
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
