using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Persistance;
using Infrastructure.Database;
public static class DependencyInjection
{
    public static IServiceCollection AddMongoDb(this IServiceCollection services, IConfiguration configuration)
    {
        var mongoSettings = new MongoDbSettings();
        configuration.GetSection("MongoDbSettings").Bind(mongoSettings);

        services.AddSingleton(mongoSettings);
        services.AddSingleton<MongoDbContext>(sp =>
            new MongoDbContext(mongoSettings.ConnectionString, mongoSettings.Database));

        return services;
    }
}
