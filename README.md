# Talk It Out — The Process of Communication

A self-paced, interactive communication-skills module for high school students, by **Brain Behaviour Academy**.

## What it covers
Ten lessons: what communication is, the communication loop (interactive), the 7-step journey, channels, influences on sender & receiver, internal & external barriers, the 7 keys to effective communication, a full-picture infographic recap, and a graded final check. Progress and student reflections are saved on the device (browser `localStorage`).

## Project structure
```
talk-it-out/
├── index.html                      ← the page
├── css/
│   └── styles.css                  ← all styling
├── js/
│   └── app.js                      ← lesson data + interactivity
└── assets/
    ├── bba-logo.png                ← Brain Behaviour Academy logo
    └── communication-infographic.png  ← "The Process of Communication" infographic
```

## Hosting on GitHub Pages
1. Put these files in your repo (e.g. the root, or a `/communication/` folder).
2. In the repo's **Settings → Pages**, set the source to your branch (`main`) and root.
3. Your module will be live at `https://<username>.github.io/<repo>/`.

No build step and no dependencies — it's plain HTML, CSS, and JavaScript. The only external resource is Google Fonts (Fraunces + Nunito), loaded over the web.

## Notes
- Progress is per-device and per-browser. Clearing browser data resets it.
- The infographic opens full-size in a new tab when tapped.
