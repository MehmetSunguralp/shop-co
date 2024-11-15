

using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using Persistance;


namespace API.Extensions
{
    public static class ApplicationServiceExtensions
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services,
            IConfiguration config)
        {
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "API", Version = "v1" });
                var securitySchema = new OpenApiSecurityScheme
                {
                    Description = "JWT Auth Bearer Scheme",
                    Name = "Authorization",
                    In = ParameterLocation.Header,
                    Type = SecuritySchemeType.Http,
                    Scheme = "Bearer",
                    Reference = new OpenApiReference
                    {
                        Type = ReferenceType.SecurityScheme,
                        Id = "Bearer"
                    }
                };

                c.AddSecurityDefinition("Bearer", securitySchema);
                var securityRequirement = new OpenApiSecurityRequirement { { securitySchema, new[] { "Bearer" } } };
                c.AddSecurityRequirement(securityRequirement);
            });
           

            services.AddCors(opt =>
{
                opt.AddPolicy("CorsPolicy", policy =>
                {
                    policy
                    .AllowAnyMethod()         // Tüm HTTP metodlarına izin ver
                    .AllowAnyHeader()         // Tüm HTTP başlıklarına izin ver
                    .AllowCredentials()       // Credential (kimlik doğrulama) bilgilerini göndermeye izin ver
                    .WithExposedHeaders("WWW-Authenticate", "Pagination") // Bu başlıkları expose et
                    .SetIsOriginAllowed(_ => true); // Tüm kökenlere (origins) izin ver

                    // İzin verilen kökenlerin listesi
                    policy.WithOrigins(
                        "http://localhost:3011",
                        "https://localhost:3011",
                        "http://172.23.4.16:88",
                        "https://172.23.4.16:88",
                        "http://172.23.4.16:89",
                        "https://172.23.4.16:89",
                        "http://172.23.4.16",
                        "https://172.23.4.16",
                        "http://172.18.240.28",
                        "https://172.18.240.28",
                        "http://172.18.240.28:85",
                        "https://172.18.240.28:85",
                        "http://172.18.240.28:86",
                        "https://172.18.240.28:86",
                        "http://api-preprod-nexus.birlesikoto.com",
                        "https://api-preprod-nexus.birlesikoto.com",
                        "http://preprod-nexus.birlesikoto.com",
                        "https://preprod-nexus.birlesikoto.com",
                        "http://api-nexus.birlesikoto.com",
                        "https://api-nexus.birlesikoto.com",
                        "http://nexus.birlesikoto.com",
                        "https://nexus.birlesikoto.com"
                    );
                });
            });


            services.AddHttpClient();
            services.AddMemoryCache();
           
            services.AddSignalR();

            return services;
        }
    }
}