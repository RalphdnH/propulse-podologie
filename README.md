# MovePoint Podologie Website

Professionele website voor MovePoint Podologie - Podologische praktijk gevestigd in Elevate Physio, Mortsel.

## 🎯 Over dit project

Deze website is ontwikkeld voor Koen Alenis, gediplomeerd podoloog, die zijn praktijk MovePoint Podologie start. De website biedt een professioneel online visitekaartje met informatie over behandelingen, tarieven en contactmogelijkheden.

## ✨ Features

- **Responsive Design**: Volledig geoptimaliseerd voor desktop, tablet en mobiel
- **Modern & Clean**: Witte basis met blauwe accenten (#1c98a3) voor een medisch-professionele uitstraling
- **6 Pagina's**:
  - Home - Introductie en overzicht
  - Over Mezelf - Informatie over Koen Alenis
  - Voor wie - Doelgroepen en indicaties
  - Behandelingen - Uitgebreid overzicht van alle diensten
  - Tarieven - Transparante prijzen en verzekeringsinformatie
  - Contact - Contactformulier, gegevens en Google Maps integratie
- **Interactieve Elementen**: Mobiel menu, smooth scrolling, animaties
- **SEO-vriendelijk**: Meta tags en semantische HTML structuur

## 📁 Projectstructuur

```
movepoint-website/
├── index.html
├── over-mezelf.html
├── voor-wie.html
├── behandelingen.html
├── tarieven.html
├── contact.html
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── script.js
│   └── images/
│       ├── logo.png
│       ├── koen-alenis.jpg
│       └── hero-banner.jpg (toe te voegen)
└── README.md
```

## 🚀 Deployment naar GitHub Pages

### Stap 1: GitHub Repository aanmaken

1. Ga naar [GitHub](https://github.com) en log in
2. Klik op het "+" icoon rechtsboven en selecteer "New repository"
3. Geef je repository een naam, bijvoorbeeld: `movepoint-website`
4. Zet de repository op **Public**
5. Klik op "Create repository"

### Stap 2: Lokale files uploaden

**Optie A: Via GitHub Desktop (makkelijkst)**
1. Download en installeer [GitHub Desktop](https://desktop.github.com/)
2. Clone je nieuwe repository naar je computer
3. Kopieer alle website bestanden naar de geclonede folder
4. Commit de wijzigingen met een message zoals "Initial website commit"
5. Push naar GitHub

**Optie B: Via Git Command Line**
```bash
# Navigeer naar je project folder
cd C:\Projects\MovePoint\movepoint-website

# Initialiseer Git
git init

# Voeg alle bestanden toe
git add .

# Commit de bestanden
git commit -m "Initial commit: MovePoint website"

# Koppel aan je GitHub repository (vervang USERNAME en REPO)
git remote add origin https://github.com/USERNAME/REPO.git

# Push naar GitHub
git branch -M main
git push -u origin main
```

### Stap 3: GitHub Pages activeren

1. Ga naar je repository op GitHub
2. Klik op "Settings"
3. Scroll naar beneden naar "Pages" in het linkermenu
4. Bij "Source" selecteer **main** branch en **/root**
5. Klik op "Save"
6. Na een paar minuten is je website live op: `https://USERNAME.github.io/REPO/`

### Stap 4: Custom Domain koppelen (optioneel)

Als je een domeinnaam hebt gekocht:

1. Voeg in GitHub Pages settings je custom domain toe (bijv. `www.movepoint-podologie.be`)
2. Maak een `CNAME` bestand aan in je repository met je domeinnaam
3. Bij je domain registrar (Combell, TransIP, etc.):
   - Voeg een **CNAME record** toe:
     - Host: `www`
     - Value: `USERNAME.github.io`
   - Of voeg **A records** toe die wijzen naar GitHub Pages IPs:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`

## 🔧 Nog te doen

### Afbeeldingen toevoegen

De volgende afbeeldingen moeten nog toegevoegd worden aan `/assets/images/`:

1. **hero-banner.jpg** - Hero banner voor de homepage
   - Aanbevolen: Voeten in beweging, sport, of medische setting
   - Afmetingen: 1920x1080px of groter
   - Gratis te vinden op: [Unsplash](https://unsplash.com/s/photos/feet-sports), [Pexels](https://www.pexels.com/search/podiatry/)

2. **Praktijk foto's** (optioneel)
   - Foto's van de praktijkruimte bij Elevate Physio
   - Kunnen toegevoegd worden aan de "Waarom kiezen voor MovePoint" sectie

### Contactformulier backend

Het contactformulier is momenteel frontend-only. Voor een werkend formulier zijn er verschillende opties:

**Optie 1: Netlify Forms** (Gratis & Makkelijk)
- Host de website op Netlify in plaats van GitHub Pages
- Voeg `netlify` attribute toe aan de form tag
- Formulier data wordt automatisch verzameld in Netlify dashboard

**Optie 2: Formspree** (Gratis tier beschikbaar)
- Registreer op [Formspree.io](https://formspree.io)
- Wijzig de form action naar je Formspree endpoint
- Emails worden doorgestuurd naar jouw e mailadres

**Optie 3: EmailJS** (Gratis tier beschikbaar)
- Registreer op [EmailJS.com](https://www.emailjs.com/)
- Configureer een email service
- Update `script.js` met EmailJS integratie

### Content updates

De volgende placeholders moeten nog vervangen worden:

- Facebook pagina URL (momenteel placeholder "#")
- Instagram pagina URL voor MovePoint (momenteel linkt naar Elevate Physio)
- Hero banner afbeelding
- Eventuele aanvullende praktijkfoto's

## 🎨 Kleurenschema

- **Primary Color**: #1c98a3 (Blauw/Turquoise)
- **Primary Dark**: #167d86
- **Primary Light**: #e6f7f8
- **White**: #ffffff
- **Background**: #f8f9fa
- **Text Dark**: #2c3e50
- **Text Gray**: #6c757d

## 📱 Browser Compatibiliteit

- ✅ Chrome (laatste 2 versies)
- ✅ Firefox (laatste 2 versies)
- ✅ Safari (laatste 2 versies)
- ✅ Edge (laatste 2 versies)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Content Management

Om content te wijzigen:
1. Open het relevante HTML bestand in een teksteditor
2. Zoek de sectie die je wilt aanpassen
3. Wijzig de tekst tussen de HTML tags
4. Commit en push de wijzigingen naar GitHub
5. De website wordt automatisch bijgewerkt

## 🤝 Support

Voor vragen of problemen met de website:
- **Technische vragen**: Neem contact op met de developer
- **Inhoudelijke wijzigingen**: Bewerk de HTML bestanden direct

## 📄 Licentie

© 2026 MovePoint Podologie. Alle rechten voorbehouden.

---

**Website gebouwd met ❤️ voor MovePoint Podologie**
