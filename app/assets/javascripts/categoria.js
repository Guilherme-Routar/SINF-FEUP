botao_load = '<button class="btn btn-lg btn-warning"><span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span> A carregar...</button>';


var base_url_primavera = 'http://localhost:49822/api';
var url_produto = 'http://localhost:3000/product/';
var artigos = [];
var is_subcategoria = false;


$(document).ready(function () {

	$('#titulo-categoria').html(botao_load);

	var id_categoria = $("#titulo-categoria").attr('data-id-categoria');
    console.log("ID CATEGORIA : " + id_categoria);
	var url_categoria = base_url_primavera + '/categorias/'+id_categoria;

	/*var id_subcategoria = null;
	var url_subcategoria = null;
	var subcategoria = $("#titulo-subcategoria");
	if(subcategoria.length){
		is_subcategoria = true;
		id_subcategoria = subcategoria.attr('data-id-subcategoria');
		url_subcategoria = base_url_primavera + '/categorias/'+id_categoria+'/subcategoria/' + id_subcategoria;
	}*/

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
            console.log(desc_categoria);
            $("#titulo-categoria").html(desc_categoria);
            getProdutosCategoria(id_categoria, null);
        }
    })
});

function getProdutosCategoria(id_cat, id_subcat){
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
            //console.log(data);
            var artigos_temp = data;
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
