using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace FirstREST.Controllers
{
    public class LivrosRelacionadosController : ApiController
    {
        public IEnumerable<Lib_Primavera.Model.Artigo> Get() //arg: String id
        {
            return Lib_Primavera.PriIntegration.LivrosRelacionados("A0001"); //arg id
        }
    }
}
