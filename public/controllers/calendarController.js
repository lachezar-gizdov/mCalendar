let calendarController = function () {

    function all(context) {
        templates.get('calendar')
            .then(function (template) {
                context.$element().html(template());
            });
    }

    return {
        all: all
    };
}();