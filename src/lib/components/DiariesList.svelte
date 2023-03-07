<script>
  import Card from "../shared/Card.svelte";
</script>

<div
  class="diary-list flex flex-col grid gap-10 xl:grid-cols-2 grid-cols-1 relative"
>
  {#each { length: 3 } as _, i}
    <Card>
      <div>
        <div class="flex justify-between mb-3">
          <h1 class="text-center text-2xl text-red-800">Diary Title</h1>
          <li class="first-line:text-gray-400">0{i + 1}.01.2023</li>
        </div>
        <div>
          <p
            class="first-letter:text-2xl first-letter:mr-[1px] first-letter:text-gray-700"
          >
            Diary content...
          </p>
        </div>
      </div>
    </Card>
  {/each}
</div>

<style>
  /* .diary-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  } */
  li {
    list-style: none;
  }
</style>
