# 📐 Component & Data Architecture

## Visual Structure

```
┌─────────────────────────────────────────────────────────────┐
│                    ThemeProvider                            │
│  (Dark/Light Mode Management & localStorage persistence)   │
└──────────────────────┬──────────────────────────────────────┘
                       │
┌──────────────────────▼──────────────────────────────────────┐
│              LeetcodeProvider                               │
│  (Fetches stats from LeetCode API)                         │
└──────────────────────┬──────────────────────────────────────┘
                       │
┌──────────────────────▼──────────────────────────────────────┐
│                    <Routes>                                 │
│  ┌────────────────────────────────────────────────────┐    │
│  │ <Layout> (Header + Footer wrapper)                 │    │
│  │  ├─ <Header>                                       │    │
│  │  │  ├─ Navigation Menu (Home, Projects)           │    │
│  │  │  └─ Theme Toggle Button                        │    │
│  │  │                                                  │    │
│  │  ├─ <Outlet> (Page Content)                       │    │
│  │  │  ├─ "/" → <Home> Page                          │    │
│  │  │  │   ├─ Hero Section                           │    │
│  │  │  │   ├─ Resume Download                        │    │
│  │  │  │   ├─ Education Cards (EducationBox)         │    │
│  │  │  │   ├─ Skills Grid (SkillBox x 4)             │    │
│  │  │  │   ├─ Featured Projects (ProjectBox x 3)     │    │
│  │  │  │   ├─ Experience Cards (if available)        │    │
│  │  │  │   └─ LeetCode Stats Grid                    │    │
│  │  │  │                                              │    │
│  │  │  └─ "/projects" → <Projects> Page             │    │
│  │  │      └─ All Projects Grid (ProjectBox)         │    │
│  │  │                                                  │    │
│  │  └─ <Footer>                                       │    │
│  │     ├─ Contact Info                               │    │
│  │     └─ Social Links                               │    │
│  └────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
```

---

## Data Flow Diagram

```
Gist Files (JSON)
    │
    ├─ personal-info.json → useGistData() → <Home> Hero
    │
    ├─ education.json → useGistData() → <EducationBox>
    │
    ├─ skills.json → useGistData() → <SkillBox>
    │
    ├─ projects.json → useGistData() → <ProjectBox>
    │
    ├─ resume.json → useGistData() → Download Button
    │
    ├─ experience.json → useGistData() → Experience Cards
    │
    └─ socials.json → useGistData() → <Footer>

LeetCode API
    └─ @viraldobariya33 → LeetcodeContext → LeetCode Stats Grid

Theme Context
    └─ isDark → All Components → Dark/Light Styling
```

---

## Component Tree

```
App
├── ThemeProvider
│   └── LeetcodeProvider
│       └── Routes
│           └── Layout
│               ├── Header
│               │   ├── Navigation
│               │   │   ├── Link (Home)
│               │   │   └── Link (Projects)
│               │   └── Theme Toggle Button
│               ├── Outlet
│               │   ├── Home
│               │   │   ├── Hero Section
│               │   │   ├── Resume Button
│               │   │   ├── EducationBox[] (mapped)
│               │   │   ├── SkillBox[] (mapped)
│               │   │   ├── ProjectBox[] (featured, mapped)
│               │   │   ├── Experience Cards (mapped)
│               │   │   └── LeetCode Stats Grid
│               │   │
│               │   └── Projects
│               │       └── ProjectBox[] (all, mapped)
│               │
│               └── Footer
│                   ├── Contact Info
│                   └── Social Links
```

---

## Component Props & Data

### Header
```javascript
// No props needed
// Uses Context:
- ThemeContext (isDark, toggleTheme)
- menus from menuData.js
```

### EducationBox
```javascript
Props: {
  education: {
    name: string,
    program: string,
    duration: string,
    grade: string
  }
}
```

### SkillBox
```javascript
Props: {
  category: string,     // e.g., "Languages"
  items: string[]       // e.g., ["JavaScript", "Python", ...]
}
```

### ProjectBox
```javascript
Props: {
  project: {
    id: number,
    name: string,
    desc: string,
    fullDesc: string,
    github: string,           // Required
    liveLink: string | null,  // Optional
    tags: string[],
    featured: boolean
  }
}
```

### Footer
```javascript
// No props needed
// Uses Context:
- ThemeContext (isDark)
```

---

## Custom Hooks

### useGistData
```javascript
// Usage:
const { data, loading, error } = useGistData('personal-info.json');

// Returns:
{
  data: object | null,      // Parsed JSON or null
  loading: boolean,         // true while fetching
  error: string | null      // Error message or null
}
```

### Built-in Hooks Used
- `useState` - State management
- `useContext` - Access Context values
- `useEffect` - Side effects (API calls, theme updates)

---

## Context Providers

### ThemeContext
```javascript
// Value:
{
  isDark: boolean,
  toggleTheme: () => void
}

// Providers wrapper in App:
<ThemeProvider>
  {children}
</ThemeProvider>
```

### LeetcodeContext
```javascript
// Value:
{
  loading: boolean,
  leetcodeData: {
    totalSolved: number,
    easySolved: number,
    mediumSolved: number,
    hardSolved: number
  }
}

// Provider wrapper in App:
<LeetcodeProvider>
  {children}
</LeetcodeProvider>
```

---

## Data Sources

### Static Data (File-based)
- `menuData.js` → Navigation items

### Dynamic Data (Gist)
1. **personal-info.json**
   - Name, title, bios, contact

2. **education.json**
   - List of education records

3. **skills.json**
   - Categories with skill items

4. **projects.json**
   - Project details with links

5. **resume.json**
   - Resume PDF URL

6. **experience.json**
   - Work experience records

7. **socials.json**
   - Social media links

### API Data
- **LeetCode API** → Problem solving stats

---

## Rendering Flow

```
Home Page
├─ Uses useGistData('personal-info.json')
│  └─ Renders Hero Section with name & title
├─ Uses useGistData('education.json')
│  └─ Maps data to <EducationBox> components
├─ Uses useGistData('skills.json')
│  └─ Maps categories to <SkillBox> components
├─ Uses useGistData('projects.json')
│  └─ Filters featured: true
│  └─ Maps first 3 to <ProjectBox> components
├─ Uses useGistData('experience.json')
│  └─ Renders experience cards (if array not empty)
├─ Uses LeetcodeContext
│  └─ Renders LeetCode stats grid
└─ Uses useGistData('resume.json')
   └─ Sets download link

Projects Page
├─ Uses useGistData('projects.json')
│  └─ Maps ALL projects to <ProjectBox> components

Header
├─ Uses ThemeContext (isDark, toggleTheme)
├─ Renders Navigation from menuData.js
└─ Renders Theme Toggle Button

Footer
├─ Uses ThemeContext (isDark)
├─ Uses useGistData('socials.json')
└─ Renders Contact & Social Links
```

---

## State Management

### Global State (Context)
- `ThemeContext` - Dark/Light mode (persisted in localStorage)
- `LeetcodeContext` - LeetCode stats (fetched from API)

### Local State (Components)
- `Header` - Mobile menu open/close
- Custom components - When needed

### No Global State Manager Needed
- Using React Context is sufficient
- No Redux/Zustand needed for this size app
- Clean and simple architecture

---

## Styling Approach

### Tailwind CSS 4
- Utility-first CSS framework
- No CSS files needed
- Dark mode support built-in
- Responsive classes (md:, lg:, etc.)

### Theme Implementation
- ThemeContext provides `isDark` boolean
- Components conditionally apply classes:
  ```javascript
  className={`${isDark ? 'dark-classes' : 'light-classes'}`}
  ```

### Color System
- Rose/Pink: Primary accent (gradients)
- Gray: Neutral (text, backgrounds)
- Blue/Green/Amber/Red: Secondary accents
- Slate: Dark mode cards & borders

---

## File Dependencies

```
App.jsx
├── imports Layout.jsx
├── imports Home.jsx
├── imports Projects.jsx
├── imports LeetcodeContext.jsx
└── imports ThemeContext.jsx

Layout.jsx
├── imports Header.jsx
├── imports Footer.jsx
└── imports ThemeContext.jsx

Header.jsx
├── imports menuData.js
└── imports ThemeContext.jsx

Home.jsx
├── imports useGistData.js (7 files)
├── imports SkillBox.jsx
├── imports EducationBox.jsx
├── imports ProjectBox.jsx
├── imports ThemeContext.jsx
└── imports LeetcodeContext.jsx

Projects.jsx
├── imports useGistData.js
├── imports ProjectBox.jsx
└── imports ThemeContext.jsx

Components/
├── ProjectBox.jsx → imports ThemeContext.jsx
├── SkillBox.jsx → imports ThemeContext.jsx
├── EducationBox.jsx → imports ThemeContext.jsx
└── Footer.jsx → imports ThemeContext.jsx
```

---

## Deployment Architecture

```
Source
  ↓
GitHub (Version Control)
  ↓
Deployment Platform (Vercel/Netlify/GitHub Pages)
  ├─ Builds with Vite
  ├─ Fetches data from Gist at runtime
  ├─ Fetches LeetCode API at runtime
  └─ Serves static + dynamic content
```

---

**This architecture is scalable, maintainable, and easy to update!** 🚀
