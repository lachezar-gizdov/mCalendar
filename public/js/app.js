setTimeout(function(){ $(document).ready(function () {
    $('#calendar').fullCalendar({
        dayClick: function () {
            alert('a day has been clicked!');
        }
    });

}); }, 1500);