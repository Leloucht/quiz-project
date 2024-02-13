const perguntasJavaScript = [
    {
      pergunta: "O que significa 'DOM' em JavaScript?",
      respostas: [
        "Documento Orientado a Módulos",
        "Modelo de Objeto do Documento",
        "Desenvolvimento Orientado a Módulos"
      ],
      correta: 1
    },
    {
      pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
      respostas: [
        "var",
        "let",
        "variable"
      ],
      correta: 0
    },
    {
      pergunta: "O que é um callback em JavaScript?",
      respostas: [
        "Uma função que é passada como argumento para outra função",
        "Um tipo de loop",
        "Uma variável global"
      ],
      correta: 0
    },
    {
      pergunta: "O que é o JSON em JavaScript?",
      respostas: [
        "Uma linguagem de programação",
        "Um formato de dados",
        "Um método de loop"
      ],
      correta: 1
    },
    {
      pergunta: "Qual método é usado para imprimir algo no console em JavaScript?",
      respostas: [
        "print()",
        "log()",
        "console()"
      ],
      correta: 1
    },
    {
      pergunta: "O que é o AJAX em JavaScript?",
      respostas: [
        "Uma linguagem de estilos",
        "Um conjunto de diretrizes de acessibilidade",
        "Uma técnica de comunicação assíncrona com o servidor"
      ],
      correta: 2
    },
    {
      pergunta: "O que é o operador '===' em JavaScript?",
      respostas: [
        "Igualdade estrita (valor e tipo)",
        "Atribuição",
        "Comparação solta (apenas valor)"
      ],
      correta: 0
    },
    {
      pergunta: "O que é o 'hoisting' em JavaScript?",
      respostas: [
        "Elevar objetos fisicamente",
        "Elevar declarações de variáveis e funções",
        "Ocultar código"
      ],
      correta: 1
    },
    {
      pergunta: "O que é uma 'closure' em JavaScript?",
      respostas: [
        "Uma função que não tem acesso ao escopo externo",
        "Uma função que tem acesso ao escopo externo, mesmo após a execução ter saído desse escopo",
        "Um erro de sintaxe"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a finalidade do método 'preventDefault()' em JavaScript?",
      respostas: [
        "Evitar a execução de uma função",
        "Evitar a propagação de um evento padrão",
        "Evitar a declaração de variáveis"
      ],
      correta: 1
    }
  ];
  
  const template = document.querySelector('template');
  const quiz = document.querySelector('#quiz');
  
  const corretas = new Set()
  const totalDePerguntas = perguntasJavaScript.length
  const mostrarTotal = document.querySelector("#acertos span")
  mostrarTotal.textContent = corretas.size + "de" + totalDePerguntas
  
  //laco derepeticao ou loop - este foi usado pra trazer as perguntas
  for(const item of perguntasJavaScript) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
  //loop utilizado para trazer as respostas
    for(let resposta of item.respostas){
      //querySelector eh utilizado para manipulir um elemento pelo seletor html
      //cloeNode copia todos os elemento e valores
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta;
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntasJavaScript.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const itemCorreto = event.target.value == item.correta;
        corretas.delete(item)
        if(itemCorreto){
          corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + ` de ` + totalDePerguntas
  
      }
  
  
  
      //esta colocando o item dt como filho de dl
      quizItem.querySelector('dl').appendChild(dt)
    }
  //este loop esta rmovendo um item 'RESPOSTA A'
    quizItem.querySelector('dl dt').remove()
  
  //este esta colocando o item quizItem como filho de quiz
    quiz.appendChild(quizItem)
  }