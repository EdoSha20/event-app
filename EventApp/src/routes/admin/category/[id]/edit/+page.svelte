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
    body {
        font-family: Arial, sans-serif;
        background: #f3f4f6;
        margin: 0;
        padding: 0;
    }

    h1 {
        text-align: center;
        margin: 30px 0 25px;
        color: #111827;
    }

    form {
        max-width: 400px;
        margin: 0 auto;
        background: white;
        padding: 25px 30px;
        border-radius: 14px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.08);
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
        border: 1px solid #d1d5db;
        font-size: 15px;
        box-sizing: border-box;
    }

    input:focus {
        outline: none;
        border-color: #6366f1;
        box-shadow: 0 0 0 2px rgba(99,102,241,0.2);
    }

    button {
        width: 100%;
        padding: 12px;
        background: #6366f1;
        border: none;
        border-radius: 10px;
        color: white;
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
    }

    button:hover {
        background: #4f46e5;
    }
</style>
