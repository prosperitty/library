const deck = document.querySelector('.deck');
const card = document.querySelectorAll('.card');
const bookTitle = document.querySelector('.title-input');
const bookAuthor = document.querySelector('.author-input');
const bookPages = document.querySelector('.page-input');
const bookRead = document.querySelectorAll('.read-input');
const submitButton = document.querySelector('.submit');
let myLibrary = [];

class Book {
    constructor(title,author,pages,isRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }

    addToLibrary() {
        myLibrary.push(this);
    }

    createNewCard() {
        const newDiv = document.createElement('div');
        newDiv.className = 'card';
        newDiv.setAttribute('data-index', myLibrary.indexOf(this))

        const newTitle = document.createElement('h3');
        newTitle.className = 'title';
        newTitle.textContent = this.title;

        const newAuthor = document.createElement('p');
        newAuthor.className = 'author';
        newAuthor.textContent = `by: ${this.author}`;

        const newPageCount = document.createElement('p');
        newPageCount.className = 'pageCount';
        newPageCount.textContent = `page count: ${this.pages}`;
    
        const newForm = document.createElement('form');
    
        const label = document.createElement('span');
        label.textContent = 'Read Status:';
    
        const checkBox = document.createElement("input");
        checkBox.setAttribute('type','checkbox');
        checkBox.setAttribute('name','read');
        if(bookRead[0].checked === true) {
            checkBox.checked = true;
        } 

        newForm.appendChild(label);
        newForm.appendChild(checkBox);

        const newDeleteButton = document.createElement('button');
        newDeleteButton.textContent = 'delete';
        newDeleteButton.className = 'delete-button';
    
        deck.appendChild(newDiv);
        newDiv.appendChild(newTitle);
        newDiv.appendChild(newAuthor);
        newDiv.appendChild(newPageCount);
        newDiv.appendChild(newForm);
        newDiv.appendChild(newDeleteButton)
    }
}

function resetValues() {
    bookTitle.value = '';
    bookAuthor.value = '';
    bookPages.value = '';
    bookRead[1].checked = true;
}

function updateIndex() {
    for(let i = 0; i < myLibrary.length; i++) {
        deck.children[i].dataset.index = i;
    }
}

submitButton.addEventListener('click', () => {
    let book = new Book(bookTitle.value,bookAuthor.value,bookPages.value,bookRead[0].checked);

    book.addToLibrary();
    storeData();
    book.createNewCard();
    updateIndex();
    resetValues();

    console.log(myLibrary);
})

deck.addEventListener('click', (e) => {
    let index = e.target.parentNode.parentNode.dataset.index;

    if (e.target.className === 'delete-button') {
        e.target.parentNode.remove();
        myLibrary.splice(index, 1) 
        storeData();  
        updateIndex();
        console.log(myLibrary);
    }

    if (e.target.name === 'read' && e.target.checked === true){
        myLibrary[index].isRead = true;
        storeData();
    } else if(e.target.name === 'read' && e.target.checked === false){
        myLibrary[index].isRead = false;
        storeData();
    }  
})

function storeData() {
    localStorage.setItem(`myLibrary`, JSON.stringify(myLibrary));
}

function getData() {
    let storedLibrary = localStorage.getItem('myLibrary');
    let parsedLibrary = JSON.parse(storedLibrary);
    myLibrary = parsedLibrary;

    for (let i = 0; i < myLibrary.length; i++) {
        let books = myLibrary[i];
        let newBook = new Book(books.title,books.author,books.pages,books.isRead);

        newBook.createNewCard();
        if(books.isRead === true) {  
            deck.children[i].children[3].children[1].checked = true;
            console.log(books);
        }
        deck.children[i].dataset.index = i;
    }    
}

if(!localStorage.getItem('myLibrary')) {
    storeData()
  } else {
    getData();
  }
