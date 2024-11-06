using MongoDB.Driver;

namespace shop_co_api.API.Exstensions
{
    public static class MongoDbExtension
    {
        public static IServiceCollection AddMongoDatabase(this IServiceCollection services, IConfiguration configuration)
        {
            var mongoClient = new MongoClient(configuration.GetConnectionString("MongoDb"));
            var mongoDatabase = mongoClient.GetDatabase(configuration["DatabaseName"]);
            services.AddScoped(provider => mongoDatabase);
            return services;
        }
    }
}
