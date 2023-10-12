$(function () {
    $('#mail').blur(function () {
        var email = $(this).val();
        if (email.search('@') != -1) {
            $('#unvalid_mail').attr('class', '');
            $('#unvalid_mail').html('');
            $('.input_form2').css('height', '75px');
            $('.input_form2_omega').css('margin-bottom', '10px');
        } else {
            $('#unvalid_mail').attr('class', '');
            $('#unvalid_mail').html('*Nhập sai định dạng mail');
            $('#unvalid_mail').css('color', 'red');
            $('.input_form2').css('height', '80px');
            $('.input_form2_alpha').css('height', '63px');
        }
    });
    $('#phone').blur(function () {
        var phone = $(this).val();
        if (phone.length == 10) {
            $('#unvalid_phone').attr('class', '');
            $('#unvalid_phone').html('');
            $('.input_form2').css('height', '75px');
            $('.input_form2_alpha').css('margin-bottom', '10px');
        } else {
            $('#unvalid_phone').attr('class', '');
            $('#unvalid_phone').html('*Nhập sai định dạng số đt');
            $('#unvalid_phone').css('color', 'red');
            $('.input_form2').css('height', '80px');
            $('.input_form2_omega').css('height', '63px');
            $('.input_form2').css('margin-bottom', '10px');
        }
    });
});