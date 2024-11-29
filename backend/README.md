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

# Captains Registration Endpoint

## Endpoint Details
- **URL**: `/captains/register`
- **Method**: `POST`
- **Description**: Register a new captain (driver) in the system

## Request Body

### Required Fields
| Field | Type | Validation Rules |
|-------|------|-----------------|
| `fullName.firstName` | String | - Minimum 3 characters long |
| `fullName.lastName` | String | - Optional |
| `email` | String | - Must be a valid email format |
| `password` | String | - Minimum 6 characters long |
| `vehicle.color` | String | - Minimum 3 characters long |
| `vehicle.plate` | String | - Minimum 3 characters long |
| `vehicle.capacity` | Number | - Minimum value of 1 |
| `vehicle.vehicleType` | String | - Must be one of: "car", "motorcycle", "auto" |

### Example Request Body
```json
{
  "fullName": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securePassword123",
  "vehicle": {
    "color": "Red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

## Validation Checks
The endpoint performs the following validations:
- Checks that all required fields are present
- Validates email format
- Ensures first name is at least 3 characters
- Ensures password is at least 6 characters
- Validates vehicle color and plate are at least 3 characters
- Checks vehicle capacity is at least 1
- Verifies vehicle type is one of the allowed types

## Response

### Successful Registration
- **Status Code**: `201 Created`
- **Response Body**:
  ```json
  {
    "token": "<authentication_token>",
    "captain": "<captain_object>"
  }
  ```

### Error Responses
1. **Validation Error**
   - **Status Code**: `400 Bad Request`
   - **Response Body**: 
     ```json
     {
       "errors": [
         {
           "msg": "<specific_error_message>",
           "param": "<field_with_error>"
         }
       ]
     }
     ```

2. **Existing Captain**
   - **Status Code**: `400 Bad Request`
   - **Response Body**:
     ```json
     {
       "message": "Captain already exists"
     }
     ```

## Additional Notes
- Passwords are hashed before storing in the database
- An authentication token is generated upon successful registration
- Captain's initial status is set to "inactive"

## Authentication
- The registration generates a JWT token valid for 24 hours
- Token can be used for subsequent authenticated requests

## Possible Vehicle Types
- "car"
- "motorcycle"
- "auto"

## Error Handling
- Comprehensive validation checks prevent invalid data submission
- Duplicate email registrations are prevented
