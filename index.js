$(document).ready(function(){
  $('#dog').click(function(){

    $("#dog").text("Generating Doggo...");

    $.get('https://dog.ceo/api/breeds/image/random', function(data){
        var image = $('<img />');
        image.attr('src', data.message);
        $('body').append(image);
        $("#dog").text("Generate Doggo");
    });



  });

//in the callback function of the GET request,
//loop through the array of dog breeds

$.get("https://dog.ceo/api/breeds/list"), function(data){
  for (var i=0; i < data.message.length; i++)
});


$.get("https://dog.ceo/api/breeds/list"), function(data){
data.message.forEach(function(breed){

    var option = $('<option></option>')
        option.val(breed);
        option.text(breed);

    $("select").append(option);
});

});
//Using JQuery, add a change listener to the select dropdown, like so: .change(function(){})
$('select').change(function(){
    var currentlySelectedBreed = $(this).val();

    var url = 'https://dog.ceo/api/breed/' + currentlySelectedBreed + '/images/random';
      $.get(url, function(data){
        //show this dog image to the screen
        var image = $('<img />');
        image.attr('src', data.message);
        $('body').append(image);
        

      });

})

});



});
