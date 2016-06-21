
$(document).ready(function(){
    $.ajax({
            url: "http://rpki.github.io/visibility.json",
            success: create_table
    });
});


function create_table(rows) {

    columns = []
    header_row = rows.shift()
    header_row.forEach(function(entry){
        columns.push({title: entry});
    });

    $("#visi_table").DataTable( {
        dom: "Bfrtip",
        data: rows,
        columns: columns,
        createdRow: color_row,
        order: [[ 0, "asc" ]],
        "orderClasses": false,
        "paging":false,
        "scrollX": true,
        "fixedColumns": true,
        fixedHeader: true,
        buttons: ['csv']
    });
}

function color_row(row, data, index) {
    for(i = 1;i<data.length;i++){
        if(data[i] == "False" || data[i] == "None"){
            $('td', row).eq(i).addClass('not_visible');
        } else {
            $('td', row).eq(i).addClass('visible');
        }
    }
}
