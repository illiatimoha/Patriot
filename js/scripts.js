var acc = document.getElementsByClassName("accordion"),
    i;
for (i = 0; i < acc.length; i++) acc[i].addEventListener("click", (function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    "block" === panel.style.display ? panel.style.display = "none" : panel.style.display = "block"
}));
$(document).ready((function () {
        $(".owl-carousel").owlCarousel({
            loop: !0,
            margin: 10,
            nav: !1,
            dots: !1,
            autoplay: !0,
            smartSpeed: 1e3,
            autoplayTimeout: 2e3,
            responsive: {
                0: {
                    items: 1
                },
                700: {
                    items: 2
                },
                1200: {
                    items: 3
                }
            }
        })
    })),




    containers = document.querySelectorAll(".carousel-container");

function showSlides(container) {


    var slideIndex = 0,
        slides = container.querySelectorAll(".mySlides"),
        dots = container.querySelectorAll(".demo"),
        prev = container.querySelector(".prev"),
        next = container.querySelector(".next"),
        refresh = function (newIndex) {
            slides[slideIndex].style.display = "none", slides[slideIndex = newIndex].style.display = "block"
        };
    prev.addEventListener("click", (function (evt) {
        evt.preventDefault();
        var newIndex = 0 === slideIndex ? slides.length - 1 : slideIndex - 1;
        refresh(newIndex)
    })), next.addEventListener("click", (function (evt) {
        evt.preventDefault();
        var newIndex = slideIndex === slides.length - 1 ? 0 : slideIndex + 1;
        refresh(newIndex)
    })), dots.forEach((function (dot) {
        dot.addEventListener("click", (function (evt) {
            evt.preventDefault();
            var newIndex = Array.prototype.indexOf.call(dots, this);
            refresh(newIndex)
        }))
    })), refresh(0)
}
containers.forEach((function (container) {
    showSlides(container)
})), 
// $(".btn-shop").click((function () {
//     var ProductName = $(this).attr("data-name"),
//         ProductId = $(this).attr("data-id"),
//         ProductInput = ProductName;
//     $(".your-product").attr("value", ProductInput), $(".your-id").attr("value", ProductId)
// }));

$(".btn-shop").click((function () {
    let productColor = $(this).attr("data-color")
    let input = $("input[name=color]")
    $(input).val(productColor)

    let select = $("select[name=color]")
    let option = $(select).find('option[value="' + productColor + '"]')
    if(option !== null && option !== undefined){
        $(option).prop('selected', true)
    }
}));




$('input[name=phone]').mask("+38 (999) 999 99 99");




function update() {
    var Now = new Date(), // Беремо теперішній час, записуємо в now
    Finish = new Date(); // Беремо теперішній час, записуємо в finish
    Finish.setHours( 23); // Приписуємо цій перемінній Finish певні значення (години, хв, сек)
    Finish.setMinutes( 59);  // Приписуємо цій перемінній Finish певні значення (години, хв, сек)
    Finish.setSeconds( 59);  // Приписуємо цій перемінній Finish певні значення (години, хв, сек)
    if( Now.getHours() === 23  &&  Now.getMinutes() === 59  &&  Now.getSeconds === 59) {
        Finish.setDate( Finish.getDate() + 1);
    }  // якщо теперішній час становить 23:59:59 - ми беремо дату з фініша і додаємо + 1 день
    var sec = Math.floor( ( Finish.getTime() - Now.getTime()) / 1000); // створюємо перемінну зі значенням що дорівнює finish - now 
    var hrs = Math.floor( sec / 3600);  // створюємо перемінну зі значенням що дорівнює finish - now 
    sec -= hrs * 3600;
    // if (hrs >= 24) {
    //     var days = 1;
    // }
    // else days = 0;
    days = 0;
    var min = Math.floor( sec / 60);  // створюємо перемінну зі значенням що дорівнює finish - now 
    sec -= min * 60;
    $(".days").html( pad(days));
    $(".hours").html( pad(hrs));
    $(".minutes").html( pad(min));
    $(".seconds").html( pad(sec));
    setTimeout( update, 200);
}
function pad(s) {
    s = ("00"+s).substr(-2);
    return s[0]  + s[1];
}
update();


