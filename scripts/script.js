$(document).ready(function() {
    $('.result').hover(function(){
        $('.banner').toggleClass('banner-shifted')
    })
    $('.result').click(function(){
        $('.asynamite').toggleClass('inactive')
        $('.banner').toggleClass('banner-active')
        

        setTimeout(function(){
            $('.congratulate').toggleClass('congratulate-shifted')
        },400)

        setTimeout(function(){
            $('.winners').toggleClass('winners-active')
        }, 2000)
    })


    $('.code').hover(function(){
        $('.final .final1').html('Nimit Jain')
        $('.final .final2').html('Saurav')
    })
    $('.connect').hover(function(){
        $('.final .final1').html('Hardik Raj')
        $('.final .final2').html('')
    })
    $('.try').hover(function(){
        $('.final .final1').html('Akhil Kumar')
        $('.final .final2').html('Ritwik Vaidya')
    })
    $('.guess').hover(function(){
        $('.final .final1').html('Bhavesh')
        $('.final .final2').html('Abhishek Kumar')
    })



    $('.card').click(function(){
        $('.final').toggleClass('final-shifted')
        $('.card').toggleClass('card-shifted')
        $('.congrats').toggleClass('congrats-shifted')
    })
})