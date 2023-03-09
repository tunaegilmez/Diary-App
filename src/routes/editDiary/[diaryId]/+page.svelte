<script>
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import { diaries } from "$lib/services/store.js";
  import { onMount } from "svelte";

  let diaryIdParam = $page?.params?.diaryId;
  let diary;

  onMount(() => {
    $diaries.map(_diary => {
      if (_diary?.id == diaryIdParam) {
        diary = _diary;
      }
    });
  });
</script>

<main>
  <h1>Edit {diary?.title}</h1>
  {#if diary}
    <div class="flex flex-col gap-y-4">
      <input
        class="title w-full p-2 capitalize text-2xl border border-slate-500"
        type="text"
        placeholder="Diary title"
        bind:value={diary.title}
      />
      <div>
        <textarea
          class="w-full min-h-[20rem] text-lg p-2 border border-slate-500"
          placeholder="Diary content..."
          bind:value={diary.content}
        />
      </div>

      <button
        class="self-end p-2 bg-gray-400 rounded-md"
        on:click={() => {
          let tarih = new Date();

          diaries.update(currentDiary => {
            return currentDiary.map(currentDiary => {
              if (currentDiary?.id == diaryIdParam) {
                currentDiary = {
                  ...currentDiary,
                  title: diary?.title,
                  content: diary?.content,
                  createdAt: `${tarih.getDate()}.${tarih.getMonth()}.${tarih.getFullYear()}`,
                };
              }
              return currentDiary;
            });
          });
          goto("/");
        }}>Update Diary</button
      >
    </div>
  {/if}
</main>

<style>
  main {
    max-width: 960px;
    margin: 40px auto;
    font-family: "Source Code Pro", monospace;
    text-align: center;
  }
  /* .title {
      text-transform: capitalize;
    } */
  h1 {
    font-size: 30px;
    margin-bottom: 15px;
  }
  textarea {
    height: 550px;
  }
</style>
