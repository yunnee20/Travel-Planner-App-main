# NextStop - AI Travel Planner App
NextStop is an AI-powered travel planning app designed to help users take the first step in organizing their next adventure. Whether you're a strict planner or a spontaneous traveler, NextStop simplifies the process of building a trip itinerary based on your preferences—so you can focus less on the stress, and more on the excitement of exploring.

## Links to Access
- Figma Prototype: [Link Here](https://www.figma.com/proto/hauMutzEGpibNbt8B5Bc4q/Travel-App?page-id=32%3A38&node-id=32-39&p=f&viewport=-388%2C157%2C0.24&t=bzAsA1UZ4r4fR8jG-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=32%3A39)
- GitHub Link: [Link Here](https://git.arts.ac.uk/24038876/Travel-Planner-App)
- Video Link: [Link Here](https://drive.google.com/file/d/1rcXgG3J3rThee7e5PPqnEH8kLI8MU9pN/view?usp=sharing)
- App Login Details : 
   - Username = admin
   - Password = hello123

## Introduction
Travel today is no longer a luxury—it’s a lifestyle. As noted by Protonshub Technologies (CMMI Level 5 Company, 2023), travel has become a global hobby, pursued for leisure, cultural discovery, and personal growth. As someone passionate about travel, I noticed that trip planning—especially in groups—often reveals how differently people like to travel. Some want rigid schedules, others prefer spontaneity. Some are budget-focused, while others chase comfort and experience.

The hardest part? Getting started.

From choosing a destination to estimating costs and building an itinerary, the initial planning stage can feel overwhelming. That’s where NextStop comes in—a tool built to ease that first step.

## Features
- AI-generated travel itineraries using **Gemini API**
- Custom inputs: destination, dates, budget, group type, preferences
- Firebase integration for saving and retrieving plans
- Placeholder visuals for destinations (future dynamic image integration)
- Expandable plans with options like:
  - Budget tracking *(placeholder)*
  - Language translation *(planned)*
  - Souvenirs & local tips *(planned)*


### To Preview My Project
This project is built with React Native using Expo Go
Follow these steps to run the app:

---

#### Clone Project

You can download the project from the UAL GitLab link:
note: .env file is removed from .gitignore to ensure APIKEY can be used while previewing

📎 [https://git.arts.ac.uk/24038876/Travel-Planner-App](https://git.arts.ac.uk/24038876/Travel-Planner-App)

Or use the terminal:

```bash
git clone https://git.arts.ac.uk/24038876/Travel-Planner-App.git
cd Travel-Planner-App
```
#### Preview Command
Using the Expo Go App on mobile device, run the command and scan the QR Code with device.
```bash
npx expo start
```

### Limitations & Challenges
- Timeline component currently cannot be edited or parsed due to JSON format mismatch. A better solution may be implemented later.
- Gemini API sometimes returns incomplete data or unusable links (e.g., example/london.jpg). Hence, preset images are used.
- Generated trip details are not editable yet. Drag-and-drop and manual editing are on the roadmap.
- Budget page is currently a placeholder.
- Translator, souvenir suggestions, and trip tips are planned features for future updates.