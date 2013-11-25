function request(url, method, callback) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open(method, url, true);
  xmlhttp.onreadystatechange = function() {
    // 4 - Complete
    if (xmlhttp.readyState == 4) {
      // Status - OK
      if(xmlhttp.status == 200) {
        var data = JSON.parse(xmlhttp.responseText);
        callback(data);
      }
    }
  };
  xmlhttp.send(null);
}

var searchForm = document.querySelector('#searchForm');
var searchResults = document.querySelector('#searchResults');


searchForm.addEventListener('submit', function(event) {
  var method = this.method;
  var query = this.searchField.value;
  var url = this.action + '?company_start=' + query;

  request(url, method, function(data) {
    searchResults.innerHTML = '';
    data.users.forEach(function(item) {
      var li = '<li>' + item.first_name + '</li>';
      searchResults.innerHTML += li;
    })
  });

  event.preventDefault();
  return false;
});
