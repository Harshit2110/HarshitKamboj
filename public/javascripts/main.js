/**
 * Created by Harshit Kamboj on 2/14/2018.
 */
/* global $ */

jQuery(document).ready(function($) {

    $(window).load(function(){
        $('body').addClass('loaded');
    });

    $('.menu-button').click(function () {
        $('.menu-button').toggleClass('active');
        $('.sidebar-menu').toggleClass('active');
    });

});