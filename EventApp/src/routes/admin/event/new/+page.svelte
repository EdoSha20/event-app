<script>
    let { data } = $props();
</script>

<h1>New Event</h1>

<form method="post" action="?/create" class="event-form">

    <div class="form-group">
        <label for="name">Event name</label>
        <input type="text" name="name" id="name" required placeholder="Enter event name">
    </div>

    <div class="form-group">
        <label for="description">Event description</label>
        <textarea name="description" id="description" placeholder="Enter event description"></textarea>
    </div>

    <div class="form-row">
        <div class="form-group">
            <label for="startdate">Event start date</label>
            <input type="date" name="startdate" id="startdate">
        </div>

        <div class="form-group">
            <label for="starttime">Event start time</label>
            <input type="time" name="starttime" id="starttime">
        </div>

        <div class="form-group">
            <label for="category">Select a category</label>
            <select name="category" id="category">
                {#each data.categories as category}
                    <option value={category.id}>{category.name}</option>
                {/each}
            </select>
        </div>
    </div>

    <div class="form-group">
        <button type="submit">Create Event</button>
    </div>

</form>

<style>
body {
    margin: 0;
    font-family: 'Inter', sans-serif;
    background: #f0f4f8;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 20px;
    color: #1f2937;
}

h1 {
    text-align: center;
    margin-bottom: 35px;
    font-size: 32px;
    font-weight: 700;
    color: #111827;
}

.event-form {
    background: #ffffff;
    padding: 40px 35px;
    border-radius: 18px;
    box-shadow: 0 12px 30px rgba(0,0,0,0.08);
    width: 100%;
    max-width: 520px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
}

.form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
}

.form-group label {
    margin-bottom: 6px;
    font-weight: 600;
    font-size: 14px;
    color: #4b5563;
}

.form-group input,
.form-group textarea,
.form-group select {
    padding: 12px 14px;
    border-radius: 10px;
    border: 1px solid #d1d5db;
    font-size: 14px;
    background: #f9fafb;
    width: 100%;
    box-sizing: border-box;
    transition: 0.2s;
}

.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
    border-color: #6366f1;
    box-shadow: 0 0 0 3px rgba(99,102,241,0.2);
    outline: none;
}

textarea {
    resize: vertical;
    min-height: 80px;
}

.form-row {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    margin-bottom: 20px;
}

.form-row > div {
    flex: 1;
    min-width: 140px;
    display: flex;
    flex-direction: column;
}

button {
    padding: 14px;
    background: #6366f1;
    color: white;
    font-weight: 600;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    font-size: 15px;
    transition: all 0.2s ease;
    width: 100%;
}

button:hover {
    background: #4f46e5;
    transform: translateY(-2px);
}

@media (max-width: 500px) {
    .form-row {
        flex-direction: column;
    }
}
</style>
