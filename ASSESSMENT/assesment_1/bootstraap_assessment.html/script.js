$(document).ready(function() {
    // Initialize Bootstrap DateTimePickers
    $('#datetimepicker1').datetimepicker({
        format: 'YYYY-MM-DD'
    });
    $('#datetimepicker2').datetimepicker({
        format: 'YYYY-MM-DD',
        useCurrent: false // Important! Prevent selecting the same initial date
    });

    // When date1 is selected, make sure date2 cannot be before date1
    $("#datetimepicker1").on("dp.change", function(e) {
        $('#datetimepicker2').data("DateTimePicker").minDate(e.date);
    });
    // When date2 is selected, make sure date1 cannot be after date2
    $("#datetimepicker2").on("dp.change", function(e) {
        $('#datetimepicker1').data("DateTimePicker").maxDate(e.date);
    });

    // Form submission handler
    $('#dateForm').on('submit', function(e) {
        e.preventDefault(); // Prevent page refresh

        // Get the values from the DateTimePickers
        var date1 = $('#date1').val();
        var date2 = $('#date2').val();

        // Validate that both dates are entered
        if (!date1 || !date2) {
            alert("Please select both dates.");
            return;
        }

        // Parse the dates using moment.js
        var startDate = moment(date1, "YYYY-MM-DD");
        var endDate = moment(date2, "YYYY-MM-DD");

        // Calculate the difference between the two dates
        var dateDifference = endDate.diff(startDate, 'days');

        // Display the result
        if (dateDifference >= 0) {
            $('#result').text("The interval between the two dates is " + dateDifference + " days.");
        } else {
            $('#result').text("Invalid date range. Date 2 must be after Date 1.");
        }

        // Console output for clarity
        console.log("Date 1:", date1);
        console.log("Date 2:", date2);
        console.log("Days Interval:", dateDifference);
    });
});
