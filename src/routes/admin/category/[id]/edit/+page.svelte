<script>
    let { data } = $props();
</script>

<h1>Edit Category</h1>

<form method="post" action="?/edit">
    <div class="field">
        <label for="name">Category Name</label>
        <input
            type="text"
            id="name"
            name="name"
            value={data.category.name}
            required
        />
    </div>

    <button type="submit">Save Changes</button>
</form>

<style>
:global(body) {
    font-family: Arial, sans-serif;
    background: #f9fafb; /* neutral hellgrau */
    margin: 0;
    padding: 0;
}

h1 {
    text-align: center;
    margin: 30px 0 25px;
    color: #1e3a8a; /* Navy Blue */
}

form {
    max-width: 400px;
    margin: 0 auto;
    background: #ffffff; /* weiß für sauberen Look */
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
    color: #374151; /* dunkles Grau */
}

input {
    width: 100%;
    padding: 10px 12px;
    border-radius: 8px;
    border: 1px solid #cbd5e1; /* dezentes Grau */
    font-size: 15px;
    box-sizing: border-box;
}

input:focus {
    outline: none;
    border-color: #1e3a8a; /* Navy bei Fokus */
    box-shadow: 0 0 0 2px rgba(30,58,138,0.2); /* sanfter Fokus-Glow */
}

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
</style>
