alert("Bem-vindo ao jogo, A caminho das Olimpíadas, onde conta uma parte da história de Alla Maso");

alert("Alla Maso é um atleta talentoso, ele sonha em competir nas Olimpíadas. Sua jornada é repleta de desafios e escolhas. Desde decidir qual esporte praticar até enfrentar os desafios para chegar nas Olimpíadas, você ajudará ele a superar obstáculos e realizar seu sonho. Boa sorte!");

const sentimentosNecessarios = ["Determinação", "Coragem", "Persistência", "Foco", "Resiliência", "Adaptação", "Confiança", "Estratégia", "Preparação", "Disciplina", "Experiência", "Superação"];
let sentimentosAdquiridos = [];
let pontos = 0;

function adicionarSentimento(sentimento) {
    if (!sentimentosAdquiridos.includes(sentimento)) {
        sentimentosAdquiridos.push(sentimento)
        alert(`Você ganhou o sentimento: ${sentimento}!`)
    }
}

function salvarEstado() {
    localStorage.setItem('sentimentosAdquiridos', JSON.stringify(sentimentosAdquiridos));
    localStorage.setItem('pontos', pontos);
}

function carregarEstado() {
    sentimentosAdquiridos = JSON.parse(localStorage.getItem('sentimentosAdquiridos')) || [];
    pontos = Number(localStorage.getItem('pontos')) || 0;
}

function reiniciarJogo() {
    localStorage.removeItem('sentimentosAdquiridos');
    localStorage.removeItem('pontos');
    sentimentosAdquiridos = [];
    pontos = 0;
    iniciarJogo();
}

function iniciarJogo() {
    carregarEstado();

    while (pontos < sentimentosNecessarios.length) {
        let escolha;

        if (pontos === 0) {
            escolha = Number(prompt("Sua primeira escolha será do esporte que você vai praticar:\n1 para fazer natação\n2 para fazer Marcha Atlética"));

            if (escolha === 2) {
                alert("Você vai praticar Marcha Atlética e acaba sofrendo uma grave lesão, não podendo mais praticar o esporte. Você perdeu!");
                reiniciarJogo();
                return;
            }

            if (escolha === 1) {
                alert("Você vai praticar natação e tentar realizar seu sonho de ir para as Olimpíadas.");
                adicionarSentimento("Determinação");
                pontos++;
                salvarEstado();
            } else {
                alert("Esporte não identificado. Tente novamente.");
                continue;
            }
        }

        if (pontos === 1) {
            escolha = Number(prompt("Nessa escolha você vai decidir se vai para a Europa ou ficar na Síria:\n1 para ir para a Alemanha\n2 para continuar na Síria"));

            if (escolha === 2) {
                alert("Você fica na Síria e acaba morrendo bombardeado. Você perdeu!");
                reiniciarJogo();
                return;
            }

            if (escolha === 1) {
                alert("Você está indo para a Alemanha e começa a treinar com Emil Guliyev, que também quer nadar nas Olimpíadas.");
                adicionarSentimento("Coragem");
                pontos++;
                salvarEstado();
            } else {
                alert("Escolha não reconhecida. Tente novamente.");
                continue;
            }
        }

        if (pontos === 2) {
            escolha = Number(prompt("Agora você vai escolher em qual estilo de nado deseja focar para tentar a vaga às Olimpíadas:\n1 - Nado de Crawl\n2 - Nado de Borboleta"));

            if (escolha === 2) {
                alert("Você escolheu o nado de Borboleta, o mais difícil de realizar. Você perdeu!");
                reiniciarJogo();
                return;
            }

            if (escolha === 1) {
                alert("Você escolheu o nado de Crawl, e está com um tempo de 22.07 segundos. Você precisa alcançar o tempo de 21.96 segundos.");
                adicionarSentimento("Persistência");
                pontos++;
                salvarEstado();
            } else {
                alert("Nado não identificado. Tente novamente.");
                continue;
            }
        }

        if (pontos === 3) {
            escolha = Number(prompt("Você conseguiu melhorar seu tempo! Agora você deve escolher sua estratégia de treinamento:\n1 - Treinamento intensivo\n2 - Treinamento moderado"));

            if (escolha === 2) {
                alert("Você optou por um treinamento moderado e não conseguiu melhorar seu tempo o suficiente para ir às Olimpíadas. Você perdeu!");
                reiniciarJogo();
                return;
            }

            if (escolha === 1) {
                alert("Você optou por um treinamento intensivo e conseguiu melhorar seu tempo para 21.90 segundos. Parabéns, você está indo para as Olimpíadas!");
                adicionarSentimento("Foco");
                pontos++;
                salvarEstado();
            } else {
                alert("Estratégia não identificada. Tente novamente.");
                continue;
            }
        }

        if (pontos === 4) {
            escolha = Number(prompt("Você está perto das Olimpíadas! Agora escolha como vai lidar com a pressão:\n1 - Trabalhar com um psicólogo esportivo\n2 - Ignorar a pressão e continuar sozinho"));

            if (escolha === 2) {
                alert("Você ignorou a pressão e não conseguiu lidar com a ansiedade, prejudicando seu desempenho nas Olimpíadas. Você perdeu!");
                reiniciarJogo();
                return;
            }

            if (escolha === 1) {
                alert("Você trabalhou com um psicólogo esportivo e conseguiu manter a calma e o foco. Você competiu e ganhou uma medalha de prata!");
                adicionarSentimento("Resiliência");
                pontos++;
                salvarEstado();
            } else {
                alert("Escolha não reconhecida. Tente novamente.");
                continue;
            }
        }

        if (pontos === 5) {
            escolha = Number(prompt("Com as Olimpíadas de Tóquio 2020 impactadas pela pandemia, você deve escolher como reagir:\n1 - Participar da competição apesar das restrições e protocolos de segurança\n2 - Optar por não competir e esperar a próxima edição das Olimpíadas"));

            if (escolha === 2) {
                alert("Você optou por não competir devido às restrições e perdeu a chance de mostrar seu talento nas Olimpíadas de Tóquio 2020. O jogo vai reiniciar.");
                reiniciarJogo();
                return;
            }

            if (escolha === 1) {
                alert("Você participou da competição apesar das restrições e protocolos, e conseguiu adaptar-se às novas condições. Você teve um desempenho notável e alcançou a final!");
                adicionarSentimento("Adaptação");
                pontos++;
                salvarEstado();
            } else {
                alert("Escolha não identificada. Tente novamente.");
                continue;
            }
        }

        if (pontos === 6) {
            escolha = Number(prompt("Agora, você está se preparando para as Olimpíadas de 2024. Escolha como melhorar seu desempenho:\n1 - Focar em técnicas avançadas de treinamento\n2 - Manter o mesmo regime de treino"));

            if (escolha === 2) {
                alert("Você manteve o mesmo regime de treino e não conseguiu melhorar seu desempenho. Você perdeu!");
                reiniciarJogo();
                return;
            }

            if (escolha === 1) {
                alert("Você focou em técnicas avançadas e melhorou significativamente. Agora você está mais preparado para as Olimpíadas de 2024!");
                adicionarSentimento("Confiança");
                pontos++;
                salvarEstado();
            } else {
                alert("Escolha não identificada. Tente novamente.");
                continue;
            }
        }

        if (pontos === 7) {
            escolha = Number(prompt("Durante a preparação para as Olimpíadas de 2024, você recebe uma oferta para competir em um torneio internacional. Você:\n1 - Aceita a oferta e compete\n2 - Recusa a oferta e continua seu treinamento"));

            if (escolha === 2) {
                alert("Você recusou a oferta e perdeu uma oportunidade valiosa de ganhar experiência. Você não está tão preparado quanto poderia estar. Você perdeu!");
                reiniciarJogo();
                return;
            }

            if (escolha === 1) {
                alert("Você aceitou a oferta e teve um bom desempenho no torneio, o que aumentou sua confiança e experiência. Você está ainda mais preparado para as Olimpíadas de 2024!");
                adicionarSentimento("Estratégia");
                pontos++;
                salvarEstado();
            } else {
                alert("Escolha não identificada. Tente novamente.");
                continue;
            }
        }

        if (pontos === 8) {
            escolha = Number(prompt("Com a aproximação das Olimpíadas de 2024, um rival surge como um forte concorrente. Você:\n1 - Estuda e ajusta sua estratégia para competir contra o rival\n2 - Ignora o rival e mantém seu plano original"));

            if (escolha === 2) {
                alert("Você ignorou o rival e não ajustou sua estratégia. Seu rival teve um desempenho superior e você não conseguiu uma medalha. Você perdeu!");
                reiniciarJogo();
                return;
            }

            if (escolha === 1) {
                alert("Você estudou e ajustou sua estratégia para competir contra o rival. Você se saiu muito bem e garantiu uma medalha!");
                adicionarSentimento("Preparação");
                pontos++;
                salvarEstado();
            } else {
                alert("Escolha não identificada. Tente novamente.");
                continue;
            }
        }

        if (pontos === 9) {
            escolha = Number(prompt("Finalmente, você está nas Olimpíadas de 2024. Você deve escolher como gerenciar seu tempo antes da competição:\n1 - Manter uma rotina rigorosa de treino e descanso\n2 - Desviar da rotina e aproveitar o tempo livre para relaxar"));

            if (escolha === 2) {
                alert("Você desviou da rotina e não conseguiu manter o foco. Seu desempenho nas Olimpíadas foi abaixo do esperado. Você perdeu!");
                reiniciarJogo();
                return;
            }

            if (escolha === 1) {
                alert("Você manteve uma rotina rigorosa de treino e descanso, o que garantiu que você estivesse no melhor estado possível para competir.");
                adicionarSentimento("Disciplina");
                pontos++;
                salvarEstado();
            } else {
                alert("Escolha não identificada. Tente novamente.");
                continue;
            }
        }

        if (pontos === 10) {
            escolha = Number(prompt("Durante a final das Olimpíadas de 2024, você enfrenta um desafio inesperado. Você:\n1 - Usa sua experiência e adaptação para superar o desafio\n2 - Se sente abalado e não consegue manter o foco"));

            if (escolha === 2) {
                alert("Você se sentiu abalado e não conseguiu manter o foco. Seu desempenho foi afetado e você não conseguiu ganhar a medalha. Você perdeu!");
                reiniciarJogo();
                return;
            }

            if (escolha === 1) {
                alert("Você usou sua experiência e adaptação para superar o desafio. Sua performance foi excepcional e você nadou com maestria na final!");
                adicionarSentimento("Experiência");
                pontos++;
                salvarEstado();
            } else {
                alert("Escolha não identificada. Tente novamente.");
                continue;
            }
        }

        if (pontos === 11) {
            escolha = Number(prompt("Na reta final da competição, você enfrenta um imprevisto: uma pequena lesão. Você:\n1 - Procura ajuda médica imediata e ajusta sua performance\n2 - Ignora a lesão e tenta competir apesar da dor"));

            if (escolha === 2) {
                alert("Você ignorou a lesão e isso afetou negativamente seu desempenho. Você não conseguiu conquistar a medalha desejada. Você perdeu!");
                reiniciarJogo();
                return;
            }

            if (escolha === 1) {
                alert("Você procurou ajuda médica e ajustou sua performance, conseguindo competir em alta qualidade. Você superou o desafio e conquistou a medalha de ouro!");
                adicionarSentimento("Superação");
                pontos++;
                salvarEstado();
                alert("Parabéns, você completou a jornada de Alla Maso e conquistou a medalha de ouro nas Olimpíadas de 2024!");
                break;
            } else {
                alert("Escolha não identificada. Tente novamente.");
                continue;
            }
        }
    }

    if (pontos < sentimentosNecessarios.length) {
        alert("Você não conseguiu atingir a pontuação necessária. O jogo vai reiniciar.");
        reiniciarJogo();
    }
}

iniciarJogo();
