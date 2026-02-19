<script>
    let {data} = $props();
</script>

<h1>Edit event</h1>

<form action="?/edit" method="post" class="event-form">

    <div class="form-group">
        <label for="name">Event name</label>
        <input type="text" name="name" id="name" required value = {data.event.name}>
    </div>

    <div class="form-group">
        <label for="description">Event description</label>
        <textarea name="description" id="description" value={data.event.description}></textarea>
    </div>

    <div class="form-row">
        <div class="form-group">
            <label for="startdate">Event start date</label>
            <input type="date" name="startdate" id="startdate" value = {data.event.startdate.toISOString().substring(0,10)}>
        </div>

        <div class="form-group">
            <label for="starttime">Event start time</label>
            <input type="time" name="starttime" id="starttime" value = {data.event.starttime}>
        </div>
    </div>

    <div class="form-group">
        <button type="submit">Update Event</button>
    </div>

</form>

<style>
body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background: #f3f4f6;
    display: flex;
    justify-content: center;
    padding: 40px 20px;
    color: #1f2933;
}

h1 {
    text-align: center;
    margin-bottom: 30px;
    color: #111827;
}

.event-form {
    background: #ffffff;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 6px 20px rgba(0,0,0,0.08);
    width: 100%;
    max-width: 500px;
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
}

.form-group input,
.form-group textarea {
    padding: 10px 12px;
    border-radius: 10px;
    border: 1px solid #d1d5db;
    font-size: 14px;
    outline: none;
    transition: 0.2s;
}

.form-group input:focus,
.form-group textarea:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
}

textarea {
    resize: vertical;
    min-height: 80px;
}

.form-row {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
}

.form-row .form-group {
    flex: 1;
    min-width: 120px;
}

button {
    padding: 12px;
    background: #2563eb;
    color: white;
    font-weight: 600;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.2s;
}

button:hover {
    background: #1d4ed8;
    transform: scale(1.02);
}
</style>

