using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using NuovoCRM.Controllers.Resources;
using NuovoCRM.Models;

namespace NuovoCRM.Mapping
{
    public class MappingProfile:Profile
    {
        public MappingProfile()
        {
            //mapping from domain to API resources
            CreateMap<Partner, PartnerResource>();
            CreateMap<Product, ProductResource>();
            

            //api resource to domain
            CreateMap<PartnerResource, Partner>();
            CreateMap<ProductResource, Product>();
            
        }
    }
}