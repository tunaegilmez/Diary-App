<script>
  import { activeUser } from "../../lib/services/store";
  import { goto } from "$app/navigation";
</script>

<header>
  <h1><a href="/">Dear Diary</a></h1>
  {#if $activeUser && $activeUser !== null}
    <div class="icons nav">
      <span class="add-diary">
        <a href="/newDiary">
          <i
            class="bi bi-journal-plus p-3 border-b-2 border-red-800 border-opacity-0 hover:border-opacity-100 hover:text-red-800 duration-200"
          /></a
        >
      </span>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <span
        class="cursor-pointer"
        on:click={() => {
          activeUser.set(null);
          goto("/login");
        }}
      >
        <i
          class="bi bi-door-open p-3 border-b-2 border-red-800 border-opacity-0 hover:border-opacity-100 hover:text-red-800 duration-200"
        />
      </span>
    </div>
  {/if}
</header>

<style>
  header {
    background: #f7f7f7;
    margin: 8px;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    box-shadow: 0px 1px 15px;
  }
  h1 {
    margin: 0;
    margin-left: 20px;
    text-align: left;
    color: black;
    font: bold;
    font-size: 40px;
    font-family: "Rampart One", cursive;
  }
  i {
    font-size: 30px;
  }
  .add-diary {
    margin-right: 25px;
  }
  .icons {
    text-align: end;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
  }
</style>
