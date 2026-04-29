
<p align="center">
  <img src="https://fast-purple-qnznqglelu.edgeone.app/LogoGeral.png" alt="CodeKeeper Logo" width="400">
</p>

## Sobre o Projeto
Este projeto foi desenvolvido como parte do Trabalho Prático da disciplina, visando implementar a técnica de criptografia de César com persistência em banco de dados e uma interface de usuário moderna.

O sistema permite que agentes autorizados codifiquem mensagens com um "passo" específico e gerem hashes únicos para a posterior descriptografia, garantindo a integridade e a confidencialidade das informações.

---

## Frontend
O frontend foi construído utilizando **React.js** com foco em usabilidade e estética "Cyber/Tech".

### Funcionalidades Implementadas:
- **Home:** Landing page com animações suaves e navegação horizontal.
- **Login/Cadastro:** Sistema de autenticação visual com suporte a JWT.
- **Dashboard Privado:** Área restrita acessível apenas após o login, separada do fluxo público.
- **Módulo de Criptografia:** Interface de coluna dupla para entrada de texto e geração de Hash privado.
- **Módulo de Descriptografia:** Validação de Hash de uso único e revelação da mensagem original.

### Tecnologias Utilizadas:
- React.js
- CSS3 (Variáveis, Flexbox, Grid e Glassmorphism)
---

## Backend 
O backend foi desenvolvido com foco em segurança, autenticação e persistência de dados, sendo responsável por toda a lógica de criptografia, descriptografia e controle de usuários.

### Tecnologias:
- Node.js
- Express.js
- JWT (JSON Web Token) para autenticação
- Banco de Dados: MongoDB (Mongoose)

### Endpoints da API:
- `POST /auth/register` - Criação de novo usuário.
- `POST /auth/login` - Autenticação e geração de token.
- `POST /cipher/encrypt` - Recebe texto e passo, retorna cifra e hash (salva no banco).
- `POST /cipher/decrypt` - Recebe cifra e hash, valida o uso único e retorna texto original.

---

## Instalação e Execução
### Pré-requisitos:
- Node.js instalado
- Gerenciador de pacotes (NPM ou Yarn)

### Passo a Passo:

**1. Clonar o Repositório**
   ```bash
   git clone https://github.com/biancabenatti/CodeKeeper
   ```

**2. Configuração do Frontend**

    ```bash
    cd frontend
    npm install
    npm run dev
    ```
O frontend ficará disponível em:

http://localhost:5173

**3. Configuração do Backend**

  ```bash
    cd backend
    npm install
    npm run dev
   ```

O backend ficará disponível em:

http://localhost:5000

## Testes (Postman)

Este projeto inclui uma collection do Postman para facilitar os testes das rotas da API.

Você pode acessá-la diretamente pelo link abaixo:

👉 https://go.postman.co/collection/53857506-1ac4a0c3-19be-4774-9992-48185a993144

---

### Uso do Environment

Este projeto utiliza **Postman Environment** para armazenar variáveis dinâmicas, como:

- `token` (JWT de autenticação)
- `hash` (gerado na criptografia)
- `encrypted` (texto criptografado)

---

### Importante

Para que as requisições funcionem corretamente:

1. Abra o link da collection no Postman
2. Importe também o **Environment** do projeto (caso não esteja automático)
3. Selecione o Environment no canto superior direito do Postman
4. Faça login primeiro para que o `token` seja gerado automaticamente
5. As demais rotas utilizarão automaticamente as variáveis (`{{token}}`, etc.)

---

### 🔐 Observação

As rotas protegidas exigem autenticação via JWT.  
Por isso, o login deve ser realizado antes de testar os endpoints de criptografia e descriptografia.

### Critérios Técnicos Atendidos

[x] JWT: Garantia de Autenticidade e Integridade.

[x] Cifra de César: Implementação de lógica de deslocamento alfabético e numérico.

[x] Hash Único: Sistema que invalida a chave após a primeira descriptografia.

[x] Persistência: Armazenamento de usuários e chaves em Banco de Dados.

[x] Responsividade: Layout adaptável para diferentes resoluções.

### Autores
Bianca Pichirilo Vergueiro Benatti 
Nicolas ...
