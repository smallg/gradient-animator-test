/**
 * Created by wpguo on 10/12/2015.
 */
(function ($) {
    $("#btn1").click(function () {
        console.log('clicked!');
        var P = '<style type="text/css">@-webkit-keyframes rotates{from{-webkit-transform:rotate(0deg)}to{-webkit-transform:rotate(360deg)}}@-ms-keyframes rotates{from{-ms-transform:rotate(0deg)}to{-ms-transform:rotate(360deg)}}@-moz-keyframes rotates{from{-moz-transform:rotate(0deg)}to{-moz-transform:rotate(360deg)}}@-o-keyframes rotates{from{-o-transform:rotate(0deg)}to{-o-transform:rotate(360deg)}}</style>';
        var O = '<img src="lib/images/blackhole.png" class="ops-blackhole" style="display: block; width: 0px; height: 0px; animation: rotates 5s linear infinite; position: fixed; z-index: 302; left: 631.5px; top: 469.5px; padding: 0px;"><img src="lib/images/close.png" class="ops-close OP_LOG_BTN" data-click="{\'fm\':\'beha\'}" style="width: 50px; height: 50px; box-shadow: rgb(0, 0, 0) 0px 0px 3px; position: fixed; top: 100px; right: 50px; z-index: 305; cursor: pointer; display: none;">';
        O += P;
        $(document.body).prepend(O);
        $(".ops-blackhole").animate({height:"1500px",width:"1500px", left:"-150px",top:"-200px"}, 3000,
            function(){
                $(".ops-blackhole").animate({height:"0",width:"0", left:"640px",top:"469px"},3000);
            });
    });
})(jQuery);


