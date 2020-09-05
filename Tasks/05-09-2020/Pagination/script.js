
let data = [{
        "id" : 1
    },
    {
        "id" : 2
    },
    {
        "id" : 3
    },
    {
        "id" : 4
    },
    {
        "id" : 5
    },
    {
        "id" : 6
    },
    {
        "id" : 7
    },
    {
        "id" : 8
    },
    {
        "id" : 9
    },
    {
        "id" : 10
    },
    {
        "id" : 11
    },
    {
        "id" : 12
    },
    {
        "id" : 13
    },
    {
        "id" : 14
    },
    {
        "id" : 15
    },
    {
        "id" : 16
    },
    {
        "id" : 17
    },
    {
        "id" : 18
    },
    {
        "id" : 19
    },
    {
        "id" : 20
    },
]



let state = {
    'dataset' : data,
    'page' : 1,
    'rows' : 5
}

function pagination(dataset, page, rows){
    let start = (page - 1) * rows
    let end = start + rows
    let currentData = dataset.slice(start, end)
    let pages = Math.ceil(dataset.length / rows)
    return {
        "dataset" : currentData,
        "pages": pages
    }
}

function onPaginationClick(value){
    var node = document.getElementById('table-body');
    node.remove()
    state.page = value
    buildTable()
}

function onPrevious(){
    if (state.page > 1){
        var node = document.getElementById('table-body');
        node.remove()
        state.page = state.page - 1
        console.log(state.page)
        buildTable()
    }
}


function onNext(){
    let data = pagination(state.dataset, state.page, state.rows)
    if (state.page < data.pages){
        var node = document.getElementById('table-body');
        node.remove()
        state.page = +state.page + 1
        buildTable()
    }
}
