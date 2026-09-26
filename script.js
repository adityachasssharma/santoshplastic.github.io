function toggleMenu() {

```
const menu = document.getElementById("navMenu");

menu.classList.toggle("show");
```

}

// Close mobile menu after clicking a link

document.querySelectorAll("#navMenu a").forEach(function(link) {

```
link.addEventListener("click", function() {

    document.getElementById("navMenu").classList.remove("show");

});
```

});

// Contact form

function sendMessage(event) {

```
event.preventDefault();

alert(
    "Thank you for contacting Santosh Plastic! " +
    "We will get back to you soon."
);
```

}
