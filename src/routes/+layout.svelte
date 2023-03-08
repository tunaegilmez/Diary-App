<script>
  import Header from "../lib/components/Header.svelte";
  import Footer from "../lib/components/Footer.svelte";

  import { goto } from "$app/navigation";
  import { activeUser } from "$lib/services/store.js";

  import { navigating, page } from "$app/stores";
  import { browser } from "$app/environment";

  $: {
    if (!$activeUser) {
      if (browser) {
        goto("/login");
      }
    }
  }

  $: {
    if (
      !$activeUser &&
      $page?.url?.pathname !== "/login" &&
      $page?.url?.pathname !== "/forgetPassword"
    ) {
      if (browser) {
        goto("/login");
      }
    }
  }
</script>

<Header />
<slot />
<Footer />
