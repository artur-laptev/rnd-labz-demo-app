<script>
	export let data;

	const date = data.user.createdAt;

	$: formattedDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
</script>

<div class="flex flex-col justify-center px-6 py-12 lg:px-8">
	<div class="sm:mx-auto sm:w-full sm:max-w-lg bg-white border border-gray-200 rounded-lg shadow">
		<div class="flex flex-col items-center py-10">
			<h5 class="mb-1 text-xl font-medium text-gray-900">Your ID: {data.user.telegramId}</h5>
			<span class="text-sm text-gray-500">Created: {formattedDate}</span>
			<div class="flex mt-4 md:mt-6">
				<form method="POST" action="?/logout">
					<button type="submit" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-200">Log out</button>
				</form>
			</div>
		</div>
	</div>
</div>
