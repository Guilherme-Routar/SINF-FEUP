using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FirstREST.Lib_Primavera.Model
{
    public class Artigo
    {
        public string CodigoArtigo
        {
            get;
            set;
        }
        public string NomeArtigo
        {
            get;
            set;
        }
        public string ClassificacaoArtigo
        {
            get;
            set;
        }
        public string AutorArtigo
        {
            get;
            set;
        }
        public string EdicaoArtigo
        {
            get;
            set;
        }

        public string Categoria
        {
            get;
            set;
        }

        public string SubCategoria
        {
            get;
            set;
        }
        public string DescricaoArtigo
        {
            get;
            set;
        }
        public string PrecoNovo
        {
            get;
            set;
        }
        public string PrecoUsado
        {
            get;
            set;
        }

        public double PVP
        {
            get;
            set;
        }

        public string Moeda
        {
            get;
            set;
        }

        public string UnidadeBase
        {
            get;
            set;
        }

        public string Marca
        {
            get;
            set;
        }

        public float IVA
        {
            get;
            set;
        }

    }
}