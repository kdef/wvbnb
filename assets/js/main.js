var apiURL = 'http://localhost:5000/availability'

new Vue({

  el: '#rezgrid',
  delimiters: ['{%', '%}'],

  data: {
    days: null,
    reservations: null
  },

  created: function () {
    this.fetchData(null, null);
  },

  filters: {
    date: function(str) {
      var d = new Date(str);
      var options = {month: "numeric", day: "numeric"};
      return d.toLocaleDateString("en-us", options);
    }
  },

  methods: {
    fetchData: function (start, end) {
      var self = this;

      // getUrl = apiURL.format(start, end, rooms)

     $.ajax({
       url: "http://localhost:3000/availability.mock.json",
     })
     .done(function(data) {
       console.log(data);
       //var r = $.parseJSON(data); // data like { "room": [ {"Date", "Booked"} ] }
       var r = data;
       // validate r here
     
       var aroom = Object.keys(r)[0];
       var d = r[aroom].map(function(x) { return x.Date; });
     
       self.days = d;
       self.reservations = r;
     
       console.log(r);
     })
     .fail(function(err) {
       console.log('Reserve API XHR Error: ' + err.status);
     });

    },

    forward: function (event) {
      var end = self.days
    }
  }

}); // vue
