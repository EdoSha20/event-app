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
    background: linear-gradient(135deg, #1e3a8a, #16296b); /* Navy Gradient */
    border-top: 1px solid #111827; /* dunkles Grau */
    margin-top: 60px;
    flex-wrap: wrap;
    color: #ffffff;
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
    color: #ffffff; /* weißer Text für Kontrast */
}

footer a {
    text-decoration: none;
    font-size: 14px;
    color: #ffffffcc; /* leicht transparent für dezente Links */
    font-weight: 500;
    transition: all 0.2s ease;
}

footer a:hover {
    color: #f3f4f6; /* heller Weißton beim Hover */
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
