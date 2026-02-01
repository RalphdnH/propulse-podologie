# 🚀 Quick Start Guide - MovePoint Website

## Welkom Koen! 👋

Deze guide helpt je om snel aan de slag te gaan met je nieuwe website.

## 📦 Wat je hebt ontvangen

Een complete website met:
- ✅ 6 professionele pagina's (Home, Over Mezelf, Voor wie, Behandelingen, Tarieven, Contact)
- ✅ Responsive design (werkt op alle apparaten)
- ✅ Jouw logo en foto geïntegreerd
- ✅ Alle content over podologie en behandelingen
- ✅ Contactformulier en Google Maps
- ✅ Klaar om online te zetten!

## 🎯 In 3 stappen online!

### Stap 1: Bestanden naar je computer
1. Download de `movepoint-website` folder
2. Zet hem bijvoorbeeld in `C:\Projects\MovePoint\`

### Stap 2: Hero banner afbeelding toevoegen
De website heeft nog één afbeelding nodig voor de grote banner op de homepage:

**Waar vind je een gratis afbeelding?**
- [Unsplash](https://unsplash.com/s/photos/running-feet) - Zoek op "feet sports", "running", "podiatry"
- [Pexels](https://www.pexels.com/search/podiatry/) - Zoek op "podiatry", "feet health"

**Wat moet je doen?**
1. Download een afbeelding die je mooi vindt (voeten in beweging, sport thema, of een medische setting)
2. Hernoem hem naar `hero-banner.jpg`
3. Plaats hem in de folder: `assets/images/hero-banner.jpg`

**Aanbevolen specificaties:**
- Minimaal 1920x1080 pixels
- Landschap formaat
- JPG formaat

### Stap 3: Online zetten met GitHub Pages (GRATIS!)

#### Optie A: Via GitHub Desktop (makkelijkst)
1. Download [GitHub Desktop](https://desktop.github.com/)
2. Maak een GitHub account aan als je die nog niet hebt
3. In GitHub Desktop: File → New Repository
   - Name: `movepoint-website`
   - Local Path: Kies waar je website folder staat
   - Klik "Create Repository"
4. Klik "Publish repository" (zet Public aan, Private uitvinken)
5. Op GitHub.com → Ga naar je repository → Settings → Pages
6. Bij "Source" kies: **main branch** en **/ (root)**
7. Klik "Save"
8. Klaar! Je website is nu live op: `https://jouwnaam.github.io/movepoint-website`

#### Optie B: Handmatig uploaden
1. Ga naar [GitHub.com](https://github.com) en maak een account
2. Klik op "+" → "New repository"
3. Naam: `movepoint-website`, zet op Public
4. Klik "uploading an existing file"
5. Sleep alle bestanden van je website naar het scherm
6. Klik "Commit changes"
7. Settings → Pages → Source: main branch → Save
8. Website is live!

## 🌐 Eigen domeinnaam koppelen (optioneel)

Wil je een domeinnaam zoals `www.movepoint-podologie.be`?

1. **Koop een domeinnaam** bij:
   - [Combell](https://www.combell.com/) (Belgisch)
   - [TransIP](https://www.transip.nl/)
   - [Namecheap](https://www.namecheap.com/)

2. **Koppel aan GitHub Pages**:
   - In je GitHub repository: Settings → Pages → Custom domain
   - Vul je domeinnaam in (bijv. `www.movepoint-podologie.be`)
   - Bij je domain provider stel je DNS in:
     - CNAME record: `www` → `jouwnaam.github.io`

## ✏️ Content aanpassen

Wil je teksten wijzigen?

1. **Via GitHub website**:
   - Ga naar je repository op GitHub.com
   - Klik op het bestand dat je wilt wijzigen (bijv. `index.html`)
   - Klik op het potlood icoon (Edit)
   - Pas de tekst aan
   - Scroll naar beneden, klik "Commit changes"
   - Website wordt automatisch bijgewerkt!

2. **Lokaal met teksteditor**:
   - Open het HTML bestand in Notepad, VS Code, of andere editor
   - Zoek de tekst die je wilt aanpassen
   - Verander de tekst
   - Upload opnieuw naar GitHub via GitHub Desktop

## 📸 Meer foto's toevoegen

Wil je extra foto's van je praktijk toevoegen?

1. Zet foto's in de `assets/images/` folder
2. Geef ze duidelijke namen (bijv. `praktijk-ruimte.jpg`)
3. Voeg ze toe in de HTML waar je ze wilt laten zien

## 📧 Contactformulier activeren

Het formulier toont nu een melding. Om echte emails te ontvangen:

**Optie 1: Formspree (makkelijkst, gratis)**
1. Ga naar [Formspree.io](https://formspree.io) en maak een account
2. Maak een nieuw form aan
3. Kopieer de form endpoint URL
4. In `contact.html`, wijzig de `<form>` tag:
   ```html
   <form id="contactForm" action="JE_FORMSPREE_URL" method="POST">
   ```

**Optie 2: Netlify (als je op Netlify host)**
- Voeg toe aan `<form>` tag: `data-netlify="true"`
- Netlify vangt automatisch submissions op

## 🔄 Website updaten

Wanneer je iets wijzigt:
1. Bewerk lokaal de bestanden
2. Push naar GitHub (via GitHub Desktop of command line)
3. Website wordt automatisch bijgewerkt (binnen 1-2 minuten)

## 📱 Social Media links updaten

Zodra je Facebook en Instagram pagina's hebt aangemaakt:

1. Open elk HTML bestand
2. Zoek naar `<a href="#"` in de footer
3. Vervang `#` met je echte social media URLs
4. Bijvoorbeeld: `<a href="https://www.facebook.com/movepointpodologie">`

## ❓ Veelgestelde vragen

**Q: Is GitHub Pages echt gratis?**
A: Ja! 100% gratis voor publieke websites.

**Q: Kan ik later nog dingen wijzigen?**
A: Absoluut! Je kan alles aanpassen wanneer je maar wilt.

**Q: Wat als ik vast loop?**
A: Stuur een bericht, ik help je graag verder!

**Q: Moet ik programmeren kunnen?**
A: Nee, voor basis wijzigingen is gewoon tekst aanpassen genoeg!

## 📞 Support

Heb je vragen? Laat het me weten!

---

**Veel succes met je praktijk! 💪🦶**
