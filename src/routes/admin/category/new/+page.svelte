<script>
    let { data } = $props();
</script>

<h1>Manage Categories</h1>

<form method="post" action="?/create">
    <div class="field">
        <label for="name">Category Name</label>
        <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter category name"
            required
        />
    </div>

    <button type="submit">Add Category</button>
</form>

<main>
    {#each data.categories as category}
        <div class="category">
            <span>{category.name}</span>
            <a href={`/admin/category/edit/{category.id}`}>Edit</a>
        </div>
    {/each}
</main>

<style>
/* GLOBAL BODY STYLING */
:global(body) {
    font-family: Arial, sans-serif;
    background: #f9fafb; /* helles neutral-grau */
    color: #111827; /* dunkles Grau für Text */
    margin: 0;
    padding: 0;
}

/* HEADER */
h1 {
    text-align: center;
    margin: 30px 0 25px;
    color: #1e3a8a; /* Navy Blue */
}

/* FORMULAR */
form {
    max-width: 400px;
    margin: 0 auto 30px;
    background: #ffffff;
    padding: 25px 30px;
    border-radius: 14px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
}

.field {
    margin-bottom: 20px;
}

label {
    display: block;
    margin-bottom: 6px;
    font-weight: 600;
    color: #374151;
}

input {
    width: 100%;
    padding: 10px 12px;
    border-radius: 8px;
    border: 1px solid #cbd5e1;
    font-size: 15px;
    box-sizing: border-box;
}

input:focus {
    outline: none;
    border-color: #1e3a8a; /* Navy Fokus */
    box-shadow: 0 0 0 2px rgba(30,58,138,0.2);
}

/* BUTTON */
button {
    width: 100%;
    padding: 12px;
    background: #1e3a8a; /* Navy Hauptfarbe */
    border: none;
    border-radius: 10px;
    color: white;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.2s ease, transform 0.2s ease;
}

button:hover {
    background: #16296b; /* dunkleres Navy */
    transform: translateY(-1px);
}

/* MAIN / CATEGORY LIST */
main {
    max-width: 500px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.category {
    background: #ffffff;
    padding: 12px 16px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.08);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.category a {
    color: #1e3a8a; /* Navy für Links */
    font-weight: bold;
    text-decoration: none;
}

.category a:hover {
    text-decoration: underline;
}
</style>
