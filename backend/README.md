# User Registration Endpoint

## Endpoint Details

- **URL:** `/users/register`
- **Method:** POST
- **Description:** Register a new user in the system

## Request Payload

The request body must include the following fields:

### Required Fields

| Field                | Type   | Validation Rules                                                  |
| -------------------- | ------ | ----------------------------------------------------------------- |
| `email`              | String | - Must be a valid email address<br>- Minimum length: 5 characters |
| `fullName.firstName` | String | - Required<br>- Minimum length: 3 characters                      |
| `fullName.lastName`  | String | - Optional<br>- Minimum length: 3 characters (if provided)        |
| `password`           | String | - Required<br>- Minimum length: 6 characters                      |

## Request Example

```json
{
  "email": "user@example.com",
  "fullName": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "password": "securePassword123"
}
```

## Response

### Success Response

- **Status Code:** 200 OK
- **Response Body:**

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "uniqueMongoDBUserID",
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "user@example.com",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
}
```

### Error Response

- **Status Code:** 400 Bad Request
- **Possible Error Scenarios:**
  1. Validation Errors (Invalid email, short name, etc.)
  ```json
  {
    "errors": [
      {
        "msg": "Invalid Email",
        "param": "email",
        "location": "body"
      },
      {
        "msg": "First name must be at least 3 characters",
        "param": "fullName.firstName",
        "location": "body"
      }
    ]
  }
  ```

## Validation Rules

- Email must be a valid email format
- First name must be at least 3 characters long
- Password must be at least 6 characters long

## Notes

- A JWT token is generated upon successful registration
- The user's password is hashed before storing in the database
- The endpoint returns the created user object along with the authentication token

## Security Considerations

- Passwords are hashed using bcrypt with 10 salt rounds
- JWT token is signed with a secret key for authentication
