<script>
  import Card from "../shared/Card.svelte";

  import { diaries, activeUser } from "../services/store";
</script>

<div
  class="diary-list flex flex-col grid gap-10 xl:grid-cols-2 grid-cols-1 relative"
>
  {#if $diaries && $diaries.length > 0}
    {#each $diaries as diary}
      {#if diary.owner === $activeUser}
        <Card>
          <div>
            <div class="flex justify-between mb-3">
              <h1 class="text-center text-2xl text-red-800">{diary.title}</h1>
              <li class="first-line:text-gray-400">01.01.2023</li>
            </div>
            <div>
              <p
                class="first-letter:text-2xl first-letter:mr-[1px] first-letter:text-gray-700"
              >
                {diary.content}
              </p>
            </div>
          </div>
        </Card>
      {/if}
    {/each}
  {:else}
    <h1 class="text-xl text-gray-500">We Dont Find Any Diary...</h1>
  {/if}
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
