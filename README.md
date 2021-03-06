# Projeto MyReads UDACITY

Este projeto foi desenvolvido pelo Developer Lucas Zunder para aprovação no módulo 1 do Curso de React Developer UDACITY.
Consiste basicamete em uma estante de livros em que o usuário consegue realizar buscas em uma biblioteca com os seguintes termos : 

```bash
'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'
```

Permitindo o usuário adicionar e/ou mover livros entre três estantes : Currently reading, read e want to read.
Exibindo avisos de acordo com as respostas.

## Como instalar e executar

Em um terminal com Git instalado, basta executar os seguintes comandos: 

```bash
git clone https://github.com/devzunder/myreads.git
cd myreads
npm install
npm start
```

O projeto fica disponível por padrão em http://localhost:3000/

## Estrutura do projeto

```bash
├── README.md - This file.
├── package.json 
├── public
│   ├── favicon.ico 
│   └── index.html 
└── src
    ├── icons
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── img 
    │   └── none.png
    ├── modules
    │   ├── book.js
    │   ├── bookShelf.js
    │   ├── listBooks.js
    │   ├── search.js
    │   └── title.js
    ├── utils
    │   └── BooksAPI.js
    ├── App.css 
    ├── App.js 
    ├── App.test.js 
    ├── index.css 
    └── index.js 
```

## Fontes

Para este projeto contei muito com a ajuda desse [artigo](https://medium.com/@programadriano/javascript-conhecendo-map-filter-e-reduce-ce072d8f0ec5) sensacional relacionado a map, filter e reduce.

