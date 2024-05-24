## 📋 <a name="table">Table of Contents</a>

1. [Introduction](#introduction)
2. [Screenshot](#screenshot)
3. [Tech Stack](#tech-stack)
4. [Features](#features)
5. [Quick Start](#quick-start)


# Next.js 14 AI Note App

This is a note-taking app with an integrated **AI chatbot**. By using the **ChatGPT API**, **vector embeddings**, and **Pinecone as vector database**, the chatbot knows about all notes stored in your user account and can retrieve relevant information to answer your questions and summarize information.

# Screenshot
![Screenshot](/notesai.png?raw=true "Notes AI Demo")

## Tech stack
- [x] NextJS
- [x] Clerk
- [x] PineCone 
- [x] Prisma
- [x] Typescript

## Features
- [x] CRUD operation on Notes
- [x] Authentication on Google Login
- [x] AI Chatbot based on the notes content

## Quick Start
Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the content based on the .env.example:


**Running the Project**

```bash
npm run dev
```

