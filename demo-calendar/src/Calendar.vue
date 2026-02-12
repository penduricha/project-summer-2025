<template>
  <div>
    <div>
      <input type="date" v-model="selectedDate" @change="updateWeek" />
    </div>
    <div>
      <h3>Tuần từ {{ weekStart }} đến {{ weekEnd }}</h3>
      <table>
        <thead>
        <tr>
          <th>Thời gian</th>
          <th v-for="(day, index) in weekDays" :key="index">
            {{ day.day }}<br/>{{ day.date }}
          </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(timeGroup, index) in timeGroups" :key="index">
          <td>{{ timeGroup.label }}</td>
          <td v-for="day in timeGroup.days" :key="day">{{ day }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedDate: new Date().toISOString().split("T")[0],
      weekStart: '',
      weekEnd: '',
      weekDays: [],
      timeGroups: [
        { label: '7h00 - 9h00', days: [] },
        { label: '9h30 - 11h30', days: [] },
        { label: '12h30 - 14h30', days: [] },
        { label: '15h00 - 17h00', days: [] },
        { label: '18h00 - 20h00', days: [] },
      ],
    };
  },
  methods: {
    updateWeek() {
      const date = new Date(this.selectedDate);
      const startOfWeek = new Date(date);
      startOfWeek.setDate(date.getDate() - (date.getDay() + 6) % 7); // Thứ Hai

      this.weekStart = startOfWeek.toLocaleDateString();
      const endOfWeek = new Date(startOfWeek);
      endOfWeek.setDate(endOfWeek.getDate() + 6);
      this.weekEnd = endOfWeek.toLocaleDateString();

      this.populateWeekDays(startOfWeek);
    },
    populateWeekDays(startOfWeek) {
      this.weekDays = [];
      for (let i = 0; i < 7; i++) {
        const day = new Date(startOfWeek);
        day.setDate(day.getDate() + i);
        this.weekDays.push({
          date: day.toLocaleDateString(),
          day: day.toLocaleString('vi-VN', { weekday: 'long' }), // lấy tên thứ
        });
      }

      this.populateTimeGroups();
    },
    populateTimeGroups() {
      this.timeGroups.forEach(group => {
        group.days = this.weekDays.map(() => ""); // Khởi tạo rỗng
      });
    },
  },
  mounted() {
    this.updateWeek();
  },
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}

th {
  background-color: #f2f2f2;
}
</style>