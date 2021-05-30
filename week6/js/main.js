import ToDoList from "./todolist.js";
import ToDoItem from "./todoitem.js";

const toDoList = new ToDoList();

//Launch app
document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        initApp();
    }
});

const initApp = () => {
    //Add listeners
    const itemEntryForm = document.getElementById("itemEntryForm");
    itemEntryForm.addEventListener("submit", (event) => {
        event.preventDefault();
        processSubmission();
    });

    const clearItems = document.getElementById("clearItems");
    clearItems.addEventListener("click", (event) => {
        const list = toDoList.getList();
        if (list.length) {
            const confirmed = confirm("Are you sue you want to clear the entire list?");
            if (confirmed) {
                toDoList.clearList();
                updatePersistentData(toDoList.getList());
                refreshThePage();
            }
        }
    });

    //Procedural
    loadListObject();
    refreshThePage();
};

const loadListObject = () => {
    const storedList = localStorage.getItem("myToDoList");
    if (typeof storedList !== "string") return;
    const parsedList = JSON.parse(storedList);
    parsedList.forEach(itemObj => {
        const newToDoItem = createNewItem(itemObj._id, itemObj._item);
        toDoList.addItemToList(newToDoItem);
    });
};

const refreshThePage = () => {
    clearListDisplay();
    renderList();
    clearItemEntryField();
    setFocusOnItemEntry();
};

const clearListDisplay = () => {
    const parentElement = document.getElementById("listItems");
    deleteContents(parentElement);
};

const deleteContents = (parentElement) => {
    let child = parentElement.lastElementChild;
    while (child) {
        parentElement.removeChild(child);
        child = parentElement.lastElementChild;
    }
};

const renderList = () => {
    const list = toDoList.getList();
    list.forEach(item => {
        buildListItem(item);
    })
};

const buildListItem = (item) => {
    const div = document.createElement("div");
    div.className = "item";
    const check = document.createElement("input");
    check.type = "checkbox";
    check.id = item.getId();
    check.tabIndex = 0;
    addClickListenerToCheckbox(check);
    const label = document.createElement("label");
    label.className = "item draggable";
    label.setAttribute('draggable', 'true'); //Added for feature
    label.htmlFor = item.getId();
    label.textContent = item.getItem();
    div.appendChild(check);
    div.appendChild(label);
    const container = document.getElementById("listItems");
    container.appendChild(div);
};

const addClickListenerToCheckbox = (checkbox) => {
    checkbox.addEventListener("click", (event) => {
        toDoList.removeItemFromList(checkbox.id);
        updatePersistentData(toDoList.getList());
        const removedText = getLabelText(checkbox.id);
        updateScreenReaderConfirmation(removedText, "removed from list");
        setTimeout(() => {
            refreshThePage();
        }, 1000);
    });
};

const getLabelText = (checkbox) => {
    return document.getElementById(checkboxId).nextElementSibling.textContent;
}

const updatePersistentData = (listArray) => {
    localStorage.setItem("myToDoList", JSON.stringify(listArray));
};

const clearItemEntryField = () => {
    document.getElementById("newItem").value = "";
};

const setFocusOnItemEntry = () => {
    document.getElementById("newItem").focus();
};

const processSubmission = () => {
    const newEntryText = getNewEntry();
    if (!newEntryText.length) return;
    const nextItemId = calcNextItemId();
    const toDoItem = createNewItem(nextItemId, newEntryText);
    toDoList.addItemToList(toDoItem);
    updatePersistentData(toDoList.getList());
    updateScreenReaderConfirmation(newEntryText, "added");
    refreshThePage();
};

const getNewEntry = () => {
    return document.getElementById("newItem").value.trim();
};

const calcNextItemId = () => {
    let nextItemId = 1;
    const list = toDoList.getList();
    if (list.length > 0) {
        nextItemId = list[list.length - 1].getId() + 1;
    }
    return nextItemId;
};

const createNewItem = (itemId, itemText) => {
    const toDo = new ToDoItem();
    toDo.setId(itemId);
    toDo.setItem(itemText);
    return toDo;
};

const updateScreenReaderConfirmation = (newEntryText, actionVerb) => {
    document.getElementById("confirmation").textContent = '${newEntryText} ${actionVerb}.';
};

//Drag and Drop Feature. Attempted multiple tutorials. Unfortunately I was unable to get it to work properly.

// const draggables = document.querySelectorAll('.draggable');
// const containers = document.querySelectorAll('.container');

// draggables.forEach(draggable => {
//     draggables.forEach(draggable => {
//         draggable.addEventListener('dragstart')
//     })

//     draggable.addEventListener('dragend', () => {
//         draggable.classList.remove('dragging')
//     })
// })

// containers.forEach(container => {
//     container.addEventListener('dragover', e => {
//         e.preventDefault()
//         const afterElement = getDragAfterElement(container, e.clientY)
//         const draggable = document.querySelector('.dragging')
//         if (afterElement == null) {
//         container.appendChild(draggable)
//         } else {
//             container.insertBefore(draggable, afterElement)
//         }
//     })
// })

// function getDragAfterElement(container, y) {
//    const draggableElements =  [...container.querySelectorAll('.draggable:not(.dragging)')]

//    return draggableElements.reduce((closest, child) => {
//     const box = child.getBoundingClientRect()
//     const offset = y - box.top - box.height / 2 
//     if (offset < 0 && offset > closest.offset) {
//         return {offset: offset, element: child}
//     } else {
//         return closest
//     }
//    }, {offset: Number.POSITIVE_INFINITY}).element
// } 