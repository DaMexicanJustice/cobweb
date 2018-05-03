
users = ["damexicanjustice", "mcsullysulkin", "hurriboy", "tummelowe", "aaron_", "geemuguy", "plywood_", "fifilillian", "spicefather", "nubzombie", "boundingray", "yourfellowdude"];
totalUsers = users.length;
curVideoUser = 0;
curChatUser = 0;
hasLoadedVideo = false;
hasLoadedChat = false;

$(document).ready(function() {
    $("#spinner").hide();
   
   $("#launch").click(function() {
      hasLoadedVideo = true; 
      hasLoadedChat = true;
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
    if (hasLoadedVideo) {
        if (curVideoUser < totalUsers) {
            createStreamIframe(users[curVideoUser]);
            curVideoUser += 1;
        } else {
            $("#spinner").hide();
            hasLoadedVideo = false;
        }
    }
}, 1000);

window.setInterval(function(){
    if (hasLoadedChat) {
        if (curChatUser < totalUsers) {
            createChatIframe(users[curChatUser]);
            curChatUser += 1;
        } else {
            hasLoadedChat = false;
        }
    }
}, 5000);
