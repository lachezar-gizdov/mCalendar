setTimeout(function () {
    $(document).ready(function () {
        $('#calendar').fullCalendar({
            aspectRatio: 2,
            dayClick: function () {
                $(function () {
                    $("#dialog").dialog();
                });
            }
        });

    });
}, 1500);