<template>
  <section class="py-4 px-1 flex gap-3">
    <div class="flex flex-1 flex-col gap-3 flex-wrap">
      <div class="w-[500px] h-[210px] bg-green rounded-lg">
        <div class="flex items-center gap-4">
          <div
            class="flex items-center justify-center w-[140px] h-[140px] mt-4"
          >
            <img
              src="../assets/images/Ellipse31.png"
              class="object-cover border-8 border-gray rounded-full"
            />
          </div>
          <div class="flex flex-col gap-3 text-white p-2">
            <h2 class="text-2xl">Welcome Back!</h2>
            <p class="text-lg font-medium">Mrs. Elven James</p>
            <p class="text-md font-medium">Principal Delwathon Schools</p>
            <div class="flex gap-3">
              <button class="bg-[#006E79] px-4 py-2 rounded">
                User Role: Admin
              </button>
              <button
                class="border border-white px-4 py-2 rounded flex justify-center items-center gap-2"
              >
                View Profile
                <img
                  src="../assets/images/greater.png"
                  class="w-[14px] h-[14px] object-cover"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="flex gap-2">
        <div class="w-[245px] px-4 py-2 flex bg-blue rounded gap-3">
          <img
            src="../assets/images/title.png"
            class="w-[40px] h-[40px] object-cover"
          />
          <div class="flex flex-col text-white">
            <p>00012</p>
            <p>Task Assigned</p>
          </div>
        </div>
        <div class="w-[245px] px-4 py-2 flex bg-green rounded gap-3">
          <img
            src="../assets/images/mark.png"
            class="w-[40px] h-[40px] object-cover"
          />
          <div class="flex flex-col text-white">
            <p>00007</p>
            <p>Task Completed</p>
          </div>
        </div>
      </div>
      <div class="max-h-[230px]">
        <PieChart/>
      </div>
    </div>
    <div class="flex flex-col gap-3">
      <div class="flex gap-3">
        <div class="px-4 py-2 flex box-gradient rounded gap-3">
          <img
            src="../assets/images/employee.png"
            class="w-[30px] h-[30px] object-cover"
          />
          <div class="flex flex-col text-white">
            <p>200</p>
            <p>Total Teachers</p>
          </div>
        </div>
        <div class="px-4 py-2 flex bg-green rounded gap-3">
          <img
            src="../assets/images/grad.png"
            class="w-[40px] h-[40px] object-cover"
          />
          <div class="flex flex-col text-white">
            <p>2000</p>
            <p class="text-sm">Total Students</p>
          </div>
        </div>
        <div class="px-4 py-2 flex bg-blue rounded gap-3">
          <img
            src="../assets/images/parent.png"
            class="w-[40px] h-[40px] object-cover"
          />
          <div class="flex flex-col text-white">
            <p>500</p>
            <p class="text-sm">Total Guardians</p>
          </div>
        </div>
      </div>
      <div class="mb-3">
      <LineChart />
      </div>
      <BarChart />
    </div>
  </section>
</template>
<script setup>  
    import LineChart from "../components/LineChart.vue";   
    import BarChart from "../components/BarChart.vue";   
    import PieChart from "../components/PieChart.vue";   
</script> 