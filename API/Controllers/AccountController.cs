using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using MongoDB.Bson;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Reflection.Metadata;
using Microsoft.AspNetCore.Authorization;
using Application.Account;
using Application.Account.Dtos.Response;
using Application.Account.Dtos.Request;
using Application.Account.Services;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AccountController : BaseApiController
    {
        private readonly IMongoCollection<GetUserResponse> _usersCollection;

        // public AccountController(MongoDbContext context)
        // {
        //     _usersCollection = context.GetCollection<GetUserResponse>("Users");
        // }

        // Create a new user
        [HttpPost]
        public async Task<IActionResult> CreateUser([FromBody] UserCreateDto createUser)
        {
            try
            {
                return HandleResult(await Mediator.Send(new CreateUserHandler.Command { CreateUser = createUser }));
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error: {ex.Message}");
                throw;
            }

        }

        // Get all users
        [HttpGet]
        public async Task<ActionResult<List<GetUserResponse>>> Get()
        {
            var users = await _usersCollection.Find(new BsonDocument()).ToListAsync();
            return Ok(users);
        }

        // Get a user by ID
        [HttpGet("{id}")]
        public async Task<ActionResult<GetUserResponse>> GetById(string id)
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
        public async Task<IActionResult> Update(string id, GetUserResponse updatedUser)
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

 
}