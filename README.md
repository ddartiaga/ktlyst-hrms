# Katalyst - HRMS
## Cloud-Native HRMS with Government Compliance Features

### Project Overview

PH-HRMS is a comprehensive, cloud-native Human Resource Management System specifically designed for Philippine organizations. The system integrates essential HR functionalities with mandatory government compliance features, including SALN (Statement of Assets, Liabilities and Net Worth) and Personal Data Sheet (PDS) management.

### System Architecture

#### Technology Stack
- **Frontend**: Next.js 15 (App Router) with TypeScript
- **Styling**: Bootstrap CSS v5
- **Backend**: Next.js API Routes with TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: Auth.js (NextAuth.js)
- **Infrastructure**: Terraform for AWS provisioning
- **Deployment**: AWS EC2 or AWS App Runner (containerized)
- **Observability**: OpenTelemetry, Prometheus, Grafana
- **CI/CD**: GitHub Actions
- **Logging**: File-based logging with audit trails

#### Core System Components

1. **Employee Management Module**
   - Employee profiles and records
   - Organizational hierarchy
   - Role-based access control

2. **Government Compliance Module**
   - SALN form generation and management
   - PDS form handling and updates
   - Compliance reporting and tracking

3. **Payroll Management**
   - Salary computation with Philippine tax calculations
   - Benefits administration
   - Payslip generation

4. **Leave Management**
   - Leave application and approval workflow
   - Leave balance tracking
   - Holiday calendar management

5. **Performance Management**
   - Performance evaluations
   - Goal setting and tracking
   - 360-degree feedback

6. **Recruitment Module**
   - Job posting and application tracking
   - Interview scheduling
   - Candidate evaluation

7. **Training & Development**
   - Training program management
   - Skill tracking
   - Certification management

8. **Reports & Analytics**
   - HR metrics dashboard
   - Compliance reports
   - Custom report generation

#### Security Features
- Multi-factor authentication
- Role-based access control (RBAC)
- Data encryption at rest and in transit
- Audit logging for all system activities
- Regular security assessments

#### Observability & Monitoring
- Application performance monitoring
- Real-time metrics and alerts
- Distributed tracing
- Log aggregation and analysis
- Health checks and uptime monitoring