# Taklan PM - Capacitor Android build scaffold

This repository contains a static PWA in the `web/` folder and a Capacitor configuration so you can produce an Android APK.

## Two ways to produce an APK

### A) Build locally (recommended if you have a computer)
1. Install Node.js and npm, and Android Studio + Android SDK (API 33+).
2. In the repo root run:
   ```bash
   npm install
   # optionally, run your web build step here to populate web/ (this project already includes the PWA static files)
   npx cap add android   # only the first time
   npx cap sync android
   npx cap open android  # opens Android Studio: build from there (recommended)
   ```
3. In Android Studio: select Build > Build Bundle(s) / APK(s) > Build APK(s).
4. The signed/unsigned APK will be in `android/app/build/outputs/apk/...`

### B) Use GitHub Actions (CI) to build an APK automatically
1. Create a GitHub repo and push all files in this package.
2. Create GitHub repository secrets:
   - `ANDROID_SIGNING_KEY` (optional): base64 of your keystore if you want to sign the APK in CI.
   - `ANDROID_KEYSTORE_PASSWORD`, `ANDROID_KEY_ALIAS`, `ANDROID_KEY_PASSWORD` (if signing).
3. The included workflow `.github/workflows/android-build.yml` will attempt to build the APK on GitHub Actions and upload it as an artifact.

**Notes & limitations**:
- Building on GitHub Actions requires installing Android SDK components. The workflow in this repo demonstrates a working approach but you may need to adapt SDK versions or Gradle settings based on the Android plugin and Capacitor version.
- For production release you must sign the APK with your keystore. The workflow can be extended to decode a base64 keystore secret and use `jarsigner`/`apksigner`.
- If you need help pushing this repo and enabling Actions, tell me and I will give step-by-step commands you can run on any computer or services like GitHub's web UI.

