# Test technique
## API (Express js)

**Temps: 2h15 (+ front app 2h15)**

### Axe d'amélioration

- Gestion d'erreur complète
- Typescript pourquoi pas
- Plus de tests

## Lancer avec docker
```
docker build . -t test-tech/free2move-api
docker run -p 3000:3000 -d test-tech/free2move-api
```

-> localhost:3000

## Installation sans docker

```
npm install
cp .env.dist .env
```

## Démarrer en local

```
npm run dev
```
-> localhost:3000
