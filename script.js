const shortBtn = document.getElementById('short-btn');
const reloadBtn = document.getElementById('reload-btn');

shortBtn.addEventListener('click', encurtadaURL);

function encurtadaURL() {
    var originalURL = document.getElementById('originalURL').value;
    var apiURL = "https://tinyurl.com/api-create.php?url=" + encodeURIComponent(originalURL);
    encurtadaURLTextArea = document.getElementById('encurtadaURL');

    fetch(apiURL).then(response => response.text()).then(data => {
        encurtadaURLTextArea.value = data;
    }).catch(error => {
        encurtadaURLTextArea.value = "Erro: incapaz de encurtar esta URL!";
    });
}

reloadBtn.addEventListener('click', () => {
    location.reload();
});