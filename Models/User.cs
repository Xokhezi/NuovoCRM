using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NuovoCRM.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string FullName { get; set; }
        public string Password { get; set; }
        public string Role { get; set; }
        public string Country { get; set; }
        public string Adress { get; set; }
        public string Phone { get; set; }
        public string DiscountCode { get; set; }
        public int DiscountPrimary { get; set; }
        public int DiscountSecondary { get; set; }
    }
}