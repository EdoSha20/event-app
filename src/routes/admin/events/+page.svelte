<script>
    let {data} = $props();
</script>


<h1>Manage my events</h1>

<a href="/admin/event/new">
    <button class="add-btn">Add new event</button>
</a>


<main>

    {#each data.events as event}

        <div class="event">
            <p>{event.name}</p>
            <h3>{event.category_name}</h3>

            <div>
                <a href="/admin/event/{event.id}/edit">
                    <button type="submit">Edit</button>
                </a>

                <form action="?/delete" method="post">
                    <input type="hidden" value={event.id} name="id">
                    <button type="submit">Delete</button>
                </form>

            </div>
            
        </div>
    {/each}
</main>

<style>
    body {
        margin: 0;
        padding: 0;
        font-family: Arial, sans-serif;
        background: #f3f4f6;
    }

    h1 {
        text-align: center;
        margin: 30px 0 10px;
        color: #111827;
    }

    a {
        text-decoration: none;
    }

    main {
        max-width: 700px;
        margin: 0 auto;
        padding: 0 20px 40px;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .event {
        background: white;
        border-radius: 14px;
        padding: 16px 20px;
        box-shadow: 0 4px 10px rgba(0,0,0,0.08);
        transition: 0.2s;
        border: none;
        display: flex;
        justify-content: space-between;
    }

    .event:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 18px rgba(0,0,0,0.12);
    }

    .event p {
        margin: 0;
        font-size: 16px;
        font-weight: 600;
        color: #1f2933;
    }

.add-btn {
    display: block;
    width: fit-content;
    margin: 0 auto 25px; 
    background: #a5d8ff; 
    color: #1f2933;
    padding: 12px 20px;
    border-radius: 12px;
    font-weight: 600;
    font-size: 16px;
    text-align: center;
    transition: 0.2s;
    box-shadow: 0 4px 10px rgba(60, 60, 60, 0.08);
}

.add-btn:hover {
    background: #74c0fc; 
    transform: scale(1.05);
}

/* Delete Button in Event Cards */
.event form button {
    padding: 6px 14px;
    background: #ffc9c9; /* Pastellrot */
    color: #1f2933;
    border: none;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.2s;
    box-shadow: 0 2px 6px rgba(0,0,0,0.06);
}

.event form button:hover {
    background: #ffa3a3; /* dunkleres Pastellrot */
    transform: scale(1.05);
}

</style>
