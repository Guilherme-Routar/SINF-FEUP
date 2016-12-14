﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Script.Serialization;
using FirstREST.IP;
using FirstREST.Lib_Primavera.Model;

namespace FirstREST.Controllers
{
    public class AutorController : ApiController
    {
        public IEnumerable<Lib_Primavera.Model.Autor> Get()
        {

            HttpContext.Current.Response.AddHeader("Access-Control-Allow-Origin", LocalhostIP.localhostIP());
            return Lib_Primavera.PriIntegration.ListaAutores();
        }


        // GET api/artigo/5    
        /*public Autor Get(string id)
        {
            Lib_Primavera.Model.Autor autor = Lib_Primavera.PriIntegration.GetAutor(id);
            
                HttpContext.Current.Response.AddHeader("Access-Control-Allow-Origin", LocalhostIP.localhostIP());
                return autor;
            
        }*/
    }
}
