let listaPessoas = [];

function gerarId() {
    return Math.floor(Math.random() * 100);  
}

function pedirInformacao(mensagem) {
    let resposta;
    do {
        resposta = prompt(mensagem);
    } while (!resposta.trim());
    return resposta;
}

function cadastrar() {
    const nome = pedirInformacao("Digite o nome:");
    const idade = parseInt(pedirInformacao("Digite a idade:"), 10);
    const cidade = pedirInformacao("Digite a cidade:");
    const pessoa = { nome, idade, cidade, curso: "", id: gerarId() };
    listaPessoas.push(pessoa);
    console.log("Pessoa cadastrada:", pessoa);
}

function encontrarPessoaPorId(id) {
    return listaPessoas.find(p => p.id === id);
}

function atualizar() {
    const id = prompt("Digite o ID da pessoa que deseja atualizar:");
    const pessoa = encontrarPessoaPorId(id);

    if (!pessoa) {
        console.log("Pessoa não encontrada.");
        return;
    }

    console.log("Pessoa encontrada:", pessoa);

    const novoNome = prompt("Digite o novo nome (ou deixe em branco para manter o mesmo):") || pessoa.nome;
    const novaIdade = parseInt(prompt("Digite a nova idade (ou deixe em branco para manter a mesma):") || pessoa.idade, 10);
    const novaCidade = prompt("Digite a nova cidade (ou deixe em branco para manter a mesma):") || pessoa.cidade;

    Object.assign(pessoa, { nome: novoNome, idade: novaIdade, cidade: novaCidade });
    console.log("Pessoa atualizada:", pessoa);
}

function deletar() {
    const id = prompt("Digite o ID da pessoa que deseja deletar:");
    const index = listaPessoas.findIndex(p => p.id === id);

    if (index !== -1) {
        const pessoaRemovida = listaPessoas.splice(index, 1)[0];
        console.log("Pessoa deletada:", pessoaRemovida);
    } else {
        console.log("Pessoa não encontrada na lista.");
    }
}

function listar() {
    if (listaPessoas.length === 0) {
        console.log("Não há pessoas cadastradas.");
    } else {
        console.log("Lista de Pessoas Cadastradas:");
        listaPessoas.forEach((pessoa, index) => {
            console.log(`[${index + 1}] Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}, ID: ${pessoa.id}`);
        });
    }
}