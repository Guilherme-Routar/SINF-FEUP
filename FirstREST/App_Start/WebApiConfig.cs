using System;
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

            //categoria
            config.Routes.MapHttpRoute(
                name: "GetSubCategoriaDeCategoria",
                routeTemplate: "api/categorias/{id}/subcategorias",
                defaults: new { controller = "Categorias", action = "Subcategorias" }
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
