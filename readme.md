# Book Listing Server

**A Robust Backend Service for Managing Your Book Listing with Authentication and Authorization**

Repository Link: https://github.com/israt-emu/Book-listing-backend
Server Link: https://book-listing-lilac.vercel.app

## Tech Stack:

- **Server**: Node.js, Express.js
- **Database and ORM**: PostgreSQL (Supabase), Prisma
- **Type Safety and Validation**: TypeScript, Zod
- **Authentication and Authorization**: JSON Web Token, Bcrypt
-

## Highlighted Features:

- **User Authentication and Authorization**: Secure your application with user-specific access controls.
- **Admin and User Distinction**: Differentiate between admin and user roles for enhanced security and functionality.
- **Book Management**: Create, search, filter, sort, and paginate your book catalog effortlessly.
- **Order Processing**: Streamline order creation and access your own orders efficiently.

## Available API endpoints:

### Authentication

**Signup User**

POST - https://book-listing-lilac.vercel.app/api/v1/auth/signup

**Login User**

POST - https://book-listing-lilac.vercel.app/api/v1/auth/signin

**_For Admin access: Login with this credentials:_**

```json
  {
    "email" "admin1@gmail.com",
    "password: "john123"
  }
```

### Users

**Get all users**

GET - https://book-listing-lilac.vercel.app/api/v1/users

(Need admin bearer token)
Example: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJkNWEzNTNlNy04NTY5LTQ3MTUtYTZmMS01MzdhYjJhYWY1NmQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2OTY5NDQyMTYsImV4cCI6MTY5NzAzMDYxNn0.HQ1pZ8VDF2vJa-aQIww3K_NlKqNcM0OaStSoSACSDSw`

**Get a single user**

GET - https://book-listing-lilac.vercel.app/api/v1/users/8d9b937e-2bb6-4a12-ad1d-50da9e18253a

(Need admin bearer token)

**Update User**

PATCH - https://book-listing-lilac.vercel.app/api/v1/users/8d9b937e-2bb6-4a12-ad1d-50da9e18253a

(Need admin bearer token)

**Delete User**

DELETE - https://book-listing-lilac.vercel.app/api/v1/users/430d5dae-8e6a-496c-be0e-bcb73fa576a4

(Need admin bearer token)

**Get User Own Profile**

GET - https://book-listing-lilac.vercel.app/api/v1/users/profile

(Need bearer token)

**Make a user admin**

PATCH - https://book-listing-lilac.vercel.app/api/v1/users/make-admin/c68fde9a-0d79-4360-8801-e8e6e42d2eda

(Need admin bearer token)

### Categories

**Create Category**

POST - https://book-listing-lilac.vercel.app/api/v1/categories/create-category

(Need admin bearer token)

**Get All Categories**

GET - https://book-listing-lilac.vercel.app/api/v1/categories

**Get Single Category**

GET - https://book-listing-lilac.vercel.app/api/v1/categories/e6c699bd-5e65-453a-a747-b0ac3dc048cf

**Update Category**

PATCH - https://book-listing-lilac.vercel.app/api/v1/categories/d40f2652-4d1c-43c3-98a6-c5949d2107e6

(Need admin bearer token)

**Delete Category**

https://book-listing-lilac.vercel.app/api/v1/categories/d40f2652-4d1c-43c3-98a6-c5949d2107e6

(Need admin bearer token)

### Books

**Get all books**

GET - https://book-listing-lilac.vercel.app/api/v1/books

PARAMS EXAMPLE
| params | Value |
|-------------|-------------------|
| page | 1 |
| size | 10 |
| sortBy | price |
| sortOrder | desc |
| search | J.D. Salinger |
| category | e32faaf6-c2bf-4361-9b20-622f2b87da25 |
| minPrice | 9.9 |
| maxPrice | 49.9 |

**Create book**

POST - https://book-listing-lilac.vercel.app/api/v1/books/create-book

(Need admin bearer token)

**Get a single book**
GET - https://book-listing-lilac.vercel.app/api/v1/books/c9e5fbf3-ce6c-436d-b3b4-5ab85cf69766

**Get a book by category**
https://book-listing-lilac.vercel.app/api/v1/books/60c1f98c-b1d5-4bae-a42e-2583c13f3f75/category

**Update book**

PATCH - https://book-listing-lilac.vercel.app/api/v1/books/f9dc6cd4-172c-4bb6-8dd7-2e7259c85592

(Need admin bearer token)

**Delete a book**

DELETE - https://book-listing-lilac.vercel.app/api/v1/books/ef7ee4e5-3c9d-406d-9207-96faa1b3e4f3

(Need admin bearer token)

### Order

**Place Order**

POST - https://book-listing-lilac.vercel.app/api/v1/orders/create-order

(Need bearer token)

**GEt single order**

GET - https://book-listing-lilac.vercel.app/api/v1/orders/5e53263e-087a-4a55-9ffe-9fa1eb9ae3ac

(Admin needs his bearer token, and user needs his own bearer token)

**Get all orders**

GET - https://book-listing-lilac.vercel.app/api/v1/orders/

(Need admin bearer token)

Thanks for visiting this project!
