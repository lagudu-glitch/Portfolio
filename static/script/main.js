function toggle (divId, btnId)
{
    const div = document.getElementById (divId);
    const btn = document.getElementById (btnId);

    if (div.style.display === "block")
    {
        div.style.display = "none";
        btn.innerHTML = "<ion-icon name="add-circle-outline"></ion-icon>";
    }
    else
    {
        div.style.display = "block";
        btn.innerHTML = "<ion-icon name="remove-circle-outline"></ion-icon>"
    }
}