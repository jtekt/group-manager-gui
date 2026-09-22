<template>
  <v-app>
    <v-app-bar color="black">
      <v-app-bar-nav-icon v-if="!route.meta.public" @click="drawer = !drawer" />
      <v-app-bar-title>Group manager </v-app-bar-title>
      <template #append>
        <LocaleSelector />
        <ThemeToggle />
        <v-btn v-if="VITE_APPS_URL" :href="VITE_APPS_URL" icon="mdi-apps" />
        <v-btn v-if="VITE_HELP_URL" :href="VITE_HELP_URL" icon="mdi-help" />
        <v-btn  v-if="!route.meta.public" icon="mdi-logout" @click="logout" />
      </template>
    </v-app-bar>

    <template v-if="!route.meta.public">
      <v-navigation-drawer v-model="drawer">
        <v-list nav>
          <v-list-item
            v-for="(item, index) in nav"
            :key="`nav_item_${index}`"
            :to="item.to"
            :prepend-icon="item.icon"
            :title="item.title"
            exact
          />
        </v-list>
      </v-navigation-drawer>
    </template>

    <v-main>
      <v-container :fluid="!!route.meta.public">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import LocaleSelector from "@/components/LocaleSelector.vue";
import ThemeToggle from "@/components/ThemeToggle.vue";
import { useAuth } from "@jtekt/vuetify-auth";
import api from "./api";
import runtimeEnv from "@/runtimeEnv";

const { VITE_APPS_URL, VITE_HELP_URL } = runtimeEnv;

const { t } = useI18n();
const route = useRoute();
const { session, logout } = useAuth();

const drawer = ref(true);

const nav = computed(() => [
  {
    title: t("My Groups"),
    to: { name: "UserGroups", params: { user_id: "self" } },
    icon: "mdi-account",
  },
  {
    title: t("Groups"),
    to: { name: "Groups" },
    icon: "mdi-account-multiple",
  },
  {
    title: t("Create group"),
    to: { name: "CreateGroup" },
    icon: "mdi-account-multiple-plus",
  },
  {
    title: t("About"),
    to: { name: "About" },
    icon: "mdi-information-outline",
  },
]);

watch(
  [session],
  ([auth]) => {
    if (auth?.accessToken) {
      api.defaults.headers.common.Authorization = `Bearer ${auth.accessToken}`
    } 
  },
  { immediate: true }
)
</script>

<style>
a {
  color: rgb(var(--v-theme-primary));
}

.user_picker,
.group_picker {
  height: 70vh;
}
</style>
