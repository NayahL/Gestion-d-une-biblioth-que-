let library = []

function addBook(books) {
    library.push(books);
}

function getAvailableBooks() { //*permet de récupérer les livres disponibles dans la bibliothèque//
    /*for (let i = 0; i < library.length; i++) { 
             const book = library[i]
         if (book.borrowed === false) {
             console.log(book)
         }
     }*/

    library.forEach(book => { //*permet de parcourir le tableau library et d'afficher les livres disponibles//
        if (book.borrowed === false) {
            console.log(book)
        }
    })
}

function searchByTitle(title) //*permet de rechercher un livre pas son titre/
{
 for (let i = 0; i < library.length; i++) { //*parcourt le tableau library et compare le titre du livre avec le titre recherché//
        const book = library[i];
        if (book.title.toLowerCase().trim() === title.toLowerCase().trim()) {
            return book;
        }
    } //toLowerCase() permet de ne pas tenir compte de la casse//
}

function borrowedBook(title) 
{

//*si le livre existe, on vérifie s'il est déjà emprunté ou non
       const book = searchByTitle(title);
        if (book.borrowed === false) { 
            book.borrowed = true; //*si le livre n'est pas emprunté, on le marque comme emprunté//
            console.log(`Le livre "${title}" n'a pas été emprunté.`);

        } else if (book.borrowed === true) {
            console.log(`Le livre "${title}" a été emprunté.`);

        }else{ 
            
            console.log(`Le livre "${title}" n'existe pas dans la bibliothèque.`);
        }
    }


    function returnBook(title) 
{

       const book = searchByTitle(title);
        if (book && book.borrowed === true) { // *si le livre existe et qu'il est emprunté, on le marque comme non emprunté*/
            book.borrowed = false; 
            console.log(`Le livre "${title}" a bien été rendu.`);

        } else if (book) {
            console.log(`Le livre "${title}" n'a pas été rendu .`);

        }else{ 
            
            console.log(`Le livre "${title}" n'existe pas dans la bibliothèque.`);
        }
    }





addBook({
    title: "The Hobbit",
    author: "JRR Tolkien",
    publicationyear: 1937,
    borrowed: false
}) //ajoute un livre à la bibliothèque//

addBook({
    title: "Neuromancien",
    author: "William Gibson",
    publicationyear: 1984,
    borrowed: true
})

addBook({
    title: "Les Furtifs",
    author: "Alain Damasio",
    publicationyear: 2019,
    borrowed: false
})

console.log("Nos livres disponibles :")//permet d'afficher les livres disponibles//
getAvailableBooks()

console.log('Le livre que vous recherchez est :')
console.log(searchByTitle("Les Furtifs")) //permet de rechercher un livre par son titre//

console.table(library) //permet d'afficher la bibliothèque sous forme de tableau//

borrowedBook('Les Furtifs')//permet d'emprunter un livre par son titre//

console.table(library);

returnBook('Les Furtifs')//permet de rendre un livre par son titre//

console.table(library);
