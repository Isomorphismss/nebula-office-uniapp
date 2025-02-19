# Nebula Office Frontend   

## 🌟 Introduction  
Nebula Office Frontend is the official frontend for **Nebula Office**, an enterprise productivity platform.  
Built with **Uni-APP + Vue**, it supports **H5, mini-programs, and mobile apps**, offering seamless access across devices.  

🔗 **Backend Repository:** [Nebula Office Backend](https://github.com/Isomorphismss/nebula-office)  
⚠️ **Ensure backend services are running before launching the frontend.**  

## 🚀 Getting Started  

### 1️⃣ Prerequisites  
- **Backend Services** – The Nebula Office backend **must be running** ([Spring Boot + Activiti7](https://github.com/Isomorphismss/nebula-office)).  
- **Docker Installed** – Required for the **Facial Recognition Service**.  
- **Tencent API Keys** – Needed for **Maps, TRTC, and WeChat OAuth**.  

### 2️⃣ Installation  
```sh
git clone https://github.com/Isomorphismss/nebula-office-uniapp.git
cd nebula-office-uniapp
npm install
```

### 3️⃣ Configuration  
Modify the **backend API URLs** in `manifest.json`:  
```json
{
  "backendUrl": "http://your-backend-ip:port",
  "workflowUrl": "http://your-workflow-ip:port"
}
```
⚠️ Also remember to put your API keys in the same place. **For Android emulator testing**, replace `localhost` with your **local network IP**.  

### 4️⃣ Running the Frontend  
```sh
npm run dev
```
Available platforms:  
- **H5** – Open in a browser.  
- **Mini-Program** – Compile in **Uni-APP IDE**.  
- **Mobile App** – Run on an emulator or physical device.  


## 📜 License  
This project is licensed under the **MIT License**.  
