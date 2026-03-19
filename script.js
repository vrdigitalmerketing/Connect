const btn = document.getElementById('openLinksBtn');
const menu = document.getElementById('linksMenu');

// Button click par menu dikhana ya chhupana
btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    if(!menu.classList.contains('hidden')) {
        btn.innerText = "Close Options";
    } else {
        btn.innerText = "Connect With Me";
    }
});

// Link copy karne ka function
function copyLink() {
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl).then(() => {
        alert("Link Copied to Clipboard!");
    });
}