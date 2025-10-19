# 🔥 Firefly Lite

A simple and lightweight web interface to crawl websites using the [Firecrawl API](https://firecrawl.dev). Enter a URL and get the structured, markdown-friendly data in seconds.



---

## ✨ Features

* **Simple Interface**: Just paste a URL and click "Crawl".
* **Secure API Calls**: Your Firecrawl API key is kept secure on the server-side and is never exposed to the client.
* **Clear Results**: The raw JSON data from the crawl is displayed in a formatted and easy-to-read block.
* **User Feedback**: The UI clearly indicates loading and error states.

---

## 🛠️ Tech Stack

* **Framework**: [Next.js](https://nextjs.org/) (App Router)
* **Language**: [TypeScript](https://www.typescriptlang.org/)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/)
* **API**: [Firecrawl API](https://firecrawl.dev)

---

## ⚙️ How It Works

This application uses a simple but effective architecture to protect your API keys:

1.  The **Frontend** (built with React/Next.js) captures the URL you want to crawl.
2.  It sends a `POST` request to a **Next.js API Route** (`/api/crawl`) within this project.
3.  The API route, running securely on the **Server**, receives the request and calls the official Firecrawl API, attaching your secret `FIRECRAWL_API_KEY`.
4.  The response from Firecrawl is passed back to the frontend and displayed to you.

This ensures your secret API key is never exposed in the browser.

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

* Node.js (version 18 or higher)
* `npm`, `yarn`, or `pnpm`
* A **Firecrawl API Key**. You can get one for free from the [Firecrawl website](https://www.firecrawl.dev/).

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/firefly-lite.git](https://github.com/your-username/firefly-lite.git)
    cd firefly-lite
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```
3.  **Set up environment variables:**
    Create a new file named `.env.local` in the root of your project and add your Firecrawl API key:
    ```
    FIRECRAWL_API_KEY="YOUR_API_KEY_HERE"
    ```
4.  **Run the development server:**
    ```bash
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result!

---

## 🌐 Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

**Important**: When you deploy, remember to add your `FIRECRAWL_API_KEY` as an Environment Variable in your Vercel project settings.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
