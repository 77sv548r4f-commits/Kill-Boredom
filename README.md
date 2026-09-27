# Pick & Reveal — Online 2-Player

A mobile-first real-time 2-player web game using Firebase Realtime Database.

## Included

- 100 hidden questions/dares
- #50: "Are you presently just celibate or a virgin?"
- 6-character room codes
- Shareable room links
- Real-time turn synchronization
- Used-number synchronization
- Random-pick button
- WhatsApp/Snapchat-inspired visual modes
- No user account required

## Free deployment: Firebase Hosting

### 1. Create Firebase project
Go to https://console.firebase.google.com/ and create a project.

### 2. Add a web app
In Project Overview, choose the Web (`</>`) icon and register an app.
Copy the Firebase config object.

### 3. Create Realtime Database
Firebase Console → Build → Realtime Database → Create Database.

For initial testing, choose a location and start in **test mode**. Test mode is convenient for getting started but is not appropriate for a public production game. Before sharing widely, replace the permissive rules with authenticated/security rules.

### 4. Add your config
Open `public/index.html`.

Find:

    const firebaseConfig = {
      apiKey: "YOUR_FIREBASE_API_KEY",
      ...
    };

Replace those values with the config from Firebase.

### 5. Install Firebase CLI

Install Node.js from https://nodejs.org/ if needed, then:

    npm install -g firebase-tools
    firebase login

### 6. Initialize hosting

From this project folder:

    firebase init hosting

Choose your Firebase project.
When asked for the public directory, enter:

    public

Choose **No** for single-page-app rewriting if prompted (this app already handles its room query URL).

### 7. Deploy

    firebase deploy --only hosting

Firebase will print a URL such as:

    https://your-project-id.web.app

Send that HTTPS link to the other player.

## Important database security note

This starter version uses a client-side room model and is intended for a private game / prototype. Do not assume Firebase test-mode rules are safe for public use.

For a public launch, add Firebase Authentication (anonymous auth is enough) and Realtime Database Security Rules that:
- require authenticated users,
- restrict each room to two players,
- prevent arbitrary users from overwriting room ownership,
- validate room data and turns.

## Playing

1. Open your HTTPS URL.
2. Enter your name.
3. Tap Create room.
4. Copy the invite link.
5. Send it to the other player.
6. They open the link and enter their name.
7. Pick numbers from 1–100.
8. Both phones receive the same reveal and turn changes.

The prompts are stored in the page so the same #50 question is guaranteed.
