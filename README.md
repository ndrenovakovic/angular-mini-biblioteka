# Mini biblioteka - Angular projekat

Jednostavna Angular aplikacija za evidenciju knjiga.

## Funkcionalnosti

- unos naziva knjige, autora i žanra
- prikaz knjiga u tabeli
- pretraga po nazivu ili autoru
- označavanje knjige kao pročitane
- brisanje knjige
- čuvanje podataka u localStorage-u

## Pokretanje

1. Otvoriti folder projekta u Visual Studio Code-u.
2. Otvoriti Terminal.
3. Pokrenuti:

```bash
npm install
```

4. Nakon instalacije pokrenuti:

```bash
npm start
```

5. U browseru otvoriti:

```text
http://localhost:4200
```

## Najvažniji fajlovi

- `src/app/app.component.ts` - podaci i funkcije aplikacije
- `src/app/app.component.html` - HTML prikaz aplikacije
- `src/app/app.component.css` - izgled aplikacije

Aplikacija nema backend ni bazu podataka. Podaci se čuvaju u localStorage-u internet pregledača.
