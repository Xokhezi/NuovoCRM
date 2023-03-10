using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NuovoCRM.Models
{
    public class Partner
    {
        public int Id { get; set; }
        public string   Name { get; set; }  
        public string Surname { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Position { get; set; }
        public string Adress { get; set; }
        public string Country { get; set; }
        public int? UserId { get; set; }
        public int Level { get; set; }
        public int LeadId { get; set; }        
        public int TeamId { get; set; }
        public int DiscountPrimary { get; set; }
        public int DiscountSecundary { get; set; }
    }
}