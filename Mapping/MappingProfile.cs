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
            CreateMap<Product, ProductResource>();
            CreateMap<Category, CategoryResource>();
            CreateMap<Partner, PartnerResource>();
            CreateMap<User, UserResource>();
            CreateMap<Order, OrderResource>();
            
            

            //api resource to domain
            CreateMap<PartnerResource, Partner>();
            CreateMap<ProductResource, Product>();
            CreateMap<CategoryResource, Category>();
            CreateMap<UserResource, User>();
            CreateMap<OrderResource, Order>();
            
        }
    }
}