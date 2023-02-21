using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NuovoCRM.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string ProductCode { get; set; }
        public decimal Prize { get; set; }
        public int Discount { get; set; }
        public int DiscountStep { get; set; }
        public string Url { get; set; }
    }
}