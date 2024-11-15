using System;
using Domain.Account;
using Application.Core;
using Application.Account.Dtos.Request;
using MediatR;

namespace Application.Account.Interfaces;

public interface IAccountServive
{
    void Map(UserCreateDto dto, User entity);
    Task<Result<Unit>> CreateUser(UserCreateDto dto);
}



