using System;

namespace Infrastructure.Database;

public class MongoDbSettings
{
    public string Host { get; set; }
    public int Port { get; set; }
    public string Database { get; set; }
    public string ConnectionString
    {
        get
        {
            return $"mongodb://{Host}:{Port}";
        }
    }
}
