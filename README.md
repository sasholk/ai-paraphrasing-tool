# AI Paraphrasing Tool

[DEMO](https://ai-paraphrasing-tool-three.vercel.app/)

A modern web application that helps users rephrase and humanize text using AI technology. Built with Next.js, Material-UI, and OpenAI integration.

## Features

- **Smart Text Paraphrasing**: Utilizes OpenAI to generate human-like alternative phrasings
- **Modern UI**: Clean, responsive interface built with Material-UI
- **Real-time Editing**: Instant feedback and state management with Zustand
- **Sample Text**: Built-in sample text for easy testing
- **File Upload**: Support for uploading text files
- **Error Handling**: Graceful error handling and user feedback

## Tech Stack

- **Frontend**: Next.js 15.3.4, React 19
- **UI Framework**: Material-UI v7
- **State Management**: Zustand
- **AI Integration**: OpenAI API
- **Styling**: Emotion for styled components

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   - Copy `.sample.env` to `.env`
   - Add your OpenAI API key:
     ```
     OPENAI_API_KEY=your_api_key_here
     ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/                  # Next.js app router pages
├── components/          # React components
│   ├── paraphrase/      # Paraphrasing feature components
│   └── ui/              # Shared UI components
├── lib/                 # Core utilities
│   ├── api/            # API integration
│   └── cms/            # CMS integration
├── stores/             # Zustand state management
├── theme/              # Material-UI theme customization
└── utils/              # Helper utilities
```
