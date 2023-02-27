using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NuovoCRM.Models
{
    public class Coupon
    {
        public int Id { get; set; }
        public string Code { get; set; }
        public int DiscountPrimary { get; set; }
        public int DiscountSecondary { get; set; }
    }
}