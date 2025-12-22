# 🎯 Quick Gist Setup Instructions

## Your Gist URL
https://gist.github.com/6355121720/591efca2e09f0a1a769b33ff184c8d56

## Files to Create/Edit in Gist

Copy-paste these into your Gist. Make sure filenames are EXACT.

---

## File 1: `personal-info.json`
```json
{
  "name": "Viral Dobariya",
  "title": "Full Stack Developer & DevOps Enthusiast",
  "shortBio": "I build exceptional digital experiences with clean code and modern technologies",
  "longBio": "I'm a passionate full-stack developer specializing in creating elegant, intuitive, and high-performing web applications that solve real-world problems.",
  "email": "viraldobariya33@gmail.com",
  "phone": "+91-XXXXXXXXXX"
}
```

---

## File 2: `education.json`
```json
{
  "education": [
    {
      "name": "Charusat University",
      "program": "B.Tech in Computer Engineering",
      "duration": "2023 - 2027",
      "grade": "8.34/10"
    },
    {
      "name": "Orbit Career Institute",
      "program": "HSC (Science), GSEB",
      "duration": "2021 - 2023",
      "grade": "97.13 percentile"
    }
  ]
}
```

---

## File 3: `skills.json`
```json
{
  "skills": [
    {
      "category": "Languages",
      "items": ["C", "C++", "Java", "JavaScript", "Python", "SQL"]
    },
    {
      "category": "Web Development",
      "items": ["React.js", "Tailwind CSS", "Express.js", "Spring Boot"]
    },
    {
      "category": "Machine Learning/AI",
      "items": ["Numpy", "Pandas", "Matplotlib", "Seaborn", "Scikit-Learn", "Tensorflow"]
    },
    {
      "category": "DevOps & Cloud",
      "items": ["Docker", "Kubernetes", "Jenkins", "Git", "AWS"]
    }
  ]
}
```

---

## File 4: `projects.json`
```json
{
  "projects": [
    {
      "id": 1,
      "name": "VirtualR",
      "desc": "A modern VR company website built with React and Tailwind",
      "fullDesc": "A modern, fully responsive website for a virtual reality company, built with React.js and Tailwind CSS, showcasing services and products with sleek UI and immersive design.",
      "github": "https://github.com/6355121720/VirtualR",
      "liveLink": "https://virtualr-viraldobariya.vercel.app/",
      "tags": ["React.js", "Tailwind CSS", "Responsive Design"],
      "featured": true
    },
    {
      "id": 2,
      "name": "FarmEase",
      "desc": "MERN platform connecting farmers directly with consumers",
      "fullDesc": "A MERN stack platform empowering farmers to sell directly to consumers, with user authentication, product listings, and a focus on eliminating middlemen for fair pricing.",
      "github": "https://github.com/6355121720/FarmEase",
      "liveLink": null,
      "tags": ["React.js", "Tailwind CSS", "MongoDB", "Express.js", "JWT"],
      "featured": true
    },
    {
      "id": 3,
      "name": "Movie Recommender",
      "desc": "Flask-based movie recommendation system using ML",
      "fullDesc": "A Flask-based web app that recommends movies using content-based filtering, with a simple UI for users to discover similar titles by preference.",
      "github": "https://github.com/6355121720/Movie-Recommendation",
      "liveLink": "https://indian-movie-recommendation.onrender.com/",
      "tags": ["Flask", "CSS", "Data Analysis", "Machine Learning"],
      "featured": true
    }
  ]
}
```

**Notes:**
- `featured: true` - Shows on Home page
- `featured: false` - Shows only on Projects page
- `liveLink: null` - Link won't display
- Add more projects as needed

---

## File 5: `resume.json`
```json
{
  "resumeUrl": "https://your-resume-url-here.pdf"
}
```

**How to get Resume URL:**
1. Upload PDF to GitHub: Commit to a repo, click "Raw", copy URL
2. Or use Google Drive: Upload > Share > Get link > Replace with raw download link
3. Or use any file hosting: Dropbox, OneDrive, S3, etc.

**Example Raw GitHub URL:**
```
https://github.com/6355121720/repo-name/raw/main/ViralDobariyaResume.pdf
```

---

## File 6: `experience.json` (OPTIONAL - Leave empty if no experience)
```json
{
  "experience": [
    {
      "company": "Company Name",
      "position": "Full Stack Developer",
      "duration": "2024 - Present",
      "description": "Describe your responsibilities and achievements here..."
    },
    {
      "company": "Another Company",
      "position": "Developer Intern",
      "duration": "2023 - 2024",
      "description": "More achievements..."
    }
  ]
}
```

If you have no experience, just use empty array:
```json
{
  "experience": []
}
```

---

## File 7: `socials.json` (OPTIONAL)
```json
{
  "socials": [
    {
      "name": "LinkedIn",
      "url": "https://linkedin.com/in/viraldobariya/"
    },
    {
      "name": "GitHub",
      "url": "https://github.com/6355121720/"
    },
    {
      "name": "X",
      "url": "https://x.com/viraldobariya33"
    },
    {
      "name": "LeetCode",
      "url": "https://leetcode.com/u/viraldobariya33/"
    }
  ]
}
```

---

## Steps to Update Your Gist

1. Go to: https://gist.github.com/6355121720/591efca2e09f0a1a769b33ff184c8d56
2. Click **Edit** button
3. For each file:
   - Click **Add file** or edit existing
   - Enter filename (exact match from above)
   - Paste JSON content
   - Click **Update Gist**

---

## Testing

After updating Gist files:
1. Wait 1-2 seconds for GitHub to update
2. Refresh your portfolio website
3. Data should load automatically!

---

## Troubleshooting

**Data not showing?**
- Check filenames match exactly (case-sensitive)
- Verify JSON is valid (use jsonlint.com)
- Check browser console (F12 > Console tab)
- Make sure Gist is public

**Resume link not working?**
- Test the URL directly in browser
- Make sure it's a direct PDF URL (ends in .pdf)
- Try different hosting if needed

**LeetCode stats showing 0?**
- Make sure username is correct: `viraldobariya33`
- API might be temporarily down
- Check internet connection

---

Happy updating! Your portfolio is now live and pulling data dynamically. 🚀
