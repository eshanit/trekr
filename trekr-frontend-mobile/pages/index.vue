<script setup lang="ts">
import { 
    IonPage,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButton, 
    IonContent } from '@ionic/vue';
</script>
<template>
    <ion-page>
        <ion-header :translucent="true">
            <ion-toolbar>
                <IonTitle>Home</IonTitle>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
            <h1>Home Page</h1>
            <nuxt-link to="/login">
                <!-- <ion-button type="submit" class="ion-padding-top" size="large">About</ion-button> -->
                <UButton variant="soft" size="lg"><strong>login</strong></UButton>
            </nuxt-link>
        </ion-content>
    </ion-page>
</template>