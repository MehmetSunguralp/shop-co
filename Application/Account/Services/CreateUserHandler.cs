using System;
using Domain.Account;
using Application.Account.Dtos.Request;
using MongoDB.Driver;
using MongoDB.Bson;

namespace Application.Account.Services;

public class CreateUserHandler
{
    private readonly IMongoCollection<User> _usersCollection;
    public async Task<User> CreateUserHandle(UserCreateDto request)
    {
        var user = new User
        {
            Email = request.Email,
            PasswordHash = request.Password,
            PhoneNumber = request.PhoneNumber,
            CreatedAt = DateTime.UtcNow,
            UpdatedAt = DateTime.UtcNow,
            IsActive = true,
            Role = "User"
        };
        await _usersCollection.InsertOneAsync(user);
        return user;
    }

}
