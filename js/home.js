/*-------------------------
スクロールしてヘッダーを途中で固定
（トップページのみ）
(animationはCSSで定義してJSで発火)
--------------------------*/
 $(window).on("load scroll",function(){
    let $main = $("#main"),
        $homeHeader = $(".home .header"),
        $distance = $main.offset().top,
        $scrollVal = $(window).scrollTop(),
        $navH = $(".header").outerHeight();
	
	
	
    if($scrollVal>$distance){
        $homeHeader.addClass("fix");
        $main.css("margin-top",$navH);
    }else{
        $homeHeader.removeClass("fix");
        $main.css("margin-top",0); 
    }
}); 



/*-----------------------------------
スクロールして現れるトップページに戻るボタン
-----------------------------------*/
jQuery(function() {
    var pagetop = $('#page-top');   
    pagetop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {  //100pxスクロールしたら表示
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500); //0.5秒かけてトップへ移動
        return false;
    });
});



/*-----------------------------------
バナー画像をモーダルウインドウ上でスライドーショーとして表示する
-----------------------------------*/
$(function() {
  $(".gallery").colorbox({
    rel:'slideshow',
    slideshow:true,
    slideshowSpeed:5000,
    maxWidth:"90%",
    maxHeight:"90%",
    opacity: 0.7
  });
});
