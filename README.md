# NestJS Learning Repository

Welcome to my NestJS learning journey! This repository contains various NestJS projects and experiments as I explore and master this powerful Node.js framework.

## 📚 About This Repository

This is my personal learning repository where I practice and experiment with NestJS concepts, patterns, and features. The projects here demonstrate different aspects of NestJS development, from basic CRUD operations to more advanced architectural patterns.

## 🚀 Projects

This repository contains multiple NestJS projects, each focusing on different aspects of the framework. More projects will be added as I continue my learning journey.

### 1. Messages App (`/messages`)
A simple REST API for managing messages that demonstrates core NestJS concepts:

**Features:**
- ✅ CRUD operations for messages
- ✅ Request validation using class-validator
- ✅ DTOs (Data Transfer Objects)
- ✅ Service-Repository pattern
- ✅ Exception handling
- ✅ Unit tests and E2E tests

**Endpoints:**
- `GET /messages` - List all messages
- `POST /messages` - Create a new message
- `GET /messages/:id` - Get a specific message

**Key Learning Points:**
- Controllers and routing
- Dependency injection
- Validation with class-validator
- File-based data persistence
- Error handling with built-in exceptions

### 2. Scratch Project (`/scratch`)
Basic NestJS setup for experimenting with framework features and quick prototyping.

### 🔄 More Projects Coming Soon...
As I progress through the **NestJS Complete Developer's Guide** course, I'll be adding projects covering:

#### **Planned Project Types:**
- **🗄️ Database App** - TypeORM integration with PostgreSQL
- **🔐 Authentication System** - Complete auth with JWT and permissions  
- **🧪 Testing Showcase** - Comprehensive unit and integration tests
- **🚀 Production App** - Full-featured app with deployment
- **📊 Advanced Features** - Caching, file uploads, real-time features
- **🏗️ Architecture Patterns** - Microservices and advanced patterns
- **📚 GraphQL Implementation** - Alternative to REST API
- **🛡️ Security Focused** - Best practices for production security

Each project will demonstrate specific course concepts and build upon previous knowledge!

## 🛠 Technologies Used

- **NestJS** - Progressive Node.js framework
- **TypeScript** - Type-safe JavaScript
- **Class Validator** - Validation decorators
- **Class Transformer** - Object transformation
- **Jest** - Testing framework
- **ESLint** - Code linting
- **Prettier** - Code formatting

## 🏃‍♂️ Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Running the Messages App

1. Navigate to the messages directory:
   ```bash
   cd messages
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run start:dev
   ```

4. The API will be available at `http://localhost:3000`

5. Test the endpoints using the provided `requests.http` file or tools like Postman/Insomnia

### Running Tests

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Test coverage
npm run test:cov
```

## 📖 Learning Progress

Following **[NestJS: The Complete Developer's Guide](https://www.udemy.com/course/nestjs-the-complete-developers-guide)** by Stephen Grider

### ✅ Completed Topics
- [x] Project setup and structure
- [x] Controllers and routing  
- [x] Services and dependency injection
- [x] DTOs and validation with class-validator
- [x] Exception handling and error responses
- [x] File system operations (JSON-based storage)
- [x] Basic testing (unit and E2E)

### 🔄 Currently Learning
- [ ] **TypeScript Advanced Features**
  - Decorators (property, method, parameter)
  - Advanced typing patterns
  - Generics and utility types

### 📚 Course Curriculum - Upcoming Topics

#### **Core NestJS Concepts**
- [ ] Request-Response Lifecycle
- [ ] Dependency Injection Deep Dive  
- [ ] Custom Decorators
- [ ] Pipes for data transformation
- [ ] Guards for route protection
- [ ] Interceptors for request/response handling
- [ ] Middleware implementation
- [ ] Exception Filters
- [ ] Modules and feature organization

#### **Data Management & Persistence**
- [ ] **TypeORM Integration**
  - Entity creation and relationships
  - Migrations and schema management
  - Complex queries and query builder
  - Database relationships (One-to-One, One-to-Many, Many-to-Many)
- [ ] **Repository Pattern**
- [ ] **Database Configuration**
- [ ] **Data Seeding**

#### **Authentication & Authorization**
- [ ] **Authentication System from Scratch**
  - User registration and login
  - Password hashing and security
  - Session management
  - JWT tokens
- [ ] **Authorization & Permissions**
  - Role-based access control
  - Route-level permissions
  - Resource-based authorization
- [ ] **Guards Implementation**
  - Authentication guards
  - Role guards
  - Custom authorization logic

#### **Advanced Validation & Data Handling**
- [ ] **Request Validation**
  - Custom validation pipes
  - Complex validation rules
  - Nested object validation
- [ ] **Response Formatting**
  - Custom DTO systems
  - Data serialization
  - Response interceptors

#### **Testing Strategy**
- [ ] **Unit Testing**
  - Service testing
  - Controller testing
  - Mock implementations
- [ ] **Integration Testing**
  - Database testing
  - E2E API testing
  - Test database setup
- [ ] **Testing Best Practices**
  - Test organization
  - Mocking strategies
  - Coverage optimization

#### **Production & Deployment**
- [ ] **Environment Configuration**
  - Config management
  - Environment variables
  - Multiple environment setup
- [ ] **Production Deployment**
  - Heroku deployment
  - Environment setup
  - Production database (PostgreSQL)
- [ ] **Performance & Security**
  - Rate limiting
  - CORS configuration
  - Security headers
- [ ] **Monitoring & Logging**
  - Error tracking
  - Performance monitoring
  - Log management

#### **Advanced Features**
- [ ] **File Upload Handling**
- [ ] **Email Integration**
- [ ] **Caching Strategies**
- [ ] **Background Jobs**
- [ ] **WebSockets & Real-time**
- [ ] **Microservices Architecture**
- [ ] **GraphQL Integration**
- [ ] **API Documentation (Swagger)**

## 🧪 Testing the API

Use the provided `messages/requests.http` file to test the API endpoints:

1. List all messages: `GET http://localhost:3000/messages`
2. Create a message: `POST http://localhost:3000/messages`
3. Get a specific message: `GET http://localhost:3000/messages/:id`

## 📁 Project Structure

```
├── messages/              # Simple REST API - CRUD operations
│   ├── src/
│   │   ├── messages/      # Messages module
│   │   │   ├── dtos/      # Data Transfer Objects
│   │   │   ├── messages.controller.ts
│   │   │   ├── messages.service.ts
│   │   │   ├── messages.repository.ts
│   │   │   └── messages.module.ts
│   │   └── main.ts        # Application entry point
│   ├── test/              # E2E tests
│   ├── requests.http      # HTTP requests for testing
│   └── messages.json      # Data storage file
│
├── scratch/               # Experimental playground
│   └── src/
│       ├── app.controller.ts
│       ├── app.module.ts
│       └── main.ts
│
└── [future-projects]/     # More course projects will be added here
    ├── database-app/      # TypeORM + PostgreSQL integration
    ├── auth-system/       # Complete authentication & authorization
    ├── testing-demo/      # Comprehensive testing strategies
    ├── production-app/    # Full-featured deployed application
    ├── advanced-features/ # Caching, file uploads, real-time
    ├── microservices/     # Microservices architecture patterns
    └── graphql-api/       # GraphQL implementation
```

## 🔗 Useful Resources

- **Course**: [NestJS: The Complete Developer's Guide - Udemy](https://www.udemy.com/course/nestjs-the-complete-developers-guide)
- **Instructor**: [Stephen Grider](https://www.udemy.com/user/sgslo/) - Engineering Architect
- [NestJS Official Documentation](https://docs.nestjs.com/)
- [NestJS GitHub Repository](https://github.com/nestjs/nest)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [TypeORM Documentation](https://typeorm.io/)
- [Class Validator Documentation](https://github.com/typestack/class-validator)

## 📝 Notes

This repository serves as my comprehensive journey through **Stephen Grider's NestJS Complete Developer's Guide** on Udemy. Each project corresponds to major sections of the course and demonstrates progressive learning from basic concepts to production-ready applications.

**Course Learning Path:**
- 🟢 **Foundation**: Basic CRUD, dependency injection, validation (Current)
- 🟡 **Intermediate**: Database integration, authentication, testing
- � **Advanced**: Guards, interceptors, complex relationships
- 🔴 **Production**: Deployment, security, performance optimization

**Repository Organization:**
- Each project folder represents a major course section
- Code follows course examples with personal enhancements
- Detailed documentation for each concept learned
- Test implementations following course best practices
- Production deployment examples included

**Course Features Covered:**
- ✅ Enterprise-ready application structure
- ✅ TypeScript throughout for type safety
- ✅ Testing strategies (unit + integration)
- ✅ Production deployment ready
- ✅ Authentication & authorization systems
- ✅ Database relationships with TypeORM
- ✅ Automated validation and error handling

This learning journey focuses on building real-world, production-quality applications rather than just toy examples!

---

**Happy Learning! 🚀**
