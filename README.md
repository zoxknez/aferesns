# 📊 Spisak Afera SNS (2012-2025)

Moderna web aplikacija koja prikazuje preko 320 zabeleženih ili prijavljenih afera i skandala povezanih sa SNS strankom i državnom upravom Srbije u periodu 2012–2025. godine.

## 🎯 Karakteristike

- **Vizuelni prikaz štete** - Interaktivni grafikon koji prikazuje procenjenu štetu po kategorijama (do 6 milijardi €)
- **Pretraga** - Pretražite afere po ključnim rečima
- **Filteri** - Filtrirajte po kategoriji i godini
- **Linkovi ka člancima** - Direktne veze ka novinarskim člancima (uskoro)
- **Detekcija duplikata** - Označene duplirane afere (npr. Aflatoksin u mleku - stavke 30 i 31)
- **Potpuno responsive dizajn** - Savršeno optimizovano za sve uređaje (desktop, tablet, mobilni)
- **Touch-friendly** - Veliki dodirni ciljevi (min 44px) i optimizovana mobilna navigacija
- **Moderna UI** - Elegantno i intuitivno korisničko iskustvo
- **Pristupačnost** - Pravilna semantika i fokus indikatori

## 🚀 Kako pokrenuti

### Opcija 1: Direktno otvaranje
Jednostavno otvorite `index.html` fajl u vašem web pretraživaču (Chrome, Firefox, Edge, itd.)

### Opcija 2: Lokalni server (preporučeno)
Za najbolje iskustvo, pokrenite lokalni server:

**Python 3:**
```bash
python -m http.server 8000
```

**Python 2:**
```bash
python -m SimpleHTTPServer 8000
```

**Node.js (ako imate instaliran):**
```bash
npx http-server
```

Zatim otvorite `http://localhost:8000` u vašem pretraživaču.

## 📂 Struktura projekta

```
spisakafera/
├── index.html          # Glavna HTML stranica
├── style.css           # Stilovi i responsive dizajn
├── script.js           # JavaScript funkcionalnost i podaci
├── README.md           # Dokumentacija
└── dokument/
    └── Spisak afera SNS (2012–2025).md  # Originalni dokument
```

## 🔍 Pronađeni duplikati

Tokom analize podataka, pronađeni su sledeći duplikati:

1. **Stavke 30 i 31**: "Aflatoksin u mleku (2013)" - obe stavke su identične
2. **"Pad nadstrešnice"**: Nalazi se na početku dokumenta ali nije numerisan - dodat kao stavka 0

## 💰 Vizuelni prikaz štete (procena)

- **Javne nabavke**: 2-3 milijarde €
- **Velike građevinske afere**: 0,5-1,0 milijardi €
- **Lokalne "mikro" afere**: 0,3-0,5 milijardi €
- **Zemljište i koncesije**: oko 1 milijarda €
- **Predizborni pokloni/glasovi**: 0,2-0,3 milijardi €

**UKUPNO**: Maksimalno 6 milijardi € procenjene štete

## 📰 Linkovi ka člancima

Linkovi ka novinarskim člancima biće dodati uskoro. Trenutno sve afere prikazuju "📰 Uskoro" dok se ne prikupe odgovarajući izvori.

## 🎨 Kategorije afera

Afere su grupisane u sledeće kategorije:

- Urbanizam
- Zdravstvo
- Izbori
- Finansije
- Mediji
- Ekologija
- Saobraćaj
- Obrazovanje
- Privreda
- Lokalna vlast
- Sport
- IT
- Transport
- Kultura
- Poljoprivreda
- Energetika
- Infrastruktura
- Bezbednost
- Socijalna politika
- I druge...

## ⚠️ Napomena

Pored novčane štete, procenjuje se da su mnoge afere direktno/indirektno dovele do gubitaka ljudskih života, kroz loše zdravstvo, nesigurne građevinske radove, zapuštenu infrastrukturu i migracije koje su naterale ljude u rizične situacije. Ove posledice ostavljaju dubok i nemerljiv trag na društvo.

## 🛠️ Tehnologije

- **HTML5** - Struktura
- **CSS3** - Stilizacija i animacije
- **JavaScript (Vanilla)** - Logika i interaktivnost
- **Chart.js** - Vizualizacija podataka

## 📱 Kompatibilnost

Aplikacija je testirana i funkcioniše na:
- ✅ Google Chrome 90+
- ✅ Mozilla Firefox 88+
- ✅ Microsoft Edge 90+
- ✅ Safari 14+
- ✅ Mobilni pretraživači (iOS Safari, Chrome Mobile)

## 📄 Licenca

Podaci prikupljeni iz javnih izvora. Aplikacija kreirana za transparentnost i javnost.

## 🤝 Doprinos

Ako želite da dodate nove afere ili ispravite postojeće podatke, možete:
1. Ažurirati `script.js` fajl (niz `affairs`)
2. Dodati nove linkove ka novinarskim člancima
3. Ažurirati kategorije ili godine

## 📧 Kontakt

Za pitanja, sugestije ili dopune, molimo kontaktirajte kroz GitHub Issues ili direktno.

---

**Verzija:** 2.1  
**Poslednje ažuriranje:** 2025  
**Broj afera:** 323 (uključujući duplikate)

## 📱 Mobilna optimizacija

Aplikacija je potpuno optimizovana za mobilne uređaje sa:
- Responsivnim layoutom koji se prilagođava veličini ekrana
- Velikim touch targetima (minimum 44px)
- Optimizovanim font veličinama (16px+) za sprečavanje zoom-a na iOS
- Horizontalnim scrollovanjem za kategorije štete
- Prilagođenim razmacima i paddingom za lakše korišćenje na mobilnom
- Touch-friendly kontrolama i dugmićima

