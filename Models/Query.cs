using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NuovoCRM.Models
{
    public class Query
    {
        public int? PageSize { get; set; }
        public int? PageNumber { get; set; }
        public int? Year { get; set; }
    }
}