const nameInput = document.getElementById('nameInput');
const nameList = document.getElementById('nameList');
const result = document.getElementById('result');
let amigos = []; // Array para armazenar os nomes

function addName() {
    const name = nameInput.value.trim();
    if (name) {
        amigos.push(name); // Adiciona o nome ao array
        updateNameList(); // Atualiza a lista exibida na página
        nameInput.value = ''; // Limpa o campo de entrada
        nameInput.focus();
    } else {
        alert('Por favor, insira um nome válido.');
    }
}

function updateNameList() {
    nameList.innerHTML = ''; // Limpa a lista existente
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        nameList.appendChild(li);
    }
}

function drawName() {
    if (amigos.length === 0) {
        alert('A lista está vazia. Adicione nomes antes de sortear.');
        return;
    }
    const randomIndex = Math.floor(Math.random() * amigos.length);
    const secretFriend = amigos[randomIndex];
    result.textContent = `O amigo secreto é: ${secretFriend}`;
}
