<script>
	let { form } = $props();
</script>

<h1>Login-page</h1>

{#if form?.error}
	<p id="warning">
		{form.error}
	</p>
{/if}

<section>
	<form action="?/login" method="POST">
		<div>
			<label for="username">Username</label>
			<input type="text" name="username" id="username" />
		</div>

		<div>
			<label for="password">Password</label>
			<input type="password" name="password" id="password" />
		</div>

		<div>
			<button type="submit">Login</button>
		</div>
	</form>

	<a href="/register">Register</a>
</section>

<style>
	#warning {
		border: 1px solid red;
		background-color: #ffaea8;
		padding: 25px;
		margin: 10px;
	}
</style>
