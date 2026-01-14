<template>
  <IonFooter>
    <IonToolbar>
      <div class="flex items-center justify-around px-3">
        <IonButton fill="clear" router-link="/bmi">BMI Calc</IonButton>
        <IonButton fill="clear" router-link="/chart">BMI Chart</IonButton>
        <IonButton fill="clear" router-link="/about">About Us</IonButton>
      </div>
    </IonToolbar>
  </IonFooter>
</template>

<script setup lang="ts">
import { IonButton, IonFooter, IonToolbar } from '@ionic/vue';
</script>
