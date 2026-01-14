<template>
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>About Us</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent class="ion-padding">
      <IonCard class="p-4">
        <h2 class="text-lg font-semibold text-slate-900">About BmiCare</h2>
        <p class="mt-2 text-sm text-slate-600">
          This mobile-first rebuild uses Capacitor, Vue, TypeScript, Tailwind CSS, and Ionic components.
        </p>
      </IonCard>
    </IonContent>

    <AppFooter />
  </IonPage>
</template>

<script setup lang="ts">
import { IonCard, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import AppFooter from '../components/AppFooter.vue';
</script>
