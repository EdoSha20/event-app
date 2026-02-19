<script>
    let {children} = $props();
</script>

<header>
    Admin Dashboard
</header>

{@render children()}

<style>
/* HEADER */
header {
    width: 100%;
    padding: 20px 40px;
     /* Navy Gradient */
    font-size: 22px;
    font-weight: 700;
    color: #000000; /* weißer Text für Kontrast */

    display: flex;
    align-items: center;
    justify-content: center;

    border-bottom: 1px solid #111827; /* dunkleres Grau */
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
</style>
