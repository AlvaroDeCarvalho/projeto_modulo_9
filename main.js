$(document).ready(function(){
   
    $('form').on('submit',function(e){
        e.preventDefault()
        const elementoTarefa = $('form input').val()
        const novoItem = $(`<li>${elementoTarefa}</li>`) 
        $(novoItem).appendTo('ul')

        $('ul li').click(function(a){
            $(this).addClass('riscado')
            
        })
    })
    

})