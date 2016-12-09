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
            console.log("DESC ARTIGO : " + desc_categoria);
            console.log(categoria_temp);
            $("#titulo-categoria").html(desc_categoria);
            getProdutosCategoria(id_categoria);
        }
    })
});

/*getProductContainer2 = function(product, img_path) {
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
};*/

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
