Vue.component("do-tracking", {
  props: ["data"],

  data() {
    return {
      keyword: "",
      hasil: null,
    };
  },

  methods: {
    cariDO() {
      this.hasil = null;

      this.data.forEach((item) => {
        let nomorDO = Object.keys(item)[0];

        let detail = item[nomorDO];

        if (nomorDO.toLowerCase().includes(this.keyword.toLowerCase())) {
          this.hasil = {
            nomorDO,
            detail,
          };
        }
      });
    },

    reset() {
      this.keyword = "";
      this.hasil = null;
    },
  },

  template: `

<div>

<h2>Tracking Delivery Order</h2>

<input
type="text"
v-model="keyword"
placeholder="Masukkan Nomor DO">

<button
@click="cariDO">

Search DO

</button>

<button
@click="reset">

Reset

</button>

<hr>

<div v-if="hasil">

<h3>Data Pengiriman</h3>

<p>
<b>Nomor DO:</b>
{{hasil.nomorDO}}
</p>

<p>
<b>Nama:</b>
{{hasil.detail.nama}}
</p>

<p>
<b>Status:</b>
{{hasil.detail.status}}
</p>

<p>
<b>Ekspedisi:</b>
{{hasil.detail.ekspedisi}}
</p>

<p>
<b>Tanggal Kirim:</b>
{{hasil.detail.tanggalKirim}}
</p>

<h4>Riwayat Perjalanan</h4>

<ul>

<li
v-for="item in hasil.detail.perjalanan">

{{item.waktu}}
-
{{item.keterangan}}

</li>

</ul>

</div>

<div v-else>

<p>
Masukkan nomor DO lalu klik Search
</p>

</div>

</div>

`,
});
