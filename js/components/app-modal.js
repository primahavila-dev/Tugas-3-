Vue.component("app-modal", {
  props: ["visible", "title", "message"],

  template: `

    <div
    v-if="visible"
    class="modal-overlay">

        <div class="modal-box">

            <h3>{{ title }}</h3>

            <p>{{ message }}</p>

            <button
            @click="$emit('close')">

                Tutup

            </button>

        </div>

    </div>

    `,
});
