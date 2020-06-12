
$(document).ready(function(){
    $("#menu").on("click", function() {
        $(".overlay").css("display", "block");
        $("#lgMenu").addClass("enter");
    });
    $("#exit, .overlay").on("click", function() {
        $("#lgMenu").removeClass("enter");
        $(".overlay").css("display", "none");
    });

    $("#menu-view").on("click", function() {
        $(".overlay").css("display", "block");
        $("#lgMenu-view").addClass("enter");
    });
    $("#exit-view, .overlay").on("click", function() {
        $("#lgMenu-view").removeClass("enter");
        $(".overlay").css("display", "none");
    });

    $(".openProfileMenu").on("click", function() {
        $(".overlay").css("display", "block");
        $("#profileMenu").addClass("enter");
    });
    $("#exit-profile, #exit-profile1,  .overlay").on("click", function() {
        $("#profileMenu").removeClass("enter");
        $(".overlay").css("display", "none");
    });

    $(".influecer-area").on("click", function() {
        $(".main-blocks-div").css("display", "none");
        $(".table-div").removeClass("d-none");
        $("#menu-view").removeClass("d-none");
    });

    $(".open-tab").on("click", function( ) {
        $(".nav-link").toggleClass("d-none");
        $(".open-tab").toggleClass("rotate180")
    });

    $(".paymentPlan").on("click", function( ) {
        $(".paymentPlan.active").removeClass("active");
        $(this).addClass("active");
    });

    $("#account-profile-tab").on("click", function( ) {
        $("#accountProfile").removeClass("d-none");
        $("#billingDetails").addClass("d-none");
        $("#planSubscribe").addClass("d-none");
        $(".header-input-section").addClass("d-none");
    });

    $("#billing-details-tab").on("click", function( ) {
        $("#accountProfile").addClass("d-none");
        $("#billingDetails").removeClass("d-none");
        $("#planSubscribe").addClass("d-none");
        $(".header-input-section").addClass("d-none");
    });

    $("#payment-plans-tab").on("click", function( ) {
        $("#accountProfile").addClass("d-none");
        $("#billingDetails").addClass("d-none");
        $("#planSubscribe").removeClass("d-none");
        $(".header-input-section").addClass("d-none");
    });

    $("#payment-method-tab").on("click", function( ) {
        $("#accountProfile").addClass("d-none");
        $("#billingDetails").addClass("d-none");
        $("#planSubscribe").removeClass("d-none");
        $(".header-input-section").addClass("d-none");
    });

    $(".profileMenu--block").on("click", function( ) {
        $(".profileMenu--content").css("display", "none");
        $(".profileMenu--block--content").css("display", "block");
    });
    $(".back-icon").on("click", function( ) {
        $(".profileMenu--block--content").css("display", "none");
        $(".profileMenu--content").css("display", "block");
    });

});

$(document).ready(function(){
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#imageResult')
                    .attr('src', e.target.result);
            };
            reader.readAsDataURL(input.files[0]);
        }
    }

    $(function () {
        $('#upload').on('change', function () {
            readURL(input);
        });
    });

    /*==========================================
              SHOW UPLOADED IMAGE NAME
    * ========================================== */
    var input = document.getElementById( 'upload' );
    var infoArea = document.getElementById( 'upload-label' );

    input.addEventListener( 'change', showFileName );
    function showFileName( event ) {
        var input = event.srcElement;
        var fileName = input.files[0].name;
        infoArea.textContent = 'File name: ' + fileName;
    }
});
