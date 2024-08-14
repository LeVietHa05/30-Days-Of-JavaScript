

if (localStorage.getItem("data_1")) {
    console.log("found data in localstorage. rendering")
    console.log(localStorage.getItem("data_1"))
    const div = document.createElement('div')
    div.textContent = localStorage.getItem("data_1");
    document.body.appendChild(div)
} else {
    console.log("no data in localstorage, fetching")
    let data_1;
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=21.034228352457728&lon=105.83445918032695&appid=f9084163f4e6a9196277165f10be0382')
        .then(res => res.json())
        .then(data => {
            localStorage.setItem("data_1", JSON.stringify(data))
            console.log(JSON.stringify(data))
            data_1 = data
        })
    const div = document.createElement('div')
    div.textContent = data_1;
    document.body.appendChild(div)
}