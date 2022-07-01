$(document).ready(function () {

    AOS.init();
    AOS.init({ disable: 'mobile' });
    $(".menu-btn").click(function () {
        $(".mobile-In").fadeIn();
        $(".mobile-In").css("transform", "translateX(0px)");
    });
    $(".close-btn").click(function () {
        $(".mobile-In").fadeOut();
        $(".mobile-In").css("transform", "translateX(2000px)");
    });

    //owlcarousel
    $('.lp-patch-slider').owlCarousel({
        loop: true,
        dots: false,
        margin: 15,
        responsiveClass: true,
        autoplay: true,
        nav: true,
        autoplayTimeout: 8000,
        autoplaySpeed: 800,
        lazyLoad: true,
        navText: ["<i class='fal fa-long-arrow-left'></i>", "<i class='fal fa-long-arrow-right'></i>"],
        responsive: {
            0: {
                items: 2,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            },
            360: {
                items: 2
            }
        }
    });
    $('.auth-reviews-slider').owlCarousel({
        loop: true,
        nav: true,
        dots: true,
        margin: 10,
        responsiveClass: true,
        autoplay: false,
        autoplayTimeout: 8000,
        autoplaySpeed: 800,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 2,
            },
            360: {
                items: 1
            }
        }
    });

    // // expand
    // var section = $('div.table__cell');

    // function toggleAccordion() {
    //   section.removeClass('active');
    //   $(this).addClass('active');
    // }

    // section.on('click', toggleAccordion);

    // Arrow Btn goto up
    var scrollBtn = $('#goto-top');
    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            scrollBtn.addClass('show');
        } else {
            scrollBtn.removeClass('show');
        }
    });
    scrollBtn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '300');
    });
    // Add smooth scrolling to all links
    $("a.nextSec").on('click', function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
            // Store hash
            var hash = this.hash;
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
    $('#list-btn').click(function () {

        document.getElementById('list-btn').style.display = "none";
        document.getElementById('cross').style.display = "block";
        document.getElementById('menu-list').style.left = "0px";
        // document.getElementById('form-cross').style.display = "none";
        // document.getElementById('cpyRight-cross').style.display = "none";
    });
    $('#cross').click(function () {

        document.getElementById('list-btn').style.display = "block";
        document.getElementById('cross').style.display = "none";
        document.getElementById('menu-list').style.left = "150%";
        // document.getElementById('form-cross').style.display = "block";
        // document.getElementById('cpyRight-cross').style.display = "none";
    });
    // Admin Pannel Nav*****************************
    $('#addlist-btn').click(function () {

        document.getElementById('addlist-btn').style.display = "none";
        document.getElementById('addcross').style.display = "block";
        document.getElementById('addmenu-list').style.left = "0px";
    });
    $('#addcross').click(function () {
        document.getElementById('addlist-btn').style.display = "block";
        document.getElementById('addcross').style.display = "none";
        document.getElementById('addmenu-list').style.left = "-330px";
    });

    // Admin Pannel Nav End*****************************

    // $('.lazy').lazy();

    // Validation Form******************************************
    $(".validate-popupform").validate({});
    $(".patches-validation").validate({});
    $(".vector-validation").validate({});
    $(".quote-validation").validate({});
    $(".quote-patches").validate({});
    $(".quote-vector").validate({});

    // End Validation***********************************

    $("#btn_submit").click(function () {
        if ($(this).is(":checked")) {
            $("#inputField").show();
        } else {
            $("#inputField").hide();
        }
    });


    // Check Box Click Input Field Shows*********************************************

    // Login Page to Admin***********************************
    const cn = document.getElementById('uname');
    const psw = document.getElementById('psw');
    const user = document.getElementById('login');
    const userName = document.getElementById('userName');
    // userName="Hi";
    $("#login").click(function () {
        if ((cn.value === "admin") || (psw.value === "admin")) {
            window.location.replace('../admin/admin.php');
            cn.value = "";
            psw.value = "";
        } else {
            alert("Username and Password incorrect");
            cn.value = "";
            psw.value = "";
        }
    });
    // Login Page to Admin End***********************************

    // LogOut Page to Admin***********************************

    $("#backToWeb").click(function () {
        window.location.replace('http://digitize4life.sagetag.com//');
    });

    $("#logout").click(function () {
        window.location.replace('http://digitize4life.sagetag.com/login/login.php');
    });

    // LogOut Page to Admin***********************************

    // Tabs Click To Remove active class 
    $(".tab").click(function () {
        $(".tab").addClass("active"); // instead of this do the below 
        $(".tab").removeClass("active");
        // $(this).addClass("active");   
    });


    $('[data-toggle="modal"]').hover(function () {
        var modalId = $(this).data('target');
        $(modalId).modal('show');
    });


    // Tabs Click To Remoe active class End

    // **** Hover Main-banner  Start****//
    $(".sibling3").hover(
        () => { //hover
            $('.custom-patches').css("display", "block");
            $('.sibling1').css("display", "none");
            $('.sibling2').css("display", "none");
        },
        () => { //out
            $('.sibling1').css("display", "block");
            $('.sibling2').css("display", "block");
            $('.custom-patches').css("display", "none");
        }
    );
    $(".sibling2").hover(
        () => { //hover
            $('.vector-convertion-left').css("display", "block");
            $('.vector-convertion-right').css("display", "block");
            $('.sibling1').css("display", "none");
            $('.sibling3').css("display", "none");
        },
        () => { //out
            $('.sibling1').css("display", "block");
            $('.sibling3').css("display", "block");
            $('.vector-convertion-left').css("display", "none");
            $('.vector-convertion-right').css("display", "none");
        }
    );
    // **** Hover Main-banner End ****//
    var modal = document.getElementById("myModal");
    var modalImg = document.querySelector(".img01");
    $('.myImg').click(function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    });
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    /*----Click Btn to view More images---*/
    var portfDisplay = document.querySelector('.view-portfolio');
    var tabsPort = document.querySelector('.showPortfolio');
    var showLess = document.getElementById('viewLess');
    var showMore = document.getElementById('viewMore');
    $('#viewMore').click(function () {
        portfDisplay.style.display = "block";
        tabsPort.style.display = "none";
        showMore.style.display = "none";
        showLess.style.display = "inline-block";
    });
    $('#viewLess').click(function () {
        portfDisplay.style.display = "none";
        tabsPort.style.display = "block";
        showMore.style.display = "inline-block";
        showLess.style.display = "none";
    });

    /*----Click Btn to view More images End---*/

    // remove active classs
    $(".digitize-info").click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass("active");
        } else {
            $(this).addClass("active");
        }
    });
    $(".digitize-info1").click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass("active");
        } else {
            $(this).addClass("active");
        }
        // $("a").removeClass("active");
    });
    // LogOut Page to Admin End***********************************








    /*PORTFOLIO*/
    // $('.various').click(function () {
    //     var leadprice = $(this).attr('name');
    //     $(".popupform .leadprice").val(leadprice)
    // });



    // setTimeout(function(){ $("body").removeClass("ovr-show"); }, 3000);


    $('.various').click(function () {
        var leadprice = $(this).attr('name');
        $(".popupform .leadprice").val(leadprice)
    });

    var currentIP = $("meta[name=ip2loc]").attr('content');
    var key = '5XpThOAEkfgOvEJ';


    $(".chosen-select").chosen({
        no_results_text: "Oops, nothing found!"
    })

    // init Isotope
    var $container = $('.isotope').isotope({
        itemSelector: '.pfimg',

        layoutMode: 'fitRows'

    });

    // filter functions
    // var filterFns = {
    //     // show if number is greater than 50
    //     numberGreaterThan50: function () {
    //         var number = $(this).find('.number').text();
    //         return parseInt(number, 10) > 50;
    //     },
    //     // show if name ends with -ium
    //     ium: function () {
    //         var name = $(this).find('.name').text();
    //         return name.match(/ium$/);
    //     }
    // };

    // bind filter button click
    // $('#filters').on('click', 'button', function () {
    //     var filterValue = $(this).attr('data-filter');
    //     // use filterFn if matches value
    //     filterValue = filterFns[filterValue] || filterValue;
    //     $container.isotope({
    //         filter: filterValue
    //     });
    // });

    // bind sort button click
    // $('#sorts').on('click', 'button', function () {
    //     var sortByValue = $(this).attr('data-sort-by');
    //     $container.isotope({
    //         sortBy: sortByValue
    //     });
    // });

    // change is-checked class on buttons
    $('.button-group').each(function (i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'button', function () {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
        });
    });

    //****************************
    // Isotope Load more button
    //****************************
    var initShow = 8; //number of items loaded on init & onclick load more button
    var counter = initShow; //counter for load more button
    var iso = $container.data('isotope'); // get Isotope instance

    // loadMore(initShow); //execute function onload //Error In console this is why committed

    function loadMore(toShow) {
        $container.find(".hidden").removeClass("hidden");

        var hiddenElems = iso.filteredItems.slice(toShow, iso.filteredItems.length).map(function (item) {
            return item.element;
        });
        $(hiddenElems).addClass('hidden');
        $container.isotope('layout');

        //when no more to load, hide show more button
        if (hiddenElems.length == 0) {
            jQuery("#showMore").hide();
        } else {
            jQuery("#showMore").show();
        };

    }





    //when filter button clicked
    $("#filters").click(function () {
        $(this).data('clicked', true);

        loadMore(initShow);
    });

    $('.filter-dis').click(function () {
        $('.zz button').prop("disabled", true);
    });

    $('.filter-enb').click(function () {
        $('.zz button').removeAttr("disabled");
    });



    $('.filter-disable').on('click', function () {
        $('.zzz button').addClass('disable_element');
    });




    /*
    end*/


    // Dropbox*********************************************

    var div = document.createElement('div');
    return (('draggable' in div) || ('ondragstart' in div && 'ondrop' in div));



    // Dropbox*********************************************

});


// let notShow = document.getElementById("banner-video").style.display = "none";
// setTimeout(function () {
//     document.getElementById("banner-video").style.display = "block";
// }, 9000)

// Pie Charts



// Pie Charts End
// Pie Charts End
