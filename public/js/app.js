setTimeout(function () {
    $(document).ready(function () {
        $('#calendar').fullCalendar({
            dayClick: function () {
                $(function () {
                    $("#dialog").dialog();
                });
            }
        });

    });
}, 1500);