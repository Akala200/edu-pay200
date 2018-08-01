$(document).ready(function(){
    var url = "http://edupay-api.azurewebsites.net/api/school/school/join"
    $("#form").submit(function(e){
        e.preventDefault();
        var form = $(this);
        var action = form.attr("action");
        var data = form.serializeArray();

        var request = new XMLHttpRequest();
        var json_upload =  JSON.stringify(getFormData(data));
        request.open('POST', url, true);
        request.onreadystatechange = function() {if (this.readyState === 4 && this.status === 200) {
            let response = JSON.parse(this.responseText);
            renderPosts(response);    } alert("School Successfully created. An agent will contact you soon");};
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        request.setRequestHeader("Content-length", json_upload.length);
        request.setRequestHeader("Connection", "close");
        request.setRequestHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
        request.send(json_upload);
});
});


function getFormData(data) {
    var unindexed_array = data;
    var indexed_array = {};
 
    $.map(unindexed_array, function(n, i) {
     indexed_array[n['name']] = n['value'];
    });
 
    return indexed_array;
 }

