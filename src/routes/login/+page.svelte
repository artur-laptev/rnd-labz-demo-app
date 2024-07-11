<script>
  export let form;
</script>

<div class="flex flex-col justify-center px-6 py-12 lg:px-8">
  {#if form?.isTokenRequired}
    <div class="sm:mx-auto sm:w-full sm:max-w-lg bg-white border-gray-200 border shadow rounded-lg p-5">
      <div class="relative mb-4">
        <form class="space-y-6" method="POST" action="?/validateToken">
          <div>
            <label for="token" class="block text-sm font-medium leading-6 text-gray-900">Your token</label>
            <div class="mt-2">
              <input name="id" value={form.id} hidden>
              <input id="token" name="token" autocomplete="off" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            </div>
          </div>
          <div>
            <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Continue</button>
          </div>
        </form>
      </div>
    </div>
  {:else}
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 class="my-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Log in</h2>
    </div>

    {#if form?.error}
      <div class="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 sm:mx-auto sm:w-full sm:max-w-sm" role="alert">
        <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
        </svg>
        <span class="sr-only">Info</span>
        <div>
          {form.message}
        </div>
      </div>
    {/if}

    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" method="POST" action="?/login">
        <div>
          <label for="id" class="block text-sm font-medium leading-6 text-gray-900">Telegram ID</label>
          <div class="mt-2">
            <input id="id" name="id" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
          </div>
          <div class="mt-2">
            <input id="password" name="password" type="password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div>
          <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Log in</button>
        </div>
      </form>
    </div>

    <div class="sm:mx-auto sm:w-full sm:max-w-sm mt-8 text-center">
      <span class="text-gray-500">Don't have an account?</span> <a href="/signup" class="text-indigo-600 font-semibold">Sign up</a>
    </div>
  {/if}
</div>
