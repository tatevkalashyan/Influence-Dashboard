jQuery(document).ready(function() {
    jQuery(".main-table").clone(true).appendTo('#table-scroll').addClass('clone');   

    $('#example').DataTable();
    $('#myTable').DataTable();
  });
 