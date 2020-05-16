$(function() {
    

    //Featured Work Shuffle

    $(".featured .btn").on("click", function() {
        $(this)
            .addClass("active")
            .siblings()
            .removeClass("active");

            if ($(this).data("class") === ".all") {
                $(".featured  .img-item ").show();
                $(".featured  .img-item ").css("opacity", "1");
            } else {
                $(".featured  .img-item ").css("opacity", ".2");

                $($(this).data("class")).css("opacity", "1");
                $(".featured  .img-item ").show();
            }
        
    });

    
});



   