


var topics = ["dog", "cat", "squirrel", "turtle", "frog", "bird", "goat", "pig", "rabbit"];



function alertTopicName() {
        console.log($(this).attr("data-name"));

}
function renderButtons() {

        $("#topics-view").empty();

        for (var i = 0; i < topics.length; i++) {
                a = $("<button>");
                a.addClass("topic , btn btn-info");
                a.attr("data-name", topics[i]);
                a.text(topics[i]);
                $("#topics-view").append(a);
        }

}
renderButtons();

$("#add-topic").on("click", function (event) {

        event.preventDefault();

        var topic = $("#topic-input").val().trim();

        topics.push(topic);

        $("#topic-input").val("");

        renderButtons();

        $(document).on("click", ".topic", alertTopicName);

});


$(".topic").on("click", function () {

        var topic =$(this).attr("data-name");


        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic +"&api_key=FGF7c6Pr3Jv3K7HBtwjorEnj2AjHUgHh&limit=10";


        $.ajax({
                url: queryURL,
                method: "GET"
        }).then(function (response) {

                console.log(response);

                
                for (var i = 0; i < 10; i++) {
                        
                        

                        var img = $("<img>")
                        img.attr("src", response.data[i].images.fixed_height_still.url);
                        $(".results").append(img)
                }
                
        });

        var state = $(this).attr("data-name")
                if (state === "still"){
                
                    $(this).attr("src" , $(this).attr("data-animate"));
                    $(this).attr("data-state" , "animate");

                }else{
                    $(this).attr("src" , $(this).attr("data-still"));
                    $(this).attr("data-state" , "still");
                }

})