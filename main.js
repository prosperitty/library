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
        this.addToLibrary = function () {
            myLibrary.push(this);
        }
        this.createNewCard = () => {
            const newDiv = document.createElement('div');
            newDiv.className = 'card';

            const newTitle = document.createElement('h2');
            newTitle.className = 'title';
            newTitle.textContent = title;

            const newAuthor = document.createElement('p');
            newAuthor.className = 'author';
            newAuthor.textContent = `By: ${author}`;

            const newPageCount = document.createElement('p');
            newPageCount.className = 'pageCount';
            newPageCount.textContent = `Number of Pages: ${pages}`;
        
            const f = document.createElement('form');
        
            const l = document.createElement('span');
            l.textContent = 'read status:';
        
            const i = document.createElement("input");
            i.setAttribute('type','checkbox');
            i.setAttribute('name','read');
            if(bookRead[0].checked === true) {
                i.checked = true;
            }
        
            f.appendChild(l);
            f.appendChild(i);

            const deleteCardText = document.createElement('button');
            deleteCardText.textContent = 'delete';
            deleteCardText.className = 'delete-button';
        
            deck.appendChild(newDiv);
            newDiv.appendChild(newTitle);
            newDiv.appendChild(newAuthor);
            newDiv.appendChild(newPageCount);
            newDiv.appendChild(f);
            newDiv.appendChild(deleteCardText)
        }
    }
}

submitButton.addEventListener('click', () => {
    let book = new Book(bookTitle.value,bookAuthor.value,bookPages.value,bookRead[0].checked);

    book.addToLibrary();
    book.createNewCard();

    bookTitle.value = '';
    bookAuthor.value = '';
    bookPages.value = '';
    bookRead[1].checked = true;

    console.log(myLibrary);
    console.log(card);
})