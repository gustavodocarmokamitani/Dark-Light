var buttonDark = document.getElementById('dark').addEventListener('click', function () {
    var socialMediaCopy = document.getElementById("socialMediaCopy");
    socialMediaCopy.classList.toggle("dark");
    if (socialMediaCopy.classList.contains('dark') == true) {
        var btnDark = document.getElementById('dark').classList.remove('btn-dark')
        var btnDark = document.getElementById('dark').classList.add('btn-light')
        var btnDark = document.getElementById('dark').innerHTML = "Light"

    } else {
        var btnDark = document.getElementById('dark').classList.remove('btn-light')
        var btnDark = document.getElementById('dark').classList.add('btn-dark')
        var btnDark = document.getElementById('dark').innerHTML = "Dark"
    }
})