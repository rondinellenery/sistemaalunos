const readline = require("readline-sync");

// ========================================
// SISTEMA DE ALUNOS
// ========================================

let alunos = [];

let executando = true;

while (executando) {

    console.log("\n==============================");
    console.log("      SISTEMA DE ALUNOS");
    console.log("==============================");
    console.log("1 - Cadastrar aluno");
    console.log("2 - Listar alunos");
    console.log("3 - Consultar aluno");
    console.log("4 - Ver situação dos alunos");
    console.log("5 - Sair");
    console.log("==============================");

    let opcao = readline.question("Escolha uma opcao: ");

    switch (opcao) {

        // --------------------------------
        // CADASTRAR
        // --------------------------------
        case "1":

            console.log("\n--- CADASTRO DE ALUNO ---");

            let nome = readline.question("Nome: ");
            let idade = Number(readline.question("Idade: "));
            let nota = Number(readline.question("Nota: "));
            if (isNaN(idade) || isNaN(nota)) {
                console.log("Idade e nota devem ser numeros!");
                break;
            }
            if (nota < 0 || nota > 10) {
                console.log("A nota deve estar entre 0 e 10!");
                break;
            }
            let aluno = {
                nome: nome,
                idade: idade,
                nota: nota
            };
            alunos.push(aluno);


            console.log(`Aluno ${nome} cadastrado com sucesso!`);
            console.log(`Idade: ${idade}`);
            console.log(`Nota: ${nota}`);


            break;


        // --------------------------------
        // LISTAR
        // --------------------------------
        case "2":

            console.log("\n--- ALUNOS CADASTRADOS ---");
            if (alunos.length === 0) {
                console.log("Nenhum aluno cadastrado.");
            } else {
                for (let i = 0; i < alunos.length; i++) {
                    let aluno = alunos[i];
                    console.log(`Nome: ${aluno.nome}`);
                    console.log(`Idade: ${aluno.idade}`);
                    console.log(`Nota: ${aluno.nota}`);
                    console.log(`Quantidade Total de Alunos Cadastrados: ${alunos.length}`);
                    console.log("------------------------");
                }
            }

            break;


        // --------------------------------
        // CONSULTAR
        // --------------------------------
        case "3":

        case "3":

            console.log("\n--- CONSULTAR ALUNO ---");

            let nomeBusca = readline.question("Digite o nome: ");

            let alunoEncontrado = false;

            for (let i = 0; i < alunos.length; i++) {

                let alunoAtual = alunos[i];

                if (alunoAtual.nome.toLowerCase() === nomeBusca.toLowerCase()) {

                    console.log(`Nome: ${alunoAtual.nome}`);
                    console.log(`Idade: ${alunoAtual.idade}`);
                    console.log(`Nota: ${alunoAtual.nota}`);

                    alunoEncontrado = true;

                    break;
                }
            }

            if (!alunoEncontrado) {
                console.log("Aluno nao encontrado.");
            }

            break;

            // TODO:
            // Percorrer o array procurando
            // pelo nome informado.

            // Se encontrar:
            // - Mostrar os dados
            // - Alterar alunoEncontrado para true
            // - Utilizar BREAK


            if (!alunoEncontrado) {
                console.log("Aluno nao encontrado.");
            }

            break;


        // --------------------------------
        // SITUAÇÃO
        // --------------------------------
        case "4":

        case "4":

            console.log("\n--- SITUACAO DOS ALUNOS ---");

            if (alunos.length === 0) {
                console.log("Nenhum aluno cadastrado.");
                break;
            }

            for (let i = 0; i < alunos.length; i++) {

                let alunoAtual = alunos[i];

                let situacao;

                if (alunoAtual.nota >= 7) {
                    situacao = "APROVADO";
                } else if (alunoAtual.nota >= 5) {
                    situacao = "RECUPERACAO";
                } else {
                    situacao = "REPROVADO";
                }

                console.log(`Nome: ${alunoAtual.nome}`);
                console.log(`Nota: ${alunoAtual.nota}`);
                console.log(`Situacao: ${situacao}`);
                console.log("------------------------");
            }

            break;


        // --------------------------------
        // SAIR
        // --------------------------------
        case "5":

            console.log("\nSistema encerrado!");

            executando = false;

            break;


        // --------------------------------
        // OPÇÃO INVÁLIDA
        // --------------------------------
        default:

            console.log("\nOpcao invalida!");

            break;
    }
}
