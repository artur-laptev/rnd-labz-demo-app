<script>
  export let form;

  const copyToClipboard = (value) => {
    navigator.clipboard.writeText(value);
  }
</script>

<div class="flex flex-col justify-center px-6 py-12 lg:px-8">
  {#if !form?.success}
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 class="my-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign up</h2>
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
      <form class="space-y-6" method="POST" action="?/register">
        <div>
          <label for="id" class="block text-sm font-medium leading-6 text-gray-900">Telegram ID</label>
          <div class="mt-2">
            <input id="id" name="id" autocomplete="off" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
          </div>
          <div class="mt-2">
            <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div>
          <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
        </div>
      </form>
    </div>
  {:else}
    <div class="sm:mx-auto sm:w-full sm:max-w-lg bg-white border-gray-200 border shadow rounded-lg p-5">
      <h2 class="text-lg font-semibold text-gray-900  mb-2">Thanks for signing up</h2>
      <p class="text-gray-500 mb-6">Please copy and save your token:</p>
      <div class="relative mb-4">
        <input value="{form.token}" type="text" class="col-span-6 bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" disabled readonly>
        <button on:click={copyToClipboard(form.token)} class="absolute end-2 top-1/2 -translate-y-1/2 text-gray-500 hover:bg-gray-100 rounded-lg p-2 inline-flex items-center justify-center">
          <span id="default-icon-account-id">
            <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
              <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
            </svg>
          </span>
        </button>
      </div>
      <div class="flex items-center space-x-4 rtl:space-x-reverse">
        <a href="/login" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">OK</a>
      </div>
    </div>
  {/if}
</div>