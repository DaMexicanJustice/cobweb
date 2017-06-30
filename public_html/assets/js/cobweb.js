
users = ["damexicanjustice", "aaronsrl", "plywood_", "geemuguy", "mcsullysulkin", "fifilillian", "hurriboy", "spicefather", "nubzombie", "boundingray", "yourfellowdude"];
totalUsers = users.length;
curUser = 0;
hasLoaded = false;

$(document).ready(function() {
    $("#spinner").hide();
   
   $("#launch").click(function() {
      hasLoaded = true; 
      $("#spinner").show();
      $("#launch").hide();
      $("#cobweb").html("");
   });

});

function createStreamIframe(id) {
    html = "<div class='4u 12u$(mobile)'> <iframe src='https://player.twitch.tv/?channel="+id+"&muted=true' height='187' width='250' frameborder='0' scrolling='no' allowfullscreen='true' > </iframe> </div>";
    $("#cobweb").append(html);
}

function createChatIframe(id) {
    html = " <iframe frameborder='1' scrolling='true' id='" + id + "' src='https://twitch.tv/"+id+"/chat' height='1' width='1'> ";
    $("#chat").append(html);
}

window.setInterval(function(){
    if (hasLoaded) {
        if (curUser < totalUsers) {
            createStreamIframe(users[curUser]);
            createChatIframe(users[curUser]);
            curUser += 1;
        } else {
            $("#spinner").hide();
            hasLoaded = false;
        }
    }
}, 9000);