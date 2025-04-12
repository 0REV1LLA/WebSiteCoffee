const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".container .letter-f",{
    duration:1000,
    delay:1000,
});

ScrollReveal().reveal(".container img",{
    duration:1000,
    delay:1500,
});

ScrollReveal().reveal(".container .txtleft", {
    ...scrollRevealOption,
    origin: "right",
    delay:  2000,
});

ScrollReveal().reveal(".container .txtright", {
    ...scrollRevealOption,
    origin: "left",
    delay:  2000,
});

ScrollReveal().reveal(".container .detailed",{
    duration:1000,
    delay:2500,
});

ScrollReveal().reveal(".container .location",{
    duration:1000,
    delay:3000,
});

ScrollReveal().reveal(".container .schedule",{
    duration:1000,
    delay:3500,
});

ScrollReveal().reveal(".container h5",{
    duration:1000,
    delay:4000,
    interval: 500,
});