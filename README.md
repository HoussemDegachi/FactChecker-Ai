<div align="center">
   <img src="https://github.com/HoussemDegachi/missinformation-detector/blob/a26879c6e3f073f244b7f81cb8fef04b338827c9/FactCheckeraiLogo.png" width="150px" alt="Project Logo" />
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

![Screenshot 1](https://github.com/HoussemDegachi/FactChecker-Ai/blob/7081aff65888eaeacc0d9508d8f67d11e0ddafcb/Screenshot%202025-03-20%20220357.png)

![Screenshot 2](https://github.com/HoussemDegachi/FactChecker-Ai/blob/7081aff65888eaeacc0d9508d8f67d11e0ddafcb/Screenshot%202025-03-20%20220420.png)

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

make sure you download the [backend](https://github.com/HoussemDegachi/factChecker-Ai-b)

Clone the project:

```bash
git clone https://github.com/HoussemDegachi/FactChecker-Ai
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

then import the extension to your browser (we would recommend you use a chrome based brwoser)

## 🎥 Recommended YouTube Videos for Testing  

To see **FactChecker AI** in action, try analyzing videos that contain a mix of **verified facts, misleading claims, and misinformation**.  
Here are some recommended test videos:  

1️⃣ **[Microsoft goes nuclear on TypeScript codebase](https://www.youtube.com/watch?v=PQ2WjtaPfXU)** – Video that contains wrong information.  
2️⃣ **[How do executive orders work? - Christina Greer](https://www.youtube.com/watch?v=oyOf3g-PJ94&t=3s)** – Video that contains mostly correct infromation.  
3️⃣ **[Machine Learning vs Deep Learning](https://www.youtube.com/watch?v=o3bWqPdWJ88&t=170s)** – Another video with correct information

🔹 *Testing on diverse content helps evaluate the AI's accuracy and performance!*  

## ⚠️ Important Notice  

To ensure the most **accurate results**, we recommend watching at most **5–10 minutes** of a video before analysis.  
This helps mitigate potential **token limitations** and enhances the AI's ability to detect misinformation effectively.  


## 👥 Contributors
Thanks to these amazing people who helped build FactChecker AI! 🚀

- [Omar Abd](https://github.com/omarAbd19) – AI & Backend
- [Houssem Degachi](https://github.com/HoussemDegachi) – Full Stack
- [Fatima Ezzahra](https://github.com/FatimaEzzahraLegchayri) – Website
- [Mostafa Yaser](https://github.com/mostafammy) – Extension


