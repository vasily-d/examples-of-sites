$(function() {

    $("#js_car_table").tablesorter({
        dateFormat: "ddmmyyyy",
        theme: "default",
        headers: {
            1: {
                sorter: false
            },
            2: {
                sorter: false
            },
            3: {
                sorter: false
            },
            5: {
                sorter: false
            }
        }
    });

});
