<template>
  <div>
    <div class="container-fluid bg-light mt-4" style="margin-left:450px">
      <div class="container">
        <div class="row">
            <div class="card">             
                <p class="card-category text-center">
                  {{ m1 }}
                </p>
                <h4 class="card-title text-center">{{ m2 }}</h4>
              </div>
              <div class="card-footer">
                  <a href="">{{ m3 }}</a>
                </div>
            </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: ["m1", "m2", "m3"],
};
</script>
