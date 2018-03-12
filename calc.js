$(document).ready(function () {
    function update() {
        $interest = 0.15;
        $perday = 15;
        $amount1 = $("#amount").val();
        
        // Prices below denoted in SOLV presale price
        $btcprice = 93799.3;//$(#ethprice).value * 10 
        $ethprice = 7169.8;//$(#ethprice).value * 10

        // $dayscount = $("#days").val();
        // $amount2 = parseInt($amount1) + $interest * parseInt($amount1) + (parseInt($dayscount) * ($perday / 100));
        // $apr = (($amount2 - $amount1 / $amount1) / ((parseInt($dayscount) / 365) * 10000));
        // $("#amount2").val($amount2);
        // $("#amount3").val(parseFloat($amount2 - $amount1).toFixed(2));
        // $("#amount4").val($apr);
    }

    debugger;

    $("#slider1").slider({
        max: 1000.1,
        min: 0.1,
        step: .1,
        slide: function (event, ui) {

            $("#amount").val(ui.value);
            $("#amountUSD").val(ui.value * 0.1)
            $("#amountETH").val(ui.value * (1/$btcprice))
            $("#amountBTC").val(ui.value * (1/$ethprice))

        }
    });

    $("#amount").change(function () {
        $('#slider1').slider("value", $(this).val());
        $amount1 = $('#amount').val()
        $("#amountUSD").val($amount1 * (1 / 10))
        $("#amountETH").val($amount1 * (1 / $ethprice))
        $("#amountBTC").val($amount1 * (1 / $btcprice))

        update();
    })

    $("#amountUSD").change(function () {
        $amount1 = $('#amountUSD').val() * 10
        $('#slider1').slider("value", $amount1);
        $("#amount").val($amount1)
        $("#amountETH").val($amount1 * (1 / $ethprice))
        $("#amountBTC").val($amount1 * (1 / $btcprice))
        
        // update();
    })

    $("#amountETH").change(function () {
        $amount1 = $('#amountETH').val() * $ethprice
        $('#slider1').slider("value", $amount1);
        $("#amount").val($amount1)
        $("#amountUSD").val($amount1 * (1 / 10))
        // $("#amountETH").val($amount1 * (1 / $ethprice))
        $("#amountBTC").val($amount1 * (1 / $btcprice))

        // update();
    })

    $("#amountBTC").change(function () {
        $amount1 = $('#amountBTC').val() * $btcprice
        $('#slider1').slider("value", $amount1);
        $("#amount").val($amount1)
        $("#amountUSD").val($amount1 * (1 / 10))
        $("#amountETH").val($amount1 * (1 / $ethprice))
        // $("#amountBTC").val($amount1 * (1 / $btcprice))

        // update();
    })


    // function addDaysToDate(days) {
    //     var mths = new Array(
    //         "Jan",
    //         "Feb",
    //         "Mar",
    //         "Apr",
    //         "May",
    //         "Jun",
    //         "Jul",
    //         "Aug",
    //         "Sep",
    //         "Oct",
    //         "Nov",
    //         "Dec"
    //     );

    //     var d = new Date();
    //     d.setHours(d.getHours() + 24 * days);

    //     var currD = d.getDate();
    //     var currM = d.getMonth();
    //     var currY = d.getFullYear();

    //     return mths[currM] + " " + currD + ", " + currY;
    // }


    // $("#slider2").slider({
    //     max: 30,
    //     min: 1,

    //     slide: function (event, ui) {

    //         $("#days").val(ui.value);
    //         // $("#date").text(addDaysToDate(parseInt($("#days").val())));
    //         update();
    //     },
    //     create: function (event, ui) {
    //         // $("#date").text(addDaysToDate(parseInt($("#days").val())));
    //     }
    // });

    // $("#days").val($("#slider2").slider("value"));

    // $("#days").change(function (event) {
    //     var data = $("#days").val();
    //     if (data.length > 0) {
    //         if (parseInt(data) >= 0 && parseInt(data) <= 31) {
    //             $("#slider2").slider("option", "value", data);
    //         }
    //         else {
    //             if (parseInt(data) < 1) {
    //                 $("#days").val("1");
    //                 $("#slider2").slider("option", "value", "1");
    //             }
    //             if (parseInt(data) > 31) {
    //                 $("#days").val("31");
    //                 $("#slider2").slider("option", "value", "31");
    //             }
    //         }
    //     }
    //     else {
    //         $("#slider2").slider("option", "value", "1");
    //     }
    //     $("#date").text(addDaysToDate(parseInt($("#days").val())));
    // });

    update();
});