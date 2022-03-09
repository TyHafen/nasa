<template>
  <header class="container-fluid">
    <div class="row">
      <div class="col-6">
        <h1 class="text-center">
          <img
            style="width: 100px"
            src="https://www.mangologisticsgroup.co.uk/couriers/wp-content/uploads/sites/3/2017/07/Nasa-Logo-Transparent-Background-download-1200x998.png"
            alt=""
          />
        </h1>
      </div>

      <form class="col-6" @submit.prevent="search">
        <div class="input-group mb-3">
          <input
            type="date"
            class="form-control"
            placeholder="date to search..."
            aria-label="date"
            aria-describedby="basic-addon2"
            v-model="query"
            @change="search"
          />
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  </header>
  <main class="container-fluid">
    <router-view />
  </main>
  <footer></footer>
</template>

<script>
import { computed } from "vue";
import { AppState } from "./AppState";
import { photosService } from "./services/PhotosService";
import { ref } from "@vue/reactivity";

export default {
  name: "App",

  setup() {
    const query = ref(new Date().toISOString().split("T")[0]);
    return {
      query,
      appState: computed(() => AppState),

      search() {
        photosService.search(query.value);
      },
    };
  },
};
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
</style>
