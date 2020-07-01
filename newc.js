function generate1() {
    let value1 = $("#red1").val()
    $(".r1").val(value1)

    let value2 = $("#green1").val()
    $(".g1").val(value2)

    let value3 = $("#blue1").val()
    $(".b1").val(value3)

    let red = $(".r1").val()
    let grr = $(".g1").val()
    let blu = $(".b1").val()
    let st = `rgb(${red},${grr},${blu})`


    $(".inner2").css("background-color", st);

    let arr = [parseInt(red), parseInt(grr), parseInt(blu)]

    let hex = ""
    for (var i = 0; i < arr.length; i++) {

        if (arr[i] >= 0 && arr[i] <= 15) {
            hex = hex + "0";
        }
        hex = hex + arr[i].toString(16)


    }

    hex = "#" + hex;
    $("#rgb2").val(st)
    $("#hex2").val(hex)

}

function generatevalue1() {


    let red = $(".r1").val()
    let grr = $(".g1").val()
    let blu = $(".b1").val()
    $("#red1").val(red)
    $("#green1").val(grr)
    $("#blue1").val(blu)
    let st = `rgb(${red},${grr},${blu})`
    let arr = [parseInt(red), parseInt(grr), parseInt(blu)]

    let hex = ""
    for (var i = 0; i < arr.length; i++) {


        if (arr[i] >= 0 && arr[i] <= 15) {
            hex = hex + "0";
        }
        hex = hex + arr[i].toString(16)

    }

    hex = "#" + hex;


    $(".inner2").css("background-color", st);
    $("#rgb2").val(st)
    $("#hex2").val(hex)

}


//Generate linnear gradient


function combine() {
    let c1 = $("#rgb1").val()
    let c2 = $("#rgb2").val()
    let st = `linear-gradient(${c1},${c2})`
    $(".inner3").css("background-image", st)
    $("#lg").val(st)
}