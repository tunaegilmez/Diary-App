<script>
  import RestService from "../../lib/services/rest";
  import { onMount } from "svelte";

  import { goto } from "$app/navigation";

  let title;
  let description;

  let addDiary;

  onMount(() => {
    addDiary = async () => {
      let data = { title, description };
      let response = await RestService.addDiary(data);
      if (response["status"]) {
        console.log("New Diary Successfull");
        goto("/");
      } else {
        console.log("Add Diary Error");
      }
    };
  });
</script>

<main>
  <h1>Add New Diary</h1>
  <div class="flex flex-col gap-y-4">
    <input
      class="title w-full p-2 capitalize text-2xl border border-slate-500"
      type="text"
      placeholder="Diary title"
      bind:value={title}
    />
    <div>
      <textarea
        class="w-full min-h-[20rem] text-lg p-2 border border-slate-500"
        placeholder="Diary content..."
        bind:value={description}
      />
    </div>

    <button
      class="self-end p-2 bg-gray-400 rounded-md"
      on:click={() => addDiary()}>Save Diary</button
    >
  </div>
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
