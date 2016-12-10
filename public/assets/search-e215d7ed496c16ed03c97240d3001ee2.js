botao_load = '<button class="btn btn-lg btn-warning"><span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span> A carregar...</button>';

getProductContainer2 = function(product, img_path) {
    if (img_path === null) {
        img_path = 'http://placehold.it/400x250/000/fff';
    }
    //console.log(product);
    return '<div class="item  col-xs-12 col-sm-4 col-lg-4">' +
        ' <div class="thumbnail"> ' +
        '<img id="img-artigo-' + product.CodArtigo + '" class="group list-group-image" src="' + img_path + '" alt="" /> ' +
        '<div class="caption"> <a href="/product/' + product.CodArtigo + '">' +
        '<h4 class="group inner list-group-item-heading one-line-elipsis">' + product.DescArtigo + '</h4>' +
        '</a> ' +
        '<div class="container-fluid"> ' +
        '<div class="row"> ' +
        '<div class="col-xs-12 col-md-6"> ' +
        '<p class="lead">' + (product.PVP * (product.IVA / 100.0 + 1)).toFixed(2) +  product.Moeda +   '</p> </div> ' +
        '<div class="col-xs-12 col-md-6"> <a class="add-to-cart-btn btn btn-success" data-id-artigo="' + product.CodArtigo + '">' +
        '<span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span> Adicionar</a> </div> </div> </div> </div> </div> </div>';
};
var base_url_primavera = 'http://localhost:49822/api';
var url_produto = 'http://localhost:3000/product/';
$(document).ready(function () {

    var search_query = $("#search-input").val();

    if(search_query){
        var url_search = base_url_primavera + '/pesquisa/'+search_query;
        console.log(url_search);
        $('#artigos-container').html(botao_load);
        $.ajax({
            type: 'GET',
            url: url_search,
            error: function(err) {
                console.log("error in search.");
                console.log(err);
            },
            dataType: 'json',
            success: function(data) {
                //console.log(data);
                var result = $.parseJSON(data);
                $('#artigos-container').html('');
                if (result.length == 0){
                    $('#artigos-container').html('A pesquisa não retornou quaisquer resultados...');
                }
                else
                    for(var  i in result){
                        var prod = getProductContainer2(result[i], null);
                        $('#artigos-container').append(prod);
                    }
            }
        });
    }
    else $('#artigos-container').html('Para pesquisar utilize o campo na barra superior.');


});
