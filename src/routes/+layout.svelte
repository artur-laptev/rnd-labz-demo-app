<script>
  import "../app.css";

  export let data;
</script>

<div class="min-h-full">
  <header class="bg-white">
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex gap-x-12">
        <a href="/" class="text-sm font-semibold leading-6 text-gray-900">Dashboard</a>
        {#if data?.isAuthenticated}
          <a href="/profile" class="text-sm font-semibold leading-6 text-gray-900">Profile</a>
        {/if}
      </div>
      <div class="flex flex-1 justify-end gap-x-12">
        {#if !data?.isAuthenticated}
          <a href="/signup" class="text-sm font-semibold leading-6 text-gray-900">Sign up</a>
          <a href="/login" class="text-sm font-semibold leading-6 text-gray-900">Log in</a>
        {/if}
      </div>
    </nav>
  </header>

  <main>
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <slot />
    </div>
  </main>
</div>