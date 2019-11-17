<script>
  export let userId;
  export let name;
  export let email;
</script>

<style>
  .child {
    padding: 5px;
    border: 2px solid black;
  }
</style>

<section class="child">
  <p>userId: {userId}</p>
  <p>name: {name}</p>
  <p>email: {email}</p>
</section>
