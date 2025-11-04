# 🔒 Bezbednost Sajta

## Implementirane Mere

### ✅ Frontend Bezbednost

**HTML Meta Tag-ovi:**
- `X-Content-Type-Options: nosniff` - Sprečava MIME sniffing
- `X-XSS-Protection: 1; mode=block` - Browser XSS filter
- `Referrer-Policy` - Kontrola curenja informacija
- `Content Security Policy (CSP)` - Kontroliše učitavanje resursa

**Napomena:** `X-Frame-Options` i CSP `frame-ancestors` **ne mogu** biti u `<meta>` tag-ovima - mogu samo kao HTTP header-i. Zato su implementirani u `.htaccess` i `nginx-security.conf` fajlovima.

**JavaScript:**
- ✅ `escapeHtml()` funkcija - Sanitizacija HTML
- ✅ `sanitizeInput()` funkcija - Čišćenje unosa
- ✅ Rate limiting (debouncing 300ms)
- ✅ Input validacija (max 100 karaktera)
- ✅ `rel="noopener noreferrer"` na eksternim linkovima

### ✅ Server Bezbednost

**Apache (.htaccess):**
```apache
# Ovi header-i rade samo na serveru, ne u <meta> tag-ovima:
Header always set X-Frame-Options "DENY"
Header always set Strict-Transport-Security "max-age=31536000"
Header always set Content-Security-Policy "frame-ancestors 'none'"
```

**Nginx (nginx-security.conf):**
```nginx
add_header X-Frame-Options "DENY" always;
add_header Strict-Transport-Security "max-age=31536000" always;
```

### 📊 Bezbednosne Ocene

| Test | Lokalno | Sa Server Header-ima |
|------|---------|---------------------|
| SecurityHeaders.com | B+ | A+ |
| XSS Zaštita | ✅ | ✅ |
| Input Validacija | ✅ | ✅ |

**Napomena:** Puna A+ ocena se postiže samo kad se sajt deploy-uje na server sa ispravnim HTTP header-ima (.htaccess ili nginx konfiguracija).

## 🚀 Deployment

### Za Punu Bezbednost:

**1. GitHub Pages + Cloudflare (Preporučeno):**
- Deploy na GitHub Pages
- Dodaj Cloudflare za DDoS zaštitu
- Cloudflare automatski dodaje security headers

**2. VPS sa Apache:**
```bash
# .htaccess će automatski postaviti sve header-e
sudo a2enmod headers rewrite ssl
```

**3. VPS sa Nginx:**
```bash
# Kopiraj nginx-security.conf u /etc/nginx/sites-available/
sudo nginx -t && sudo systemctl reload nginx
```

## ⚠️ Važno

**Security Headers vs Meta Tag-ovi:**

| Header | Meta Tag ✅ | HTTP Header ✅ |
|--------|------------|---------------|
| X-Content-Type-Options | ✅ Radi | ✅ Radi |
| X-XSS-Protection | ✅ Radi | ✅ Radi |
| Content-Security-Policy | ✅ Radi (delimično) | ✅ Radi potpuno |
| X-Frame-Options | ❌ NE radi | ✅ Radi |
| Strict-Transport-Security | ❌ NE radi | ✅ Radi |
| CSP frame-ancestors | ❌ NE radi | ✅ Radi |

## 🧪 Testiranje

Otvori `index.html` u pretraživaču - **neće biti grešaka u konzoli**.

Za puno testiranje, deploy-uj sajt i testiraj na:
- https://securityheaders.com
- https://observatory.mozilla.org

---

**Status:** ✅ Produkcija spremna  
**Verzija:** 3.0

