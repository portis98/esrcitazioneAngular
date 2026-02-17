# Esercitazione Angular - Todo List

Applicazione Angular moderna per la gestione di una lista di cose da fare con Angular 21, Bootstrap e Material Design.

## 📋 Prerequisiti

Prima di iniziare, assicurati di avere installato:

- **Node.js** versione 18+ 
- **npm** (fornito con Node.js)
- **Angular CLI**: `npm install -g @angular/cli`

## Avvio Rapido

```bash
# Installa dipendenze
npm install

# Avvia il server di sviluppo
ng serve --open
```

L'app si aprirà automaticamente al browser all'indirizzo http://localhost:4200/

## 📁 Struttura del Progetto

```
src/
├── app/
│   ├── app.ts              # Componente root
│   ├── app.html            # Template root
│   ├── app.css             
│   ├── todos/              # Componente Todo
│   │   ├── todos.ts        
│   │   ├── todos.html
│   │   ├── todos.css
│   │   └── Todo.ts         # Interfaccia
│   └── app.routes.ts       # Configurazione routing
├── main.ts                 # Entry point
├── index.html
├── styles.css
└── material-theme.scss
```

## ✨ Caratteristiche

- ✅ Visualizzazione lista Todo predefinita
- ✅ Completa/scompleta todo con checkbox Material
- ✅ Modifica titolo todo (click matita)
- ✅ Elimina todo (click cestino)
- ✅ Interfaccia responsive con Bootstrap e Material Design
- ✅ Icone Font Awesome

## 🛠️ Comandi Angular CLI

```bash
# Avvia server di sviluppo  
ng serve

# Build per produzione
ng build

# Run unit tests
ng test

# Genera nuovo componente
ng generate component nome-componente
```

## 💡 Come Usare l'App

1. **Checkbox** - Clicca per segnare todo come completato/non completato
2. **Titolo** - Visualizza ID e titolo del todo  
3. **Icona Cestino** - Elimina il todo dalla lista
4. **Icona Matita** - Abilita editing del titolo
5. **Icona Check** (in editing) - Salva le modifiche

## 📦 Dipendenze

- Angular 21
- Bootstrap 5  
- Angular Material
- Font Awesome 
- Popper.js (richiesto da Bootstrap)

## 🐛 Troubleshooting

**"ng command not found"**
```bash
npm install -g @angular/cli
```

**Porta 4200 occupata**
```bash
ng serve --port 4201
```

**Reinstallare dipendenze**
```bash
rm -rf node_modules package-lock.json
npm install
```

## 📝 Note Importanti

- Bootstrap e Popper.js sono caricati tramite gli script in `angular.json`
- Componenti standalone senza NgModule
- Control flow moderni: `@if`, `@for` (non *ngIf, *ngFor)
- FormsModule importato per il two-way binding `[(ngModel)]`

## 👨‍💻 Aggiungere Nuove Feature

```bash
# Crea nuovo componente
ng generate component nome-componente

# Modifica la logica in .ts
# Personalizza il template .html  
# Aggiungi stili in .css
# Importa il componente dove serve
```

---

**Documentazione:** https://angular.io/docs
