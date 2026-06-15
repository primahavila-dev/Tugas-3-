Vue.component("ba-stock-table", {
  props: ["items", "upbjjList", "kategoriList"],

  data() {
    return {
      filterUpbjj: "",
      filterKategori: "",
      sortBy: "judul",

      stokMenipis: false,
    };
  },

  computed: {
    filteredData() {
      let data = [...this.items];

      if (this.filterUpbjj) {
        data = data.filter((item) => item.upbjj === this.filterUpbjj);
      }

      if (this.filterKategori) {
        data = data.filter((item) => item.kategori === this.filterKategori);
      }

      if (this.stokMenipis) {
        data = data.filter((item) => item.qty < item.safety);
      }

      if (this.sortBy == "judul") {
        data.sort((a, b) => a.judul.localeCompare(b.judul));
      }

      if (this.sortBy == "harga") {
        data.sort((a, b) => a.harga - b.harga);
      }

      if (this.sortBy == "qty") {
        data.sort((a, b) => a.qty - b.qty);
      }

      return data;
    },
  },

  watch: {
    filterUpbjj(newValue) {
      console.log("Filter UPBJJ berubah:", newValue);
    },

    filterKategori(newValue) {
      console.log("Filter kategori berubah:", newValue);
    },
  },

  methods: {
    formatHarga(nilai) {
      return "Rp " + nilai.toLocaleString("id-ID");
    },

    hapus(index) {
      if (confirm("Yakin hapus data?")) {
        this.items.splice(index, 1);
      }
    },
  },

  template: `

    <div>

        <h2>Data Stok Bahan Ajar</h2>

        <select v-model="filterUpbjj">

            <option value="">
                Semua UPBJJ
            </option>

            <option
            v-for="u in upbjjList">

                {{u}}

            </option>

        </select>

        <select v-model="filterKategori">

            <option value="">
                Semua Kategori
            </option>

            <option
            v-for="k in kategoriList">

                {{k}}

            </option>

        </select>

        <select v-model="sortBy">

            <option value="judul">
                Sort Judul
            </option>

            <option value="harga">
                Sort Harga
            </option>

            <option value="qty">
                Sort Stok
            </option>

        </select>

        <label>

            <input
            type="checkbox"
            v-model="stokMenipis">

            Stok Menipis

        </label>

        <table border="1">

            <tr>

                <th>Kode</th>
                <th>Judul</th>
                <th>UPBJJ</th>
                <th>Harga</th>
                <th>Qty</th>
                <th>Safety</th>
                <th>Status</th>
                <th>Aksi</th>

            </tr>

            <tr
            v-for="(item,index) in filteredData">

                <td>{{item.kode}}</td>
                <td>{{item.judul}}</td>
                <td>{{item.upbjj}}</td>

                <td>
                    {{formatHarga(item.harga)}}
                </td>

                <td>
                    {{item.qty}} buah
                </td>

                <td>
                    {{item.safety}} buah
                </td>

                <td>

                    <status-badge
                    :qty="item.qty"
                    :safety="item.safety">
                    </status-badge>

                </td>

                <td>

                    <button
                    @click="hapus(index)">

                        Hapus

                    </button>

                </td>

            </tr>

        </table>

    </div>

    `,
});
