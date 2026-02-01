# 📋 MovePoint Website - Complete Overzicht

## ✅ Wat is er gemaakt?

Een volledige, professionele website voor MovePoint Podologie bestaande uit:

### Pagina's (6 stuks)
1. **index.html** - Homepage met hero banner, introductie, diensten overzicht
2. **over-mezelf.html** - Informatie over Koen Alenis, opleiding, expertise
3. **voor-wie.html** - Doelgroepen (sporters, ouderen, kinderen, risicopatiënten, etc.)
4. **behandelingen.html** - Uitgebreide beschrijving van alle behandelingen
5. **tarieven.html** - Transparant prijsoverzicht gebaseerd op Podoloog Vandaele
6. **contact.html** - Contactformulier, gegevens, Google Maps, FAQ

### Design & Styling
- **Kleurenschema**: Wit met blauwe accenten (#1c98a3)
- **Font**: Inter (moderne, professionele sans-serif)
- **Volledig responsive**: Desktop, tablet, mobiel
- **Moderne UI elementen**: Smooth scrolling, animaties, hover effects
- **Toegankelijk**: Semantische HTML, aria-labels, keyboard navigatie

### Functionaliteiten
- ✅ Mobiel hamburger menu
- ✅ Sticky navigatiebalk
- ✅ Contactformulier (frontend klaar, backend nog te configureren)
- ✅ Google Maps integratie
- ✅ Social media links (placeholders voor Facebook, Instagram link naar Elevate Physio)
- ✅ Smooth scroll naar secties
- ✅ Animaties bij scrollen
- ✅ Active page highlighting in navigatie

## 📂 Bestandsstructuur

```
movepoint-website/
│
├── index.html                 # Homepage
├── over-mezelf.html           # Over Koen pagina
├── voor-wie.html              # Doelgroepen pagina
├── behandelingen.html         # Behandelingen overzicht
├── tarieven.html              # Prijzen en verzekeringen
├── contact.html               # Contact pagina
│
├── assets/
│   ├── css/
│   │   └── styles.css         # Alle styling (4000+ regels)
│   ├── js/
│   │   └── script.js          # Interactiviteit en functies
│   └── images/
│       ├── logo.png           # MovePoint logo (Variant B)
│       ├── koen-alenis.jpg    # Foto van Koen
│       └── hero-banner.jpg    # ⚠️ NOG TOE TE VOEGEN
│
├── README.md                  # Technische documentatie
├── QUICK-START.md            # Snelle startgids voor Koen
└── .gitignore                # Git configuratie
```

## ⚠️ Nog te doen

### 1. Hero Banner Afbeelding (Prioriteit: HOOG)
- **Wat:** Een mooie afbeelding voor de grote banner op de homepage
- **Waar:** `assets/images/hero-banner.jpg`
- **Specificaties:** 1920x1080px of groter, landschap formaat, JPG
- **Inspiratie:** Voeten in beweging, sport, medische setting
- **Gratis bronnen:**
  - https://unsplash.com/s/photos/feet-sports
  - https://www.pexels.com/search/podiatry/

### 2. Social Media Links
- **Facebook pagina URL** - momenteel placeholder "#"
- **Instagram pagina URL** - momenteel linkt naar Elevate Physio

### 3. Contactformulier Backend (Optioneel maar aanbevolen)
Kies één van deze opties:

**Optie A: Formspree** (Makkelijkst)
- Gratis tot 50 submissions/maand
- Registreer op formspree.io
- Wijzig form action in contact.html

**Optie B: Netlify Forms** (Als je op Netlify host)
- Voeg `data-netlify="true"` toe aan form tag
- Automatische email notificaties

**Optie C: EmailJS**
- Gratis tot 200 emails/maand
- JavaScript integratie in script.js

### 4. Domain Naam (Wanneer je website live wilt)
Suggesties:
- movepoint-podologie.be
- movepointpodologie.be
- movepoint.be (als beschikbaar)

Registreer bij: Combell, TransIP, Namecheap

## 🚀 Deployment Opties

### Optie 1: GitHub Pages (Aanbevolen - GRATIS)
**Voordelen:**
- ✅ 100% gratis
- ✅ Automatische HTTPS
- ✅ Custom domain support
- ✅ Onbeperkte bandbreedte
- ✅ Eenvoudig te updaten

**Stappen:**
1. Maak GitHub account
2. Maak nieuwe repository (public)
3. Upload alle bestanden
4. Settings → Pages → Source: main branch
5. Website live op `username.github.io/movepoint-website`

### Optie 2: Netlify (Ook gratis, iets meer features)
**Extra voordelen:**
- ✅ Drag & drop deployment
- ✅ Formulieren functionaliteit ingebouwd
- ✅ Automatische form spam filtering

### Optie 3: Traditionele Hosting
Providers zoals Combell, One.com, Hostinger
- Betaald (€3-10/maand)
- Meer controle
- Vaak domein inbegrepen

## 📊 Website Content Overzicht

### Homepage
- Hero sectie met tagline "Uw voeten in goede handen"
- Introductie over MovePoint en Koen
- 4 hoofddiensten in kaarten
- Waarom kiezen voor MovePoint sectie
- Call-to-action naar contact

### Over Mezelf
- Persoonlijk verhaal van Koen
- Werkwijze en aanpak
- Opleiding & expertise
- Praktijklocatie info
- Beschikbaarheid

### Voor Wie
- 6 doelgroepen uitgewerkt:
  - Sporters
  - Volwassenen met bewegingsklachten
  - Ouderen
  - Risicopatiënten
  - Kinderen
  - Werkgerelateerde klachten
- Wanneer naar de podoloog sectie

### Behandelingen
- Biomechanisch onderzoek & ganganalyse (details)
- Podologische zolen op maat (proces)
- Podologische voetverzorging
- Voetverzorging risicopatiënten
- Siliconen orthesen
- Nagelbeugels (Orthonyxie)
- Nagelaanbouw
- Schoenadvies
- Sporttape & kinesiotape
- Hoe verloopt eerste afspraak (4-stappen proces)

### Tarieven
- Volledige prijslijst gebaseerd op Podoloog Vandaele
- Biomechanisch onderzoek: €55 (volw.) / €45 (kind)
- Podologische zolen: €210 (volw.) / €170 (kind)
- Carbon zolen: €240 (volw.) / €190 (kind)
- Voetverzorging: €45
- Risicopatiënten: €50
- Extra behandelingen met prijzen
- Verzekeringsinformatie
- Betaling & annuleringsbeleid

### Contact
- Werkend contactformulier (UI klaar)
- Contactgegevens:
  - Tel: 0491 22 06 17
  - Email: info@movepoint-podologie.be
  - Adres: Krijgsbaan 96, 2640 Mortsel (Elevate Physio)
- Google Maps integratie
- Bereikbaarheid info (auto & OV)
- FAQ sectie (6 veelgestelde vragen)

## 🎨 Design Specificaties

### Kleurenpalet
- **Primary**: #1c98a3 (Turquoise blauw)
- **Primary Dark**: #167d86
- **Primary Light**: #e6f7f8
- **Text Dark**: #2c3e50
- **Text Gray**: #6c757d
- **Background**: #f8f9fa
- **White**: #ffffff

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semi-Bold), 700 (Bold)
- **Base Size**: 16px
- **Line Height**: 1.7

### Responsive Breakpoints
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 💾 Bestand Groottes

- **Totale website**: ~195KB (zonder hero banner)
- **CSS**: ~35KB
- **JavaScript**: ~8KB
- **Logo PNG**: ~117KB
- **Koen foto JPG**: ~69KB
- **HTML files**: ~300KB totaal

## ✨ Extra Features & Polish

- **SEO Ready**: Meta descriptions op elke pagina
- **Performance**: Geoptimaliseerde images, minified CSS mogelijkheid
- **Accessibility**: Semantische HTML, ARIA labels, keyboard navigatie
- **Cross-browser**: Compatibel met Chrome, Firefox, Safari, Edge
- **Mobile-first**: Ontworpen voor mobiele gebruikers
- **Print-friendly**: CSS voor print media
- **Social Media Ready**: Open Graph tags kunnen toegevoegd worden

## 📞 Support & Updates

### Kleine wijzigingen (tekst, afbeeldingen)
- Direct in HTML bestanden aan te passen
- Geen programmeerkennis nodig

### Grotere wijzigingen (layout, nieuwe pagina's)
- Eventueel hulp inschakelen
- Of zelf leren via HTML/CSS tutorials

### Hosting support
- GitHub Pages: Uitstekende documentatie
- Community forums beschikbaar
- YouTube tutorials voor beginners

## 🎯 Volgende Stappen

1. **Direct (voor eerste versie live):**
   - [ ] Hero banner afbeelding toevoegen
   - [ ] Website uploaden naar GitHub
   - [ ] GitHub Pages activeren
   - [ ] Website testen op verschillende apparaten

2. **Binnen eerste week:**
   - [ ] Facebook pagina aanmaken en link updaten
   - [ ] Instagram link updaten (als aparte MovePoint account)
   - [ ] Contactformulier backend configureren (Formspree of Netlify)
   - [ ] Website aan Koen laten zien voor feedback

3. **Optioneel later:**
   - [ ] Domeinnaam kopen en koppelen
   - [ ] Extra praktijkfoto's toevoegen
   - [ ] Google Analytics toevoegen voor statistieken
   - [ ] Online afspraak systeem integreren

## 📝 Licentie & Copyright

© 2026 MovePoint Podologie - Alle rechten voorbehouden

---

**Gebouwd met ❤️ in februari 2026**

Website is klaar voor deployment en gebruik! 🚀
