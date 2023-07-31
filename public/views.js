$(function (){

    $.ajax({
        type:'GET',
        url: 'https://tjxx0uyvij.execute-api.us-east-2.amazonaws.com/dev/view-count',
        success: function(data){
            console.log('success', data);
        }
    });
})