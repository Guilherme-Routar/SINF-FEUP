﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace FirstREST
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

<<<<<<< HEAD
=======
            config.Routes.MapHttpRoute(
                name: "DefaultApiAction",
                routeTemplate: "api/{controller}/{action}/{id}/{categoria}",
                defaults: new { categoria = RouteParameter.Optional }
            );

>>>>>>> 44533ecea209aaf0daccb5ddda5b7394adcfa68a
            //encomendas
            config.Routes.MapHttpRoute(
                name: "GetEncomendasDoCliente",
                routeTemplate: "api/clientes/{id}/{encomendas}",
                defaults: new { controller = "Clientes" }
            );

            config.Routes.MapHttpRoute(
                name: "GetEncomendaDoCliente",
                routeTemplate: "api/clientes/{idCliente}/encomenda/{idEncomenda}",
                defaults: new { controller = "Clientes", action = "GetEncomenda" }
            );

            //doc venda
            config.Routes.MapHttpRoute(
                name: "GetEncomendasMes",
<<<<<<< HEAD
                routeTemplate: "api/docvenda/{ano}/{mes}",
=======
                routeTemplate: "api/docvenda/{mes}/{ano}",
>>>>>>> 44533ecea209aaf0daccb5ddda5b7394adcfa68a
                defaults: new { controller = "DocVenda", action = "GetEncomendasMes" }
            );

            //categoria
            config.Routes.MapHttpRoute(
                name: "GetSubCategoriaDeCategoria",
                routeTemplate: "api/categorias/{id}/subcategorias",
                defaults: new { controller = "Categorias", action = "Subcategorias" }
            );

            // carrinho
            config.Routes.MapHttpRoute(
                name: "GetDetalheArtigosCarrinho",
                routeTemplate: "api/carrinho",
                defaults: new { controller = "Carrinho", action = "GetDetalheArtigosCarrinho" }
            );

            config.Routes.MapHttpRoute(
                name: "GetSubCategoria",
                routeTemplate: "api/categorias/{id2}/subcategoria/{id}",
                defaults: new { controller = "Categorias", action = "Subcategoria" }
            );

            config.Routes.MapHttpRoute(
                name: "GetCategoria",
                routeTemplate: "api/categorias/{id}/",
                defaults: new { controller = "Categorias", action = "Get" }
            );

            config.Routes.MapHttpRoute(
                name: "GetArtigosSubCategoria",
                routeTemplate: "api/artigos/categoria/{id}/subcategoria/{id2}",
                defaults: new { controller = "Artigos", action = "Subcategoria" }
            );

            config.Routes.MapHttpRoute(
                name: "GetArtigosCategoria",
                routeTemplate: "api/artigos/categoria/{id}",
                defaults: new { controller = "Artigos", action = "Categoria" }
            );
            //fim categoria

            // Uncomment the following line of code to enable query support for actions with an IQueryable or IQueryable<T> return type.
            // To avoid processing unexpected or malicious queries, use the validation settings on QueryableAttribute to validate incoming queries.
            // For more information, visit http://go.microsoft.com/fwlink/?LinkId=279712.
            //config.EnableQuerySupport();

            // To disable tracing in your application, please comment out or remove the following line of code
            // For more information, refer to: http://www.asp.net/web-api
           // config.EnableSystemDiagnosticsTracing();
        }
    }
}
