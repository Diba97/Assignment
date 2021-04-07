let books=[{
    "Id": "01",
    "Name":"1984",
    "Author":"George Orwell"
    },
{
    "Id": "02",
    "Name":"Eleven Minuetes",
    "Author":"Paulo Coelho"
    
},
{
    "Id": "03",
    "Name":"Sapiens",
    "Author":"Yuval Noah Harari"
},
{
    "Id": "04",
    "Name":"Metamorphosis",
    "Author":"Franz Kafka"
},
{
    "Id": "05",
    "Name":"Beyond Good And Evil",
    "Author":"Fredrick Niechze"
},
{
    "Id": "06",
    "Name":"The castle",
    "Author":"Franz Kafka"
},
{
    "Id": "07",
    "Name":"Alchemist",
    "Author":"Paulo Coelho"
},
{
    "Id": "08",
    "Name":"Republic",
    "Author":"Plato"
},
{
    "Id": "09",
    "Name":"Poetics",
    "Author":"Aristotle"
},
{
    "Id": "10",
    "Name":"Being and Nothingness",
    "Author":"Jean Paul Sartre"
}
]

var html= "<table>";
for(let i=0;i<books.length;i++)
{
    html+="<tr>";
    html+="<td>"+books[i].Id+"</td>";
    html+="<td>"+books[i].Name+"</td>";
    html+="<td>"+books[i].Author+"</td>";
    
    html+="</tr>";

}
html+="</table>";
console.log(html);
document.getElementById("box").innerHTML = html;

function SearchBook(){
    let bookname=prompt("Enter book name:");
    
   let showbook=[];
    //console.log(bookname);
    if(bookname!=null)
    {
        for(let i=0;i<books.length;i++)
        {
            if(books[i].Name===bookname)
            showbook.push(books[i]);
        }
        // showbook=books.filter(book=>book.Author===bookname);
        console.log(showbook);
    }

}

function SearchAuthor(){
    let Authorname=prompt("Enter Author name:");

    let Aythorbook=[];
    if(Authorname!=null)
    {
        for(let i=0;i<books.length;i++)
        {
            if(books[i].Author===Authorname)
            Aythorbook.push(books[i]);
        }
         
        console.log(Aythorbook);

}
}
