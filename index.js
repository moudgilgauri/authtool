const form = document.querySelector('.form-todo');
const Todoinput = document.querySelector('.form-todo input[type="text"]');
const List = document.querySelector('.task-list');



form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const textValue =  Todoinput.value;
    Todoinput.value ="";
    const newLi = document.createElement("li");

    //creating input field for tasks
    const input_el = document.createElement("input");
    input_el.classList.add("text");
    input_el.type = "text";
    input_el.value = textValue;
    input_el.setAttribute("readonly","readonly");
    newLi.appendChild(input_el);

    //creating container div for actions
    const list_actions = document.createElement("div");
    list_actions.classList.add("list_actions")

    //indent outdent buttons
    const list_indent = document.createElement("div");
    list_indent.innerHTML= `<i class="fa-solid fa-arrow-left"></i>
     <i class="fa-solid fa-arrow-right"></i>`
    list_indent.classList.add("todo-buttons");


    //edit button
    const list_edit = document.createElement("button");
    list_edit.innerHTML=`Edit`
    list_edit.classList.add("todo-buttons_edit");
    
    //remove button
    const list_remove = document.createElement("button");
    list_remove.innerHTML=`<i class="fa-solid fa-trash-can "></i>`
    list_remove.classList.add("todo-buttons_remove");

    list_actions.appendChild(list_indent);
    list_actions.appendChild(list_edit);
    list_actions.appendChild(list_remove);
    

    newLi.appendChild(list_actions)

    List.append(newLi);
    
})


List.addEventListener('click',(e)=>{  
    
      //remove functionality
     if(e.target.classList.contains('todo-buttons_remove')){
      const targetNode = e.target.parentNode.parentNode;
      targetNode.remove();
    }
   
     //edit functionality
     if(e.target.classList.contains('todo-buttons_edit')){
      const targetNode = e.target;
      targetNode.onclick = function(){
        const liSpan = e.target.parentNode.previousElementSibling;
        if(e.target.innerText.toLowerCase() == "edit"){
          liSpan.style.border = "transparent"
          liSpan.removeAttribute("readonly")
         
          liSpan.focus();
          e.target.innerText="Save"
        }else{
          liSpan.setAttribute("readonly","readonly");
          e.target.innerText = "Edit"
        }
      };
    }
   
    //move functionality
    if(e.target.classList.contains('fa-arrow-left')){
        const liSpan = e.target.parentNode.parentNode.previousElementSibling;
        liSpan.style.marginLeft = "0px";
        liSpan.style.color = "rgb(0, 89, 255)";  
    }
    if(e.target.classList.contains('fa-arrow-right')){
        const liSpan = e.target.parentNode.parentNode.previousElementSibling;
        liSpan.style.marginLeft = "20px";
        liSpan.style.color = "black";  
    }
    
 });

 //drag and drop functionality
 const dragArea = document.querySelector('.task-list');
 new Sortable(dragArea,{
   animation : 350
 })