Vue.component("status-badge", {
  props: ["qty", "safety"],

  computed: {
    statusText() {
      if (this.qty == 0) {
        return "Kosong";
      }

      if (this.qty < this.safety) {
        return "Menipis";
      }

      return "Aman";
    },
  },

  template: `

    <span>

        <span
        v-if="qty >= safety"
        class="aman">

            ✅ Aman

        </span>

        <span
        v-else-if="qty > 0"
        class="warning">

            ⚠ Menipis

        </span>

        <span
        v-else
        class="danger">

            ❌ Kosong

        </span>

    </span>

    `,
});
