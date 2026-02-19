<script>

  let {data} = $props();
  
</script>

<h1>Event List</h1>

<main>
{#each data.events as event}
  <div class="event-card">
    <a href={"/event/" + event.id}>
      <h2>{event.name}</h2>
    </a>
    <p>{event.date}</p>
    <p>{event.description}</p>
    <p>{event.category_name}</p>
  </div>
{/each}
</main>

<style>
body {
    margin: 0;
    padding: 50px 20px;
    font-family: 'Segoe UI', Arial, sans-serif;
    background: #f5f7fb;
    color: #1f2937;
}

h1 {
    text-align: center;
    margin-bottom: 45px;
    font-size: 32px;
    font-weight: 700;
    color: #111827;
}

main {
    max-width: 820px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 28px;
}

/* Event Card */
.event-card {
    background: #ffffff;
    padding: 24px;
    border-radius: 18px;
    border: 1px solid #e5e7eb;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
    transition: all 0.25s ease;
}

.event-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 14px 32px rgba(0, 0, 0, 0.1);
}

/* Title */
.event-card a {
    text-decoration: none;
}

.event-card h2 {
    margin: 0 0 10px 0;
    font-size: 20px;
    font-weight: 700;
    color: #4f46e5;
    transition: color 0.2s ease;
}

.event-card:hover h2 {
    color: #4338ca;
}

/* Text */
.event-card p {
    margin: 6px 0;
    font-size: 14px;
    color: #4b5563;
    line-height: 1.5;
}

/* Category badge */
.event-card p:last-child {
    display: inline-block;
    margin-top: 10px;
    padding: 5px 12px;
    border-radius: 999px;
    background: #eef2ff;
    color: #4338ca;
    font-size: 12px;
    font-weight: 600;
}

</style>
