const books = [
    {
      title: 'A Hero of our time',
      author: 'Mikhail Lermontov',
      alreadyRead: false,
      imgTitle:'1.jpg'
    },
    {
      title: '1984',
      author: 'George Orwell',
      alreadyRead: true,
      imgTitle:'2.jpg'
    },
    {
      title: 'Les Miserables',
      author: 'Victor Hugo',
      alreadyRead: true,
      imgTitle:'3.jpg'
    }
  ];

  let h1 = document.createElement('h1');
  h1.innerText = 'books list';
  document.body.appendChild(h1);
                h1.style.color = 'blue'
                h1.style.textAlign = 'center';

  let ul = document.createElement('ul');
                 ul.style.display= 'flex';


 
  
  for(book of books){
    let li = document.createElement('li');
                li.style.width='30%';
                li.style.textAlign= 'center';
                li.style.margin = '0 auto';
                li.style.listStyleType= 'none';
    
     let p = document.createElement('p');
                 p.style.textAlign = 'center';
     p.innerText = `${book.title} - ${book.author}`;
     console.log(p) 
     let img = document.createElement('img');
                  img.style.width='300px';
     img.src=book.imgTitle;
     console.log(img);
     if(book.alreadyRead===true){
      li.style.backgroundColor = 'green';
     }else{
      li.style.backgroundColor = 'red';
     }

     ul.appendChild(li);
     li.appendChild(p);
     li.appendChild(img);
     document.body.appendChild(ul);
  };

  
  