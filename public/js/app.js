setTimeout(function () {
    $(document).ready(function () {
        $('#calendar').fullCalendar({
            aspectRatio: 2,
            firstDay: 1,
            edittable: true,
            droppable: true,
            dayClick: function (date) {
                $(function () {
                    // $("#dialog").dialog();

                    // //TODO: Change to jquery
                    // let el = document.getElementById("datepicker");
                    // el.value = date.format('D/M/YYYY');

                    var event = {
                        title: "event",
                        start: date.format('YYYY/M/D/')
                    };

                    $('#calendar').fullCalendar('renderEvent', event, true);
                });
            },
        });
    });
}, 500);

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


(function () {
    var event = {
        title: "event",
        start: "2017-05-12"
    };

    $('#calendar').fullCalendar('renderEvent', event, true);
}());