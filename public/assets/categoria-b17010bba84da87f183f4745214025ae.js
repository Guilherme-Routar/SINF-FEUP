botao_load = '<button class="btn btn-lg btn-warning"><span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span> A carregar...</button>';


var base_url_primavera = 'http://localhost:49822/api';
var url_produto = 'http://localhost:3000/product/';
var artigos = [];
var is_subcategoria = false;


$(document).ready(function () {

    $('#artigos-container').html(botao_load);

	var id_categoria = $("#titulo-categoria").attr('data-id-categoria');
    console.log("ID CATEGORIA : " + id_categoria);
	var url_categoria = base_url_primavera + '/categorias/'+id_categoria;


    $.ajax({
        type: 'GET',
        url: url_categoria,
        error: function (err) {
            console.log("error fetching category");
            $("#titulo-categoria").html('erro');
        },
        dataType: 'json',
        success: function (data) {
            console.log(data);
            var categoria_temp = data;
            var desc_categoria = categoria_temp.DescCategoria;
            console.log("DESC ARTIGO : " + desc_categoria);
            console.log(categoria_temp);
            $("#titulo-categoria").html(desc_categoria);
            getProdutosCategoria(id_categoria);
        }
    })
});


function getProdutosCategoria(id_cat){
    var url_prods_categoria = null;
    //if(is_subcategoria)
        //url_prods_categoria = base_url_primavera + '/artigos/categoria/'+id_cat+'/subcategoria/'+id_subcat;
        //else
    url_prods_categoria = base_url_primavera + '/artigos/categoria/'+id_cat;

    $.ajax({
        url: url_prods_categoria,
        error: function(err) {
            console.log("error fetching products of categorie");
            console.log(err);
        },
        dataType: 'json',
        success: function(data) {
            //console.log("success.");
            var artigos_temp = $.parseJSON(data);
            $('#artigos-container').html('');
            if(artigos_temp.length == 0)
                $('#artigos-container').append('<i>Não existem artigos nesta categoria...</i>');
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
;