using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using NuovoCRM.Models;

namespace NuovoCRM.Controllers.Resources
{
    public class PartnerResource
    {
        public int Id { get; set; }
        public string   Name { get; set; }  
        public string Surname { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Position { get; set; }
        public string Adress { get; set; }
        public int Level { get; set; }
        public int LeadId { get; set; }       
    }
}