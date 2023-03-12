<script>
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";

  import { onMount } from "svelte";

  import RestService from "../../../lib/services/rest";

  onMount(() => {
    getDiary();
  });

  let diary = {};

  const getDiary = async () => {
    let { diaryId } = $page.params;
    console.log(diaryId, "diary id in param");
    let response = await RestService.getDiary(diaryId);
    console.log("response--", response);
    if (response["status"] && response["diary"]) {
      diary = response["diary"];
      console.log("diary success");
    } else {
      console.log("diary error");
    }
  };

  // getDiary();

  const updateDiary = async () => {
    let response = await RestService.updateDiary(diary?._id, diary);
    console.log("response--", response);
    if (response["status"]) {
      console.log("edit success");
      goto("/");
    } else {
      console.log("edit error");
    }
  };
</script>

<main>
  <!-- {diary.title.value} -->
  <!-- <h1>Edit {diary.title}</h1> -->
  <!-- {#if diary} -->
  <div class="flex flex-col gap-y-4">
    <input
      class="title w-full p-2 capitalize text-2xl border border-slate-500"
      type="text"
      bind:value={diary.title}
      placeholder="Diary title"
    />
    <div>
      <textarea
        bind:value={diary.description}
        class="w-full min-h-[20rem] text-lg p-2 border border-slate-500"
        placeholder="Diary content..."
      />
    </div>

    <button
      class="self-end p-2 bg-gray-400 rounded-md"
      on:click={() => updateDiary()}>Update Diary</button
    >
  </div>
  <!-- {/if} -->
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
  /* h1 {
    font-size: 30px;
    margin-bottom: 15px;
  } */
  textarea {
    height: 550px;
  }
</style>
