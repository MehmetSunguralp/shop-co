using UserServiceRepository;
using UserServiceRepository.Interface;

namespace shop_co_api.API.Exstensions
{
    public static class RepositoryExtension
    {
        public static IServiceCollection AddRepository(this IServiceCollection services)
        {
            services.AddScoped<IUserRepository, UserRepository>();
            return services;
        }
    }
}
