using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Domain.Account
{
    public class User
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        [BsonElement("username")]
        public string Username { get; set; }
        [BsonElement("email")]
        public string Email { get; set; }
        [BsonElement("password")]
        public string PasswordHash { get; set; }
        [BsonElement("first_name")]
        public string ?FirstName { get; set; }
        [BsonElement("last_name")]
        public string ?LastName { get; set; }
        [BsonElement("phone_number")]
        public string ?PhoneNumber { get; set; }
        [BsonElement("address")]
        public string ?Address { get; set; }
        [BsonElement("city")]
        public string ?City { get; set; }
        [BsonElement("state")]
        public string ?Country { get; set; }
        [BsonElement("postal_code")]
        public string ?PostalCode { get; set; }
        [BsonElement("date_of_birth")]
        public DateTime ?DateOfBirth { get; set; }
        [BsonElement("created_at")]
        public DateTime CreatedAt { get; set; }
        [BsonElement("updated_at")]
        public DateTime UpdatedAt { get; set; }
        [BsonElement("is_active")]
        public bool IsActive { get; set; }
        [BsonElement("role")]
        public string Role { get; set; }
        
    }
}
