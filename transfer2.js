function getUrlParameter(name) {
            name = name.replace(/[\[\]]/g, '\\$&');
            const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
            const results = regex.exec(window.location.href);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, ' '));
        }

        function shift() {
            const searchValue = getUrlParameter("search");
            if (searchValue) {
                document.getElementById("searchBar").value = searchValue;
            }
        }

        window.onload = shift;