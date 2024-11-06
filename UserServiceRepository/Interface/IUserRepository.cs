using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UserServiceRepository.Model;

namespace UserServiceRepository.Interface
{
    internal interface IUserRepository
    {
        Task<User> CreateAsync(User model);
        Task UpdateAsync(string id, User model);
        Task DeleteAsync(string id);
        Task<User> GetByIdAsync(string id);
        Task<IEnumerable<User>> GetAllAsync(int offset, int fetch);
    }
}
