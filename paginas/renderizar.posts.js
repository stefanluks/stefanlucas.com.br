window.onload = () => {
    let url = window.location.href.split("/paginas");
    console.log(url)
    fetch('').then(data => {return data.json(); }).then(response => {
        console.log(response);
    })
}