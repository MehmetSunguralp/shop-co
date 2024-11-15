using System;
using Domain.Account;
using Application.Account.Dtos.Request;

namespace Application.Core;

public class MappingProfiles: AutoMapper.Profile
{

    public MappingProfiles()
    {
        CreateMap<User, User>();
        CreateMap<UserCreateDto, User>();
    }

}
