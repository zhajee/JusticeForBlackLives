var elements = document.getElementsByTagName("INPUT");
for (var inp of elements) {
    if (inp.type === "checkbox")
        inp.checked = false;
}