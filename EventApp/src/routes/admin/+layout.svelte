<script>
    let {children} = $props();
</script>

<header>
    Admin Dashboard
</header>

{@render children()}

<style>
    header {
    width: 100%;
    padding: 20px 40px;
    background: linear-gradient(135deg, #eef2ff, #f5f3ff);
    font-size: 22px;
    font-weight: 700;
    color: #1f2937;

    display: flex;
    align-items: center;
    justify-content: center;

    border-bottom: 1px solid #e5e7eb;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}


</style>