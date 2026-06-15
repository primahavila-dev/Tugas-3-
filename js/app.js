new Vue({
  el: "#app",

  data: {
    tab: "stok",

    stok: [],
    tracking: [],
    paket: [],
    upbjjList: [],
    kategoriList: [],

    showModal: false,
    modalTitle: "",
    modalMessage: "",
  },

  methods: {
    bukaModal(judul, pesan) {
      this.modalTitle = judul;
      this.modalMessage = pesan;
      this.showModal = true;
    },

    tutupModal() {
      this.showModal = false;
    },
  },

  mounted() {
    fetch("data/dataBahanAjar.json")
      .then((response) => response.json())
      .then((data) => {
        this.stok = data.stok;
        this.tracking = data.tracking;
        this.paket = data.paket;

        this.upbjjList = data.upbjjList;
        this.kategoriList = data.kategoriList;
      });
  },
});
