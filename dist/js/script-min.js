$(document).ready(function(){function e(){var e=navigator.userAgent.toLowerCase();return e.indexOf("msie")!=-1&&parseInt(e.split("msie")[1])}$(".video-layer").on("click",function(e){$(".introVideo")[0].src+="&autoplay=1",e.preventDefault(),$(".video-layer").hide(),$(".video-img").hide()}),$(".b-person-data__wrap .icon").click(function(){$(".b-person-data__wrap").hide()}),$(".navbar-menu__el").click(function(){$(".navbar-menu__el").find(".navbar-menu__el-link").removeClass("navbar-menu__el-link--active"),$(".navbar-menu__sub").slideUp(),$(this).find(".navbar-menu__sub").is(":visible")||($(this).find(".navbar-menu__el-link").toggleClass("navbar-menu__el-link--active"),$(this).find(".navbar-menu__sub").slideDown())});var n=function(e,n){$(e).click(function(e){e.stopPropagation(),$(n).slideToggle("fast"),$(".header-nav__sub").hide()}),$(n).on("click",function(e){e.stopPropagation()}),$(document).on("click",function(){$(n).hide()})};n(".menu-toggle",".header-nav"),$(".header-nav__el-icon").click(function(){var e=$(this).closest(".header-nav__el").find(".header-nav__sub");$(".header-nav__sub").not(e).slideUp(),e.slideToggle()}),$(".fancybox").fancybox(),$(".slider-main__wrap, .review-slider").owlCarousel({items:1,autoHeight:!0,dots:!0,autoplay:!0,nav:!0,loop:!0,navText:['<svg class="slider-control"><use xlink:href="#arrow-left"></use></svg>','<svg class="slider-control"><use xlink:href="#arrow-right"></use></svg>']}),$(".input-animate").each(function(){var e=$(this),n="<span class='input-placeholder-val'>"+e.data("input")+"</span>";e.parent().append(n)}),$(".input-animate").on("input",function(e){$(e.currentTarget).attr("data-empty",!e.currentTarget.value)}),$(".input-placeholder-val").click(function(){$(this).parent().find(".input-animate").focus()}),$(".select-beauty").niceSelect(),e()<10&&e()&&($("body").empty(),$("body").prepend('<div class="old-browser"><div class="old-browser-text"> Браузер не поддерживается =(</div></div>')),svg4everybody(),localStorage.clear(),sessionStorage.clear(),$(window).unload(function(){localStorage.clear()})}),function(e,n){"use strict";var a="img/pack.html",t=1;if(!n.createElementNS||!n.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect)return!0;var i,o,r="localStorage"in e&&null!==e.localStorage,l=function(){n.body.insertAdjacentHTML("afterbegin",o)},s=function(){n.body?l():n.addEventListener("DOMContentLoaded",l)};if(r&&localStorage.getItem("inlineSVGrev")==t&&(o=localStorage.getItem("inlineSVGdata")))return s(),!0;try{i=new XMLHttpRequest,i.open("GET",a,!0),i.onload=function(){i.status>=200&&i.status<400&&(o=i.responseText,s(),r&&(localStorage.setItem("inlineSVGdata",o),localStorage.setItem("inlineSVGrev",t)))},i.send()}catch(c){}}(window,document);