$userInput = $("#search");


$("form").on("submit", async function(evt){
    event.preventDefault();
    let userTerm = $userInput.val();
    let $flavor =  $("#flavor").val();
    let $size =  $("#size").val();
    let $rating =  $("#rating").val();
    let $image =  $("#image").val();
    const resp = await axios.post("/api/cupcakes", {flavor:$flavor,size:$size,rating:$rating, image:$image });
    console.log(resp.data)
    $markUp = $(`<li>${$flavor}</li>`)
    $("#list-cupcake").append($markUp)
})