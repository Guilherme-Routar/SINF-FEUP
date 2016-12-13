using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using FirstREST.Lib_Primavera.Model;
using FirstREST.IP;
using System.Web.Script.Serialization;

namespace FirstREST.Controllers
{
    public class EncomendaDoClienteController : ApiController
    {
        public Lib_Primavera.Model.DocVenda Get(string id)
        {
            HttpContext.Current.Response.AddHeader("Access-Control-Allow-Origin", LocalhostIP.localhostIP());
            return Lib_Primavera.PriIntegration.Encomenda_Get(id);
        }
    }
}