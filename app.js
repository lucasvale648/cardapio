// Inicializar o carrossel com Slick Carousel
$(document).ready(function () {
    $('#carrossel').slick({
        infinite: false,
    });
});

$(".search").on("input", function() {
    var searchTerm = $(this).val().toLowerCase();

    // Itera sobre os slides do Slick Carousel
    $("#carrossel img").each(function(index) {
        var imgId = $(this).attr("id").toLowerCase();

        // Verifica se o ID da imagem contém o termo de pesquisa
        if (imgId.includes(searchTerm)) {
            // Move o slide para a frente
            $("#carrossel").slick('slickGoTo', index, true);
        }
    });
});