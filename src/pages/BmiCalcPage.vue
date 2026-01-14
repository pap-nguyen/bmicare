<template>
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>BMI Calculator</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent class="ion-padding">
      <IonCard class="p-4">
        <div class="space-y-4">
          <IonItem>
            <IonLabel position="stacked">Height (cm)</IonLabel>
            <IonInput
              v-model.number="heightCm"
              inputmode="decimal"
              type="number"
              placeholder="Input your height"
            />
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Weight (kg)</IonLabel>
            <IonInput
              v-model.number="weightKg"
              inputmode="decimal"
              type="number"
              placeholder="Input your weight"
            />
          </IonItem>

          <div class="flex flex-wrap gap-3">
            <IonButton expand="block" @click="calculateBmi">Calc BMI</IonButton>
            <IonButton expand="block" fill="outline" @click="clearInputs">Clear</IonButton>
          </div>

          <div v-if="bmiResult" class="rounded-lg bg-slate-50 p-4 text-center">
            <p class="text-sm uppercase text-slate-500">Your BMI</p>
            <p class="text-2xl font-semibold text-slate-900">{{ bmiResult }}</p>
            <p class="text-sm text-slate-600">{{ bmiCategory }}</p>
          </div>
        </div>
      </IonCard>

      <div class="mt-6 grid grid-cols-2 gap-3 text-sm">
        <div class="rounded-lg border border-emerald-200 bg-emerald-50 p-3">
          <p class="font-semibold text-emerald-700">BMI less than 18.50</p>
          <p class="text-emerald-700">Underweight</p>
        </div>
        <div class="rounded-lg border border-emerald-200 bg-emerald-50 p-3">
          <p class="font-semibold text-emerald-700">BMI 18.50 - 24.99</p>
          <p class="text-emerald-700">Healthy weight</p>
        </div>
        <div class="rounded-lg border border-amber-200 bg-amber-50 p-3">
          <p class="font-semibold text-amber-700">BMI 25.00 - 29.99</p>
          <p class="text-amber-700">Overweight</p>
        </div>
        <div class="rounded-lg border border-rose-200 bg-rose-50 p-3">
          <p class="font-semibold text-rose-700">BMI 30 or more</p>
          <p class="text-rose-700">Obese</p>
        </div>
      </div>
    </IonContent>

    <AppFooter />
  </IonPage>
</template>

<script setup lang="ts">
import {
  IonButton,
  IonCard,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/vue';
import { computed, ref } from 'vue';
import AppFooter from '../components/AppFooter.vue';

const heightCm = ref<number | null>(null);
const weightKg = ref<number | null>(null);
const bmiResult = ref<string | null>(null);
const bmiCategory = computed(() => {
  if (!bmiResult.value) {
    return '';
  }

  const bmi = Number.parseFloat(bmiResult.value);
  if (bmi < 18.5) {
    return 'Underweight';
  }
  if (bmi < 25) {
    return 'Healthy weight';
  }
  if (bmi < 30) {
    return 'Overweight';
  }
  return 'Obese';
});

const calculateBmi = () => {
  if (!heightCm.value || !weightKg.value) {
    bmiResult.value = null;
    return;
  }

  const heightMeters = heightCm.value / 100;
  const bmi = weightKg.value / (heightMeters * heightMeters);
  bmiResult.value = bmi.toFixed(2);
};

const clearInputs = () => {
  heightCm.value = null;
  weightKg.value = null;
  bmiResult.value = null;
};
</script>
