/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
streams = "streams = "<div class='4u 12u$(mobile)'> <iframe src='https://player.twitch.tv/?channel=damexicanjustice' height='187' width='250' frameborder='0' scrolling='no' allowfullscreen='true' muted='true'> </iframe> </div> <div class='4u 12u$(mobile)'> <iframe src='https://player.twitch.tv/?channel=aaronsoldier' height='187' width='250' frameborder='0' scrolling='no' allowfullscreen='true' muted='true' autoplay='false'> </iframe> </div> <div class='4u$ 12u$(mobile)'> <iframe src='https://player.twitch.tv/?channel=plywood_' height='187' width='250' frameborder='0' scrolling='no' allowfullscreen='true' muted='true' autoplay='false'> </iframe> </div> <div class='4u 12u$(mobile)'> <iframe src='https://player.twitch.tv/?channel=boundingray' height='187' width='250' frameborder='0' scrolling='no' allowfullscreen='true' muted='true' autoplay='false'> </iframe> </div> <div class='4u 12u$(mobile)'> <iframe src='https://player.twitch.tv/?channel=geemuguy' height='187' width='250' frameborder='0' scrolling='no' allowfullscreen='true' muted='true' autoplay='false'> </iframe> </div> <div class='4u$ 12u$(mobile)'> <iframe src='https://player.twitch.tv/?channel=yourfellowdude' height='187' width='250' frameborder='0' scrolling='no' allowfullscreen='true' muted='true' autoplay='false'> </iframe> </div> <div class='4u 12u$(mobile)'> <iframe src='https://player.twitch.tv/?channel=spicefather' height='187' width='250' frameborder='0' scrolling='no' allowfullscreen='true' muted='true' autoplay='false'> </iframe> </div> <div class='4u 12u$(mobile)'> <iframe src='https://player.twitch.tv/?channel=sae0901' height='187' width='250' frameborder='0' scrolling='no' allowfullscreen='true' muted='true' autoplay='false'> </iframe> </div> <div class='4u$ 12u$(mobile)'> <iframe src='https://player.twitch.tv/?channel=hurriboy' height='187' width='250' frameborder='0' scrolling='no' allowfullscreen='true' muted='true' autoplay='false'> </iframe> </div> <div class='4u 12u$(mobile)'> <iframe src='https://player.twitch.tv/?channel=nubzombie' height='187' width='250' frameborder='0' scrolling='no' allowfullscreen='true' muted='true' autoplay='false'> </iframe> </div> <div class='4u 12u$(mobile)'> <iframe src='https://player.twitch.tv/?channel=mcsullysulkin' height='187' width='250' frameborder='0' scrolling='no' allowfullscreen='true' muted='true' autoplay='false'> </iframe> </div> <div class='4u$ 12u$(mobile)'> <iframe src='https://player.twitch.tv/?channel=' height='187' width='250' frameborder='0' scrolling='no' allowfullscreen='true' muted='true' muted='true' muted='true'> </iframe> </div>""
chats = "<iframe frameborder='1' scrolling='true' id='damexicanjustice>' src='https://twitch.tv/damexicanjustice/chat' height='1' width='1'> </iframe> </div> <div id='chat' class='row'> <iframe frameborder='1' scrolling='true' id='damexicanjustice>' src='https://twitch.tv/aaronsoldier/chat' height='1' width='1'> </iframe> </div> <div id='chat' class='row'> <iframe frameborder='1' scrolling='true' id='damexicanjustice>' src='https://twitch.tv/nubzombie/chat' height='1' width='1'> </iframe> </div> <div id='chat' class='row'> <iframe frameborder='1' scrolling='true' id='damexicanjustice>' src='https://twitch.tv/spicefather/chat' height='1' width='1'> </iframe> </div> <div id='chat' class='row'> <iframe frameborder='1' scrolling='true' id='damexicanjustice>' src='https://twitch.tv/yourfellowdude/chat' height='1' width='1'> </iframe> </div> <div id='chat' class='row'> <iframe frameborder='1' scrolling='true' id='damexicanjustice>' src='https://twitch.tv/mcsullysulkin/chat' height='1' width='1'> </iframe> </div> <div id='chat' class='row'> <iframe frameborder='1' scrolling='true' id='damexicanjustice>' src='https://twitch.tv/sae0901/chat' height='1' width='1'> </iframe> </div> <div id='chat' class='row'> <iframe frameborder='1' scrolling='true' id='damexicanjustice>' src='https://twitch.tv/geemuguy/chat' height='1' width='1'> </iframe> </div> <div id='chat' class='row'> <iframe frameborder='1' scrolling='true' id='damexicanjustice>' src='https://twitch.tv/boundingray/chat' height='1' width='1'> </iframe> </div> <div id='chat' class='row'> <iframe frameborder='1' scrolling='true' id='damexicanjustice>' src='https://twitch.tv/hurriboy/chat' height='1' width='1'> </iframe> </div> <div id='chat' class='row'> <iframe frameborder='1' scrolling='true' id='damexicanjustice>' src='https://twitch.tv/plywood_/chat' height='1' width='1'> </iframe> </div> <div id='chat' class='row'> <iframe frameborder='1' scrolling='true' id='damexicanjustice>' src='https://twitch.tv/damexicanjustice/chat' height='1' width='1'> </iframe>"
hasLoaded = false;
url = "https://damexicanjustice.github.io/cobweb/public_html/index.html#work"

window.setInterval(function(){
    $(document).ready(function() {
        if (window.location.href == url && !hasLoaded) {
            $("#cobweb").html(streams);
            hasLoaded = true;
        }
    }
    , 1000);
})

$(document).load(function () {
 $("#chat").html(chats)
});
