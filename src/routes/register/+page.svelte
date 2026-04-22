<script>
	let { form } = $props();
</script>

{#if form?.error}
	<p id="warning">
		{form.error}
	</p>
{/if}

<h1>Register</h1>

<section>
	<form action="?/register" method="POST">
		<div>
			<label for="username">Username</label>
			<input type="text" name="username" id="username" />
		</div>

		<div>
			<label for="password">Password</label>
			<input type="password" name="password" id="password" />
		</div>

		<div>
			<button type="submit">Register</button>
		</div>
	</form>
</section>

<style>
	#warning {
		border: 1px solid red;
		background-color: #ffaea8;
		padding: 25px;
		margin: 10px;
	}
</style>
