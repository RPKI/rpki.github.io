
$(document).ready(function(){
    $.ajax({
            url: "visibility.json",
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
        data: rows,
        columns: columns,
        order: [[ 0, "asc" ]],
        iDisplayLength: 50,
        createdRow: color_row
    });
}

function color_row(row, data, index) {
    for(i = 1;i<data.length;i++){
        if(data[i] == "False" or data[i] == "None"){
            $('td', row).eq(i).addClass('not_visible');
        } else {
            $('td', row).eq(i).addClass('visible');
        }
    }
}
