

const getDetails = (id) => {
    return new Promise((res, rej) => {
        $("#event").load("events.html" + ` #${id}`, data => res(data));
    })
}

const getWeather = () => {
    return new Promise((res, rej) => {
        $.getJSON("events.json", data => res(data));
    })
}


$(".col-4").click(function() {
    let eventID = $(this).attr('id');
    let eventIndex = $(this).index();

    $(".col-4").attr("class","col-4 border unactive");
    $(this).removeClass("unactive");
    $(this).addClass("active");

    getDetails(eventID).then(() => getWeather()).then(data => {
        let info = data[eventIndex];
        
        $("<div></div>")
            .addClass("card")
            .html(
                `<div class="card-body">
                    <span>time: ${info.time}</span><br>
                    <span>place: ${info.location}</span><br>
                    <span>weather: ${info.weather}</span><br>
                </div>
            `)
            .appendTo("#event");
    })
})