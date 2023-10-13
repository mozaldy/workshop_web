function fetchData() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'getcalib.php', true);
    xhr.onload = function() {
        if (this.status == 200) {
            var data = JSON.parse(this.responseText);
            // Now you have the data from the table
            // You can use this data to populate your calibration standards
            document.getElementById('standard1_known').value = data[0].A;
            document.getElementById('standard1_instrument').value = data[0].B;
            document.getElementById('standard2_known').value = data[0].C;
            document.getElementById('standard2_instrument').value = data[0].beta;
        }
    }
    xhr.send();
}
