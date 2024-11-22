// GET using $.ajax method
/*
const getData = () => {
    $.ajax({
        url:'sample.txt',
        method:'get',
        success : (result) => {
            $("#div1").html(result);
        },
        error : () => {
            alert('404 Not Found');
        }
    })
}
*/

// GET using $.get method
const getData = () => {
    $.get('sample.txt', (result, status) => {
        $("#div1").html("<b>Data</b>: "+result+"<br><b>Status</b>: "+status + "\n");
    });
}