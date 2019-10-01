/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

//Created Global variables 
const page = document.querySelector(".page");
const itemsEachPage = 10;
const ul = document.querySelector('.student-list');
const studentList = ul.querySelectorAll('li.student-item');

//logs the student list into the console
console.log(studentList)




//created function to display all numbers of given list items on each page
//for loop takes user through each set of ten students as each page is clicked
const showPage = (list, page) => {
   const startIndex =(page * itemsEachPage ) - itemsEachPage;
   const endIndex = page * itemsEachPage;
   for (let i = 0; i < list.length; i++) {
   if (i >= startIndex && i <= endIndex) {
   list[i].style.display = "block";
   }else {
   list[i].style.display = "none";
   }
 }
};





   //created function to show list of all students divided by the correct number of pages to determine how many students go on each page and allows the buttons on the page to respond when clicked
const appendPageLinks = (list) => { 
   const pagesNeeded = Math.ceil(list.length / itemsEachPage);
   const div = document.createElement('div'); //The pagination link Dom elements
   div.className = "pagination";
   page.appendChild(div);
   const ul = document.createElement('ul');
   const li = ul.children;
   div.appendChild(ul);

   //loop adds in li and a tags for page numbers specific creation
   for (let i = 0; i < pagesNeeded; i ++) {
   const li = document.createElement("li");
   ul.appendChild(li);
   const a = document.createElement("a");
   li.appendChild(a); 
   if (i==0) {
      a.className = 'active';
   }
   a.href = '#';
   a.textContent = i + 1;
}
//listens out for when a user clicks on the pages
ul.addEventListener('click', e => {
   if (e.target.tagName === 'A') {
     for (let i = 0; i < ul.children.length; i++) {
       const a = li[i].firstElementChild;
       if (a.className === 'active') {
         a.classList.remove('active');
       }
     }
 
     showPage(list, e.target.textContent);
     e.target.className = 'active';
   }
 });
  
};

//function that creates the searchbar so that the user may look up specific student acoount names
   function searchingFor(search,students) { 
   const separate = search.value.toLowerCase();
   const arr = [];  
   noResultDiv.textContent = '';
   if (search.value){  
   return (studentList);
   } 
//names when inputted and searched are compared during process.
   for (let i = 0; i < students.length; i++) {
         const listItemName = students[i].querySelector('h3').textContent;
         students[i].style.display = 'none';
         if (listItemName.toLowerCase().includes(filter)) {
         students[i].style.display = '';
         arr.push(students[i]);
      }  
   } 
   if(arr.length === 0){
         noResultDiv.textContent = 'Data not found';
     
   };
  
  
   pageRedo(arr);

};

//each searched result ends up with a rearranged pagination link
const pageRedo = (arr) => {
      const pageLinks = document.querySelector('.pagination');
      divPage.removeChild(pageLinks);
      showPage(arr,1);
      appendPageLinks(arr);
} 



;

//creates the actual use of the searchbar so the user may look up specific student account names
var includeTheSearchBar
function includeTheSearchBar  () {
      const pageHeader = document.querySelector('.page-header');
      const searchHeaderDiv = document.createElement('div');
      const search = document.createElement('input');
      const button = document.createElement('button');

   searchHeaderDiv.className = 'student-search';
   search.placeholder = 'Search for the students';
   button.textContent = 'Search';

   pageHeader.appendChild(searchHeaderDiv);
   searchHeaderDiv.appendChild(search);
   searchHeaderDiv.appendChild(button);
   button.addEventListener ('click' , (event) => {
   event.preventDefault();
   searchingFor(search, studentList);
});
   search.addEventListener('keyup', () => {
   searchingFor(search, studentList);
});
};

//forcefully calls and states the specific functions so that when ran the program can find references outside the scope of the main function
showPage(studentList, 1);
appendPageLinks(studentList);
includeTheSearchBar();







