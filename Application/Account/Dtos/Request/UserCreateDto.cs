using System;

namespace Application.Account.Dtos.Request;

public class UserCreateDto
{
    public required string Email { get; set; }
    public required string Password { get; set; }
    public required string PhoneNumber { get; set; }
   
}
