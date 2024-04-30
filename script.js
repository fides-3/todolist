//IEFE
(()=> {
    //state variables
    let toDoListArray=[];
    //ui varaibles
    const form=document.querySelector(".form");
    const imput=form.querySelector(".form_input");
    const ul=form.querySelector(".form_input");
     //event listeners
     form.addEventListener("submit",(e)=> {
        //prevent default behaviour-page reload
        e.preventDefault();
        //give item a unique Id
        let itemId=String(Date.now());
        //get/assign input value
        let toDoItem= input.value;
        //pass ID and items into functions
        addItemToDOM(itemId,toDoItem);
        addItemToArray(itemId,toDoItem);
        //clear the input box.(This is the default behvaiour but we got rid of that)
        input.value="";     
});
ul.addEventListener("click",(e)=>{
    let id=e.target.getAttribute("data-id");
    if(!id) return;// user clicked in something else
    //pass id through 2 funtions
    removeItemFromDOM(id);
    removeItemFromArray(id);
});
//fonctions
function addItemToDOM(itemId,toDoItem){
//create an li
const li=document.createElement("li");
li.setAttribute("data-id",itemId);
//add toDoItem text to li
li.innetText=toDoItem;
//add li to the DOM
ul.appendChild(li);
}
function addItemToArray(itemId,toDoItem){
    //add itrm to array as an objectwith an ID so we can find and delete it later
    toDoListArray.push({itemId,toDoItem});
    console.log(toDoListArray);
}
function removeItemFromDOM(id){
    //get the list item by data Id
    var li=document.querySelector('data-id=' +id + '"]');
    //remove list item
    ul.removeChild(li);

}
function removeItemFromArray(id){
    //create a new to do list arraywith all li's that dont match the id
    toDoListArray=toDoListArray.filter((item)=>item.itemId !== id);
}
})()


{

}

