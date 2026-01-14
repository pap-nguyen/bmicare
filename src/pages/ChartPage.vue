<template>
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>BMI Chart</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent class="ion-padding">
      <IonCard class="p-4">
        <h2 class="text-lg font-semibold text-slate-900">Chart Page</h2>
        <p class="mt-2 text-sm text-slate-600">
          Add your charting library here when you are ready to visualize BMI ranges over time.
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
