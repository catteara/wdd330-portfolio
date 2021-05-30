const links = [{
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
    },
    {
        label: "Week Three Notes",
        url: "week3/notes.html"
    },
    {
        label: "Week Three Code",
        url: "week3/code.html"
    },
    {
        label: "Week Four Notes",
        url: "week4/notes.html"
    },
    {
        label: "Week Four Code",
        url: "week4/code.html"
    },
    {
        label: "Week Five Notes",
        url: "week5/notes.html"
    },
    {
        label: "Week Five Code",
        url: "week5/code.html"
    },
    {
        label: "Week Six Project",
        url: "week6/index.html"
    }
]

text = '<ul>';
for (let i = 0; i < links.length; i++) {
    text += "<li><a href='" + links[i].url + "'>" + links[i].label + "</a></li>"
}
text += "</ul>";

document.getElementById("toc").innerHTML = text;