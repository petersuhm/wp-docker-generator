new Vue({
    el: '#app',
    data: {
        db_host_port: '3600',
        package_dir_name: 'example-plugin',
        package_type: 'plugin',
        site_name: 'Example WP Site',
        web_host_port: '80',
    },
    filters: {
        slugify: function (value) {
            // Copy / pasted from https://gist.github.com/mathewbyrne/1280286 🙏
            return value.toLowerCase()
                .replace(/\s+/g, '_')     // Replace spaces with -
                .replace(/[^\w\-]+/g, '') // Remove all non-word chars
                .replace(/\-\-+/g, '_')   // Replace multiple - with single -
                .replace(/^-+/, '')       // Trim - from start of text
                .replace(/-+$/, '');      // Trim - from end of text
        }
    }
});
