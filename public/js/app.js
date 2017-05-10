import { router } from 'router';

let ID = function () {
    return '_' + Math.random().toString(36).substr(2, 9);
};

$(document).ready(function () {
    router.start();
    $('#login').on('hidden.bs.modal', () => {
        $('#login').modal('show');
    });
    $('#login').modal('show');
    $('#calendar').fullCalendar({
        aspectRatio: 2,
        firstDay: 1,
        droppable: true,
        eventLimit: true,
        dayClick: function (date) {
            $(function () {
                $("#dialog").dialog({
                    resizable: false,
                    show: true,
                    hide: true,
                    buttons: [
                        {
                            text: "Create",
                            click: function () {
                                if (document.getElementById("eventName").value === '') {
                                    toastr.error('Event name cannot be empty!');
                                    return;
                                }

                                if (document.getElementById("datepicker").value === '') {
                                    toastr.error('Event date cannot be empty!');
                                    return;
                                }

                                let event = {
                                    id: ID(),
                                    title: document.getElementById("eventName").value,
                                    start: document.getElementById("datepicker").value,
                                    allDay: $('#allDayEvent').is(":checked"),
                                    repeatEvent: $('#repeat-event').is('checked'),
                                    emailAlert: $('#email-alert').is('checked')
                                };

                                $('#calendar').fullCalendar('renderEvent', event, true);
                                $(this).dialog("close");
                            },
                            class: "createBtn"
                        }
                    ]
                });

                //TODO: Change to jquery
                let el = document.getElementById("datepicker");
                el.value = date.format('YYYY/MM/DD');
            });
        },
    });
});

(function (d, s, id) {
    let js,
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
    let js,
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