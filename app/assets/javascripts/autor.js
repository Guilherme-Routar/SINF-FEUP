botao_load = '<button class="btn btn-lg btn-warning"><span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span> A carregar...</button>';


var base_url_primavera = 'http://localhost:49822/api';
var url_produto = 'http://localhost:3000/product/';
var artigos = [];
var is_subcategoria = false;


$(document).ready(function () {

    $('#artigos-container').html(botao_load);

    var id_autor = $("#titulo-autor").attr('data-id-autor');
    console.log("ID CATEGORIA : " + id_autor);
    var url_autor = base_url_primavera + '/Autor/'+id_autor;


    $.ajax({
        type: 'GET',
        url: url_autor,
        error: function (err) {
            console.log("error fetching category");
            $("#titulo-autor").html('erro');
        },
        dataType: 'json',
        success: function (data) {
            console.log("AQUI");
            var autor_temp = data;
            console.log(autor_temp);
            var desc_autor = autor_temp.DescAutor;
            console.log("DESC ARTIGO : " + desc_autor);
            console.log(autor_temp);
            $("#titulo-autor").html(desc_autor);
            getProdutosAutor(id_autor);
        }
    })
});
function getProdutosAutor(id_autor){
    var url_prods_autor = null;

    url_prods_autor = base_url_primavera + '/artigos/autor/'+id_autor;

    $.ajax({
        url: url_prods_autor,
        error: function(err) {
            console.log("error fetching products of authors");
            console.log(err);
        },
        dataType: 'json',
        success: function(data) {
            //console.log("success.");
            var artigos_temp = $.parseJSON(data);
            $('#artigos-container').html('');
            if(artigos_temp.length == 0)
                $('#artigos-container').append('<i>Não existem artigos deste autor...</i>');
            else
                for(var  i in artigos_temp){
                    artigos[artigos_temp[i].CodArtigo] = artigos_temp[i];
                    var top_element = getProductContainer2(artigos_temp[i], null);//utilities.coffee
                    $('#artigos-container').append(top_element);
                    //getImageFromProduct(artigos_temp[i].CodArtigo);
                }
        },
        type: 'POST'
    });
}
