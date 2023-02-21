using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NuovoCRM.Controllers.Resources
{
    public class OrderResource
    {
        public int Id { get; set; }
        public DateTime PlacedOn{ get; set; }
        public string Email { get; set; }
        public string Adress { get; set; }
        public string Phone { get; set; }
        public string FullName { get; set; }
        public string OrderList { get; set; }
        public int TotalPrize { get; set; }
        public string Status { get; set; }
        public int OrderNumber { get; set; }
    }
}