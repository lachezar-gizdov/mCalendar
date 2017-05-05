setTimeout(function () {
    $(document).ready(function () {
        $('#calendar').fullCalendar({
            aspectRatio: 2,
            dayClick: function (date) {
                $(function () {
                    $("#dialog").dialog();
                });
            }
        });

    });
}, 1500);

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