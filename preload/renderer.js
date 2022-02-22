document.getElementById('btn').onclick = () => {
    window.api.send('_main', { p1: 'params1', p2: 2, p3: ['a', 'b'] }, 'ff', 'gg')
}