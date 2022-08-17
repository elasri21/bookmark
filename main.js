const menu = document.querySelector(".menu");
const closeMenu = document.querySelector(".close");
const nav = document.querySelector("nav");
menu.addEventListener("click", function() {
    this.style.display = "none";
    closeMenu.style.display = "block";
    nav.style.display = "block";
});
closeMenu.addEventListener("click", function() {
    this.style.display = "none";
    nav.style.display = "none";
    menu.style.display = "block";
});

$(document).ready(function(){
    $('button').attr('type', 'button')
    $('img').attr('aria-hidden', 'true')
    let show = document.querySelectorAll('.question');
    show.forEach(btn => {
        btn.addEventListener('click', function(e){
            $('.question').css({color: 'hsl(229, 31%, 21%)'})
            $('.q-a p').css({display: "none"})
            $('img.show-answer').css({Transform: "rotate(0deg)"})
            $(this).siblings('p.answer').css({display: "block"})
            $(this).css({color: 'hsl(0, 94%, 66%)'})
            $(this).siblings('img.show-answer').css({Transform: "rotate(180deg"})
        });
    });

    // working whith pannel
    let showPannel = document.querySelectorAll('.show-pannel > div');
    let pannels = document.querySelectorAll('.pannel');
    let parent = document.getElementById("pannel");
    for(let i=0; i<showPannel.length; i++){
        showPannel[i].addEventListener('click', function(e){
            $('.show-pannel > div').css({borderBottom
            : "none"});
            $('.show-pannel > div span').css({
                color: 'hsl(229, 8%, 60%)'});
            $(this).css({borderBottomSize: "2px",
            borderBottomStyle: "solid",
            borderBottomColor: "hsl(0, 94%, 66%)",
            color: 'hsl(0, 94%, 66%)'});
            $(this).children('span').css({color: 'hsl(0, 94%, 66%)'});
        });
    }

    //working with form
    let form = document.querySelector('form');
    let email = document.querySelector('#email');
    let error = document.querySelector('.error');
    let errorMsg = document.querySelector('.error-msg');
    form.addEventListener('submit', function(e){
        if(email.value === ''){
            e.preventDefault()
            error.style.display = 'block';
            errorMsg.style.opacity = '1';
            email.style.borderColor = 'hsl(0, 94%, 66%)';
        }
    });
    email.addEventListener('focus', function(){
        this.style.borderColor = 'hsl(0, 0%, 100%)';
        error.style.display = 'none';
        errorMsg.style.opacity = '0';

    });
});



function openTab(evt, box) {
    let i, tabCont, tabLink;
    tabCont = document.getElementsByClassName("pannel");
    for(i = 0; i < tabCont.length; i++) {
        tabCont[i].style.display = "none";
    }
    tabLink = document.getElementsByClassName("nail");
    for(i = 0; i < tabLink.length;i++) {
        tabLink[i].classList = tabLink[i].className.replace(" active", "");
    }
    document.getElementById(box).style.display = "flex";
    evt.currentTarget.className += " active";
}
    /*nothing has yet done*/