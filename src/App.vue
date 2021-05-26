<template>
  <m-header />
  <tab />
  <router-view :style="viewStyle" />
  <player />
</template>

<script>
import Header from "@/components/header/header";
import Tab from "@/components/tab/tab";
import Player from "@/components/player/player";
import { mapState } from "vuex";

export default {
  components: {
    MHeader: Header,
    Tab,
    Player,
  },
  computed: {
    viewStyle() {
      const bottom = this.playlist.length ? "60px" : "0";
      return { bottom };
    },
    ...mapState(["playlist"]),
  },
};
</script>

<style lang="scss"></style>
