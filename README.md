# AcademiX

Plataforma web para estudantes organizarem a rotina acadêmica em um único lugar. Aulas, horários, provas, presenças, atividades e avisos ficam reunidos em uma interface moderna, intuitiva e responsiva.

O projeto foi desenvolvido durante o Hackathon da UC Frameworks Front-end, em 4 horas, usando React. A solução é somente Front-end, sem backend. Os dados ficam salvos no navegador do usuário.

## ODS

**ODS 4 - Educação de Qualidade**

O AcademiX contribui para uma experiência educacional mais organizada e acessível. Quando o estudante enxerga com clareza seus compromissos, ele se prepara melhor para as provas, entrega as atividades no prazo e acompanha a própria frequência, o que apoia a permanência e o bom desempenho nos estudos.

## Problema

As informações da vida acadêmica ficam espalhadas em vários lugares, como portal da instituição, grupos de mensagens, e-mail, cadernos e planilhas. Essa fragmentação faz o estudante esquecer provas e prazos, perder avisos importantes e não saber quantas faltas ainda pode ter em cada disciplina. O resultado é estresse, baixo desempenho e risco de reprovação por falta de organização, e não por falta de capacidade.

## Público-alvo

Estudantes de escolas técnicas e de faculdades, que lidam com várias disciplinas ao mesmo tempo, rotina de aulas em horários diferentes e muitas atividades e avaliações ao longo do período.

## Definição do problema

| Item | Descrição |
|---|---|
| ODS escolhido | ODS 4 - Educação de Qualidade |
| Problema | Informações acadêmicas dispersas dificultam a organização da rotina do estudante |
| Público-alvo | Estudantes de escolas técnicas e faculdades |
| Necessidade | Reunir aulas, provas, atividades, presenças e avisos em um só lugar, de forma simples e acessível pelo computador e pelo celular |
| Objetivo da solução | Ajudar o estudante a acompanhar seus compromissos e a se preparar melhor para as atividades acadêmicas |

## Proposta de Valor

| Pergunta | Resposta |
|---|---|
| Qual problema resolvemos? | A desorganização causada por informações acadêmicas espalhadas em vários canais |
| Para quem? | Estudantes de escolas técnicas e faculdades |
| Como nossa solução ajuda? | Centraliza aulas, horários, provas, atividades, presenças e avisos em um painel único, com calendário, alertas de prazo e controle de frequência |
| Qual valor ela entrega? | Menos esquecimentos, mais previsibilidade da rotina e mais tempo para estudar, com uma ferramenta que o próprio aluno controla, sem depender de a instituição adotar um sistema |

## Benchmarking

Foram analisadas 5 soluções existentes relacionadas ao problema.

| Solução | Funcionalidades | Público-alvo | Pontos positivos | Pontos negativos | Referência para o AcademiX |
|---|---|---|---|---|---|
| Google Classroom | Turmas, mural de avisos, atividades com prazo, entrega de tarefas, integração com agenda | Professores e alunos de instituições que adotam a ferramenta | Gratuito, simples, notificações de prazo | Depende da instituição adotar, não é focado em grade de horários pessoal nem em controle de frequência | Lista de atividades com prazo e status |
| Moodle | Ambiente virtual de aprendizagem com conteúdos, atividades, fóruns, questionários, notas e avisos | Instituições de ensino, professores e alunos | Muito completo e de código aberto | Interface pode ser densa e a experiência varia conforme a configuração da instituição | Área de avisos importantes |
| Notion | Páginas e bancos de dados, calendário, templates acadêmicos | Público geral, incluindo estudantes | Muito flexível e personalizável | O aluno precisa montar tudo manualmente, não há cálculo de frequência pronto | Organização por cores e visões diferentes dos mesmos dados |
| Google Agenda | Eventos, lembretes, visões de dia, semana e mês, cores por calendário | Público geral | Simples, rápido e com notificações | Genérico, não conhece disciplinas, atividades, provas ou presenças | Visão de calendário semanal e mensal |
| Agenda Edu | Comunicados da escola, agenda escolar e acompanhamento escolar | Escolas, responsáveis e alunos | Comunicação centralizada entre escola e família | Depende de a escola contratar e tem foco na escola e nos responsáveis, com pouco controle pessoal do aluno | Painel inicial com comunicados em destaque |

**Características usadas como referência na nossa solução**

- Lista de atividades com prazo e status de conclusão (Google Classroom).
- Área de avisos importantes com marcação de lido (Moodle e Agenda Edu).
- Cores por disciplina e visões diferentes dos mesmos dados (Notion).
- Calendário semanal e mensal unificado (Google Agenda).
- Painel inicial com resumo do que importa hoje (Agenda Edu).

**Diferencial do AcademiX** reunir tudo em uma única plataforma centrada no aluno, com controle de frequência e alertas, sem depender da instituição.

## Requisitos

Como o projeto é somente Front-end, os dados são persistidos no navegador (localStorage), com dados de exemplo para demonstração.

### Requisitos Funcionais

| Código | Descrição |
|---|---|
| RF01 | O sistema deve permitir cadastrar um perfil de estudante e acessar a plataforma com ele |
| RF02 | O sistema deve permitir cadastrar, editar e excluir disciplinas, com nome, professor, sala e cor |
| RF03 | O sistema deve permitir cadastrar aulas na grade de horários semanal e visualizá-la |
| RF04 | O sistema deve permitir cadastrar, editar e excluir provas, com disciplina, data, horário e conteúdo |
| RF05 | O sistema deve permitir cadastrar, editar, concluir e excluir atividades com prazo de entrega |
| RF06 | O sistema deve permitir registrar presença ou falta em cada aula |
| RF07 | O sistema deve calcular o percentual de frequência por disciplina e alertar quando estiver próximo do limite mínimo configurado |
| RF08 | O sistema deve permitir cadastrar avisos importantes, listá-los e marcá-los como lidos |
| RF09 | O sistema deve exibir um painel inicial com resumo das aulas do dia, próximas provas, atividades pendentes e avisos recentes |
| RF10 | O sistema deve exibir um calendário semanal e mensal reunindo aulas, provas e prazos de atividades, com filtro por disciplina |

### Requisitos Não Funcionais

| Código | Descrição |
|---|---|
| RNF01 | A aplicação deve ser responsiva e funcionar bem em computadores e celulares |
| RNF02 | A aplicação deve possuir interface acessível, com contraste adequado, rótulos nos campos e navegação por teclado |
| RNF03 | A aplicação deve apresentar tempo de carregamento adequado, com meta de até 3 segundos na primeira abertura |
| RNF04 | As principais ações devem poder ser feitas em no máximo 3 cliques a partir do painel inicial |
| RNF05 | Os dados do usuário devem ser mantidos no navegador após recarregar a página |
| RNF06 | A aplicação deve funcionar nas versões atuais do Chrome, Firefox, Edge e Safari |
| RNF07 | O código deve ser organizado em componentes reutilizáveis e em pastas com responsabilidades claras |
| RNF08 | Os formulários devem validar os dados informados e exibir mensagens de erro compreensíveis |
| RNF09 | A interface deve apresentar estados de carregamento, de lista vazia e de erro de forma clara |
| RNF10 | A aplicação deve estar publicada e acessível pela Internet, com o código versionado em Git usando commits no padrão convencional |

## User Stories

### US01 - Perfil do estudante (RF01)

Como estudante, quero criar meu perfil e acessar a plataforma, para ter meus dados acadêmicos reunidos em um só lugar.

**Critérios de aceitação**

- O formulário exige nome e curso ou instituição antes de salvar.
- Após salvar, o estudante é levado ao painel inicial.
- Ao reabrir o sistema, o perfil continua salvo.

### US02 - Disciplinas (RF02)

Como estudante, quero cadastrar minhas disciplinas, para organizar todo o conteúdo por matéria.

**Critérios de aceitação**

- É possível informar nome, professor, sala e escolher uma cor.
- A disciplina aparece na lista logo após ser salva.
- É possível editar e excluir, com pedido de confirmação antes de excluir.

### US03 - Grade de horários (RF03)

Como estudante, quero cadastrar meus horários de aula, para saber onde e quando estarei em cada dia.

**Critérios de aceitação**

- A aula é vinculada a uma disciplina, a um dia da semana e a um horário.
- A grade semanal mostra as aulas com a cor da disciplina.
- O sistema impede cadastrar duas aulas no mesmo dia e horário.

### US04 - Provas (RF04)

Como estudante, quero registrar minhas provas, para me preparar com antecedência.

**Critérios de aceitação**

- A prova é cadastrada com disciplina, data, horário e conteúdo.
- As provas são listadas em ordem de data, das mais próximas para as mais distantes.
- Provas que já passaram ficam visualmente diferenciadas.

### US05 - Atividades (RF05)

Como estudante, quero cadastrar minhas atividades com prazo, para não perder nenhuma entrega.

**Critérios de aceitação**

- A atividade tem título, disciplina e data de entrega.
- É possível marcar como concluída e desfazer a marcação.
- Atividades atrasadas e ainda pendentes aparecem destacadas.

### US06 - Registro de presença (RF06)

Como estudante, quero registrar minha presença ou falta em cada aula, para acompanhar minha frequência.

**Critérios de aceitação**

- Cada aula do dia pode ser marcada como presença ou falta.
- É possível corrigir um registro feito por engano.
- O registro fica salvo e vinculado à disciplina.

### US07 - Frequência e alertas (RF07)

Como estudante, quero ver meu percentual de frequência por disciplina, para saber quantas faltas ainda posso ter.

**Critérios de aceitação**

- O percentual é calculado automaticamente a partir dos registros.
- O limite mínimo padrão é 75% e pode ser alterado.
- Quando a frequência chega perto do limite, aparece um alerta visível na disciplina e no painel.

### US08 - Avisos (RF08)

Como estudante, quero registrar e consultar avisos importantes, para não perder comunicados da instituição ou dos professores.

**Critérios de aceitação**

- O aviso pode ser cadastrado com título, texto e data.
- Avisos não lidos aparecem em destaque.
- É possível marcar como lido.

### US09 - Painel inicial (RF09)

Como estudante, quero ver um resumo do meu dia ao abrir o sistema, para saber rapidamente o que precisa ser feito.

**Critérios de aceitação**

- O painel mostra as aulas de hoje, as próximas provas, as atividades pendentes e os avisos recentes.
- Cada bloco leva para a tela completa do respectivo assunto.
- Quando não há dados, o painel mostra uma mensagem orientando o primeiro cadastro.

### US10 - Calendário (RF10)

Como estudante, quero ver um calendário com aulas, provas e prazos, para planejar minha semana e meu mês.

**Critérios de aceitação**

- É possível alternar entre visão semanal e mensal.
- Aulas, provas e atividades aparecem com identificação visual diferente.
- O filtro por disciplina mostra apenas os itens da disciplina escolhida.

## Funcionalidades

- Perfil do estudante
- Cadastro de disciplinas com cores
- Grade de horários semanal
- Cadastro e acompanhamento de provas
- Cadastro e conclusão de atividades com prazo
- Registro de presença e faltas
- Cálculo de frequência com alerta de limite
- Avisos importantes com marcação de lido
- Painel inicial com resumo
- Calendário semanal e mensal com filtro por disciplina

## Tecnologias Utilizadas

- React
- Vite
- React Router
- CSS puro, com arquivos por componente e variáveis globais
- localStorage para persistência dos dados
- Git e GitHub
- Ferramenta de gestão de projeto a definir (Trello, GitHub Projects ou Notion)
- Google Stitch para o protótipo

## Framework Utilizado

React, com componentes reutilizáveis, rotas para as telas e estado para controlar os dados da aplicação.

## Como Executar

```bash
git clone URL_DO_REPOSITORIO
cd academix
npm install
npm run dev
```

Depois, acesse o endereço exibido no terminal (normalmente http://localhost:5173).

## Estrutura de Pastas

```
src/
├── assets/        imagens e ícones
├── components/
│   ├── layout/    Header, Sidebar e estrutura geral das telas
│   └── ui/        Button, Input, Card, Modal e outros componentes reutilizáveis
├── context/       estado global (perfil, disciplinas, provas...)
├── data/          dados de exemplo para demonstração
├── hooks/         hooks customizados, como useLocalStorage
├── pages/         uma tela por arquivo (Dashboard, Disciplinas, Provas...)
├── services/      leitura e gravação no localStorage
├── styles/        variáveis e estilos globais
└── utils/         funções auxiliares (datas, cálculo de frequência)
```

## Protótipo

O protótipo possui no mínimo 10 telas, com fluxo de navegação e versão para celular.

| Item | Link |
|---|---|
| URL do protótipo | https://stitch.withgoogle.com/projects/2198332946532495130 |

Telas previstas

1. Perfil e primeiro acesso
2. Painel inicial
3. Lista de disciplinas
4. Formulário de disciplina
5. Grade de horários
6. Provas
7. Atividades
8. Registro de presença
9. Frequência por disciplina
10. Avisos
11. Calendário

## Aplicação

| Item | Link |
|---|---|
| URL da aplicação | A preencher |
| URL do repositório | A preencher |
| URL do protótipo | https://stitch.withgoogle.com/projects/2198332946532495130 |

## Processo de Desenvolvimento

- Gestão do projeto no GitHub Projects (quadro Kanban AcademyX) com 50 cartões criados como issues do repositório academyx, numerados de 01 a 50 e organizados por grupo e prioridade. Link https://github.com/orgs/AcademyX-senai/projects/1
- Versionamento com Git e commits no padrão convencional, como feat, fix, style e docs.
- Ordem de trabalho seguida durante as 4 horas do hackathon: definição do problema, proposta de valor, requisitos, user stories, protótipo, desenvolvimento, testes, deploy e documentação final.
- Divisão da equipe e registro do andamento a completar ao longo do desenvolvimento.

## Inteligência Artificial

Ferramenta utilizada Claude, da Anthropic.

Utilização
- criação dos 50 cartões do quadro no GitHub Projects a partir da lista definida pela equipe.
- apoio na estruturação da documentação e do README;
- sugestão da estrutura de pastas do projeto React;
- sugestão de benchmarking, requisitos e user stories, revisados e ajustados pela equipe.

A equipe é responsável pelo código e pela solução entregue. Atualizar esta seção caso outras ferramentas sejam usadas.

## Integrantes

| Nome | Papel | Responsabilidades |
|---|---|---|
| Amós | Documentação e requisitos | Definir problema, ODS 4 e público-alvo, fazer o benchmarking de 5 soluções, criar a proposta de valor, escrever 10 requisitos funcionais e 10 não funcionais, elaborar as user stories com critérios de aceitação, preparar o README e apoiar o desenvolvimento e os testes |
| Vinicius | Protótipo e identidade visual | Criar as 10 telas no Figma, definir cores, tipografia e componentes visuais, desenhar o fluxo de navegação, garantir a adaptação para celular, entregar o link do protótipo e apoiar o desenvolvimento das interfaces |
| Kaique | Kanban, Git e organização técnica | Organizar o GitHub Projects com colunas, prioridades, responsáveis e status, configurar o React com Vite e o repositório, desenvolver componentes e funcionalidades, coordenar os commits e ajudar a publicar a aplicação |

