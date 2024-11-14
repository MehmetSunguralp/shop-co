using System;

namespace Application.Account.Dtos.Request;

public class UserCreateDto
{
    public string Email { get; set; }
    public string Password { get; set; }
    public string PhoneNumber { get; set; }
   
}
