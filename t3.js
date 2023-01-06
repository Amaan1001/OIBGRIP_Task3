let list = [
    
]
let inputTitle = document.getElementById("inputTitle")
let inputDesc = document.getElementById("inputDesc")
let allList = document.getElementById("allList")


const changeList = () => {
    allList.innerHTML = list.map((val) => {
        return (
            `<tr >        
                <td>${val?.title} </td>
                <td>${val?.desc}</td>
                <td>
                    <div class="actions">
                        <button onClick="deleteTask(${val.id})" >Delete</button>
                        <button class=${val.status} onClick="endTask(${val.id})" >Completed</button>
                    </div>
                </td>
                <td>${val?.status} </td>
            </tr> `
        )
    })
    
}

const saveTask = () => {
    if (!inputTitle.value || !inputDesc.value) {
        alert("Please fill out all required fields")
    }
    else {
        list = [...list, {
            id: list.length,
            title: inputTitle.value,
            desc: inputDesc.value,
            added: (new Date(Date.now())).toString().split("G")[0],
            completed: "--",
            status: "Pending"
        }]
        changeList()
        inputTitle.value = ""
        inputDesc.value = ""
    }
}
const deleteTask = (id) => {
    console.log(id)
    list = list.filter((val) => val.id != id)
    changeList()
}
const endTask = (id) => {
    console.log(id)
    list = list.map((val) => {
        if (val.id == id) {
            val.status = "Completed"
            val.completed = (new Date(Date.now())).toString().split("G")[0]
        }
        return val;
    })
    changeList()
}