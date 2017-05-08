var ID = function () {
    return '_' + Math.random().toString(36).substr(2, 9);
};

$(document).ready(function () {
    $('#calendar').fullCalendar({
        aspectRatio: 2,
        firstDay: 1,
        droppable: true,
        eventLimit: true,
        dayClick: function (date) {
            $(function () {
                $("#dialog").dialog();

                //TODO: Change to jquery
                let el = document.getElementById("datepicker");
                el.value = date.format('D/M/YYYY');

                let event = {
                    id: ID(),
                    title: "event",
                    start: date.format('YYYY/MM/DD'),
                    allDay: true,
                    color: "#f00"
                };

                $('#calendar').fullCalendar('renderEvent', event, true);
            });
        },
    });
});

(function (d, s, id) {
    var js,
        fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
        return;
    }

    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.9";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

$(function () {
    $("#datepicker").datepicker();
});

window.twttr = (function (d, s, id) {
    var js,
        fjs = d.getElementsByTagName(s)[0],
        t = window.twttr || {};
    if (d.getElementById(id)) {
        return t;
    }

    js = d.createElement(s);
    js.id = id;
    js.src = "https://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);

    t._e = [];
    t.ready = function (f) {
        t._e.push(f);
    };

    return t;
}(document, "script", "twitter-wjs"));

$(".head").click(function () {

    $head = $(this);
    //getting the next element
    $options = $head.next();
    //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
    $options.slideToggle(500, function () {
        //execute this after slideToggle is done
        //change text of header based on visibility of content div
        $head.text(function () {
            //change text based on condition
            return $options.is(":visible") ? "Collapse" : "Expand";
        });
    });

});