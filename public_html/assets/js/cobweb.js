/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
streams = "<div class='4u 12u$(mobile)'> <iframe src='https://player.twitch.tv/?channel=damexicanjustice&muted=true' height='187' width='250' frameborder='0' scrolling='no' allowfullscreen='true' > </iframe> </div> <div class='4u 12u$(mobile)'> <iframe src='https://player.twitch.tv/?channel=aaronsrl&muted=true' height='187' width='250' frameborder='0' scrolling='no' allowfullscreen='true' > </iframe> </div> <div class='4u$ 12u$(mobile)'> <iframe src='https://player.twitch.tv/?channel=plywood_&muted=true' height='187' width='250' frameborder='0' scrolling='no' allowfullscreen='true' > </iframe> </div> <div class='4u 12u$(mobile)'> <iframe src='https://player.twitch.tv/?channel=boundingray&muted=true' height='187' width='250' frameborder='0' scrolling='no' allowfullscreen='true' > </iframe> </div> <div class='4u 12u$(mobile)'> <iframe src='https://player.twitch.tv/?channel=geemuguy&muted=true' height='187' width='250' frameborder='0' scrolling='no' allowfullscreen='true' > </iframe> </div> <div class='4u$ 12u$(mobile)'> <iframe src='https://player.twitch.tv/?channel=yourfellowdude&muted=true' height='187' width='250' frameborder='0' scrolling='no' allowfullscreen='true' > </iframe> </div> <div class='4u 12u$(mobile)'> <iframe src='https://player.twitch.tv/?channel=spicefather&muted=true' height='187' width='250' frameborder='0' scrolling='no' allowfullscreen='true' > </iframe> </div> <div class='4u 12u$(mobile)'> <iframe src='https://player.twitch.tv/?channel=sae0901&muted=true' height='187' width='250' frameborder='0' scrolling='no' allowfullscreen='true' > </iframe> </div> <div class='4u$ 12u$(mobile)'> <iframe src='https://player.twitch.tv/?channel=hurriboy&muted=true' height='187' width='250' frameborder='0' scrolling='no' allowfullscreen='true' > </iframe> </div> <div class='4u 12u$(mobile)'> <iframe src='https://player.twitch.tv/?channel=nubzombie&muted=true' height='187' width='250' frameborder='0' scrolling='no' allowfullscreen='true' > </iframe> </div> <div class='4u 12u$(mobile)'> <iframe src='https://player.twitch.tv/?channel=mcsullysulkin&muted=true' height='187' width='250' frameborder='0' scrolling='no' allowfullscreen='true' > </iframe> </div> <div class='4u$ 12u$(mobile)'> <iframe src='https://player.twitch.tv/?channel=' height='187' width='250' frameborder='0' scrolling='no' allowfullscreen='true' > </iframe> </div>"
chats = "<iframe frameborder='1' scrolling='true' id='damexicanjustice>' src='https://twitch.tv/damexicanjustice/chat' height='1' width='1'> </iframe> </div> <div id='chat' class='row'> <iframe frameborder='1' scrolling='true' id='damexicanjustice>' src='https://twitch.tv/aaronsoldier/chat' height='1' width='1'> </iframe> </div> <div id='chat' class='row'> <iframe frameborder='1' scrolling='true' id='damexicanjustice>' src='https://twitch.tv/nubzombie/chat' height='1' width='1'> </iframe> </div> <div id='chat' class='row'> <iframe frameborder='1' scrolling='true' id='damexicanjustice>' src='https://twitch.tv/spicefather/chat' height='1' width='1'> </iframe> </div> <div id='chat' class='row'> <iframe frameborder='1' scrolling='true' id='damexicanjustice>' src='https://twitch.tv/yourfellowdude/chat' height='1' width='1'> </iframe> </div> <div id='chat' class='row'> <iframe frameborder='1' scrolling='true' id='damexicanjustice>' src='https://twitch.tv/mcsullysulkin/chat' height='1' width='1'> </iframe> </div> <div id='chat' class='row'> <iframe frameborder='1' scrolling='true' id='damexicanjustice>' src='https://twitch.tv/sae0901/chat' height='1' width='1'> </iframe> </div> <div id='chat' class='row'> <iframe frameborder='1' scrolling='true' id='damexicanjustice>' src='https://twitch.tv/geemuguy/chat' height='1' width='1'> </iframe> </div> <div id='chat' class='row'> <iframe frameborder='1' scrolling='true' id='damexicanjustice>' src='https://twitch.tv/boundingray/chat' height='1' width='1'> </iframe> </div> <div id='chat' class='row'> <iframe frameborder='1' scrolling='true' id='damexicanjustice>' src='https://twitch.tv/hurriboy/chat' height='1' width='1'> </iframe> </div> <div id='chat' class='row'> <iframe frameborder='1' scrolling='true' id='damexicanjustice>' src='https://twitch.tv/plywood_/chat' height='1' width='1'> </iframe> </div> <div id='chat' class='row'> <iframe frameborder='1' scrolling='true' id='damexicanjustice>' src='https://twitch.tv/damexicanjustice/chat' height='1' width='1'> </iframe>"
hasLoaded = false;

$(document).ready(function() {
    
    $("#spinner").hide();
    
    $("#launch").click(function() {
       if (!hasLoaded) {
                $("#launch").hide();
                $("#cobweb").html(streams);
                $("#chat").html(chats);
                hasLoaded = true;
            } 
    });

});

