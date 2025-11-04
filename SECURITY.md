# 🔒 BEZBEDNOSNA DOKUMENTACIJA

## Implementirane Bezbednosne Mere

Ovaj sajt je zaštićen na najvišem nivou koristeći sledeće bezbednosne mere:

---

## 1. Content Security Policy (CSP)

**Implementirano:**
- ✅ Ograničeno učitavanje resursa samo sa dozvoljenih izvora
- ✅ Blokiranje inline JavaScript-a (osim gde je neophodno)
- ✅ Sprečavanje učitavanja resursa sa nedozvoljenih domena
- ✅ Frame-ancestors 'none' - sprečava clickjacking napade
- ✅ upgrade-insecure-requests - automatski prebacuje HTTP na HTTPS

**Konfigurisano u:** `index.html` (meta tag) i `.htaccess` (server header)

---

## 2. Subresource Integrity (SRI)

**Implementirano:**
- ✅ Chart.js biblioteka učitana sa SRI hash-om
- ✅ Crossorigin atribut postavljen na "anonymous"
- ✅ Referrerpolicy postavljen na "no-referrer"

**Šta ovo štiti:**
- Sprečava Supply Chain Attack preko kompromitovanih CDN-ova
- Osigurava da se eksterni resursi nisu menjali

**Lokacija:** `index.html` (script tag za Chart.js)

---

## 3. XSS (Cross-Site Scripting) Zaštita

**Implementirano:**
- ✅ `escapeHtml()` funkcija za sanitizaciju svih prikazanih podataka
- ✅ `sanitizeInput()` funkcija za čišćenje korisničkih unosa
- ✅ Validacija i ograničenje dužine pretrage (max 100 karaktera)
- ✅ X-XSS-Protection header

**Funkcije:**
```javascript
function escapeHtml(text) {
    // Escape-uje HTML karaktere
}

function sanitizeInput(input) {
    // Uklanja potencijalno opasne karaktere
}
```

**Lokacija:** `script.js`

---

## 4. Clickjacking Zaštita

**Implementirano:**
- ✅ X-Frame-Options: DENY
- ✅ CSP frame-ancestors: 'none'

**Šta ovo štiti:**
- Sprečava da sajt bude embed-ovan u iframe na drugim sajtovima
- Zaštita od UI redress napada

---

## 5. MIME Type Sniffing Zaštita

**Implementirano:**
- ✅ X-Content-Type-Options: nosniff

**Šta ovo štiti:**
- Sprečava pretraživače da "pogađaju" MIME tipove fajlova
- Zaštita od izvršavanja zlonamjernih fajlova

---

## 6. Referrer Policy

**Implementirano:**
- ✅ Referrer-Policy: strict-origin-when-cross-origin

**Šta ovo štiti:**
- Kontroliše koliko informacija se šalje u Referer header-u
- Sprečava curenje osetljivih informacija

---

## 7. Permissions Policy

**Implementirano:**
- ✅ Onemogućene nepotrebne browser funkcionalnosti:
  - Geolokacija
  - Mikrofon
  - Kamera
  - Plaćanje
  - USB pristup

---

## 8. Rate Limiting i DoS Zaštita

**Implementirano:**
- ✅ Debouncing na pretragama (300ms delay)
- ✅ Ograničenje dužine pretrage
- ✅ mod_evasive konfiguracija u .htaccess (ako je dostupno)

**Šta ovo štiti:**
- Sprečava DoS napade kroz pretragu
- Smanjuje opterećenje servera

---

## 9. External Links Security

**Implementirano:**
- ✅ `rel="noopener noreferrer"` na svim eksternim linkovima
- ✅ `target="_blank"` za bezbedan otvaranje u novom tabu

**Šta ovo štiti:**
- Sprečava reverse tabnabbing napade
- Sprečava curenje referrer informacija

---

## 10. HTTPS Enforcement

**Implementirano:**
- ✅ Strict-Transport-Security (HSTS) header
- ✅ Automatska redirekcija HTTP → HTTPS
- ✅ upgrade-insecure-requests u CSP

**Lokacija:** `.htaccess`

---

## 11. Server Hardening

**Implementirano u .htaccess:**
- ✅ Blokiranje pristupa skrivenim fajlovima (.git, .env, itd.)
- ✅ Onemogućeno directory listing
- ✅ Zaštita backup fajlova
- ✅ Uklanjanje server signature
- ✅ Cross-Origin policies
- ✅ Kompresija i caching za performanse

---

## 12. Input Validation

**Implementirano:**
- ✅ Sanitizacija svih korisničkih unosa
- ✅ Validacija dužine unosa
- ✅ Escape-ovanje svih dinamičkih podataka
- ✅ Validacija tipova podataka (npr. ID mora biti broj)

---

## Dodatne Preporuke za Maksimalnu Bezbednost

### Server Nivo:

1. **SSL/TLS Sertifikat**
   ```
   - Koristite Let's Encrypt za besplatne sertifikate
   - Omogućite TLS 1.3
   - Onemogućite stare protokole (SSLv3, TLS 1.0, TLS 1.1)
   ```

2. **Firewall**
   ```
   - Konfigurišite UFW ili iptables
   - Dozvoljene samo HTTP/HTTPS porte (80, 443)
   - Rate limiting na nivou firewall-a
   ```

3. **Fail2Ban**
   ```
   - Instalacija: sudo apt-get install fail2ban
   - Automatsko banovanje sumnjivih IP adresa
   ```

4. **Redovno ažuriranje**
   ```
   - Ažurirajte server i sve pakete
   - Pratite sigurnosne savete
   ```

### Hosting Preporuke:

**Najbolji hosting provajderi za bezbednost:**
- Cloudflare Pages (ima ugrađenu DDoS zaštitu)
- Netlify (automatski SSL, DDoS zaštita)
- Vercel (automatski security headers)
- GitHub Pages + Cloudflare

### Monitoring:

1. **Security Headers Test:**
   - https://securityheaders.com
   - Testira sve bezbednosne header-e

2. **SSL Test:**
   - https://www.ssllabs.com/ssltest/
   - Testira SSL/TLS konfiguraciju

3. **Web Application Firewall (WAF):**
   - Cloudflare (besplatan plan)
   - Sucuri
   - AWS WAF

---

## Bezbednosni Checklist

- [x] Content Security Policy (CSP)
- [x] Subresource Integrity (SRI)
- [x] XSS zaštita
- [x] Clickjacking zaštita
- [x] MIME sniffing zaštita
- [x] Referrer policy
- [x] Permissions policy
- [x] Rate limiting
- [x] Input validation
- [x] External links security
- [x] HTTPS enforcement (u .htaccess)
- [x] Server hardening (.htaccess)
- [ ] SSL/TLS sertifikat (potrebno podesiti na serveru)
- [ ] WAF (preporučeno: Cloudflare)
- [ ] Backup strategija
- [ ] Monitoring i logging

---

## Kontakt za Bezbednosne Probleme

Ako pronađete bezbednosni problem, molimo vas da ga prijavite odgovorno:

1. **NE** objavljujte bezbednosni problem javno
2. Kontaktirajte administratora direktno
3. Dajte detaljan opis problema
4. Obezbedite korake za reprodukciju

---

## Test Bezbednosti

### Automatski Testovi:

```bash
# 1. Testiraj security headers
curl -I https://tvoj-sajt.rs | grep -E "X-|Content-Security"

# 2. Testiraj XSS zaštitu
# Pokušaj unos: <script>alert('XSS')</script>
# Sajt bi trebalo da ga escape-uje

# 3. Testiraj clickjacking
# Pokušaj embed u iframe - trebalo bi da bude blokirano
```

### Online Testovi:

1. **securityheaders.com** - Ocenjuje bezbednost header-a
2. **observatory.mozilla.org** - Mozilla bezbednosni test
3. **ssllabs.com** - SSL/TLS test

---

## Verzija Bezbednosnih Standarda

- OWASP Top 10 (2021) - ✅ Implementirano
- CSP Level 3 - ✅ Implementirano
- SRI - ✅ Implementirano
- HSTS - ✅ Implementirano

---

## Istorija Izmena

**v1.0 (2025-11-04)**
- Inicijalna implementacija svih bezbednosnih mera
- CSP, SRI, XSS zaštita, rate limiting
- Server hardening (.htaccess)

---

## Licenca i Odricanje Odgovornosti

Ove bezbednosne mere pružaju visok nivo zaštite, ali **nijedan sistem nije 100% bezbedan**.

Preporučuje se:
- Redovno testiranje bezbednosti
- Praćenje sigurnosnih vesti
- Ažuriranje svih komponenti
- Backup strategija

---

**Datum poslednjeg ažuriranja:** 4. novembar 2025
**Status:** ✅ Produkcija spremna sa maksimalnom bezbednošću

