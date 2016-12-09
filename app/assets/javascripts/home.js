botao_loadTopArtigos = '<button class="btn btn-lg btn-warning"><span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span> A carregar...</button>';
botao_loadCategorias = '<button class="btn btn-lg btn-warning"><span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span> A carregar...</button>';
botao_loadTopAutores = '<button class="btn btn-lg btn-warning"><span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span> A carregar...</button>';

var base_url_primavera = 'http://localhost:49822/api';
var url_produto = 'http://localhost:3000/product/';

$(document).ready(function () {


    //fetch do Top
    var url_top = base_url_primavera + '/TopLivros';
    $('#artigos-container').html(botao_loadTopArtigos);
    $.ajax({
        url: url_top,
        error: function(err) {
            console.log("error fetching top.");
            console.log("ARTIGOS CONTAINER ERROR");
            console.log(err);
        },
        dataType: 'json',
        success: function(data) {

            $('#artigos-container').html('');
            for(var  i in data){

                top[i] = $.parseJSON(JSON.stringify(data[i]));
                var cod = top[i].CodArtigo;
                var desc = top[i].DescArtigo;
                var pvp = parseInt(top[i].PVP);
                var iva = parseInt(top[i].IVA);
                var moeda = top[i].Moeda;
                var preco_iva = pvp * (1 - (iva/100));



                var top_element =
                    '<div class="item  col-xs-12 col-sm-4 col-lg-4"> ' +
                    '<div class="thumbnail"> <img id="img-artigo-'  + '" class="group list-group-image" src="' + '" alt="" /> ' +
                    '<div class="caption"> <a href="/product/' + cod + '">' +
                    '<h4 class="group inner list-group-item-heading one-line-elipsis">' + desc + '</h4></a> ' +
                    '<div class="container-fluid"> <div class="row"> <div class="col-xs-12 col-md-6"> <p class="lead">' + preco_iva + '  ' + moeda + ' </p> </div> ' +
                    '<div class="col-xs-12 col-md-6"> <a class="add-to-cart-btn btn btn-success" data-id-artigo="' + '">' +
                    '<span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span> Add</a> ' +
                    '</div> </div> </div> </div> </div> </div>';
                $('#artigos-container').append(top_element);
            }
        },
        type: 'GET'
    });


    var url_categorias = base_url_primavera + '/categorias';
    console.log(url_categorias);
    $('#categorias-container').html(botao_loadCategorias);
    $.ajax({
        url: url_categorias,
        error: function(err) {
            console.log("error fetching top.");
            console.log("ola");
            console.log(err);
        },
        dataType: 'json',
        success: function(data) {

            $('#categorias-container').html('');
            for(var  i in data){

                top[i] = $.parseJSON(JSON.stringify(data[i]));
                cod = top[i].CodCategoria;
                console.log("COD" + top[i].CodCategoria);
                desc = top[i].DescCategoria;
                numExemplares ="Numero de Exemplares" + top[i].numExemplaresCategoria;

                var top_element = '<div class="item  col-xs-12 col-sm-4 col-lg-4"> ' +
                    '<div class="thumbnail"> <img id="img-artigo-'  + '" class="group list-group-image" src="' + '" alt="" /> ' +
                    '<div class="caption"> <a href="/categoria/' +  cod + '">' +
                    '<h4 class="group inner list-group-item-heading one-line-elipsis">' + desc + '</h4></a> ' +
                    '<div class="container-fluid"> ' +
                    '<div class="row"> ' +
                    ' </div> </div> </div> </div> </div>';
                $('#categorias-container').append(top_element);
            }
        },
        type: 'GET'
    });


    var url_topAutors = base_url_primavera + '/TopAutores';
    $('#topautores-container').html(botao_loadTopAutores);
    $.ajax({
        url2: url_topAutors,
        error: function(err) {
            console.log("error fetching top.");
            console.log(err);
        },
        dataType: 'json',
        success: function(data) {

            $('#topautores-container').html('');
            for(var  i in data){

                top[i] = $.parseJSON(JSON.stringify(data[i]));

                console.log("DESC : " + top[i].DescArtigo);

                var top_element =
                    '<div class="item  col-xs-12 col-sm-4 col-lg-4"> ' +
                        '<div class="thumbnail"> <img id="img-artigo-'  + '" class="group list-group-image" src="' + '" alt="" /> ' +
                            '<div class="caption"> <a href="/product/' + '">' +
                    '           <h4 class="group inner list-group-item-heading one-line-elipsis">' + top[i].DescArtigo + '</h4>' +
                    '               </a> ' +
                                 '<div class="container-fluid"> <div class="row"> ' +
                                    '<div class="col-xs-12 col-md-6"> <p class="lead">' + (top[i].PVP * (top[i].IVA / 100.0 + 1)).toFixed(2) + '€</p> </div> ' +
                                        '<div class="col-xs-12 col-md-6"> <a class="add-to-cart-btn btn btn-success" data-id-artigo="' + '"><span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span> Add</a> ' +
                                        '</div> ' +
                                    '</div> ' +
                                '</div> ' +
                            '</div> ' +
                        '</div> ' +
                    '</div>';
                $('#topautores-container').append(top_element);
            }

        },
        type: 'GET'
    });


});