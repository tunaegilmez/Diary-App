<script>
  import Card from "../shared/Card.svelte";
  import RestService from "../services/rest";

  // import { diaries, activeUser } from "../services/store";

  let diaries;
  let limit = 10;
  let skip = 0;
  let totalDataCount = 0;
  const getDiaries = async () => {
    let response = await RestService.getDiaries(limit, skip);
    diaries = response["diaries"];
    totalDataCount = response["count"];
  };
  getDiaries();

  //Delete Diary
  const deleteDiary = async diaryId => {
    let response = await RestService.deleteDiary(diaryId);
    if (response["status"]) {
      console.log("Successfully deleted");
      getSliders();
    } else {
      console.log(response.message);
    }
  };
</script>

<div
  class="diary-list flex flex-col grid gap-10 xl:grid-cols-2 grid-cols-1 relative"
>
  {#if diaries && diaries.length > 0}
    {#each diaries as diary}
      <!-- {#if diary.owner === $activeUser} -->
      <Card>
        <div>
          <div class="flex justify-between mb-3">
            <h1 class="text-center text-2xl text-red-800">{diary.title}</h1>
            <!-- <li class="first-line:text-gray-400">{diary.createdAt}</li> -->
          </div>
          <div>
            <p
              class="first-letter:text-2xl first-letter:mr-[1px] first-letter:text-gray-700"
            >
              {diary.description}
            </p>
          </div>
          <div class="absolute inset-x-0 bottom-0 flex justify-between p-5">
            <a href="/editDiary/{diary._id}">
              <i
                class="bi bi-pencil-square text-2xl text-emerald-700 cursor-pointer border-b-2 border-emerald-500 border-opacity-0 hover:border-opacity-100 hover:text-emerald-500"
              />
            </a>
            <!-- svelte-ignore missing-declaration -->
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <i
              on:click={() => deleteDiary(diary._id.toString())}
              class="bi bi-trash text-2xl text-red-700 cursor-pointer border-b-2 border-red-500 border-opacity-0 hover:border-opacity-100 hover:text-red-500"
            />
          </div>
        </div>
      </Card>
      <!-- {/if} -->
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
  /* li {
    list-style: none;
  } */
</style>
