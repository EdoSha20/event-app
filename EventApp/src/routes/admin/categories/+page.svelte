<script>
    let {data} = $props();
</script>

<h1>Categories</h1>
<a href="/admin/category/new">
    <button>Add new event</button>
</a>

   <main>

    {#each data.categories as c}

        <div class="event">
            <p>{c.name}</p>

            <div>
                <a href="/admin/category/{c.id}/edit">
                    <button type="submit">Edit</button>
                </a>

                <form action="?/delete" method="post">
                    <input type="hidden" value={c.id} name="id">
                    <button type="submit">Delete</button>
                </form>

            </div>
            
        </div>
    {/each}
</main>

<style>
main {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 30px;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
}
h1{
    text-align: center;
}

.event {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 20px;
    border-radius: 14px;
    background: #f9fafb;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    transition: transform 0.2s, box-shadow 0.2s;
}

.event:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.event p {
    margin: 0;
    font-size: 1rem;
    font-weight: 600;
    color: #374151;
}

.event div {
    display: flex;
    gap: 12px;
}

button {
    padding: 8px 16px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    font-size: 0.95rem;
    font-weight: 500;
    transition: all 0.2s;
}

a button {
    background: #c1cbfe;
    color: #352f8a;
}

a button:hover {
    background: #7380f5;
    transform: translateY(-1px);
}

form button {
    background: #fdd4d4;
    color: #792f2f;
}

form button:hover {
    background: #fa9191;
    transform: translateY(-1px);
}

h1 + a button {
    display: block;
    margin: 0 auto 20px;
    background: #b6f5d7bc;
    color: rgb(52, 83, 74);
}

h1 + a button:hover {
    background: #88c7ae;
    transform: translateY(-1px);
}



</style>

