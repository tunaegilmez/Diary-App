<script>
  import { diaries, activeUser } from "../../lib/services/store";
  import { goto } from "$app/navigation";

  let diaryTitle;
  let diaryContent;
</script>

<main>
  <h1>Add New Diary</h1>
  <div class="flex flex-col gap-y-4">
    <input
      class="title w-full p-2 capitalize text-2xl border border-slate-500"
      type="text"
      placeholder="Diary title"
      bind:value={diaryTitle}
    />
    <div>
      <textarea
        class="w-full min-h-[20rem] text-lg p-2 border border-slate-500"
        placeholder="Diary content..."
        bind:value={diaryContent}
      />
    </div>

    <button
      class="self-end p-2 bg-gray-400 rounded-md"
      on:click={() => {
        let tarih = new Date();

        if (diaryTitle === undefined || diaryContent === undefined) {
          alert("Fill in the required fields");
          return;
        }

        diaries.set([
          {
            id: new Date().getTime(),
            owner: $activeUser,
            title: diaryTitle,
            content: diaryContent,
            createdAt: `${tarih.getDate()}.${tarih.getMonth()}.${tarih.getFullYear()}`,
          },
          ...$diaries,
        ]);
        goto("/");
        diaryTitle = undefined;
        diaryContent = undefined;
      }}>Save Diary</button
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
