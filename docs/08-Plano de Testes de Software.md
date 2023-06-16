# Plano de Testes de Software

Os requisitos para realização dos testes de software são:

● Site publicado na Internet

● Navegador da Internet - Chrome, Firefox ou Edge

● Conectividade de Internet para acesso às plataformas (APISs)

Os testes funcionais a serem realizados no aplicativo são descritos a seguir:

# Tela - Home Page

| Caso de testes | CT – 01 – Home page – Conheça o Projeto |
|---|---|
| Requisitos associados | RF-01 - O site deve apresentar na página principal um direcionamento completo de como se conseguir caronas utilizando o site. | 
| Objetivo do teste | Testar o dropdown “Conheça o Projeto” |
| Passos | 1-	Abrir a página principal; 2-	Mover o mouse para cima do Dropdown “Conheça o Projeto”; 3-	Clicar em “Como utilizar” |
| Critérios de Êxito | A página vai se mover para baixo, apresentando como utilizar a pesquisa de caronas. |

| Caso de testes | CT- 02 - Home page – Navegabilidade - Cadastro |
|---|---|
| Requisitos associados | RF-02 - O site deve oferecer uma funcionalidade de cadastro de novo usuário. |
| Objetivo do teste | Verificar se o botão de “cadastro” está conectado a tela de cadastro |
| Passos | 1-	Abrir a página principal; 2-	Clicar no botão de cadastro. |
| Critérios de Êxito | A página de cadastro é aberta. |

| Caso de testes | CT- 03 – Home page - Navegabilidade -Login |
|---|---|
| Requisitos associados | RF-02 - O site deve oferecer uma funcionalidade de cadastro de novo usuário. |
| Objetivo do teste | Verificar se o botão de “Login” está conectado a tela de Login. |
| Passos | 1-	Abrir a página principal; 2-	Clicar no botão de Login. |
| Critérios de Êxito | A página de Login é aberta. |

| Caso de testes | CT- 04 - Home page - Navegabilidade -  Fale Conosco  |
|---|---|
| Requisitos associados | RF-12 - O site deve apresentar uma parte para entrar em contato com os desenvolvedores. |
| Objetivo do teste | Verificar se o botão “Fale Conosco” leva o usuário até os contatos dos desenvolvedores. |
| Passos | 1-	Abrir página principal; 2-	Clicar no botão “Fale Conosco” |
| Critérios de Êxito | A página vai se mover para baixo até seu final, mostrando os contatos dos desenvolvedores. |
 
| Caso de testes | CT- 05 – Home page - Responsividade  |
|---|---|
| Requisitos associados | RF-11 - O site deve apresentar telas responsivas para pc e celular. |
| Objetivo do teste | Avaliar a responsividade da página principal em dispositivos móveis. |
| Passos | 1-	Abrir página principal; 2-	Clicar com botão direito do mouse na página; 3-	Clicar em “inspecionar elemento” 4-	Clicar no botão de dispositivo móvel no canto superior direito. 5-	Clicar em dimensões de tela; 6-	Selecionar o dispositivo móvel “Iphone Se”. |
| Critérios de Êxito | A tela se organizará para uma resolução menor e ficará responsiva para dispositivos móveis. |

| Caso de testes | CT- 06 – Home page – Filtro de pesquisa - Passageiros  |
|---|---|
| Requisitos associados | RF-06 O site deve oferecer uma área logada com sistema de busca de usuários por localidade. |
| Objetivo do teste | Testar o filtro na barra de pesquisa. |
| Passos | 1-	Abrir página principal; 2-	Escrever seu bairro no campo de pesquisa;3-	Alterar o filtro para passageiros |
| Critérios de Êxito | A pesquisa deve mostrar apenas contas de passageiros no bairro digitado. |

| Caso de testes | CT- 07 – Home page – Filtro de pesquisa - Motorista  |
|---|---|
| Requisitos associados | RF-06 O site deve oferecer uma área logada com sistema de busca de usuários por localidade. |
| Objetivo do teste | Testar o filtro na barra de pesquisa. |
| Passos | 1-	Abrir página principal; 2-	Escrever seu bairro no campo de pesquisa; 3-	Alterar o filtro para motoristas. |
| Critérios de Êxito | A pesquisa deve mostrar apenas contas de motoristas no bairro digitado. |

| Caso de testes | CT- 08 – Home page – Pesquisa – Teste de Campo  |
|---|---|
| Requisitos associados | RF-06 O site deve oferecer uma área logada com sistema de busca de usuários por localidade. |
| Objetivo do teste | Fazer a verificação no campo de pesquisa, a pesquisa só deve receber letras e não números. |
| Passos | 1-	Abrir a tela principal; 2-	Escrever o nome do bairro com somente letras.|
| Critérios de Êxito | Foi apenas escrito com letras, deve aparecer os usuários do bairro. |

| Caso de testes | CT- 09 – Home page – Navegabilidade - Perfil  |
|---|---|
| Requisitos associados | RF-02 - O site deve oferecer uma funcionalidade de cadastro de novo usuário. |
| Objetivo do teste | Testar o botão de “perfil” após o login. |
| Passos | 1-	Abrir a página principal; 2-	Cadastrar um usuário qualquer; 3-	Apertar o botão “perfil” no cabeçalho da página principal; |
| Critérios de Êxito | O botão deve levar o usuário a página de perfil. |

| Caso de testes | CT- 10 – Home page – Navegabilidade - Sair  |
|---|---|
| Requisitos associados | RF-02 - O site deve oferecer uma funcionalidade de cadastro de novo usuário. |
| Objetivo do teste | Testar o botão “Sair” na página principal após o Login. |
| Passos | 1-	Abrir a página principal; 2-	Cadastrar um usuário qualquer; 3-	Apertar o botão “Sair” |
| Critérios de Êxito | O usuário sairá da sua conta cadastrada. |

# Tela - Resultado de busca

| Caso de testes | CT- 11 – Resultado de Busca – Conheça o Projeto |
|---|---|
| Requisitos associados | RF-01 - O site deve apresentar na página principal um direcionamento completo de como se conseguir caronas utilizando o site. |
| Objetivo do teste | Testar o dropdown “Conheça o Projeto” |
| Passos | 1-	Abrir a página resultado de busca; 2-	Mover o mouse para cima do Dropdown “Conheça o Projeto”; 3-	Clicar em “Como utilizar” |
| Critérios de Êxito | A página vai se redirecionar para Home-Page, apresentando como utilizar a pesquisa de caronas. |

| Caso de testes | CT- 12 – Resultado de busca – Navegabilidade - Perfil |
|---|---|
| Requisitos associados | RF-03 - O site deve oferecer uma funcionalidade de alteração de cadastro de usuário. |
| Objetivo do teste | Verificar se o botão de “perfil” está conectado a tela de perfil |
| Passos | 1-	Abrir a página resultado de busca; 2-	Clicar no botão de perfil. |
| Critérios de Êxito | A página de perfil é aberta.|

| Caso de testes | CT- 13 – CT-04 – Resultado de busca – Navegabilidade - Sair |
|---|---|
| Requisitos associados | RF-03 - O site deve oferecer uma funcionalidade de alteração de cadastro de usuário. |
| Objetivo do teste | Verificar se o botão de “sair” está conectado a tela de Home-page e “deslongando” da conta. |
| Passos | 1-	Abrir a página Resultado de busca; 2-	Clicar no botão de sair.|
| Critérios de Êxito | A página de Home-Page é aberta fora da conta.|

| Caso de testes | CT- 14 – Resultado de busca - Navegabilidade -  Fale Conosco  |
|---|---|
| Requisitos associados | RF-12 - O site deve apresentar uma parte para entrar em contato com os desenvolvedores.  |
| Objetivo do teste | Objetivo do teste	Verificar se o botão “Fale Conosco” leva o usuário até os contatos dos desenvolvedores. |
| Passos | 1-	Abrir página Resultado de busca; 2-	Clicar no botão “Fale Conosco”.|
| Critérios de Êxito | A página vai se mover para baixo até seu final, mostrando os contatos dos desenvolvedores.|

| Caso de testes | CT- 15 – Resultado de busca - Responsividade |
|---|---|
| Requisitos associados | RF-11 -O site deve apresentar telas responsivas para pc é celular. |
| Objetivo do teste | Avaliar a responsividade da resultado de busca em dispositivos móveis. |
| Passos | 1-	Clicar com botão direito do mouse na página; 2-	Clicar em “inspecionar elemento” 3-	Clicar no botão de dispositivo móvel no canto superior direito. 4-	Clicar em dimensões de tela; 5-	Selecionar o dispositivo móvel “Iphone Se”. |
| Critérios de Êxito | A tela se organizará para uma resolução menor e ficará responsiva para dispositivos móveis.|

| Caso de testes | CT- 16 – Resultado de busca – Pesquisa |
|---|---|
| Requisitos associados | RF-06 O site deve oferecer uma área logada com sistema de busca de usuários por localidade. |
| Objetivo do teste | Verificar se o mecanismo de pesquisa está funcionando. |
| Passos | 1-	Visualizar página principal; 2-	Escrever na barra de pesquisa ao centro da tela o nome de um bairro; 3-	Receber dados de motoristas ou passageiros presentes no bairro. |
| Critérios de Êxito | O usuário recebe o contato de motoristas ou passageiros presentes no bairro digitado.|

| Caso de testes | CT- 17 – Resultado de busca – Pesquisa – Teste de Campo |
|---|---|
| Requisitos associados | RF-06 O site deve oferecer uma área logada com sistema de busca de usuários por localidade. |
| Objetivo do teste | Fazer a verificação no campo de pesquisa, a pesquisa só deve receber letras e não números. |
| Passos | 1-	Abrir a tela; 2-	Escrever o nome do bairro com somente letras. |
| Critérios de Êxito | Foi apenas escrito com letras, deve aparecer os usuários do bairro.|

# Tela - Cadastro

| Caso de testes | CT- 18 – Cadastro |
|---|---|
| Requisitos associados |RF-01 - O site deve oferecer uma funcionalidade de cadastro de novo usuário. |
| Objetivo do teste | Testar o campo de preenchimento de nome |
| Passos | 1-	Abrir a página de cadastro; 2-	Preencher os dados de cadastro; 3-	No campo “nome” utilizar números e caracteres especiais; |
| Critérios de Êxito | Deve ser apresentado um alerta informando que o campo nome não aceita números e caracteres especiais.|

| Caso de testes | CT- 19 – Cadastro |
|---|---|
| Requisitos associados |RF-01 - O site deve oferecer uma funcionalidade de cadastro de novo usuário. |
| Objetivo do teste | Testar o campo de preenchimento de e-mail |
| Passos | 1-	Abrir a página de cadastro; 2-	Preencher os dados de cadastro; 3-	No campo “e-mail” utilizar um endereço de e-mail que não seja da universidade PUC; 4-	Clicar no botão cadastrar. |
| Critérios de Êxito | Deve ser apresentado um alerta informando que somente e-mails da universidade PUC serão aceitos.|

| Caso de testes | CT- 20 – Cadastro |
|---|---|
| Requisitos associados |RF-01 - O site deve oferecer uma funcionalidade de cadastro de novo usuário. |
| Objetivo do teste | Testar o campo de preenchimento de senha |
| Passos | 1-	Abrir a página de cadastro; 2-	Preencher os dados de cadastro; 3-	No campo “senha” utilizar uma senha com menos de 8 caracteres; 4-	Clicar no botão cadastrar. |
| Critérios de Êxito | Deve ser apresentado um alerta informando que a senha deve ter ao menos 8 caracteres.|

| Caso de testes | CT- 21 – Cadastro |
|---|---|
| Requisitos associados |RF-01 - O site deve oferecer uma funcionalidade de cadastro de novo usuário. |
| Objetivo do teste | Testar o campo de confirmação de senha |
| Passos | 1-	Abrir a página de cadastro; 2-	Preencher os dados de cadastro; 3-	No campo “confirme senha”, digitar senha diferente da informada no campo anterior; 4-	Clicar no botão cadastrar. |
| Critérios de Êxito | Deve ser apresentado um alerta informando que as senhas não coincidem.|

| Caso de testes | CT- 22 – Cadastro |
|---|---|
| Requisitos associados |RF-01 - O site deve oferecer uma funcionalidade de cadastro de novo usuário. |
| Objetivo do teste | Testar o campo de matrícula |
| Passos | 1-	Abrir a página de cadastro; 2-	Preencher os dados de cadastro; 3-	No campo “matrícula” digitar letras e caracteres especiais; 4-	Clicar no botão cadastrar. |
| Critérios de Êxito | Deve ser apresentado um alerta informando que a matrícula deve conter apenas números.|

| Caso de testes | CT- 23 – Cadastro |
|---|---|
| Requisitos associados |RF-01 - O site deve oferecer uma funcionalidade de cadastro de novo usuário. |
| Objetivo do teste | Testar o campo de telefone |
| Passos | 1-	Abrir a página de cadastro; 2-	Preencher os dados de cadastro; 3-	No campo “telefone” digitar letras e caracteres especiais; 4-	Clicar no botão cadastrar. |
| Critérios de Êxito | Deve ser apresentado um alerta informando que o telefone deve conter apenas números.|

| Caso de testes | CT- 24 – Cadastro |
|---|---|
| Requisitos associados |RF-01 - O site deve oferecer uma funcionalidade de cadastro de novo usuário. |
| Objetivo do teste | Testar o campo de bairro |
| Passos | 1-	Abrir a página de cadastro; 2-	Preencher os dados de cadastro; 3-	No campo “bairro” digitar números; 4-	Clicar no botão cadastrar. |
| Critérios de Êxito | Deve ser apresentado um alerta informando que o bairro deve conter apenas letras.|

| Caso de testes | CT- 25 – Cadastro |
|---|---|
| Requisitos associados |RF-01 - O site deve oferecer uma funcionalidade de cadastro de novo usuário. |
| Objetivo do teste | Testar cadastro com campos vazios |
| Passos | 1-	Abrir a página de cadastro; 2-	Preencher os dados de cadastro; 3-	Não informar todos os campos; 4-	Clicar no botão cadastrar.|
| Critérios de Êxito | Deve ser apresentado um alerta impedindo a conclusão do cadastro sem todas as informações preenchidas.|

# Tela - Login

| Caso de testes | CT- 26 – Área Logada – Navegabilidade – Login |
|---|---|
| Requisitos associados |RF-06 – O site deve oferecer uma área logada com sistema de busca de usuários por localidade. |
| Objetivo do teste | Verificar se o botão de “Login” está conectado a tela de “Login” |
| Passos | 1-	Abrir a página de “Home Page”; 2-	Clicar no botão de “Login”. |
| Critérios de Êxito | A página de “Login” é aberta.|

| Caso de testes | CT- 27 – Área Logada – Navegabilidade – Botão Entrar |
|---|---|
| Requisitos associados |RF-06 – O site deve oferecer uma área logada com sistema de busca de usuários por localidade. |
| Objetivo do teste | Verificar se ao digitar o e-mail e senha a página será direcionada para área logada. |
| Passos | 1-	Na página de “Login” digitar e-mail e senha cadastrada; 2-	Clicar no botão de entrar. |
| Critérios de Êxito | O usuário será direcionado à área logada.|

| Caso de testes | CT- 28 – Área Logada - Navegabilidade – Link “Cadastre-se”  |
|---|---|
| Requisitos associados |RF-06 – O site deve oferecer uma área logada com sistema de busca de usuários por localidade. |
| Objetivo do teste | Verificar se será direcionado à página de cadastro. |
| Passos | 1-	Abrir página de “Login”; 2-	Clicar no texto “Cadastre-se”|
| Critérios de Êxito | O usuário será direcionado à página de cadastro. |

| Caso de testes | CT- 29 – Área Logada - Navegabilidade – Botão Voltar |
|---|---|
| Requisitos associados |RF-06 – O site deve oferecer uma área logada com sistema de busca de usuários por localidade. |
| Objetivo do teste | Verificar se está funcionando o botão de voltar à “Home Page”. |
| Passos | 1-	Abrir página de “Login”; 2-	Clicar no botão “Voltar” |
| Critérios de Êxito | O usuário será direcionado à página de “Home Page”. |

| Caso de testes | CT- 30 – “Login” – Responsividade. |
|---|---|
| Requisitos associados |RF-11 – O site deve apresentar telas responsivas para diversos tamanhos de telas. |
| Objetivo do teste | Avaliar a responsividade do resultado de busca em telas com tamanhos diferentes. |
| Passos |1-	Clicar com botão direito do mouse na página; 2-	Clicar em “inspecionar elemento” ou F11; 3-	Selecione o formato responsivo. |
| Critérios de Êxito | A tela se organizará para uma resolução menor e ficará responsiva para dispositivos com diferentes tamanhos de tela.|

| Caso de testes | CT- 31 – E-mail – Teste de Campos de Formulários |
|---|---|
| Requisitos associados |RF-06 O site deve oferecer uma área logada com sistema de busca de usuários por localidade. |
| Objetivo do teste | Verificar o campo de e-mail, que deve ser da PUC Minas. |
| Passos | 1-	Abrir página de “Login”; 2-	Digitar o e-mail cadastrado da PUC Minas; 3-	Clicar no botão “Entrar”. |
| Critérios de Êxito | O e-mail do usuário será validado e o mesmo poderá digitar a senha cadastrada.|

| Caso de testes | CT- 32 – Senha  - Teste de Campo de Formulário |
|---|---|
| Requisitos associados |RF-06 O site deve oferecer uma área logada com sistema de busca de usuários por localidade. |
| Objetivo do teste | Objetivo do teste	Verificar o campo de e-mail, que deve ser da PUC Minas. |
| Passos | 1-	Abrir página de “Login”; 2-	Digitar a senha conforme cadastrado; 3-	Clicar no botão “Entrar”. |
| Critérios de Êxito | O usuário será direcionado para a página de perfil . |

# Tela - Perfil

| Caso de testes | CT- 33 – Perfil  – Atualização da foto de perfil |
|---|---|
| Requisitos associados |RF-03 - O site deve oferecer uma funcionalidade de alteração de cadastro de usuário.|
| Objetivo do teste | Verificar se a ferramenta de alteração funciona |
| Passos | 1-	Abrir a página de perfil; 2-	Clicar no ícone de alteração localizado ao lado direito da imagem; 3-	Procurar e selecionar a imagem no próprio computador; 4-	Clicar em salvar. 5-	Clicar em atualizar. |
| Critérios de Êxito | A página ao ser atualizada deve apresentar a nova foto selecionada.|

| Caso de testes | CT- 34 – Perfil  – Atualização da senha |
|---|---|
| Requisitos associados |RF-03 - O site deve oferecer uma funcionalidade de alteração de cadastro de usuário.|
| Objetivo do teste | Verificar se a ferramenta de alteração funciona. |
| Passos | 1.	Abrir a página de perfil; 2.	Escrever a nova senha escolhida no local “atualize sua senha” 3.	Clicar no ícone “olho” localizado ao lado direito para confirmação; 4.	Clicar em atualizar. |
| Critérios de Êxito | A senha deverá ser a nova senha de login do usuário. |

| Caso de testes | CT- 35 – Perfil  – Atualização do número telefônico  |
|---|---|
| Requisitos associados |RF-03 - O site deve oferecer uma funcionalidade de alteração de cadastro de usuário.|
| Objetivo do teste | Verificar se a ferramenta de alteração funciona. |
| Passos | 1.	Abrir a página de perfil; 2.	Escrever o novo número no campo “atualize seu número”. 3.	Clicar em atualizar. |
| Critérios de Êxito | O número deverá ser atualizado em todas as páginas do site.|

| Caso de testes | CT- 36 – Perfil  – Atualização do endereço do usuário |
|---|---|
| Requisitos associados |RF-03 - O site deve oferecer uma funcionalidade de alteração de cadastro de usuário.|
| Objetivo do teste | Verificar se a ferramenta de alteração funciona. |
| Passos | 1.	Abrir a página de perfil; 2.	Escrever o novo endereço no campo “atualize seu endereço”. 3.	Clicar em atualizar. |
| Critérios de Êxito | O endereço deverá ser atualizado em todas as páginas do site.|

| Caso de testes | CT- 37 – Perfil  – Desativação de conta |
|---|---|
| Requisitos associados |RF-07 - O site deve oferecer a funcionalidade de inativar cadastro.|
| Objetivo do teste | Verificar se a ferramenta de desativar é funcional. |
| Passos | 1.	Abrir a página de perfil; 2.	Clicar em no box “desativar”. 3.	Aceitar o termo de desativação que irá aparecer na tela. |
| Critérios de Êxito | Todas as informações de cadastro e conta do usuário deverão ser desativadas.|

## Ferramentas de Testes (Opcional)

Comente sobre as ferramentas de testes utilizadas.
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
