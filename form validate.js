// alert('hello')
$(document).ready(function() {
    $("#sign-up").validate({
        rules:{
            firstname:{
                required: true,
                minlength:4,
            
            },
            surname: {
                required: true,
                minlength: 4,
            },
            email: {
                required: true,
                email:true
            },
            password:{
                required: true,
                minlength: 6
            },
            submitHandler: function(form) {
                form.submit();
            }

        },
        
        
    })
})