# 📚 Bookshop Project – DevOps Pipeline  

## 📖 Overview  
The **Bookshop Project** is a sample web application that simulates an online bookshop. I used it as a case study to practice and implement **end-to-end DevOps workflows** including containerization, CI/CD, infrastructure automation, and deployment.  

This project demonstrates:  
- Infrastructure provisioning with **Terraform**  
- Configuration management with **Ansible**  
- CI/CD pipelines with **Jenkins**  
- Containerization with **Docker**  
- Application hosting with **NGINX** and Kubernetes (Ingress + scaling)  


---

## ⚙️ Tech Stack  
- **Frontend/Backend**: Bookshop web app (API served at `/bookshop`)  
- **Containerization**: Docker  
- **Orchestration**: Kubernetes (with Ingress & HPA scaling)  
- **CI/CD**: Jenkins pipelines (build, test, deploy)  
- **IaC**: Terraform for AWS provisioning  
- **Configuration**: Ansible for automated setup (Jenkins, NGINX, dependencies)  

---

## 🚀 DevOps Workflow  

1. **Code & Version Control**  
   - Source code is managed in **GitHub**.  
   - Jenkins is configured to trigger builds on commits.  

2. **Build & Test (CI)**  
   - Jenkins pulls the repo → builds Docker image → runs tests.  
   - SonarQube used for code quality scans.  
   - Nexus used as an artifact repository.  

3. **Containerization**  
   - App packaged as a Docker image.  
   - Image pushed to **Amazon ECR**.  

4. **Infrastructure (IaC)**  
   - Terraform provisions:  
     - AWS VPC, EC2, EKS (Kubernetes), RDS (database).  
   - S3 bucket for static assets (if required).  

5. **Deployment (CD)**  
   - Ansible configures servers (NGINX, Jenkins, dependencies).  
   - Kubernetes manifests define deployments, services, ingress.  
   - HPA scales pods based on CPU/memory usage.  

---

## 🛠️ Setup & Run  

### 1️⃣ Prerequisites  
- Docker & Docker Compose  
- Terraform & Ansible  
- AWS CLI configured  
- Kubernetes cluster (EKS or Minikube for local dev)  
- Jenkins server  

### 2️⃣ Local Development  
```bash
# Run with Docker Compose
docker-compose up --build
