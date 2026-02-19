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


