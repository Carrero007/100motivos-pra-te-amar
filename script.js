const reasons = [
    "Seu sorriso ilumina meu dia.",
    "Sua gentileza com todos.",
    "você sempre me faz sentir amado.",
    "Sua paixão pelos seus, meus e nossos interesses.",
    "Maneira como você me faz rir.",
    "você me entende sem eu precisar me explicar.",
    "Eu amo o seu abraço.",
    "Sua determinação em alcançar seus objetivos.",
    "Como você me apoia em tudo o que faço.",
    "Seu compromisso com nossa relação.",
    "Sua inteligência me inspira.",
    "Seu senso de humor.",
    "você me faz sentir seguro.",
    "Sua paciência quando estou precisando da sua ajuda.",
    "brilho nos seus olhos quando você fala sobre algo que ama.",
    "Sua capacidade de me perdoar e me entender.",
    "Amo seu sorriso.",
    "Sua honestidade.",
    "O conforto que encontro em seus braços.",
    "Sua determinação em resolver problemas.",
    "Sua voz linda.",
    "Como você valoriza minhas opiniões e ideias.",
    "Sua habilidade de me surpreender positivamente.",
    "você faz um som mt fofo quando me abraça.",
    "Seu jeito carinhoso de me chamar.",
    "Sua dedicação em melhorar a si mesmo.",
    "Como você se preocupa com meu bem-estar.",
    "Sua habilidade de me fazer sentir especial em pequenos gestos.",
    "Você sempre me apoia.",
    "Me fazer sentir bonito, mesmo nos dias ruins.",
    "Seus elogios.",
    "Me faz sentir confiante.",
    "Suas surpresas.",
    "Eu amo o seu toque.",
    "Sua criatividade.",
    "Maneira como você me olha como se eu fosse a única pessoa no mundo.",
    "Sua vontade de fazer sacrifícios por nosso relacionamento.",
    "Seu compromisso em tornar nosso relacionamento mais forte a cada dia.",
    "você me incentiva a seguir meus sonhos.",
    "Sua paciência infinita comigo.",
    "Sempre encontra tempo para mim.",
    "Amo seu cabelo.",
    "Sempre me faz rir.",
    "você faz eu me sentir desejado.",
    "Sua dedicação em cuidar de nossa relação.",
    "você sempre me defende e protege.",
    "Me sinto importante em sua vida.",
    "Sempre sabe como me animar.",
    "Sua gentileza com os animais.",
    "Sua paixão pela vida.",
    "Me sinto seguro ao seu lado.",
    "Eu amo os seus olhos.",
    "Eu amo seus carinhos.",
    "Eu amo seu colo.",
    "Eu amo as suas brincadeiras sem graça.",
    "Eu amo o jeito que você fala comigo.",
    "Eu amo o seu dengo.",
    "Eu amo como você confia em mim.",
    "Eu amo passar cada segundo do meu dia pensando em você.",
    "Eu amo o seu cheiro.",
    "Eu amo como você segura meu rosto.",
    "Eu amo o seu beijo demorado.",
    "Eu amo nossas brincadeiras.",
    "Eu amo como você me conforta.",
    "Eu amo a sua boca.",
    "Eu amo ter você.",
    "Eu amo ser seu.",
    "Eu amo te fazer rir.",
    "Eu amo a sua beleza.",
    "Eu amo quando você me aperta.",
    "Eu amo como sempre abro um sorriso quando te vejo.",
    "Eu amo me apaixonar por você todos os dias.",
    "Eu amo como você olha pra mim.",
    "Amo quando segura a minha mão.",
    "Amo a sua risada.",
    "Eu amo seu cuidado comigo.",
    "Eu amo o seu romantismo.",
    "Amo dormir com você.",
    "Amo mexer no seu cabelo.",
    "Amo quando me pede opinião.",
    "Amo sonhar com você.",
    "Amo planejar nosso futuro juntos.",
    "Amo maratonar série e filme com você.",
    "Amo quando diz que me ama.",
    "Amo quando diz que está com saudade de mim.",
    "Eu amo como odeio ficar longe de você.",
    "Amo meu medo de te perder.",
    "Amo nossas saídas juntos.",
    "Eu amo nosso namoro.",
    "Amo te encher de beijos.",
    "Eu amo te ouvir me chamar de amor.",
    "Amo dormir com você.",
    "Amo fazer nada com você.",
    "Amo planejar as coisas com você.",
    "Eu amo quando me manda bom dia assim que acorda.",
    "Eu amo como tudo se torna bom com você.",
    "Eu amo dizer que te amo.",
    "Amo te mimar.",
    "Amo te presentear.",
    "Eu amo nós dois."
];

let remainingReasons = [...reasons];

const dynamicReasonElement = document.getElementById('dynamic-reason');
const generateButton = document.getElementById('generate-button');

generateButton.addEventListener('click', () => {
    if (remainingReasons.length === 0) {
        // Reiniciar o ciclo quando todos os motivos forem exibidos
        remainingReasons = [...reasons];
    }

    // Selecionar um motivo aleatório e removê-lo da lista
    const randomIndex = Math.floor(Math.random() * remainingReasons.length);
    const reason = remainingReasons.splice(randomIndex, 1)[0];

    // Ajustar o texto conforme "por", "pela" ou "pois"
    const prefix = reason.startsWith("A maneira") || reason.startsWith("Como") || reason.startsWith("Você") || reason.startsWith("Me fazer")
        ? "por"
        : reason.startsWith("O") || reason.startsWith("A") || reason.startsWith("Eu amo") || reason.startsWith("Me sinto") || reason.startsWith("Me faz") || reason.startsWith("Você me incentiva") || reason.startsWith("Sua inteligência me") || reason.startsWith("você me entende sem eu precisar me explicar.") || reason.startsWith("Você sempre me faz sentir amado.") || reason.startsWith("você faz um som mt fofo quando me abraça.") || reason.startsWith("você me faz sentir seguro") || reason.startsWith("você sempre me defende e protege.") || reason.startsWith("você faz eu me sentir desejado.")
        ? "pois"
        : reason.startsWith("Seu") || reason.startsWith("brilho nos seus olhos quando você fala sobre algo que ama.")
        ? "pelo"
        : "pela";

    dynamicReasonElement.textContent = `${prefix} ${reason}`;
});
