const deck = document.querySelector('.deck');
let myLibrary = [];

class Book {
    constructor(author,title,pages,isRead) {
        this.author = author;
        this.title = title;
        this.pages = pages;
        this.isRead = isRead;
        this.addBookToLibrary = function () {
            myLibrary.push(this);
        }
        this.newCard = () => {
            const newDiv = document.createElement('div');
            newDiv.className = 'card';

            const newTitle = document.createElement('h2');
            newTitle.className = 'title';
            newTitle.textContent = title;

            const newAuthor = document.createElement('p');
            newAuthor.className = 'author';
            newAuthor.textContent = author;

            const newPageCount = document.createElement('p');
            newPageCount.className = 'pageCount';
            newPageCount.textContent = pages;
        
            const f = document.createElement('form');
        
            const l = document.createElement('label');
            l.textContent = 'read';
        
            const i = document.createElement("input");
            i.setAttribute('type','checkbox');
            i.setAttribute('name','read');
        
            f.appendChild(l);
            f.appendChild(i);
        
            deck.appendChild(newDiv);
            newDiv.appendChild(newTitle);
            newDiv.appendChild(newAuthor);
            newDiv.appendChild(newPageCount);
            newDiv.appendChild(f);
        }
    }
}

function displayNewCard() {
    for (const i of myLibrary) {
        i.newCard();
    }
}