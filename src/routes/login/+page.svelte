<script>
  import { users, activeUser } from "../../lib/services/store";
  import { goto } from "$app/navigation";

  let userName;
  let userPassword;
</script>

<main>
  <h1 class="p-3 border-b-2 border-black border-opacity-100 duration-200">
    LOGIN
  </h1>
  <div
    class="login-card flex flex-col gap-y-4 rounded-xl border border-slate-500"
  >
    <div>
      <h3 class="mt-[50px] ml-12 mb-5 text-xl flex justify-start">User Name</h3>
      <input
        class="text-xl p-2 border rounded-md  border-slate-500 "
        type="text"
        bind:value={userName}
        placeholder="User Name"
      />
    </div>
    <div>
      <h3 class="mt-[50px] ml-12 mb-5 text-xl flex justify-start">
        User Password
      </h3>
      <input
        class="text-xl p-2 border rounded-md border-slate-500 focus:blur-sm "
        type="password"
        bind:value={userPassword}
        placeholder="Password"
      />
    </div>
    <div>
      <button
        class="self-end p-2 pr-5 pl-5 hover:bg-gray-300 bg-gray-400 rounded-md mb-[20px] mt-[50px]"
        on:click={() => {
          users.set([
            {
              name: userName,
              password: userPassword,
            },
            ...$users,
          ]);
          activeUser.set($users[0].name);
          goto("/");
        }}>Login</button
      >
    </div>
    <a class="mb-[50px] hover:text-red-800" href="/forgetPassword"
      >Forget Password</a
    >
  </div>
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
