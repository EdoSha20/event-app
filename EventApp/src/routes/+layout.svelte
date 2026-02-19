<script>
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}

<footer>
	<div>
		<h2>Contact</h2>
		<a href="mailto:zhashe20@htl-shkoder.com">Write an email</a>
	</div>
	<div>
		<h2>Admin</h2>
		<a href="/admin">Go to admin area</a>
	</div>
</footer>

<style>
footer {
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    gap: 40px;
    padding: 40px 60px;
    background: linear-gradient(135deg, #fdfbfb, #f3f4f6);
    border-top: 1px solid #e5e7eb;
    margin-top: 60px;
    flex-wrap: wrap;
}

footer div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    min-width: 180px;
}

footer h2 {
    font-size: 18px;
    margin: 0 0 8px 0;
    font-weight: 600;
    color: #1f2937;
}

footer a {
    text-decoration: none;
    font-size: 14px;
    color: #4f46e5;
    font-weight: 500;
    transition: all 0.2s ease;
}

footer a:hover {
    color: #4338ca;
    transform: translateX(4px);
}

@media (max-width: 600px) {
    footer {
        flex-direction: column;
        gap: 30px;
        padding: 30px 25px;
    }
}

</style>
