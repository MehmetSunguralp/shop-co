using System;
using FluentValidation;
using Application.Account.Dtos.Request;
using Application.Account.Services;

namespace Application.Account.Validators;

public class AccountCreateValidator : AbstractValidator<UserCreateDto>
{
    public AccountCreateValidator()
    {
        RuleFor(x => x.Email).NotEmpty().WithMessage("Email is required");
        RuleFor(x => x.Email).EmailAddress().WithMessage("Email is not valid");
        RuleFor(x => x.Password).NotEmpty().WithMessage("Password is required");
        RuleFor(x => x.Password).MinimumLength(6).WithMessage("Password must be at least 6 characters");
    }
}
