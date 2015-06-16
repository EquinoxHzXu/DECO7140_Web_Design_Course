/**
 * If mouse is moved onto the navigation bar, there will be a bar sliding down.
 * If there are submenus, it will be shown in the bar.
 */
$(function(){
  var liWidth = $('#glo_nav #nav li').width(); // Get the widths of the elements "#glo_nav #nav li"
  var secondWidth = $('#glo_nav #nav2 .second').width();  // Get the widths of the elements "#glo_nav #nav2 .second"
  $('#glo_nav #nav li').hover(function(){
    var index = $(this).index();
    $(this).addClass('on').siblings().removeClass('on');
    $(this).find('.second').fadeIn(400);   // Show the content whose class is "second" with fade-in animation in 400ms
    $('#glo_nav #slide').stop().animate({
      height:'150px'                       // When the mouse stops at the global navigation, show elements "#glo_nav #slide" whose height is 150px
                                          // in 400ms with with fade-in animation.
    },400);
  },function(){
    $(this).find('.second').fadeOut(400);
    $('#glo_nav #slide').stop().animate({   // When the mouse move away, the block fades out in 400ms.
      height:'0'
    },400);
  });
});



/**
 * If the mouse stops over the icons of social media in the header, 
 * the pictures of the social media will be highlighted.
 */
window.onload = function ()
{
  var oLi = document.getElementsByTagName("li");  // Get elements whose tag is "li"
  for (var i = 0; i < oLi.length; i++)
  {
    oLi[i].onmouseover = function ()
    {
      this.className = "current"   // If the mouse stops over an icon, change the icon's CSS style - opacity
    };
    oLi[i].onmouseout = function ()
    {
      this.className = "" // If the mouse moves away, change the icon's CSS style to the original one
    }
  }
}

/**
 * If the mouse stops over the icons of the stars it will show how many stars you gives. 
 * And if you click, there will be a pop-up messagebox that tell you your rate.
 */
function rate(obj,oEvent){ 

  var imgSrc = 'images/star.gif'; 
  var imgSrc_2 = 'images/star-hover.gif'; 

  if(obj.rateFlag) return; 
  var e = oEvent || window.event; 
  var target = e.target || e.srcElement;  
  var imgArray = obj.getElementsByTagName("img"); 
  for(var i=0;i<imgArray.length;i++){ 
    imgArray[i]._num = i; 
    imgArray[i].onclick=function(){ 
      if(obj.rateFlag)
      return; 
      obj.rateFlag=true; 
      alert(this._num+1);  // pop-up messagebox
    }; 
  } 
  
  if(target.tagName=="IMG"){ 
    for(var j=0;j<imgArray.length;j++){ 
      if(j<=target._num){ 
        imgArray[j].src=imgSrc_2;  // Stars selected
      }else{ 
        imgArray[j].src=imgSrc;  // Stars not selected
      } 
    } 
  }else{ 
    for(var k=0;k<imgArray.length;k++){ 
      imgArray[k].src=imgSrc; 
    } 
  } 
  
} 