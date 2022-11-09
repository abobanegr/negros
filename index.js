var i = 0
var B = ""
var button = document.getElementById("a");

button.addEventListener("click", function(){
    i++;
    B = "./img/" + i + ".jpg"
    document.getElementById("b").src=B;
    if (i == 20) {
        i = 0
    }
});