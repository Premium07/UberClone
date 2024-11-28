# User Authentication Endpoints

(Previous Registration and Login sections remain the same)

## Profile Endpoint
### Details
- **URL:** `/users/profile`
- **Method:** GET
- **Description:** Retrieve the authenticated user's profile information
- **Authentication Required:** Yes (Bearer Token or Cookie Token)

### Request Headers
| Header | Required | Description |
|--------|----------|-------------|
| `Authorization` | Optional | Bearer token in format `Bearer your_token_here` |
| `Cookie` | Optional | `token=your_token_here` |

### Success Response
- **Status Code:** 200 OK
- **Response Body:**
```json
{
  "_id": "uniqueMongoDBUserID",
  "fullName": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "email": "user@example.com",
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z"
}
```

### Error Responses
1. **Unauthorized**
   - **Status Code:** 401 Unauthorized
   ```json
   {
     "message": "Unauthorized"
   }
   ```

## Logout Endpoint
### Details
- **URL:** `/users/logout`
- **Method:** GET
- **Description:** Logout the authenticated user and invalidate the current token
- **Authentication Required:** Yes (Bearer Token or Cookie Token)

### Request Headers
| Header | Required | Description |
|--------|----------|-------------|
| `Authorization` | Optional | Bearer token in format `Bearer your_token_here` |
| `Cookie` | Optional | `token=your_token_here` |

### Success Response
- **Status Code:** 200 OK
- **Response Body:**
```json
{
  "message": "User Logged out Successfully"
}
```

### Error Responses
1. **Unauthorized**
   - **Status Code:** 401 Unauthorized
   ```json
   {
     "message": "Unauthorized"
   }
   ```

## Authentication Mechanism
- Tokens are generated using JWT (JSON Web Tokens)
- Tokens can be sent via:
  1. Authorization header with 'Bearer ' prefix
  2. HTTP-only cookie named 'token'
- Tokens are automatically blacklisted on logout
- Blacklisted tokens are valid for 24 hours before automatic deletion

## Security Considerations
- Tokens are signed with a secret key
- Sensitive user information (password) is never returned
- Tokens can be invalidated on logout
- Uses HTTP-only cookies for additional security
