function setFront() {
    let fist = svg.append('text').attr('x', 55).attr('y', 185).attr('font-size', 150).text('\u270A\uD83C\uDFFF');
    let text = svg.append('text').attr('font-family', 'Roboto').attr('fill', 'yellow').attr('stroke-width', 2).attr('stroke', 'black').attr('font-weight', 900).text('Juneteenth').attr('y', 200).attr('x', 65).attr('font-size', 40);
}
function addFist() {
    svg.append('text').attr('x', pickRandom(window.innerWidth)).attr('y', pickRandom(window.innerHeight)).attr('font-size', 20).text(pickRandom([
        '\u270A\uD83C\uDFFF',
        '\u270A\uD83C\uDFFE',
        '\u270A\uD83C\uDFFD',
        '\u270A\uD83C\uDFFC'
    ]));
    setFront();
}
setFront();
svg.on('click', () => {
    for (let i = 0; i < 9; i++) {
        addFist();
    }
});
