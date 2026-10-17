// Login oficial para personal autorizado
if(!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify([{u:'admin', p:'1234', role:'admin'}]));
}

function ingresar() {
    const u = document.getElementById('loginUser').value.trim();
    const p = document.getElementById('loginPass').value.trim();
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const found = users.find(user => user.u === u && user.p === p);

    if(found) {
        localStorage.setItem('session', JSON.stringify(found));
        localStorage.setItem('sessionUser', JSON.stringify(found));
        localStorage.setItem('sesionTecnobro', 'activa');
        window.location.href = 'dashboard.html';
    } else {
        alert('Usuario o clave incorrectos');
    }
}
