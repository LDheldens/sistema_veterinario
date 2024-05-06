// 
function getData() {
    var parameters = {
        'action': 'search',
    };

    $('#data').DataTable({
        responsive: true,
        autoWidth: false,
        destroy: true,
        deferRender: true,
        ajax: {
            url: pathname,
            type: 'POST',
            headers: {
                'X-CSRFToken': csrftoken
            },
            data: parameters,
            dataSrc: ""
        },
        columns: [
            {data: "id"},
            {data: "name"},
            {data: "category.name"},
            {data: "codebar"},
            {data: "image"},
            {data: "price"},
            {data: "pvp"},
            {data: "stock"},
            {data: null},
        ],
        columnDefs: [
            {
                targets: [0,1,2,3],
                class: 'text-center',
                render: function (data, type, row) {
                   return data
                }
            },
            {
                targets: [4],
                class: 'text-center',
                render: function (data, type, row) {
                    return '<img src="' + row.image + '" class="img-fluid d-block mx-auto" style="width: 20px; height: 20px;">';
                }
            },{
                targets: [4],
                class: 'text-center',
                render: function (data, type, row) {
                    return data;
                }
            },{
                targets: [5],
                class: 'text-center',
                render: function (data, type, row) {
                    return data;
                }
            },{
                targets: [6],
                class: 'text-center',
                render: function (data, type, row) {
                    return data;
                }
            },{
                targets: [7],
                class: 'text-center',
                render: function (data, type, row) {
                    if (row.category.inventoried) {
                        if(row.unit === 'kilogramo') {
                            if (row.stock > 0) {
                                return '<span class="badge badge-success">' + row.stock + ' kg</span>';
                            }
                            return '<span class="badge badge-danger">' + row.stock  + '  kg</span>';
                        } {
                            if (row.stock > 0) {
                                return '<span class="badge badge-success">' + row.stock + '</span>';
                            }
                            return '<span class="badge badge-danger">' + row.stock + '</span>';
                        }
                        
                    }
                    return '<span class="badge badge-secondary">Sin stock</span>';
                }
            },{
                targets: [8],
                class: 'text-center',
                render: function (data, type, row) {
                    var buttons = '';
                    buttons += '<a href="/pos/scm/product/update/' + row.id + '/" class="btn btn-warning btn-xs btn-flat"><i class="fas fa-edit"></i></a> ';
                    buttons += '<a href="/pos/scm/product/delete/' + row.id + '/" class="btn btn-danger btn-xs btn-flat"><i class="fas fa-trash"></i></a> ';
                    return buttons;
                }
            },
        ],
        rowCallback: function (row, data, index) {

        },
        initComplete: function (settings, json) {

        }
    });
}

$(function () {
    getData();
})