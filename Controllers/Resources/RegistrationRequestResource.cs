using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NuovoCRM.Controllers.Resources
{
    public class RegistrationRequestResource
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Password { get; set; }
        public string Position { get; set; }
        public string Adress { get; set; }
        public string Country { get; set; }
        public int LeadId { get; set; }        
        public string LeadSurname { get; set; }
    }
}