using System;
using Domain.Account;
using Application.Account.Dtos.Request;
using Application.Account.Validators;
using MongoDB.Driver;
using MediatR;
using FluentValidation;
using Application.Core;

namespace Application.Account.Services;

public class CreateUserHandler
{
    public class Command : IRequest<Result<Unit>>
    {
        public required UserCreateDto CreateUser { get; set; }
    }

    // Set command validation rules
    public class CommandValidator : AbstractValidator<Command>
    {
        public CommandValidator()
        {
            RuleFor(x => x.CreateUser).SetValidator(new AccountCreateValidator());
        }
    }

    public class Handler : IRequestHandler<Command, Result<Unit>>
    {
        private readonly IMongoCollection<User> _usersCollection;
        public Handler(IMongoCollection<User> usersCollection)
        {
            _usersCollection = usersCollection;
        }

        public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
        {
            try
            {
                var user = new User
                {
                    Email = request.CreateUser.Email,
                    PasswordHash = request.CreateUser.Password,
                    PhoneNumber = request.CreateUser.PhoneNumber,
                    CreatedAt = DateTime.UtcNow,
                    UpdatedAt = DateTime.UtcNow,
                    IsActive = true,
                    Role = "User"
                };

                await _usersCollection.InsertOneAsync(user, cancellationToken: cancellationToken);

                return Result<Unit>.Success(Unit.Value); 
            }
            catch (Exception ex)
            {
                return Result<Unit>.Failure($"Error creating user: {ex.Message}"); 
            }
        }
    }
    
       
        
    
}
