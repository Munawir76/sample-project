<template>
  <b-container>
    <div class="history">
      <div class="title">
        {{ desc.titleName }}
      </div>
      <b-row>
        <b-col><strong>Semeru Outdoor</strong>{{ desc.historySatu }} </b-col>
        <b-col>{{ desc.historyDua }}</b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
import { descSection } from "../constant/wording-section";
const desc = descSection;

export default {
  name: "History",
  data() {
    return {
      desc: desc,
    };
  },
};
</script>

<style>
.title {
  font-weight: bold;
  font-size: xx-large;
  margin-bottom: 3rem;
  margin-top: 5rem;
  font-family: "Copperplate";
}

.history {
  flex: content;
  justify-content: center;
}
</style>
