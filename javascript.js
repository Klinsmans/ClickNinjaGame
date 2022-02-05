const handleClick = () => {
    const body = document.querySelector ('body');
    body.innerHTML = `
        <h1> Parabéns, você me pegou! </h1>
    `;

    body.style.background = "#000"
    body.style.color = "#yellow"
};

const el = document.getElementById ('btn-play');
el.addEventListener("mouseover", () => {
    el.style.position = "absolute";
    el.style.left = `${Math.floor(Math.random() * (window.innerWidth - 36))}px`;
    el.style.top = `${Math.floor (Math.random () * (window.innerHeight - 18))}px`;
});

el.addEventListener('click', () => handleClick);