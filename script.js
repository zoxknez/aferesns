// Podaci o aferama (sa engleskim prevodima)
const affairs = [
    { id: 0, title: 'Pad nadstrešnice', titleEn: 'Canopy collapse', year: '2024', category: 'Urbanizam', link: 'https://www.bbc.com/serbian/articles/cx2le8111yko', isDuplicate: false },
    { id: 1, title: 'Savamala — rušenje bez odgovornosti', titleEn: 'Savamala — demolition without accountability', year: '2016', category: 'Urbanizam', link: 'https://www.bbc.com/serbian/lat/srbija-36138110', isDuplicate: false },
    { id: 2, title: 'Beograd na vodi — netransparentni ugovori', titleEn: 'Belgrade Waterfront — non-transparent contracts', year: '2014', category: 'Urbanizam', link: 'https://www.bbc.com/serbian/lat/balkan-43066181', isDuplicate: false },
    { id: 3, title: 'Pad helikoptera kod Surčina', titleEn: 'Helicopter crash near Surčin', year: '2015', category: 'Vojska', link: 'https://www.rts.rs/sr/vesti/drustvo/1859449/pad-helikoptera-surcin.html', isDuplicate: false },
    { id: 4, title: 'Krušik — izvoz oružja', titleEn: 'Krušik — weapons export', year: '2017', category: 'Oružje', link: 'https://insajder.net/sr/sajt/tema/14113/', isDuplicate: false },
    { id: 5, title: 'Jovanjica — plantaža marihuane', titleEn: 'Jovanjica — marijuana plantation', year: '2020', category: 'Zakon', link: 'https://www.bbc.com/serbian/lat/balkan-50295629', isDuplicate: false },
    { id: 6, title: 'Respiratori — sumnjive COVID-19 nabavke', titleEn: 'Ventilators — suspicious COVID-19 procurement', year: '2020', category: 'Zdravstvo', link: 'https://www.bbc.com/serbian/lat/srbija-52532508', isDuplicate: false },
    { id: 7, title: 'Linglong — eksploatacija radnika', titleEn: 'Linglong — worker exploitation', year: '2021', category: 'Ljudska prava', link: 'https://www.bbc.com/serbian/articles/c72pvw3zry4o', isDuplicate: false },
    { id: 8, title: 'Rio Tinto — rudarska koncesija', titleEn: 'Rio Tinto — mining concession', year: '2021', category: 'Ekologija', link: 'https://www.bbc.com/serbian/lat/balkan-59816906', isDuplicate: false },
    { id: 9, title: 'Energetski kolaps EPS', titleEn: 'EPS energy collapse', year: '2023', category: 'Energetika', link: '', isDuplicate: false },
    { id: 10, title: 'Bela tehnika — pokloni pred izbore', titleEn: 'White goods — pre-election gifts', year: '2020', category: 'Izbori', link: 'https://www.bbc.com/serbian/lat/srbija-52834867', isDuplicate: false },
    { id: 11, title: 'Telekom — medijska kontrola', titleEn: 'Telekom — media control', year: '2020', category: 'Mediji', link: 'https://www.cins.rs/kako-je-telekom-srbija-upleten-u-medijski-biznis/', isDuplicate: false },
    { id: 12, title: 'Plagijat doktorata Siniše Malog', titleEn: 'Siniša Mali PhD plagiarism', year: '2018', category: 'Obrazovanje', link: 'https://www.bbc.com/serbian/lat/srbija-46162224', isDuplicate: false },
    { id: 13, title: 'PKB — privatizacija', titleEn: 'PKB — privatization', year: '2013', category: 'Privreda', link: '', isDuplicate: false },
    { id: 14, title: 'RTB Bor (Zijin)', titleEn: 'RTB Bor (Zijin)', year: '2022', category: 'Rudarenje', link: 'https://www.bbc.com/serbian/lat/balkan-58820889', isDuplicate: false },
    { id: 15, title: 'Pandora Papers — Siniša Mali', titleEn: 'Pandora Papers — Siniša Mali', year: '2021', category: 'Finansije', link: 'https://www.bbc.com/serbian/lat/balkan-58772747', isDuplicate: false },
    { id: 16, title: 'SNS kol centar', titleEn: 'SNS call center', year: '2022', category: 'Politika', link: '', isDuplicate: false },
    { id: 17, title: 'Jutka (Brus) — seksualno uznemiravanje', titleEn: 'Jutka (Brus) — sexual harassment', year: '2018', category: 'Ljudska prava', link: '', isDuplicate: false },
    { id: 18, title: 'Lažne diplome i doktorati', titleEn: 'Fake diplomas and PhDs', year: '2014', category: 'Obrazovanje', link: '', isDuplicate: false },
    { id: 19, title: 'Ofšor firme funkcionera', titleEn: 'Officials offshore companies', year: '2018', category: 'Finansije', link: '', isDuplicate: false },
    { id: 20, title: 'Pravosudni pritisci', titleEn: 'Judicial pressures', year: '2015', category: 'Pravosuđe', link: '', isDuplicate: false },
    { id: 21, title: 'Prisluškivanje opozicije i medija', titleEn: 'Wiretapping opposition and media', year: '2018', category: 'Sloboda govora', link: '', isDuplicate: false },
    { id: 22, title: 'Gašenje N1 i Nova S', titleEn: 'Shutting down N1 and Nova S', year: '2019', category: 'Mediji', link: 'https://www.bbc.com/serbian/lat/balkan-56940992', isDuplicate: false },
    { id: 23, title: 'Pritisci na studente i profesore', titleEn: 'Pressures on students and professors', year: '2024', category: 'Protesti', link: '', isDuplicate: false },
    { id: 24, title: 'Napad na studente Novi Sad', titleEn: 'Attack on students in Novi Sad', year: '2025', category: 'Protesti', link: 'https://www.bbc.com/serbian/articles/cly2g9p40yvo', isDuplicate: false },
    { id: 25, title: 'Kupovina glasova', titleEn: 'Vote buying', year: '2020', category: 'Izbori', link: '', isDuplicate: false },
    { id: 26, title: 'Fantomske firme u tenderima', titleEn: 'Shell companies in tenders', year: '2012', category: 'Tenderi', link: '', isDuplicate: false },
    { id: 27, title: 'Lokalni kriminal — Grocka', titleEn: 'Local crime — Grocka', year: '2023', category: 'Lokalna vlast', link: '', isDuplicate: false },
    { id: 28, title: 'Pretnje — Kraljevo (Glišić)', titleEn: 'Threats — Kraljevo (Glišić)', year: '2023', category: 'Lokalna vlast', link: '', isDuplicate: false },
    { id: 29, title: 'Niš — sumnjive nabavke', titleEn: 'Niš — suspicious procurement', year: '2024', category: 'Lokalna vlast', link: '', isDuplicate: false },
    { id: 30, title: 'Aflatoksin u mleku', titleEn: 'Aflatoxin in milk', year: '2013', category: 'Zdravstvo', link: '', isDuplicate: true },
    { id: 31, title: 'Afera sa aflatoksinom u mleku', titleEn: 'Aflatoxin in milk affair', year: '2013', category: 'Zdravstvo', link: '', isDuplicate: true },
    { id: 32, title: 'Tetka iz Kanade - Vulinov stan', titleEn: 'Aunt from Canada - Vulin\'s apartment', year: '2017', category: 'Finansije', link: 'https://www.bbc.com/serbian/lat/balkan-40985788', isDuplicate: false },
    { id: 33, title: 'Privatizacija Galenike', titleEn: 'Galenika privatization', year: '2020', category: 'Zdravstvo', link: '', isDuplicate: false },
    { id: 34, title: 'Kineske vakcine - netransparentna nabavka', titleEn: 'Chinese vaccines - non-transparent procurement', year: '2020', category: 'Zdravstvo', link: '', isDuplicate: false },
    { id: 35, title: 'Nelegalne gradnje na Kopaoniku', titleEn: 'Illegal construction on Kopaonik', year: '2016', category: 'Urbanizam', link: '', isDuplicate: false },
    { id: 36, title: 'Novosadska gondola', titleEn: 'Novi Sad cable car', year: '2021', category: 'Urbanizam', link: '', isDuplicate: false },
    { id: 37, title: 'Šabac - politički preuzeti izbori', titleEn: 'Šabac - politically seized elections', year: '2020', category: 'Izbori', link: '', isDuplicate: false },
    { id: 38, title: 'Novi Sad - urbanistički haos', titleEn: 'Novi Sad - urban planning chaos', year: '2020', category: 'Urbanizam', link: '', isDuplicate: false },
    { id: 39, title: 'Rušenje planinskih potoka i rečnih tokova', titleEn: 'Destruction of mountain streams and rivers', year: '2018', category: 'Ekologija', link: '', isDuplicate: false },
    { id: 40, title: 'Projekat Jadar - otkup zemljišta', titleEn: 'Jadar Project - land buyout', year: '2021', category: 'Ekologija', link: '', isDuplicate: false },
    { id: 41, title: 'Afera sa nošenjem novca u džakovima (Izbori)', titleEn: 'Money in sacks affair (Elections)', year: '2016', category: 'Izbori', link: '', isDuplicate: false },
    { id: 42, title: 'Velika rasprodaja PKB zemljišta', titleEn: 'Large PKB land selloff', year: '2018', category: 'Poljoprivreda', link: '', isDuplicate: false },
    { id: 43, title: 'Afera u Inđiji - nelegalne parcele', titleEn: 'Inđija affair - illegal parcels', year: '2017', category: 'Lokalna vlast', link: '', isDuplicate: false },
    { id: 44, title: 'Sklapanje ugovora sa firmom Kentkart', titleEn: 'Contract signing with Kentkart company', year: '2014', category: 'Saobraćaj', link: '', isDuplicate: false },
    { id: 45, title: 'Sumnjive subvencije Geoksu', titleEn: 'Suspicious Geoks subsidies', year: '2016', category: 'Privreda', link: '', isDuplicate: false },
    { id: 46, title: 'Rasprodaja RTB Bor', titleEn: 'RTB Bor selloff', year: '2018', category: 'Rudarenje', link: '', isDuplicate: false },
    { id: 47, title: 'Skupoceni mobilijar u opštinama', titleEn: 'Expensive furniture in municipalities', year: '2019', category: 'Lokalna vlast', link: '', isDuplicate: false },
    { id: 48, title: 'Finansiranje fantomskih udruženja', titleEn: 'Financing phantom associations', year: '2017', category: 'Civilni sektor', link: '', isDuplicate: false },
    { id: 49, title: 'Kupovina medija preko Telekoma', titleEn: 'Media buyout through Telekom', year: '2019', category: 'Mediji', link: '', isDuplicate: false },
    { id: 50, title: 'Kontrola REM-a (Regulatornog tela za medije)', titleEn: 'REM (Media Regulatory Body) control', year: '2016', category: 'Mediji', link: '', isDuplicate: false },
    { id: 51, title: 'Blokiranje opozicionih protesta', titleEn: 'Blocking opposition protests', year: '2020', category: 'Pravo na protest', link: '', isDuplicate: false },
    { id: 52, title: 'Vojna oprema za Belorusiju', titleEn: 'Military equipment for Belarus', year: '2020', category: 'Oružje', link: '', isDuplicate: false },
    { id: 53, title: 'Sumnjive kupovine respiratora iz Kine', titleEn: 'Suspicious ventilator purchases from China', year: '2020', category: 'Zdravstvo', link: '', isDuplicate: false },
    { id: 54, title: 'Nabavka kamera za nadzor (Huawei)', titleEn: 'Surveillance cameras procurement (Huawei)', year: '2020', category: 'Bezbednost', link: '', isDuplicate: false },
    { id: 55, title: 'Nabavke za Ministarstvo unutrašnjih poslova', titleEn: 'Ministry of Interior procurement', year: '2017', category: 'Bezbednost', link: '', isDuplicate: false },
    { id: 56, title: 'Sumnjiva ulaganja u jarbole i jarbol-fonte', titleEn: 'Suspicious investments in flagpoles and fountains', year: '2019', category: 'Urbanizam', link: '', isDuplicate: false },
    { id: 57, title: 'Finansijska kontrola lokalnih medija', titleEn: 'Financial control of local media', year: '2017', category: 'Mediji', link: '', isDuplicate: false },
    { id: 58, title: 'Afera s prebacivanjem državnog zemljišta privatnicima', titleEn: 'State land transfer to private individuals', year: '2018', category: 'Poljoprivreda', link: '', isDuplicate: false },
    { id: 59, title: 'Problemi s prevozom migranata', titleEn: 'Migrant transportation issues', year: '2015', category: 'Bezbednost', link: '', isDuplicate: false },
    { id: 60, title: 'Politička kupovina odbornika', titleEn: 'Political buying of councilors', year: '2016', category: 'Izbori', link: '', isDuplicate: false },
    { id: 61, title: 'Subvencije fiktivnim poljoprivrednim gazdinstvima', titleEn: 'Subsidies to fake agricultural estates', year: '2018', category: 'Poljoprivreda', link: '', isDuplicate: false },
    { id: 62, title: 'Lažni konkursi za kulturne projekte', titleEn: 'Fake tenders for cultural projects', year: '2017', category: 'Kultura', link: '', isDuplicate: false },
    { id: 63, title: "Državni projekat 'Metropoliten' u Beogradu", titleEn: "State project 'Metro' in Belgrade", year: '2021', category: 'Urbanizam', link: '', isDuplicate: false },
    { id: 64, title: 'Problemi u EPS termoelektranama', titleEn: 'Problems in EPS thermal power plants', year: '2017', category: 'Energetika', link: '', isDuplicate: false },
    { id: 65, title: 'Nabavke skupih automobila za javna preduzeća', titleEn: 'Expensive car purchases for public companies', year: '2015', category: 'Javna uprava', link: '', isDuplicate: false },
    { id: 66, title: 'Korupcija u prodaji medicinske opreme', titleEn: 'Corruption in medical equipment sales', year: '2020', category: 'Zdravstvo', link: '', isDuplicate: false },
    { id: 67, title: 'Nelegalna raspodela državnih stanova', titleEn: 'Illegal distribution of state apartments', year: '2019', category: 'Nekretnine', link: '', isDuplicate: false },
    { id: 68, title: 'Afere u sportskim savezima', titleEn: 'Affairs in sports associations', year: '2018', category: 'Sport', link: '', isDuplicate: false },
    { id: 69, title: 'Fiktivne renovacije domova zdravlja', titleEn: 'Fictitious health center renovations', year: '2017', category: 'Zdravstvo', link: '', isDuplicate: false },
    { id: 70, title: 'Oduzimanje lokalnih medijskih frekvencija', titleEn: 'Seizure of local media frequencies', year: '2020', category: 'Mediji', link: '', isDuplicate: false },
    { id: 71, title: 'Lažni projekti putne infrastrukture', titleEn: 'Fake road infrastructure projects', year: '2019', category: 'Saobraćaj', link: '', isDuplicate: false },
    { id: 72, title: 'Pranje novca preko sportskih klubova', titleEn: 'Money laundering through sports clubs', year: '2019', category: 'Finansije', link: '', isDuplicate: false },
    { id: 73, title: 'Sumnjivi transferi u fudbalskim savezima', titleEn: 'Suspicious transfers in football associations', year: '2017', category: 'Sport', link: '', isDuplicate: false },
    { id: 74, title: 'Prebacivanje državnog novca na privatne račune', titleEn: 'Transferring state money to private accounts', year: '2016', category: 'Finansije', link: '', isDuplicate: false },
    { id: 75, title: 'Afera s crnim fondovima SNS-a', titleEn: 'SNS black funds affair', year: '2015', category: 'Finansije', link: '', isDuplicate: false },
    { id: 76, title: 'Sumnjive licitacije za hotelske komplekse', titleEn: 'Suspicious bids for hotel complexes', year: '2019', category: 'Turizam', link: '', isDuplicate: false },
    { id: 77, title: 'Problemi sa javnim nabavkama lekova', titleEn: 'Public drug procurement issues', year: '2018', category: 'Zdravstvo', link: '', isDuplicate: false },
    { id: 78, title: "Afera 'parking servisi' u Beogradu", titleEn: "'Parking services' affair in Belgrade", year: '2016', category: 'Saobraćaj', link: '', isDuplicate: false },
    { id: 79, title: 'Preusmeravanje para iz budžeta opština', titleEn: 'Redirecting money from municipal budgets', year: '2020', category: 'Lokalna vlast', link: '', isDuplicate: false },
    { id: 80, title: 'Pronevere u Zavodu za statistiku', titleEn: 'Embezzlement in Statistics Office', year: '2017', category: 'Javna uprava', link: '', isDuplicate: false },
    { id: 81, title: 'Nezakonito finansiranje izbornih kampanja', titleEn: 'Illegal election campaign financing', year: '2016', category: 'Izbori', link: '', isDuplicate: false },
    { id: 82, title: 'Sporne vakcine protiv gripa', titleEn: 'Controversial flu vaccines', year: '2020', category: 'Zdravstvo', link: '', isDuplicate: false },
    { id: 83, title: 'Podzemne gradnje bez dozvola', titleEn: 'Underground construction without permits', year: '2015', category: 'Urbanizam', link: '', isDuplicate: false },
    { id: 84, title: 'Prikrivanje broja umrlih od COVID-19', titleEn: 'Covering up COVID-19 death toll', year: '2020', category: 'Zdravstvo', link: '', isDuplicate: false },
    { id: 85, title: 'Sporni tenderi za e-upravu', titleEn: 'Controversial e-government tenders', year: '2019', category: 'IT', link: '', isDuplicate: false },
    { id: 86, title: 'Upotreba lažnih diploma za rukovodioce', titleEn: 'Use of fake diplomas for managers', year: '2014', category: 'Obrazovanje', link: '', isDuplicate: false },
    { id: 87, title: 'Preko 2000 zaposlenih bez konkursa', titleEn: 'Over 2000 employed without competition', year: '2015', category: 'Javna uprava', link: '', isDuplicate: false },
    { id: 88, title: 'Afera s kontrolom cena goriva', titleEn: 'Fuel price control affair', year: '2019', category: 'Energetika', link: '', isDuplicate: false },
    { id: 89, title: "Sumnjivi projekti sa aerodromom 'Nikola Tesla'", titleEn: "Suspicious projects with 'Nikola Tesla' Airport", year: '2018', category: 'Transport', link: '', isDuplicate: false },
    { id: 90, title: 'Problemi s državnim penzionim fondovima', titleEn: 'State pension fund issues', year: '2016', category: 'Socijalna politika', link: '', isDuplicate: false },
    { id: 91, title: "Nezakonito finansiranje 'beli hleb'", titleEn: "Illegal financing 'white bread' subsidies", year: '2015', category: 'Finansije', link: '', isDuplicate: false },
    { id: 92, title: 'Lažna obećanja o minimalcu', titleEn: 'False promises about minimum wage', year: '2019', category: 'Privreda', link: '', isDuplicate: false },
    { id: 93, title: 'Afera s uvozom šećera', titleEn: 'Sugar import affair', year: '2014', category: 'Poljoprivreda', link: '', isDuplicate: false },
    { id: 94, title: 'Sumnjivi tenderi za vodovod', titleEn: 'Suspicious water supply tenders', year: '2017', category: 'Infrastruktura', link: '', isDuplicate: false },
    { id: 95, title: 'Preprodaja državnih farmi', titleEn: 'Resale of state farms', year: '2016', category: 'Poljoprivreda', link: '', isDuplicate: false },
    { id: 96, title: 'Sporni krediti preko državnih banaka', titleEn: 'Controversial loans through state banks', year: '2018', category: 'Finansije', link: '', isDuplicate: false },
    { id: 97, title: 'Problemi s koncesijom aerodroma', titleEn: 'Airport concession issues', year: '2018', category: 'Transport', link: '', isDuplicate: false },
    { id: 98, title: 'Nepotizam u državnim agencijama', titleEn: 'Nepotism in state agencies', year: '2017', category: 'Javna uprava', link: '', isDuplicate: false },
    { id: 99, title: 'Upitne privatizacije banja', titleEn: 'Questionable spa privatizations', year: '2017', category: 'Turizam', link: '', isDuplicate: false },
    { id: 100, title: 'Uvođenje spornih ekoloških taksi', titleEn: 'Introduction of controversial environmental taxes', year: '2019', category: 'Ekologija', link: '', isDuplicate: false },
    { id: 101, title: 'Sumnjivo finansiranje muzičkih festivala', titleEn: 'Suspicious music festival financing', year: '2019', category: 'Kultura', link: '', isDuplicate: false },
    { id: 102, title: 'Problemi s obnovom škola posle poplava', titleEn: 'School reconstruction problems after floods', year: '2014', category: 'Obrazovanje', link: '', isDuplicate: false },
    { id: 103, title: 'Nezakonito finansiranje zadužbina', titleEn: 'Illegal endowment financing', year: '2017', category: 'Kultura', link: '', isDuplicate: false },
    { id: 104, title: "Afera 'Turistički vaučeri'", titleEn: "'Tourism vouchers' affair", year: '2020', category: 'Turizam', link: '', isDuplicate: false },
    { id: 105, title: 'Nepotizam pri zapošljavanju u prosveti', titleEn: 'Nepotism in education employment', year: '2017', category: 'Obrazovanje', link: '', isDuplicate: false },
    { id: 106, title: 'Političko zapošljavanje u Kliničkim centrima', titleEn: 'Political employment in Clinical Centers', year: '2018', category: 'Zdravstvo', link: '', isDuplicate: false },
    { id: 107, title: 'Lažne prijave za državne subvencije', titleEn: 'Fake applications for state subsidies', year: '2019', category: 'Privreda', link: '', isDuplicate: false },
    { id: 108, title: 'Nabavke uniformi za vojsku po višoj ceni', titleEn: 'Army uniform procurement at inflated prices', year: '2018', category: 'Vojska', link: '', isDuplicate: false },
    { id: 109, title: "Afera 'Lasta' - preprodaja autobusa", titleEn: "'Lasta' affair - bus resale", year: '2020', category: 'Saobraćaj', link: '', isDuplicate: false },
    { id: 110, title: 'Sumnjive donacije sportskim savezima', titleEn: 'Suspicious donations to sports associations', year: '2019', category: 'Sport', link: '', isDuplicate: false },
    { id: 111, title: "Nabavka 'pametnih' tabli za škole", titleEn: "Procurement of 'smart' boards for schools", year: '2021', category: 'Obrazovanje', link: '', isDuplicate: false },
    { id: 112, title: 'Lažna obnova javnih parkova', titleEn: 'Fake public park renovations', year: '2016', category: 'Urbanizam', link: '', isDuplicate: false },
    { id: 113, title: 'Pronevere u fondovima za marginalizovane grupe', titleEn: 'Embezzlement in funds for marginalized groups', year: '2018', category: 'Socijalna politika', link: '', isDuplicate: false },
    { id: 114, title: 'Problemi sa softverom za e-dnevnik', titleEn: 'E-diary software issues', year: '2019', category: 'Obrazovanje', link: '', isDuplicate: false },
    { id: 115, title: 'Pranje novca kroz sajmove i manifestacije', titleEn: 'Money laundering through fairs and events', year: '2017', category: 'Ostalo', link: '', isDuplicate: false },
    { id: 116, title: 'Afera sa lošim betonom u državnim zgradama', titleEn: 'Poor concrete in state buildings affair', year: '2019', category: 'Infrastruktura', link: '', isDuplicate: false },
    { id: 117, title: 'Sporni ugovori za gradsko grejanje', titleEn: 'Controversial city heating contracts', year: '2018', category: 'Energetika', link: '', isDuplicate: false },
    { id: 118, title: 'Kupovina vozila bez tendera u opštinama', titleEn: 'Vehicle purchases without tenders in municipalities', year: '2017', category: 'Javna uprava', link: '', isDuplicate: false },
    { id: 119, title: 'Lažno prijavljeni kilometri novih puteva', titleEn: 'Falsely reported kilometers of new roads', year: '2020', category: 'Saobraćaj', link: '', isDuplicate: false },
    { id: 120, title: 'Preplaćene IT usluge za ministarstva', titleEn: 'Overpriced IT services for ministries', year: '2021', category: 'IT', link: '', isDuplicate: false },
    { id: 121, title: 'Afera sa prodajom državnih šuma', titleEn: 'State forest sale affair', year: '2015', category: 'Ekologija', link: '', isDuplicate: false },
    { id: 122, title: 'Sporne dozvole za mini hidroelektrane', titleEn: 'Controversial permits for mini hydropower plants', year: '2016', category: 'Ekologija', link: '', isDuplicate: false },
    { id: 123, title: 'Korupcija u sektoru izdavanja dozvola za kafiće', titleEn: 'Corruption in cafe permit issuance', year: '2017', category: 'Lokalna vlast', link: '', isDuplicate: false },
    { id: 124, title: 'Nezakonito dodeljivanje socijalnih stanova', titleEn: 'Illegal allocation of social housing', year: '2018', category: 'Socijalna politika', link: '', isDuplicate: false },
    { id: 125, title: 'Problemi sa modernizacijom železnice', titleEn: 'Railway modernization problems', year: '2017', category: 'Saobraćaj', link: '', isDuplicate: false },
    { id: 126, title: "Afera sa 'zelenim sertifikatima'", titleEn: "'Green certificates' affair", year: '2019', category: 'Ekologija', link: '', isDuplicate: false },
    { id: 127, title: 'Sumnjivo finansiranje kampanje u dijaspori', titleEn: 'Suspicious diaspora campaign financing', year: '2020', category: 'Izbori', link: '', isDuplicate: false },
    { id: 128, title: 'Upitni troškovi službenih putovanja', titleEn: 'Questionable official travel expenses', year: '2016', category: 'Javna uprava', link: '', isDuplicate: false },
    { id: 129, title: 'Nezakonito subvencionisanje privatnih vrtića', titleEn: 'Illegal subsidizing of private kindergartens', year: '2018', category: 'Obrazovanje', link: '', isDuplicate: false },
    { id: 130, title: "Afera 'Bulevar Evrope' - preplaćena izgradnja", titleEn: "'Boulevard of Europe' - overpriced construction", year: '2016', category: 'Urbanizam', link: '', isDuplicate: false },
    { id: 131, title: 'Sporne naknade za odbornike', titleEn: 'Controversial councilor compensations', year: '2015', category: 'Lokalna vlast', link: '', isDuplicate: false },
    { id: 132, title: 'Problemi sa otpadnim vodama', titleEn: 'Wastewater issues', year: '2018', category: 'Ekologija', link: '', isDuplicate: false },
    { id: 133, title: 'Lažni statistički podaci za zapošljavanje', titleEn: 'False employment statistics', year: '2017', category: 'Privreda', link: '', isDuplicate: false },
    { id: 134, title: 'Manipulacija brojem zaposlenih u IT sektoru', titleEn: 'Manipulation of IT sector employment numbers', year: '2019', category: 'IT', link: '', isDuplicate: false },
    { id: 135, title: 'Nepostojanje nadzora nad subvencijama', titleEn: 'Lack of subsidy oversight', year: '2016', category: 'Finansije', link: '', isDuplicate: false },
    { id: 136, title: 'Fiktivne edukacije za javne službenike', titleEn: 'Fictitious training for public servants', year: '2017', category: 'Javna uprava', link: '', isDuplicate: false },
    { id: 137, title: "Sumnjiva uvođenja 'smart city' sistema", titleEn: "Suspicious 'smart city' system implementations", year: '2020', category: 'IT', link: '', isDuplicate: false },
    { id: 138, title: 'Pronevera sredstava za promociju turizma', titleEn: 'Embezzlement of tourism promotion funds', year: '2019', category: 'Turizam', link: '', isDuplicate: false },
    { id: 139, title: 'Nelegalno rušenje kulturnih spomenika', titleEn: 'Illegal demolition of cultural monuments', year: '2017', category: 'Kultura', link: '', isDuplicate: false },
    { id: 140, title: 'Afera sa privatizacijom osiguravajućih društava', titleEn: 'Insurance company privatization affair', year: '2018', category: 'Finansije', link: '', isDuplicate: false },
    { id: 141, title: 'Sumnjivi ugovori za javnu rasvetu', titleEn: 'Suspicious public lighting contracts', year: '2019', category: 'Urbanizam', link: '', isDuplicate: false },
    { id: 142, title: 'Problemi sa centralizacijom hitnih službi', titleEn: 'Emergency services centralization problems', year: '2020', category: 'Zdravstvo', link: '', isDuplicate: false },
    { id: 143, title: 'Podmićivanje lokalnih medija grantovima', titleEn: 'Bribing local media with grants', year: '2017', category: 'Mediji', link: '', isDuplicate: false },
    { id: 144, title: 'Korupcija u carinskim ispostavama', titleEn: 'Corruption in customs offices', year: '2016', category: 'Finansije', link: '', isDuplicate: false },
    { id: 145, title: 'Zloupotreba novca za obnovu kulturnih objekata', titleEn: 'Misuse of cultural site renovation funds', year: '2018', category: 'Kultura', link: '', isDuplicate: false },
    { id: 146, title: 'Afera sa subvencijama za električne autobuse', titleEn: 'Electric bus subsidy affair', year: '2021', category: 'Saobraćaj', link: '', isDuplicate: false },
    { id: 147, title: 'Nezakonito korišćenje dronova u kampanji', titleEn: 'Illegal drone use in campaign', year: '2020', category: 'Izbori', link: '', isDuplicate: false },
    { id: 148, title: 'Pronevera u fondovima za mlade preduzetnike', titleEn: 'Embezzlement in young entrepreneur funds', year: '2019', category: 'Privreda', link: '', isDuplicate: false },
    { id: 149, title: 'Lažni izveštaji o rezultatima studentskih domova', titleEn: 'False reports on student dormitory results', year: '2017', category: 'Obrazovanje', link: '', isDuplicate: false },
    { id: 150, title: 'Nezakonito prisvajanje donacija bolnicama', year: '2020', category: 'Zdravstvo', link: '', isDuplicate: false },
    { id: 151, title: 'Sumnjivi tenderi za reciklažne centre', year: '2018', category: 'Ekologija', link: '', isDuplicate: false },
    { id: 152, title: 'Prevara s programima prekvalifikacije', year: '2019', category: 'Privreda', link: '', isDuplicate: false },
    { id: 153, title: 'Sporne licence za taksi prevoznike', year: '2016', category: 'Saobraćaj', link: '', isDuplicate: false },
    { id: 154, title: "Afera 'Namenska' - oružarske fabrike", year: '2019', category: 'Oružje', link: '', isDuplicate: false },
    { id: 155, title: 'Lažne humanitarne akcije', year: '2018', category: 'Socijalna politika', link: '', isDuplicate: false },
    { id: 156, title: 'Problemi s održavanjem regionalnih aerodroma', year: '2017', category: 'Transport', link: '', isDuplicate: false },
    { id: 157, title: 'Preplaćene državne kampanje promocije Srbije', year: '2016', category: 'Marketing', link: '', isDuplicate: false },
    { id: 158, title: 'Sumnjivi ugovori s lobistima', year: '2015', category: 'Finansije', link: '', isDuplicate: false },
    { id: 159, title: 'Lažne investicije u ruralni razvoj', year: '2017', category: 'Poljoprivreda', link: '', isDuplicate: false },
    { id: 160, title: 'Nabavke softvera bez garancije', year: '2019', category: 'IT', link: '', isDuplicate: false },
    { id: 161, title: 'Zloupotreba sredstava za rehabilitaciju zatvorenika', year: '2018', category: 'Pravosuđe', link: '', isDuplicate: false },
    { id: 162, title: 'Pronevera prilikom gradnje sportskih hala', year: '2019', category: 'Sport', link: '', isDuplicate: false },
    { id: 163, title: 'Sumnjivi krediti u agrarnom sektoru', year: '2017', category: 'Poljoprivreda', link: '', isDuplicate: false },
    { id: 164, title: 'Problemi s rekonstrukcijom bolnica', year: '2020', category: 'Zdravstvo', link: '', isDuplicate: false },
    { id: 165, title: 'Nepostojanje izveštaja o borbi protiv korupcije', year: '2016', category: 'Pravosuđe', link: '', isDuplicate: false },
    { id: 166, title: 'Fiktivni saveti i konsultantske firme', year: '2015', category: 'Privreda', link: '', isDuplicate: false },
    { id: 167, title: 'Sumnjivo finansiranje studentskih organizacija', year: '2017', category: 'Obrazovanje', link: '', isDuplicate: false },
    { id: 168, title: 'Krađa struje na velikim gradilištima', year: '2018', category: 'Energetika', link: '', isDuplicate: false },
    { id: 169, title: 'Preusmeravanje budžetskog novca na privatne institute', year: '2016', category: 'Finansije', link: '', isDuplicate: false },
    { id: 170, title: 'Sporne dozvole za reklamne panele', year: '2019', category: 'Urbanizam', link: '', isDuplicate: false },
    { id: 171, title: 'Problemi s kanalizacionom mrežom', year: '2018', category: 'Infrastruktura', link: '', isDuplicate: false },
    { id: 172, title: 'Manipulacija javnim statistikama migracija', year: '2015', category: 'Bezbednost', link: '', isDuplicate: false },
    { id: 173, title: 'Sumnjivo finansiranje političkih mitinga', year: '2016', category: 'Izbori', link: '', isDuplicate: false },
    { id: 174, title: 'Problemi s vakcinacijom protiv HPV', year: '2019', category: 'Zdravstvo', link: '', isDuplicate: false },
    { id: 175, title: 'Pronevere u domovima za stare', year: '2017', category: 'Socijalna politika', link: '', isDuplicate: false },
    { id: 176, title: 'Korupcija u sektorima za obnovljive izvore energije', year: '2018', category: 'Energetika', link: '', isDuplicate: false },
    { id: 177, title: 'Nabavka opreme za civilnu zaštitu bez tendera', year: '2020', category: 'Bezbednost', link: '', isDuplicate: false },
    { id: 178, title: 'Sporne takse na stranu robu', year: '2016', category: 'Trgovina', link: '', isDuplicate: false },
    { id: 179, title: 'Lažni izveštaji o kvalitetu vazduha', year: '2019', category: 'Ekologija', link: '', isDuplicate: false },
    { id: 180, title: 'Zloupotreba stipendija za sportiste', year: '2017', category: 'Sport', link: '', isDuplicate: false },
    { id: 181, title: 'Problemi s digitalizacijom obrazovanja', year: '2020', category: 'Obrazovanje', link: '', isDuplicate: false },
    { id: 182, title: 'Pronevera sredstava za lokalne manifestacije', year: '2018', category: 'Lokalna vlast', link: '', isDuplicate: false },
    { id: 183, title: 'Sumnjivi ugovori za metro Beograd', year: '2021', category: 'Saobraćaj', link: '', isDuplicate: false },
    { id: 184, title: 'Nezakoniti ulazak u privatne podatke građana', year: '2019', category: 'Bezbednost', link: '', isDuplicate: false },
    { id: 185, title: 'Problemi s koncesijom luka', year: '2016', category: 'Transport', link: '', isDuplicate: false },
    { id: 186, title: 'Upitna privatizacija turističkih agencija', year: '2017', category: 'Turizam', link: '', isDuplicate: false },
    { id: 187, title: 'Sporne naplate putarina', year: '2015', category: 'Saobraćaj', link: '', isDuplicate: false },
    { id: 188, title: 'Lažno prikazivanje investicija u IT hubove', year: '2018', category: 'IT', link: '', isDuplicate: false },
    { id: 189, title: 'Preplaćeni projekti adaptacije muzeja', year: '2019', category: 'Kultura', link: '', isDuplicate: false },
    { id: 190, title: 'Problemi s kontrolom požara', year: '2017', category: 'Bezbednost', link: '', isDuplicate: false },
    { id: 191, title: 'Sumnjive donacije vladinim kancelarijama', year: '2018', category: 'Javna uprava', link: '', isDuplicate: false },
    { id: 192, title: 'Upitni projekti javnog osvetljenja', year: '2016', category: 'Urbanizam', link: '', isDuplicate: false },
    { id: 193, title: 'Manipulacije s platnim razredima u javnom sektoru', year: '2017', category: 'Finansije', link: '', isDuplicate: false },
    { id: 194, title: 'Nezakonito finansiranje iz stranih izvora', year: '2018', category: 'Izbori', link: '', isDuplicate: false },
    { id: 195, title: 'Problemi s javnim biciklima', year: '2020', category: 'Saobraćaj', link: '', isDuplicate: false },
    { id: 196, title: 'Krađa medicinskih aparata', year: '2019', category: 'Zdravstvo', link: '', isDuplicate: false },
    { id: 197, title: 'Sporne dozvole za ribolov', year: '2017', category: 'Ekologija', link: '', isDuplicate: false },
    { id: 198, title: 'Pronevera fondova za beskućnike', year: '2016', category: 'Socijalna politika', link: '', isDuplicate: false },
    { id: 199, title: 'Preusmeravanje pomoći nakon poplava', year: '2014', category: 'Ostalo', link: '', isDuplicate: false },
    { id: 200, title: 'Sumnjive cene za COVID testove', year: '2020', category: 'Zdravstvo', link: '', isDuplicate: false },
    { id: 201, title: 'Problemi sa vodovodnim mrežama u ruralnim sredinama', year: '2018', category: 'Infrastruktura', link: '', isDuplicate: false },
    { id: 202, title: 'Lažni sertifikati o energetskoj efikasnosti', year: '2017', category: 'Energetika', link: '', isDuplicate: false },
    { id: 203, title: 'Afera s reciklažnim taksama', year: '2016', category: 'Ekologija', link: '', isDuplicate: false },
    { id: 204, title: 'Fiktivni konkursi za omladinske projekte', year: '2019', category: 'Kultura', link: '', isDuplicate: false },
    { id: 205, title: 'Problemi s izgradnjom akva parkova', year: '2017', category: 'Turizam', link: '', isDuplicate: false },
    { id: 206, title: 'Lažno prikazivanje broja socijalnih stanova', year: '2018', category: 'Socijalna politika', link: '', isDuplicate: false },
    { id: 207, title: 'Preplaćeni radovi na lokalnim mostovima', year: '2019', category: 'Infrastruktura', link: '', isDuplicate: false },
    { id: 208, title: 'Sumnjive koncesije za marine', year: '2020', category: 'Turizam', link: '', isDuplicate: false },
    { id: 209, title: 'Nezakonito raspolaganje istorijskim lokalitetima', year: '2016', category: 'Kultura', link: '', isDuplicate: false },
    { id: 210, title: "Krađa sredstava za program 'Povratak u selo'", year: '2015', category: 'Poljoprivreda', link: '', isDuplicate: false },
    { id: 211, title: 'Sumnjivi ugovori sa PR agencijama', year: '2017', category: 'Marketing', link: '', isDuplicate: false },
    { id: 212, title: 'Nepotizam u zapošljavanju opštinskih savetnika', year: '2016', category: 'Lokalna vlast', link: '', isDuplicate: false },
    { id: 213, title: 'Neuspešni projekti ruralnog turizma', year: '2019', category: 'Turizam', link: '', isDuplicate: false },
    { id: 214, title: 'Problemi sa obukama za IT sektor', year: '2020', category: 'IT', link: '', isDuplicate: false },
    { id: 215, title: 'Lažni podaci o broju renoviranih ambulanti', year: '2018', category: 'Zdravstvo', link: '', isDuplicate: false },
    { id: 216, title: 'Neregularni izbori za savete mesnih zajednica', year: '2017', category: 'Lokalna vlast', link: '', isDuplicate: false },
    { id: 217, title: 'Pronevera sredstava za inkluziju Roma', year: '2019', category: 'Socijalna politika', link: '', isDuplicate: false },
    { id: 218, title: 'Problemi s konkursima za poljoprivredne zadruge', year: '2017', category: 'Poljoprivreda', link: '', isDuplicate: false },
    { id: 219, title: 'Afera s preradom otpadnih voda', year: '2019', category: 'Ekologija', link: '', isDuplicate: false },
    { id: 220, title: 'Korupcija u sektoru urbanističkih dozvola', year: '2016', category: 'Urbanizam', link: '', isDuplicate: false },
    { id: 221, title: 'Pronevera u budžetu za izgradnju vrtića', year: '2018', category: 'Obrazovanje', link: '', isDuplicate: false },
    { id: 222, title: 'Lažni konkursi za zadravstvene projekte', year: '2020', category: 'Zdravstvo', link: '', isDuplicate: false },
    { id: 223, title: 'Nezakonito sufinansiranje privatnih fakulteta', year: '2017', category: 'Obrazovanje', link: '', isDuplicate: false },
    { id: 224, title: 'Nejasni ugovori za upravljanje bazenima', year: '2016', category: 'Sport', link: '', isDuplicate: false },
    { id: 225, title: 'Problemi s besplatnim udžbenicima', year: '2019', category: 'Obrazovanje', link: '', isDuplicate: false },
    { id: 226, title: 'Preplaćene promotivne kampanje', year: '2015', category: 'Marketing', link: '', isDuplicate: false },
    { id: 227, title: 'Sporni ugovori za ruralnu rasvetu', year: '2018', category: 'Infrastruktura', link: '', isDuplicate: false },
    { id: 228, title: 'Zloupotreba sredstava za mentalno zdravlje', year: '2017', category: 'Zdravstvo', link: '', isDuplicate: false },
    { id: 229, title: 'Afera sa transportom opasnog otpada', year: '2016', category: 'Ekologija', link: '', isDuplicate: false },
    { id: 230, title: 'Nezakonito oduzimanje parcela poljoprivrednicima', year: '2015', category: 'Poljoprivreda', link: '', isDuplicate: false },
    { id: 231, title: 'Lažni prikazi izgradnje sportskih terena', year: '2019', category: 'Sport', link: '', isDuplicate: false },
    { id: 232, title: 'Problemi s digitalizacijom arhiva', year: '2020', category: 'IT', link: '', isDuplicate: false },
    { id: 233, title: 'Pronevera u projektima za žensko preduzetništvo', year: '2018', category: 'Privreda', link: '', isDuplicate: false },
    { id: 234, title: 'Sumnjive subvencije za elektronsku trgovinu', year: '2017', category: 'IT', link: '', isDuplicate: false },
    { id: 235, title: 'Afera s projektima kulturnog turizma', year: '2016', category: 'Kultura', link: '', isDuplicate: false },
    { id: 236, title: 'Problemi sa konkursima za zaštitu životinja', year: '2018', category: 'Ekologija', link: '', isDuplicate: false },
    { id: 237, title: 'Sumnjivo finansiranje festivalskih manifestacija', year: '2019', category: 'Kultura', link: '', isDuplicate: false },
    { id: 238, title: 'Afera s osiguranjem državnih zgrada', year: '2016', category: 'Finansije', link: '', isDuplicate: false },
    { id: 239, title: 'Nezakonita koncesija za ski centre', year: '2017', category: 'Turizam', link: '', isDuplicate: false },
    { id: 240, title: 'Sporni tenderi za digitalne kioske', year: '2020', category: 'IT', link: '', isDuplicate: false },
    { id: 241, title: 'Problemi sa implementacijom GIS sistema', year: '2018', category: 'IT', link: '', isDuplicate: false },
    { id: 242, title: 'Nezakonite naplate komunalnih usluga', year: '2015', category: 'Lokalna vlast', link: '', isDuplicate: false },
    { id: 243, title: 'Sumnjive građevinske dozvole za hotele', year: '2017', category: 'Turizam', link: '', isDuplicate: false },
    { id: 244, title: 'Lažni podaci o broju vakcinisanih', year: '2021', category: 'Zdravstvo', link: '', isDuplicate: false },
    { id: 245, title: 'Problemi s planovima zaštite od požara', year: '2018', category: 'Bezbednost', link: '', isDuplicate: false },
    { id: 246, title: 'Manipulacija projektima energetske efikasnosti', year: '2019', category: 'Energetika', link: '', isDuplicate: false },
    { id: 247, title: 'Pronevera u fondovima za mlade sportiste', year: '2017', category: 'Sport', link: '', isDuplicate: false },
    { id: 248, title: 'Nezakonita preprodaja opreme javnih servisa', year: '2016', category: 'Infrastruktura', link: '', isDuplicate: false },
    { id: 249, title: 'Afera s taksama za strance', year: '2015', category: 'Finansije', link: '', isDuplicate: false },
    { id: 250, title: 'Sumnjivi ugovori za održavanje zelenih površina', year: '2018', category: 'Urbanizam', link: '', isDuplicate: false },
    { id: 251, title: 'Lažne tendere za opremanje škola', year: '2019', category: 'Obrazovanje', link: '', isDuplicate: false },
    { id: 252, title: 'Preplaćeni radovi na sanaciji deponija', year: '2017', category: 'Ekologija', link: '', isDuplicate: false },
    { id: 253, title: 'Zloupotreba sredstava za IT startupove', year: '2020', category: 'IT', link: '', isDuplicate: false },
    { id: 254, title: 'Afera sa subvencionisanim kreditima za stanove', year: '2018', category: 'Nekretnine', link: '', isDuplicate: false },
    { id: 255, title: 'Problemi s legalizacijom objekata', year: '2016', category: 'Urbanizam', link: '', isDuplicate: false },
    { id: 256, title: 'Nezakonito finansiranje lokalnih kampanja', year: '2015', category: 'Izbori', link: '', isDuplicate: false },
    { id: 257, title: 'Afera sa preprodajom drvenih sirovina', year: '2019', category: 'Ostalo', link: '', isDuplicate: false },
    { id: 258, title: 'Problemi s izdavanjem zdravstvenih sertifikata', year: '2017', category: 'Zdravstvo', link: '', isDuplicate: false },
    { id: 259, title: 'Pronevera sredstava za stare zanate', year: '2018', category: 'Kultura', link: '', isDuplicate: false },
    { id: 260, title: 'Sporni ugovori za održavanje tunela', year: '2020', category: 'Infrastruktura', link: '', isDuplicate: false },
    { id: 261, title: 'Lažni prikazi investicija u sport', year: '2019', category: 'Sport', link: '', isDuplicate: false },
    { id: 262, title: 'Zloupotreba fondova za obrazovne reforme', year: '2017', category: 'Obrazovanje', link: '', isDuplicate: false },
    { id: 263, title: 'Sumnjivi ugovori za parkovske objekte', year: '2016', category: 'Urbanizam', link: '', isDuplicate: false },
    { id: 264, title: 'Afera sa reklamnim tablama na putevima', year: '2015', category: 'Saobraćaj', link: '', isDuplicate: false },
    { id: 265, title: 'Problemi s uvođenjem LED rasvete', year: '2017', category: 'Energetika', link: '', isDuplicate: false },
    { id: 266, title: 'Lažni podaci o zapošljavanju osoba sa invaliditetom', year: '2018', category: 'Socijalna politika', link: '', isDuplicate: false },
    { id: 267, title: 'Afera s unapređenjem telefonskih centrala', year: '2019', category: 'IT', link: '', isDuplicate: false },
    { id: 268, title: 'Nepotizam u sportskim savezima', year: '2017', category: 'Sport', link: '', isDuplicate: false },
    { id: 269, title: 'Pronevera u projektima za zaštitu kulturnog nasleđa', year: '2018', category: 'Kultura', link: '', isDuplicate: false },
    { id: 270, title: 'Afera sa uvozom medicinskog otpada', year: '2020', category: 'Zdravstvo', link: '', isDuplicate: false },
    { id: 271, title: 'Sumnjive koncesije za golf terene', year: '2016', category: 'Turizam', link: '', isDuplicate: false },
    { id: 272, title: 'Problemi s reciklažnim parkovima', year: '2017', category: 'Ekologija', link: '', isDuplicate: false },
    { id: 273, title: 'Pronevera fondova za ruralnu infrastrukturu', year: '2018', category: 'Poljoprivreda', link: '', isDuplicate: false },
    { id: 274, title: 'Lažni statistički podaci o turizmu', year: '2019', category: 'Turizam', link: '', isDuplicate: false },
    { id: 275, title: 'Sporni ugovori za održavanje pruga', year: '2020', category: 'Transport', link: '', isDuplicate: false },
    { id: 276, title: 'Afera sa javnim biciklima', year: '2018', category: 'Saobraćaj', link: '', isDuplicate: false },
    { id: 277, title: 'Problemi sa implementacijom pametnih saobraćajnica', year: '2019', category: 'IT', link: '', isDuplicate: false },
    { id: 278, title: 'Nepotrebno preplaćeni projekti digitalizacije', year: '2021', category: 'IT', link: '', isDuplicate: false },
    { id: 279, title: 'Zloupotreba fondova za borbu protiv siromaštva', year: '2017', category: 'Socijalna politika', link: '', isDuplicate: false },
    { id: 280, title: 'Sumnjivi tenderi za uvoz farmaceutskih proizvoda', year: '2019', category: 'Zdravstvo', link: '', isDuplicate: false },
    { id: 281, title: 'Problemi sa izdavanjem urbanističkih saglasnosti', year: '2016', category: 'Urbanizam', link: '', isDuplicate: false },
    { id: 282, title: 'Sumnjive donacije stranim ambasadama', year: '2015', category: 'Ostalo', link: '', isDuplicate: false },
    { id: 283, title: 'Pronevera sredstava za energetske zadruge', year: '2018', category: 'Energetika', link: '', isDuplicate: false },
    { id: 284, title: 'Problemi sa programima za ruralnu obnovu', year: '2017', category: 'Poljoprivreda', link: '', isDuplicate: false },
    { id: 285, title: 'Sporni ugovori za gradske prevoze', year: '2020', category: 'Saobraćaj', link: '', isDuplicate: false },
    { id: 286, title: 'Lažni izveštaji o obnovi kulturnih manifestacija', year: '2019', category: 'Kultura', link: '', isDuplicate: false },
    { id: 287, title: 'Manipulacije troškovima javnih službi', year: '2017', category: 'Javna uprava', link: '', isDuplicate: false },
    { id: 288, title: 'Problemi s koncesijom za gradska groblja', year: '2016', category: 'Lokalna vlast', link: '', isDuplicate: false },
    { id: 289, title: 'Sumnjivi ugovori za hitne službe', year: '2020', category: 'Zdravstvo', link: '', isDuplicate: false },
    { id: 290, title: 'Afera s radovima na rekonstrukciji fontana', year: '2017', category: 'Urbanizam', link: '', isDuplicate: false },
    { id: 291, title: 'Lažni izveštaji o korišćenju EU fondova', year: '2018', category: 'Finansije', link: '', isDuplicate: false },
    { id: 292, title: 'Problemi sa sistemima za protivgradnu odbranu', year: '2019', category: 'Poljoprivreda', link: '', isDuplicate: false },
    { id: 293, title: 'Nepotizam u dodeli stipendija', year: '2016', category: 'Obrazovanje', link: '', isDuplicate: false },
    { id: 294, title: 'Pronevera sredstava za kulturne centre', year: '2018', category: 'Kultura', link: '', isDuplicate: false },
    { id: 295, title: 'Sumnjive naknade za članove nadzornih odbora', year: '2015', category: 'Finansije', link: '', isDuplicate: false },
    { id: 296, title: 'Lažni podaci o projektima energetske obnove', year: '2019', category: 'Energetika', link: '', isDuplicate: false },
    { id: 297, title: 'Problemi sa razvojem seoskog turizma', year: '2020', category: 'Turizam', link: '', isDuplicate: false },
    { id: 298, title: 'Afera sa subvencijama za električna vozila', year: '2021', category: 'Saobraćaj', link: '', isDuplicate: false },
    { id: 299, title: 'Sporni ugovori za monitoring sistema', year: '2020', category: 'IT', link: '', isDuplicate: false },
    { id: 300, title: 'Pronevera fondova za mlade inovacije', year: '2019', category: 'Privreda', link: '', isDuplicate: false },
    { id: 301, title: 'Preplaćena javna rasveta u više opština', year: '2017', category: 'Lokalna vlast', link: '', isDuplicate: false },
    { id: 302, title: 'Fiktivni kursevi za penzionere', year: '2015', category: 'Socijalna politika', link: '', isDuplicate: false },
    { id: 303, title: 'Tenderi za autobuse bez nadmetanja', year: '2018', category: 'Saobraćaj', link: '', isDuplicate: false },
    { id: 304, title: 'Preplaćeni letnji festivali', year: '2016', category: 'Kultura', link: '', isDuplicate: false },
    { id: 305, title: 'Fiktivne sportske škole', year: '2015', category: 'Sport', link: '', isDuplicate: false },
    { id: 306, title: 'Nepotizam u vrtićima', year: '2017', category: 'Obrazovanje', link: '', isDuplicate: false },
    { id: 307, title: 'Podela paketa za glasove', year: '2016', category: 'Izbori', link: '', isDuplicate: false },
    { id: 308, title: 'Nezakonite naplate komunalnih taksi', year: '2015', category: 'Lokalna vlast', link: '', isDuplicate: false },
    { id: 309, title: 'Renoviranje mesnih kancelarija bez nadzora', year: '2016', category: 'Infrastruktura', link: '', isDuplicate: false },
    { id: 310, title: 'Lažni ugovori za folklorna društva', year: '2015', category: 'Kultura', link: '', isDuplicate: false },
    { id: 311, title: 'Sumnjivo finansiranje lokalnih projekata', year: '2015', category: 'Lokalna vlast', link: '', isDuplicate: false },
    { id: 312, title: 'Konjički klub Šumadija - oduzimanje zemljišta kneza Miloša Obrenovića', year: '2021', category: 'Lokalna vlast', link: '', isDuplicate: false },
    { id: 313, title: 'Ostavka premijera Miloša Vučevića', year: '2025', category: 'Politika', link: '', isDuplicate: false },
    { id: 314, title: 'Haos u Skupštini: dimne bombe i baklje', year: '2025', category: 'Parlament', link: '', isDuplicate: false },
    { id: 315, title: '„Zvučni top" (LRAD) na protestima - sporna upotreba', year: '2025', category: 'Ljudska prava', link: '', isDuplicate: false },
    { id: 316, title: 'Hapšenje Milorada Grčića (EPS) i drugih', year: '2025', category: 'Energetika', link: '', isDuplicate: false },
    { id: 317, title: 'Očitavanje brojila: posao dobio T&M Group Solutions', year: '2025', category: 'Tenderi', link: '', isDuplicate: false },
    { id: 318, title: 'NIS - američke sankcije', year: '2025', category: 'Energetika', link: '', isDuplicate: false },
    { id: 319, title: 'Policijska brutalnost u Novom Sadu (5. septembar)', year: '2025', category: 'Protesti', link: '', isDuplicate: false },
    { id: 320, title: 'Blokade RTS/RTV i medija', year: '2025', category: 'Mediji', link: '', isDuplicate: false },
    { id: 321, title: 'Jadar ponovo aktiviran na nivou EU (CRMA)', year: '2025', category: 'Ekologija', link: '', isDuplicate: false },
    { id: 322, title: 'Valjevo - prekomerna upotreba sile nad maloletnicima', year: '2025', category: 'Protesti', link: '', isDuplicate: false },
    { id: 323, title: 'Firma "Nites" (brat ministarke Darije Kisić) - 12,5 milijardi dinara od države', year: '2020-2023', category: 'Tenderi', link: 'https://nova.rs/vesti/biznis/firma-u-kojoj-je-angazovan-brat-ministarke-dobila-poslove-od-drzave-vredne-11-miliona-evra/', isDuplicate: false }
];

let filteredAffairs = [...affairs];

// ============================================================================
// INTERNATIONALIZATION (i18n) - Srpski i Engleski
// ============================================================================

const translations = {
    sr: {
        // Header
        title: 'Spisak afera SNS (2012–2025)',
        subtitle: 'Preko 324 zabeležene ili prijavljene afere i skandala',
        warningTitle: '⚠️ Napomena o ljudskim životima:',
        warningText: 'Pored novčane štete, procenjuje se da su mnoge afere direktno i indirektno dovele do gubitaka ljudskih života kroz loše zdravstvo, nesigurne građevinske radove, zapuštenu infrastrukturu i migracije koje su naterale ljude u rizične situacije.',
        
        // Damage Overview
        damageTitle: '💰 Vizuelni prikaz procenjene štete (maksimalno 6 milijardi €)',
        damageCategories: {
            construction: 'Velike građevinske afere',
            procurement: 'Javne nabavke',
            local: 'Lokalne "mikro" afere',
            land: 'Zemljište i koncesije',
            electoral: 'Predizborni pokloni/glasovi'
        },
        damageAmounts: {
            construction: '0,5 – 1,0 milijardi €',
            procurement: '2 – 3 milijarde €',
            local: '0,3 – 0,5 milijardi €',
            land: 'oko 1 milijarda €',
            electoral: '0,2 – 0,3 milijardi €'
        },
        
        // Chart labels
        chartLabels: [
            'Javne nabavke (2–3 mlrd €)',
            'Zemljište i koncesije (1 mlrd €)',
            'Građevinske afere (0,5–1 mlrd €)',
            'Lokalne afere (0,3–0,5 mlrd €)',
            'Predizborni pokloni (0,2–0,3 mlrd €)'
        ],
        
        // Controls
        searchPlaceholder: '🔍 Pretražite afere po ključnim rečima...',
        allCategories: 'Sve kategorije',
        allYears: 'Sve godine',
        showing: 'Prikazano:',
        affairs: 'afera',
        
        // Categories
        categories: {
            'Urbanizam': 'Urbanizam',
            'Zdravstvo': 'Zdravstvo',
            'Izbori': 'Izbori',
            'Finansije': 'Finansije',
            'Mediji': 'Mediji',
            'Ekologija': 'Ekologija',
            'Saobraćaj': 'Saobraćaj',
            'Obrazovanje': 'Obrazovanje',
            'Privreda': 'Privreda',
            'Lokalna vlast': 'Lokalna vlast',
            'Protesti': 'Protesti',
            'Energetika': 'Energetika',
            'Politika': 'Politika',
            'Parlament': 'Parlament',
            'Ljudska prava': 'Ljudska prava',
            'Tenderi': 'Tenderi',
            'Ostalo': 'Ostalo'
        },
        
        // Affair card
        readMore: '📰 Opširnije',
        comingSoon: '📰 Uskoro',
        duplicate: '⚠️ DUPLIKAT',
        
        // Footer
        footerText: 'Podaci prikupljeni iz javno dostupnih izvora. Aplikacija je kreirana u cilju transparentnosti i informisanja javnosti.',
        
        // No results
        noResults: '😔 Nije pronađena nijedna afera koja odgovara vašim kriterijumima pretrage.'
    },
    
    en: {
        // Header
        title: 'List of SNS Affairs (2012–2025)',
        subtitle: 'Over 324 recorded or reported affairs and scandals',
        warningTitle: '⚠️ Note on Human Lives:',
        warningText: 'In addition to financial damage, it is estimated that many affairs have directly and indirectly led to loss of human lives through poor healthcare, unsafe construction work, neglected infrastructure, and migrations that forced people into risky situations.',
        
        // Damage Overview
        damageTitle: '💰 Visual representation of estimated damage (up to 6 billion €)',
        damageCategories: {
            construction: 'Major construction affairs',
            procurement: 'Public procurement',
            local: 'Local "micro" affairs',
            land: 'Land and concessions',
            electoral: 'Pre-election gifts/votes'
        },
        damageAmounts: {
            construction: '0.5 – 1.0 billion €',
            procurement: '2 – 3 billion €',
            local: '0.3 – 0.5 billion €',
            land: 'approx. 1 billion €',
            electoral: '0.2 – 0.3 billion €'
        },
        
        // Chart labels
        chartLabels: [
            'Public procurement (2–3 bn €)',
            'Land and concessions (1 bn €)',
            'Construction affairs (0.5–1 bn €)',
            'Local affairs (0.3–0.5 bn €)',
            'Pre-election gifts (0.2–0.3 bn €)'
        ],
        
        // Controls
        searchPlaceholder: '🔍 Search affairs by keywords...',
        allCategories: 'All categories',
        allYears: 'All years',
        showing: 'Showing:',
        affairs: 'affairs',
        
        // Categories
        categories: {
            'Urbanizam': 'Urban Planning',
            'Zdravstvo': 'Healthcare',
            'Izbori': 'Elections',
            'Finansije': 'Finance',
            'Mediji': 'Media',
            'Ekologija': 'Environment',
            'Saobraćaj': 'Transportation',
            'Obrazovanje': 'Education',
            'Privreda': 'Economy',
            'Lokalna vlast': 'Local Government',
            'Protesti': 'Protests',
            'Energetika': 'Energy',
            'Politika': 'Politics',
            'Parlament': 'Parliament',
            'Ljudska prava': 'Human Rights',
            'Tenderi': 'Tenders',
            'Ostalo': 'Other'
        },
        
        // Affair card
        readMore: '📰 Read more',
        comingSoon: '📰 Coming soon',
        duplicate: '⚠️ DUPLICATE',
        
        // Footer
        footerText: 'Data collected from publicly available sources. The application was created for transparency and public information.',
        
        // No results
        noResults: '😔 No affairs found matching your search criteria.'
    }
};

// Trenutni jezik (default: srpski)
let currentLanguage = localStorage.getItem('language') || 'sr';

// Funkcija za dobijanje prevoda
function t(key) {
    const keys = key.split('.');
    let value = translations[currentLanguage];
    
    for (let k of keys) {
        if (value && value[k]) {
            value = value[k];
        } else {
            return key; // Vrati ključ ako prevod ne postoji
        }
    }
    
    return value;
}

// Bezbednosne funkcije - zaštita od XSS napada
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;',
        '/': '&#x2F;'
    };
    return String(text).replace(/[&<>"'/]/g, function(m) { return map[m]; });
}

function sanitizeInput(input) {
    // Uklanja potencijalno opasne karaktere iz korisničkog unosa
    return input.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
                .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
                .replace(/javascript:/gi, '')
                .replace(/on\w+\s*=/gi, '');
}

// Rate limiting za pretragu - sprečava preopterećenje
let searchTimeout = null;
const SEARCH_DELAY = 300; // ms

// Funkcija za promenu jezika
function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    updateUILanguage();
    renderAffairs(filteredAffairs);
    updateAffairCount(filteredAffairs.length);
    createDamageChart(); // Regeneriši chart sa novim jezikom
    
    // Ažuriraj dugmad za jezik
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(`lang-${lang}`).classList.add('active');
}

// Funkcija za ažuriranje svih tekstova u UI-ju
function updateUILanguage() {
    // Header
    document.querySelector('header h1').textContent = t('title');
    document.querySelector('.subtitle').textContent = t('subtitle');
    document.querySelector('.warning-box strong').textContent = t('warningTitle');
    document.querySelector('.warning-box').childNodes[2].textContent = ' ' + t('warningText');
    
    // Damage Overview
    document.querySelector('.damage-overview h2').textContent = t('damageTitle');
    const damageCards = document.querySelectorAll('.damage-card');
    const damageKeys = ['construction', 'procurement', 'local', 'land', 'electoral'];
    damageCards.forEach((card, index) => {
        const key = damageKeys[index];
        card.querySelector('h3').textContent = t(`damageCategories.${key}`);
        card.querySelector('.damage-amount').textContent = t(`damageAmounts.${key}`);
    });
    
    // Search i filteri
    document.getElementById('searchInput').placeholder = t('searchPlaceholder');
    document.querySelector('#categoryFilter option[value=""]').textContent = t('allCategories');
    document.querySelector('#yearFilter option[value=""]').textContent = t('allYears');
    
    // Popuni kategorije
    populateCategoryFilter();
    
    // Footer
    document.querySelector('footer p').textContent = t('footerText');
}

// Popunjavanje filtera za kategorije sa prevodima
function populateCategoryFilter() {
    const categoryFilter = document.getElementById('categoryFilter');
    const selectedValue = categoryFilter.value;
    
    // Sačuvaj sve opcije osim prve (Sve kategorije)
    const options = Array.from(categoryFilter.options).slice(1);
    
    // Očisti sve osim prve opcije
    while (categoryFilter.options.length > 1) {
        categoryFilter.remove(1);
    }
    
    // Dodaj opcije sa prevodima
    options.forEach(option => {
        const newOption = document.createElement('option');
        newOption.value = option.value;
        newOption.textContent = t(`categories.${option.value}`);
        categoryFilter.appendChild(newOption);
    });
    
    // Vrati selekciju
    categoryFilter.value = selectedValue;
}

// Inicijalizacija
document.addEventListener('DOMContentLoaded', function() {
    updateUILanguage();
    createDamageChart();
    populateYearFilter();
    renderAffairs(affairs);
    updateAffairCount(affairs.length);
    
    // Postavi aktivni jezik
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(`lang-${currentLanguage}`).classList.add('active');
    
    // Event listeners za jezike
    document.getElementById('lang-sr').addEventListener('click', () => changeLanguage('sr'));
    document.getElementById('lang-en').addEventListener('click', () => changeLanguage('en'));
    
    // Event listeners sa debouncing za pretragu
    document.getElementById('searchInput').addEventListener('input', function() {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(filterAffairs, SEARCH_DELAY);
    });
    document.getElementById('categoryFilter').addEventListener('change', filterAffairs);
    document.getElementById('yearFilter').addEventListener('change', filterAffairs);
    
    // Spreči slanje formi ako postoje (dodatna zaštita)
    document.addEventListener('submit', function(e) {
        e.preventDefault();
        return false;
    });
});

// Kreiranje grafikona
function createDamageChart() {
    const canvas = document.getElementById('damageChart');
    const ctx = canvas.getContext('2d');
    
    // Uništi stari chart ako postoji
    if (canvas.chart) {
        canvas.chart.destroy();
    }
    
    canvas.chart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: t('chartLabels'),
            datasets: [{
                data: [2.5, 1, 0.75, 0.4, 0.25],
                backgroundColor: [
                    '#e74c3c',
                    '#3498db',
                    '#f39c12',
                    '#9b59b6',
                    '#1abc9c'
                ],
                borderWidth: 2,
                borderColor: '#fff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 15,
                        font: {
                            size: 12
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.label;
                        }
                    }
                }
            }
        }
    });
}

// Popunjavanje filtera za godine
function populateYearFilter() {
    const yearFilter = document.getElementById('yearFilter');
    const years = [...new Set(affairs.map(a => a.year.split('-')[0] || a.year))].sort();
    
    years.forEach(year => {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        yearFilter.appendChild(option);
    });
}

// Renderovanje afera
function renderAffairs(affairsToRender) {
    const affairsList = document.getElementById('affairsList');
    affairsList.innerHTML = '';
    
    if (affairsToRender.length === 0) {
        affairsList.innerHTML = `<div class="no-results">${t('noResults')}</div>`;
        return;
    }
    
    affairsToRender.forEach(affair => {
        const card = document.createElement('div');
        card.className = `affair-card ${affair.isDuplicate ? 'duplicate' : ''}`;
        
        // Sanitizuj sve podatke pre prikazivanja
        // Koristi engleski naslov ako postoji i ako je engleski jezik aktivan
        const affairTitle = (currentLanguage === 'en' && affair.titleEn) ? affair.titleEn : affair.title;
        const safeTitle = escapeHtml(affairTitle);
        const safeYear = escapeHtml(affair.year);
        const safeCategory = escapeHtml(affair.category);
        const safeId = parseInt(affair.id); // Osiguraj da je ID broj
        
        // Svi linkovi prikazuju "Uskoro" - linkovi će biti ručno dodati kasnije
        const linkButton = `<span class="affair-link no-link">${t('comingSoon')}</span>`;
        
        const duplicateBadge = affair.isDuplicate 
            ? `<span class="duplicate-badge">${t('duplicate')}</span>` 
            : '';
        
        // Prevedi kategoriju
        const translatedCategory = t(`categories.${safeCategory}`);
        
        card.innerHTML = `
            <div class="affair-number">${safeId}</div>
            <h3 class="affair-title">${safeTitle}</h3>
            <span class="affair-year">📅 ${safeYear}</span>
            ${duplicateBadge}
            <div>
                <span class="affair-category">${translatedCategory}</span>
            </div>
            ${linkButton}
        `;
        
        affairsList.appendChild(card);
    });
}

// Filtriranje afera sa sanitizacijom unosa
function filterAffairs() {
    const searchInput = document.getElementById('searchInput');
    const rawSearchTerm = searchInput.value;
    
    // Sanitizuj unos pre procesiranja
    const sanitizedSearchTerm = sanitizeInput(rawSearchTerm).toLowerCase();
    
    // Ograniči dužinu pretrage (zaštita od DoS)
    if (sanitizedSearchTerm.length > 100) {
        searchInput.value = sanitizedSearchTerm.substring(0, 100);
        return;
    }
    
    const categoryFilter = document.getElementById('categoryFilter').value;
    const yearFilter = document.getElementById('yearFilter').value;
    
    filteredAffairs = affairs.filter(affair => {
        const matchesSearch = affair.title.toLowerCase().includes(sanitizedSearchTerm);
        const matchesCategory = !categoryFilter || affair.category === categoryFilter;
        const matchesYear = !yearFilter || affair.year.includes(yearFilter);
        
        return matchesSearch && matchesCategory && matchesYear;
    });
    
    renderAffairs(filteredAffairs);
    updateAffairCount(filteredAffairs.length);
}

// Ažuriranje brojača
function updateAffairCount(count) {
    document.getElementById('affairCount').innerHTML = `${t('showing')} <strong>${count}</strong> ${t('affairs')}`;
}

