<img src="./public/LogoGeral.png" alt="CodeKeeper" width="100%">

# CodeKeeper - Cifra de César 

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
> *Espaço reservado para a documentação da API e Banco de Dados.*

### Tecnologias:
* [Ex: Node.js / Python / Java]
* [Ex: Express / Flask / Spring]
* **Autenticação:** JWT (JSON Web Token)
* **Banco de Dados:** [Ex: PostgreSQL / SQLite / MongoDB]

### Endpoints da API:
- `POST /auth/register` - Criação de novo usuário.
- `POST /auth/login` - Autenticação e geração de token.
- `POST /encrypt` - Recebe texto e passo, retorna cifra e hash (salva no banco).
- `POST /decrypt` - Recebe cifra e hash, valida o uso único e retorna texto original.

---

## Instalação e Execução
### Pré-requisitos:
- Node.js instalado
- Gerenciador de pacotes (NPM ou Yarn)

### Passo a Passo:

1. **Clonar o Repositório**
   ```bash
   git clone [https://github.com/biancabenatti/CodeKeeper]
   ```

2. **Configurar o Frontend**

    ```bash
    cd frontend
    npm install
    npm run dev
    ```

3. **Configurar o Backend**
COLOCAR DEPOIS 

### Critérios Técnicos Atendidos
[x] JWT: Garantia de Autenticidade e Integridade.

[x] Cifra de César: Implementação de lógica de deslocamento alfabético e numérico.

[x] Hash Único: Sistema que invalida a chave após a primeira descriptografia.

[x] Persistência: Armazenamento de usuários e chaves em Banco de Dados.

[x] Responsividade: Layout adaptável para diferentes resoluções.

### Autores
Bianca Pichirilo Vergueiro Benatti 
Nicolas ...