# BmiCare

BmiCare is being migrated from a Cordova + jQuery Mobile app to a modern mobile stack using Capacitor, Vue 3, TypeScript, Tailwind CSS, and Ionic Vue components.

## Tech Stack
- Vue 3 + TypeScript (Vite)
- Ionic Vue for mobile UI components
- Tailwind CSS for layout and styling
- Capacitor for native runtime

## Project Structure
- `src/` - Vue application source
- `src/pages/` - App pages (BMI calculator, chart, about)
- `src/components/` - Shared UI components
- `capacitor.config.ts` - Capacitor app configuration

## Getting Started
> Dependencies are not installed in this environment. Install them locally before running the app.

```bash
npm install
npm run dev
```

## Building for Native
```bash
npm run build
npx cap add ios
npx cap add android
npx cap sync
```
