directory.ShellView = Backbone.View.extend({

    initialize: function () {
        this.searchResults = new directory.EmployeeCollection();
        this.searchresultsView = new directory.EmployeeListView({model: this.searchResults, className: 'dropdown-menu'});
    },

    render: function () {
        this.$el.html(this.template());
        $('.navbar-search', this.el).append(this.searchresultsView.render().el);
        return this;
    },

    events: {
        "keyup .search-query": "search",
        "keypress .search-query": "onkeypress"
    },

    search: function (event) {
        var start = $('#startSearch').val();
        var destination = $('#destinationSearch').val();
        this.searchResults.fetch({reset: true, data: {name: start}});
        var self = this;
        setTimeout(function () {
            $('.dropdown').addClass('open');
        });
    },

    onkeypress: function (event) {
        if (event.keyCode === 13) { // enter key pressed
            event.preventDefault();
        }
    },

    selectMenuItem: function(menuItem) {
        $('.navbar .nav li').removeClass('active');
        if (menuItem) {
            $('.' + menuItem).addClass('active');
        }
    }

});