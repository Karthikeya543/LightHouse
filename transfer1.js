function getX() {
            return document.getElementById("searchBar").value;
        }

        function transfer() {
            const searchValue = getX();
            if (searchValue) {
                window.location.href = "productBrowse.html?search=" + encodeURIComponent(searchValue);
            } else {
                window.location.href = "productBrowse.html";
            }

        }