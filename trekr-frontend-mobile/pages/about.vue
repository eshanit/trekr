<script setup lang="ts">
import {
    IonPage,
    IonHeader,
    IonText,
    IonTitle,
    IonToolbar,
    IonButton,
    IonContent
} from '@ionic/vue';

const valure = ref('')
</script>
<template>
    <ion-page>
        <ion-header :translucent="true">
            <ion-toolbar>
                <IonTitle>About</IonTitle>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
            <ion-text class="text-orange-500">
                <div class="my-5">Lets Talk About</div>
            </ion-text>
            <UFormGroup label="Email" required>
                <UInput placeholder="you@example.com" icon="i-heroicons-envelope" />
            </UFormGroup>

            <nuxt-link to="/">
                <ion-button type="submit" class="ion-padding-top" size="large">Home</ion-button>
            </nuxt-link>
        </ion-content>
    </ion-page>
</template>