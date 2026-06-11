# NIHIL SINE HORA — Presentazione HTML
## Pierfilippo Rappa / Design Grafico – Comunicazione Visiva
### ABA Palermo 2026

---

## 📁 Struttura cartella

```
nihil-sine-hora/
├── index.html          ← File principale (apri questo nel browser)
├── css/
│   └── style.css       ← Tutti gli stili
├── js/
│   └── main.js         ← Navigazione slide
└── media/
    ├── background.mp4  ← ⚠️ VIDEO DA INSERIRE QUI
    └── background.webm ← ⚠️ VIDEO (formato alternativo, opzionale)
```

---

## 🎬 Come aggiungere il video

1. Copia il tuo file video nella cartella **`media/`**
2. Rinominalo **`background.mp4`**
3. (Opzionale) Aggiungi anche la versione `.webm` per compatibilità estesa

Il video viene riprodotto **in loop automatico, senza audio, in background**.
Il contenuto delle slide è sovrapposto in modo trasparente.

---

## ⌨️ Navigazione

| Azione | Comando |
|---|---|
| Slide successiva | → `ArrowRight` oppure `Spazio` |
| Slide precedente | ← `ArrowLeft` |
| Pulsanti a schermo | Frecce in basso al centro |
| Touch/mobile | Swipe orizzontale |

---

## 🔤 Font

**Syne** (Google Fonts) — caricato via CDN.
Richiede connessione internet al primo avvio.
Per uso offline, scarica il font da [fonts.google.com/specimen/Syne](https://fonts.google.com/specimen/Syne)
e aggiorna il `<link>` in `index.html` con il percorso locale.

---

## 🖥️ Come aprire

Apri **`index.html`** direttamente nel browser oppure servilo con un server locale:

```bash
# Python
python3 -m http.server 8080

# Node.js
npx serve .
```

Poi vai su `http://localhost:8080`

---

## 📋 Slide

| N° | Titolo |
|---|---|
| 01 | Cover — NIHIL SINE HORA |
| 02 | Incipit — Agostino D'Ippona |
| 03 | Le Domande |
| 04 | Il Percorso |
| 05 | 01 \| Tempus Fugit — Misurazione |
| 06 | 01 \| Tempus Fugit — Chronos / Kairos |
| 07 | 01 \| Tempus Fugit — Lo Scappamento |
| 08 | 02 \| Kairos contro Chronos |
| 09 | 03 \| Anima — "Non ho tempo" |
| 10 | 03 \| Anima — Dati (Meteo, Ritmo...) |
| 11 | 03 \| Anima — Normalizzazione Blob |
| 12 | 03 \| Anima — Esagono |
| 13 | 03 \| Anima — Orologio Ostile |
| 14 | 03 \| Anima — Soggetto e Ambiente |
| 15 | Eodem Revertimur |
| 16 | Grazie / Fine |
