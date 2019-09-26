/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

const page = document.querySelector(".page");
const itemsEachPage = 10;
const ul = document.querySelector('.student-list');
const studentList = ul.querySelectorAll('li.student-item');

console.log(studentList)





const showPage = (list, page) => {
const startIndex =(page * itemsEachPage ) - itemsEachPage;
const endIndex = page * itemsEachPage;
for (let i = 0; i < list.length; i++) {
   if (i >= startIndex && i <= endIndex) {
     list[i].style.display = "block";
   } else {
     list[i].style.display = "none";
   }
 }
};







   
const appendPageLinks = (list) => { 
const pagesNeeded = Math.ceil(list.length / itemsEachPage);
const div = document.createElement('div');
div.className = 'page';
page.appendChild(div);
const ul = document.createElement('ul');
const li = ul.children;
div.appendChild(ul);

for (let i = 0; i <= pagesNeeded; i ++) {
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

ul.addEventListener('click', (e) => {
   for (let i = 0; i < ul.children.length; i++){
      const a = li[i].firstElementChild;
      if (a.className === 'active'){
       a.classList.remove('active');
      }
   }
   
   showPage(list, e.target.textContent);
   e.target.className = 'active';

});
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
      makeSearch(search, studentList);
   });
   search.addEventListener('keyup', () => {
      makeSearch(search, studentList);
   });
 };
 function searchingFor(search,students) { 
   const separate = search.value.toLowerCase();
   const arr = []; 
   noResultDiv.textContent = '';
   if (search.value){  
      return (studentList);
   }
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


const pageRedo = (arr) => {
   const pageLinks = document.querySelector('.pagination');
   divPage.removeChild(pageLinks);
   showPage(arr,1);
   appendPageLinks(arr);
} 



}



showPage(studentList, 1);
appendPageLinks(studentList);
includeTheSearchBar();







