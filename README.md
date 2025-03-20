<div align="center">
   <img src="https://drive.google.com/file/d/1IJPXECGSKOnnwK7eh_rD-vTq7UZJ-cvg/view?usp=sharing" width="150px" alt="Project Logo" />
    <h1>Fact Checker Ai</h1>
</div>

## 🎯 The Problem
Misinformation spreads rapidly on YouTube, influencing opinions and decisions. Viewers often struggle to verify content quickly without diving into extensive research.
## 💡 The Solution
FactChecker AI is a browser extension that automatically analyzes YouTube videos and determines if the information is true, misleading, or false using AI-powered fact-checking.

## ✨ Key Features

- **🔹 Real-Time Accuracy Markers**-  See colored indicators directly on the YouTube timeline.

- **🔹 Instant Pop-Up Insights**– View timestamps with AI fact-check results in a simple UI.

-  **🔹 Detailed Reports & Sources**: – One click opens a full breakdown on our website.

- **🔹 AI-Powered Verification**:  – Combines multiple sources & NLP models for high accuracy.

-  **🔹 Seamless User Experience**: – Animations and a clean UI ensure smooth interaction.

## 📂 Project File Structure

Here’s a guide to the essential files and directories in our project:

<pre>
missinformation-detector/
├── src/                          # Source code directory
│   ├── popup.tsx                 # Main entry point for the extension popup
│   ├── background.ts             # Manages background script functionality
│   ├── tabs/                     # Tab components
│   │   └── IndepthAnalysis.tsx   # Component for rendering the in-depth analysis page
│   ├── contents/                 # Content script related files
│   │   └── content.ts            # Functions for handling notifications and toasts
│   ├── utils/                    # Utility functions
│   │   └── getYtVideo.ts         # API requests to YouTube using axios
│   ├── Component/                # Reusable UI components
│   │   ├── FactCard.tsx          # Component to display fact cards
│   │   ├── ErrorComp.tsx         # Component to display error messages
│   │   ├── NotYoutubeVideo.tsx   # Message for non-YouTube video pages
│   │   ├── TimeStamp.tsx         # Component to display timestamps
│   │   └── LoadingSquares.tsx    # Loading animation component
│   ├── Sections/                 # Page section components
│   │   ├── Header.tsx            # Header section component
│   │   ├── Body.tsx              # Body section component
│   │   └── Footer.tsx            # Footer section component
│   └── types/                    # Type definitions
│       └── ApiDataTypes.ts       # Defines Percentages class for API data types
├── README.md                     # Project documentation and setup instructions
└── [other files...]              # Other project files not explicitly listed
</pre>

This map will help you navigate the project and locate key files with ease!


## 🖼️ Screenshots & GIFs

![Screenshot 1](/screenshots/screenshot1.png)

![Screenshot 2](/screenshots/screenshot2.png)

## 🎬 Demo

🚀 See FactChecker AI in action! Watch our demo video to understand how it detects misinformation on YouTube in real time.
📺 Watch the Demo on YouTube.

(Click the image to watch!)

💡 How It Works:

1️⃣ Install the Extension.

2️⃣ Open a YouTube Video – FactChecker AI runs automatically.

3️⃣ See the Colored Markers on the timeline indicating truthfulness.

4️⃣ Click the Pop-up for detailed timestamps & reports.

5️⃣ Explore the Full Report on our website for sources & analysis.

🔗 Try It Yourself – [Installation Guide](#-run-our-extension-locally)

## 🛠️ Innovation & Tech Stack

**🔹 AI-Powered Fact-Checking –** Gemini 2.0 Flash

**🔹 Chrome Extension –** Plasmoc  [React.js] +  Axios

**🔹 Website –** React.js

**🔹 Scalable Backend –** Javascript with MongoDB for efficient data storage.

## 🚀 Run Our Extension Locally

Clone the project:

```bash
git clone -b master --single-branch https://github.com/HoussemDegachi/missinformation-detector.git
```

Navigate to the project directory:

```bash
cd missinformation-detector
```

Install dependencies:

```bash
pnpm install
```

Start the application:

```bash
pnpm dev
```

## 👥 Contributors
Thanks to these amazing people who helped build FactChecker AI! 🚀

- [Omar Abd](https://github.com/omarAbd19) – AI & Backend
- [Houseen](https://github.com/HoussemDegachi) – Full Stack
- [Fatima Ezzahra](https://github.com/FatimaEzzahraLegchayri) –Website
- [Mostafa Yaser](https://github.com/mostafammy) – Extension


