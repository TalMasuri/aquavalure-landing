# AquaValure Landing Page 🐟

מערכת ניהול מדגה חכמה - דף נחיתה

## התקנה מקומית

```bash
# התקנת תלויות
npm install

# הרצה מקומית
npm run dev

# בנייה לפרודקשן
npm run build
```

## העלאה ל-Netlify

1. צור ריפו חדש ב-GitHub והעלה את הקבצים
2. לך ל-[netlify.com](https://netlify.com) והתחבר עם GitHub
3. לחץ "Add new site" → "Import an existing project"
4. בחר את הריפו
5. הגדרות Build:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. לחץ Deploy!

## העלאה ל-Vercel

```bash
npm install -g vercel
vercel
```

## מבנה הפרויקט

```
aquavalure-landing/
├── public/
│   └── favicon.svg
├── src/
│   ├── App.jsx          # הקומפוננטה הראשית
│   ├── main.jsx         # Entry point
│   └── index.css        # Tailwind CSS
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## פרטי התקשרות

- 📞 052-694-4087
- 📧 aquavalure@outlook.com

---

© 2025 AquaValure | כל הזכויות שמורות
