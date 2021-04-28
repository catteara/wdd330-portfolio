const links = [
    {
        label: "Week One Notes",
        url: "week1/notes.html"
    },
    {
        label: "Week One Code",
        url: "week1/code.html"
    },
    {
        label: "Week Two Notes",
        url: "week2/notes.html"
    },
    {
        label: "Week Two Code",
        url: "week2/code.html"
    }
]

text = '<ul>';
for (let i = 0; i < links.length; i++ ) {
    text += "<li><a href='" + links[i].url + "'>" + links[i].label + "</a></li>"
}
text += "</ul>";



document.getElementById("toc").innerHTML = text;