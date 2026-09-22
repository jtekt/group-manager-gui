<template>
  <v-card class="mx-auto" max-width="60em">
    <template #prepend>
      <v-avatar start color="transparent">
        <v-icon>mdi-information-outline</v-icon>
      </v-avatar>
    </template>
    <template #title>Group manager GUI v{{ version }}</template>
    <v-card-text>
      <v-row>
        <v-col>
          Developed and maintained by
          <a href="https://maximemoreillon.com">Maxime Moreillon</a>
        </v-col>
      </v-row>

      <v-data-table
        hide-default-footer
        :items-per-page="-1"
        :headers="headers"
        :items="services"
      />
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import runtimeEnv from "@/runtimeEnv";

const { t } = useI18n();
const version = import.meta.env.VITE_APP_VERSION || "dev";

const headers = computed(() => [
  { title: t("Service"), key: "name" },
  { title: "URL", key: "url" },
]);

const services = [
  { name: "Group manager GUI", url: window.location.origin },
  {
    name: "Group manager back-end",
    url: runtimeEnv.VITE_GROUP_MANAGER_API_URL,
  },
  { name: "Identification URL", url: runtimeEnv.VITE_IDENTIFICATION_URL },
  { name: "Login URL", url: runtimeEnv.VITE_LOGIN_URL },
];
</script>
