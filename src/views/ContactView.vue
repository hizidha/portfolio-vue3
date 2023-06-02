<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      message: '',
      submitted: false,
      entries: []
    };
  },
  methods: {
    submitForm(event) {
      event.preventDefault();

      // Menyimpan hasil input dalam tabel
      const formData = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        message: this.message
      };
      this.entries.push(formData);

      // Cetak di console.log
      console.log(formData);

      // Reset form setelah mengirim
      this.resetForm();
    },
    resetForm() {
      // Reset nilai form setelah mengirim
      this.name = '';
      this.email = '';
      this.phone = '';
      this.message = '';
      this.submitted = true;
    }
  }
};
</script>

<template>
  <h2 class="h2-title">Contact Form</h2>
  <div class="form-wrapping">
    <form class="form" @submit="submitForm">
      <div>
        <label class="form-label" for="name">Nama</label>
        <input class="form-control" type="text" id="name" v-model="name" 
                placeholder="full name" required>
      </div>
      <div>
        <label class="form-label" for="email">Email</label>
        <input class="form-control" type="email" id="email" v-model="email" 
                placeholder="email address" required>
      </div>
      <div>
        <label class="form-label" for="phone">Telepon</label>
        <input class="form-control" type="tel" id="phone" v-model="phone"
                placeholder="phone number">
      </div>
      <div>
        <label class="form-label" for="message">Pesan</label>
        <textarea class="form-control" id="message" v-model="message" 
                  placeholder="message" required></textarea>
      </div>
      <div class="d-flex justify-content-between">
        <button type="button" class="spc btn btn-sd" @click="resetForm">Reset</button>
        <button type="submit" class="spc btn btn-br">Kirim</button>
      </div>
    </form>
  </div>

    <table class="table table-dark table-striped table-fixed">
      <colgroup>
        <col style="width: 50px;">
        <col style="width: 150px;">
        <col style="width: 125px;">
        <col style="width: 125px;">
        <col style="width: 300px;">
      </colgroup>
      <thead>
        <tr>
          <th class="table-mainn">No</th>
          <th class="table-mainn">Nama</th>
          <th class="table-mainn">Email</th>
          <th class="table-mainn">Telepon</th>
          <th class="table-mainn">Pesan</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(entry, index) in entries" :key="index">
          <td class="td-cen">{{ index+1 }}</td>
          <td class="td-cen">{{ entry.name }}</td>
          <td class="td-cen">{{ entry.email }}</td>
          <td class="td-cen">{{ entry.phone }}</td>
          <td class="td-just">{{ entry.message }}</td>
        </tr>
      </tbody>
    </table>
</template>

<style>
.form-wrapping {
  padding: 0rem 10rem;
}

.form-control {
  margin-bottom: 1rem;
}

th, td {
  color: var(--vt-c-white);
}

th {
  font-weight: 750;
}

.td-cen, th {
  text-align: center;
}

.td-just {
  text-align: justify;
}

.table-mainn {
  color: var(--vt-c-primary-color);
}

.spc {
  margin-top: 0.5rem;
  margin-bottom: 2.5rem;
}
</style>
