$(document).ready(function(){
    let show = document.querySelectorAll('.question')
    show.forEach(btn => {
        btn.addEventListener('click', function(e){
            $('.q-a p').css({display: "none"})
            $(this).siblings('p.answer').css({display: "block"})
        })
    })

    let openBtn = document.querySelector('.toggle button')
    let op = document.querySelector('.toggle')
    let closeBtn = document.querySelector('.close-btn button')
    let clo = document.querySelector('.close-btn')
    let mobileHead = document.querySelector('#mobile-head')
    openBtn.addEventListener('click', function(){
        op.style.display = 'none'
        $('header').css({display: 'none'})
        mobileHead.style.display = 'block'
        clo.style.display = 'block'
    })
    closeBtn.addEventListener('click', function(){
        mobileHead.style.display = 'none'
        $('header').css({display: 'flex'})
        op.style.display = 'block'

    })

    // working whith pannel


    let showPannel = document.querySelectorAll('.show-pannel > div')
    let pannels = document.querySelectorAll('.pannel')
    const page = document.getElementById('page')
        for(let i=0;i<showPannel.length;i++){
        showPannel[i].addEventListener('click', function(e){
            $('.show-pannel > div').css({borderBottom
            : "none"})
            $(this).css({borderBottomSyze: "2px",
            borderBottomStyle: "solid",
            borderBottomColor: "hsl(0, 94%, 66%)"})
            $('.pannel').css({display: "none"})
                for(let j=0; j<pannels.length; j++){
                    if(j===i && page.clientWidth > 375){
                        pannels[i].style.display = 'flex'
                    } else if(j===i && page.clientWidth <= 375) {
                        pannels[i].style.display = 'block'
                    }
                }
            
        })
    }


    //working with form
    let form = document.querySelector('form')
    let email = document.querySelector('#email')
    let error = document.querySelector('.error')
    let errorMsg = document.querySelector('.error-msg')
    form.addEventListener('submit', function(e){
        if(email.value === ''){
            e.preventDefault()
            error.style.display = 'block'
            errorMsg.style.opacity = '1'
            email.style.borderColor = 'hsl(0, 94%, 66%)'
        }
    })

    email.addEventListener('focus', function(){
        this.style.borderColor = 'hsl(0, 0%, 100%)'
        error.style.display = 'none'
        errorMsg.style.opacity = '0'

    })
    
    
    })

    /*nothing has yet done*/