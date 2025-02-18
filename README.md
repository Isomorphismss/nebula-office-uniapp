# **Nebula Office Frontend**  

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)  

Nebula Office Frontend is the official frontend for [Nebula Office](https://github.com/Isomorphismss/nebula-office), a **cross-platform** enterprise productivity application built with **Uni-APP** and **Vue**. It provides an intuitive and seamless user experience across **mini-programs, H5, and mobile applications**. Key features include **GPS attendance tracking, facial recognition, WeChat authentication, video conferencing, document collaboration, and approval workflows**.    

## 🚀 Features  

✅ **GPS Attendance** – Capture device GPS coordinates and resolve location via **Tencent Maps**.  
✅ **Facial Recognition** – Photo-based verification powered by **OpenCV + Flask (Docker-based service)**.  
✅ **WeChat Login** – Authenticate users and retrieve profile data from **WeChat OAuth**.  
✅ **Video Conferencing** – Multi-user meetings powered by **Tencent Cloud TRTC**.  
✅ **Document Collaboration** – Real-time shared document editing.  
✅ **Approval Workflows** – Manage meeting approvals, expense requests, and task approvals.  
✅ **Multi-Platform Support** – Compatible with **Mini-Program, H5, and APP** clients.  

## 🛠️ Technologies  

| Category            | Technology |  
|---------------------|------------|  
| **Frontend**       | Uni-APP, Vue |  
| **State Management** | Vuex |  
| **UI Components**  | Vant, Uni-UI |  
| **Maps & GPS**     | Tencent Maps |  
| **Video Conferencing** | Tencent Cloud TRTC |  
| **Authentication** | WeChat OAuth |  
| **Caching**        | LocalStorage, Image Caching |  

## ⚡ Prerequisites  

Before running the frontend, ensure you have:  

1. **Backend Services** – The Nebula Office backend must be running ([Spring Boot](https://github.com/Isomorphismss/nebula-office) and Activiti7 workflow engine).  
2. **Docker Installed** – Required for the **Facial Recognition Service**.  
3. **Tencent Maps API Key** – [Get an API key](https://lbs.qq.com/).  
4. **Tencent Cloud TRTC Credentials** – [Register a TRTC application](https://console.cloud.tencent.com/trtc).  
5. **WeChat Developer Account** – Necessary for OAuth login integration.  

## 🚀 Getting Started  

### 📌 Step 1: Set Up Backend Services  
1. Start the **Spring Boot backend** and **Activiti7 workflow engine**.  
2. Obtain the backend service URLs:  
   - `http://your-backend-ip:port` (API server)  
   - `http://your-workflow-ip:port` (Workflow engine)  

### 📌 Step 2: Configure the Frontend  
1. Clone the repository:  
   ```
   git clone https://github.com/your-username/nebula-office-frontend.git  
   ```
2. Navigate to the project directory:  
   ```
   cd nebula-office-frontend  
   ```
3. Install dependencies:  
   ```
   npm install  
   ```
4. Update the configuration in `manifest.json`:  
   - If you need access to the **Facial Recognition Service**, contact the project maintainer.  

### 📌 Step 3: Run the Frontend  
1. Start the development server:  
   ```
   npm run dev  
   ```
2. Open the project in your preferred platform:  
   - **H5**: Open in a web browser.  
   - **Mini-Program**: Compile and run using Uni-APP IDE.  
   - **APP**: Test on an **Android emulator** or **physical device**.  

## ⚠️ Notes  

- Ensure the **backend services** and **facial recognition Docker container** are running before launching the frontend.  
- **Update `manifest.json` with your actual API keys and backend URLs**.  
- For **Android emulator testing**, replace `localhost` with your **local network IP address**.  

## 📜 License  

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.  
