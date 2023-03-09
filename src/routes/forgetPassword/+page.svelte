<script>
  import { users } from "../../lib/services/store";
  import { goto } from "$app/navigation";

  let code;
  let userName;
  let codeInput;
  let newPass;
</script>

<main>
  <h1 class="p-3 border-b-2 border-black border-opacity-100 duration-200">
    FORGET PASSWORD
  </h1>
  {#if !code}
    <div
      class="login-card flex flex-col gap-y-4 rounded-xl border border-slate-500"
    >
      <div>
        <h3 class="mt-[50px] ml-14 mb-5 text-xl flex justify-start opacity-60">
          User Name
        </h3>
        <input
          class="text-xl p-2 border rounded-md  border-slate-500"
          type="text"
          bind:value={userName}
          placeholder="User Name"
        />
      </div>
      <p class="text-red-400 pl-5 pr-5">
        Please enter the user name of the account whose password you forgot and
        get the code
      </p>
      <div class="mb-8">
        <button
          class="self-end p-2 pr-5 pl-5 hover:bg-gray-300 bg-gray-400 rounded-md mb-[20px] mt-[30px]"
          on:click={() => {
            code = new Date().getTime();
            let isExistUser;
            $users.forEach(user => {
              if (user?.name === userName) {
                isExistUser = user;
              } else {
                alert("User not found");
                code = "";
              }
            });
            if (isExistUser) {
              alert("Copy This Code: " + code);
            }
          }}>Get Code</button
        >
      </div>
    </div>
  {:else}
    <div
      class="login-card flex flex-col gap-y-4 rounded-xl border border-slate-500"
    >
      <div>
        <h3 class="mt-[50px] ml-14 mb-5 text-xl flex justify-start opacity-60">
          Enter Code
        </h3>
        <input
          class="text-xl p-2 border rounded-md  border-slate-500"
          type="text"
          bind:value={codeInput}
          placeholder="0000-00000-0000"
        />

        <h3 class="mt-[50px] ml-14 mb-5 text-xl flex justify-start opacity-60">
          Enter New Password
        </h3>
        <input
          class="text-xl p-2 border rounded-md  border-slate-500"
          type="password"
          bind:value={newPass}
          placeholder="********"
        />
      </div>

      <div class="mb-8">
        <button
          class="self-end p-2 pr-5 pl-5 hover:bg-gray-300 bg-gray-400 rounded-md mb-[20px] mt-[30px]"
          on:click={() => {
            if (code == codeInput) {
              users.update(_users => {
                return _users.map(currentUser => {
                  if (currentUser?.name === userName) {
                    currentUser = {
                      ...currentUser,
                      password: newPass,
                    };
                  }
                  return currentUser;
                });
              });
              goto("/login");
            } else {
              alert("Wrong Code");
              code = "";
            }
          }}>Save Password</button
        >
      </div>
    </div>
  {/if}
</main>

<style>
  main {
    max-width: 360px;
    margin: 40px auto;
    font-family: "Source Code Pro", monospace;
    text-align: center;
  }

  h1 {
    font-size: 30px;
    margin-bottom: 15px;
  }
  .login-card {
    box-shadow: 0px 3px 7px #888888;
  }
</style>
