<template>
  <div class="component row justify-content-center">
    <div class="card shadow" style="width: 35rem">
      <img class="card-img-top" :src="photo.hdurl" alt="Card image cap" />
      <div class="card-body">
        <h1 class="card-title text-center">{{ photo.copyright }}</h1>
        <p class="card-text">{{ photo.explanation }}</p>
      </div>
    </div>
  </div>
</template>


<script>
import { computed, onMounted } from "@vue/runtime-core";
import { AppState } from "../AppState";
import { photosService } from "../services/PhotosService";
import { logger } from "../utils/Logger";
export default {
  setup() {
    onMounted(async () => {
      try {
        await photosService.getPhoto();
      } catch (error) {
        logger.error(error);
      }
    });
    return {
      photo: computed(() => AppState.photo),
    };
  },
};
</script>


<style lang="scss" scoped>
.img-size {
  height: 500px;
  border-radius: 50%;
}
</style>