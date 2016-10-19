// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require material.min
$(document).ready(function(){
    $("body").on( "click", ".q1next-button", function() {
        $(".section-two").addClass("hide");
        $(".section-three").removeClass("hide");
    });
    $("body").on( "click", ".q2next-button", function() {
        $(".section-three").addClass("hide");
        $(".section-four").removeClass("hide");
    });
    $("body").on( "click", ".q3next-button", function() {
        $(".section-four").addClass("hide");
    });

    $("body").on( "click", ".q1prev-button", function() {
        $(".section-two").addClass("hide");
        $(".section-one").removeClass("hide");
    });
    $("body").on( "click", ".q2prev-button", function() {
        $(".section-three").addClass("hide");
        $(".section-two").removeClass("hide");
    });
    $("body").on( "click", ".q3prev-button", function() {
        $(".section-four").addClass("hide");
        $(".section-three").removeClass("hide");
    });
});