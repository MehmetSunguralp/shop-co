using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using MongoDB.Bson;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AccountController : ControllerBase
    {
        private readonly IMongoCollection<User> _usersCollection;

        public AccountController(MongoDbContext context)
        {
            _usersCollection = context.GetCollection<User>("Users");
        }

        // Create a new user
        // [HttpPost]
        // public async Task<IActionResult> CreateUser(CreateUser createUser)
        // {
        //     var userResulut = await 
        // }

        // Get all users
        [HttpGet]
        public async Task<ActionResult<List<User>>> Get()
        {
            var users = await _usersCollection.Find(new BsonDocument()).ToListAsync();
            return Ok(users);
        }

        // Get a user by ID
        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetById(string id)
        {
            var user = await _usersCollection.Find(u => u.Id == id).FirstOrDefaultAsync();
            if (user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }

        // Update a user by ID
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(string id, User updatedUser)
        {
            var result = await _usersCollection.ReplaceOneAsync(u => u.Id == id, updatedUser);
            if (result.MatchedCount == 0)
            {
                return NotFound();
            }
            return NoContent();
        }

        // Delete a user by ID
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            var result = await _usersCollection.DeleteOneAsync(u => u.Id == id);
            if (result.DeletedCount == 0)
            {
                return NotFound();
            }
            return NoContent();
        }
    }

    // User model
    public class User
    {
        public string Id { get; set; } = ObjectId.GenerateNewId().ToString();
        public string Username { get; set; }
        public string Email { get; set; }
        public string Password { get; set; } // Not secure, consider hashing passwords in a real application
    }

    public class CreateUser
    {
        public string Username { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
    }

    // Mock MongoDbContext for demonstration purposes
    public class MongoDbContext
    {
        private readonly IMongoDatabase _database;

        public MongoDbContext(string connectionString, string databaseName)
        {
            var client = new MongoClient(connectionString);
            _database = client.GetDatabase(databaseName);
        }

        public IMongoCollection<T> GetCollection<T>(string name)
        {
            return _database.GetCollection<T>(name);
        }
    }
}
