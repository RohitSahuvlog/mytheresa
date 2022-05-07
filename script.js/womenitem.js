var getarr = JSON.parse(localStorage.getItem("womendata")) || []
    console.log(getarr)
    Display(getarr)
    // console.log(getarr)
    function Display(getarr) {
        document.querySelector(".womenitems").innerHTML = ""
        getarr.map(function (event, index) {
            var row = document.createElement("div")
            row.setAttribute("id", "cardrs")
            row.addEventListener("click", function () {
                wishlistfunc(event, index)
            })
            var p1 = document.createElement("p")
            p1.innerHTML = event.Name
            var p2 = document.createElement("h4")
            p2.innerHTML = "€" + event.Price
            var p3 = document.createElement("p")
            p3.innerHTML = event.Brand
            var image = document.createElement("img")
            image.setAttribute("class", "imgrs")
            image.src = event.Image
            var sizes = document.createElement("p")
            sizes.size = null
            row.append(image, p3, p1, p2, sizes)
            document.querySelector(".womenitems").append(row)

        })
    }




    function sorteds() {
        var sort = document.querySelector("#sorteds").value;
        console.log(sort)
        if (sort == "htl") {
            getarr.sort(function (a, b) {
                console.log(b.Price - a.Price)
                return Number(b.Price - a.Price)
            })
            Display(getarr)
        }
        else if (sort == "lth") {
            getarr.sort(function (a, b) {
                return a.Price - b.Price
            })
            Display(getarr)
        }

    }

    function wishlistfunc(event, index) {


        console.log(event, index);
        localStorage.setItem("cartbefore", JSON.stringify(event))
        window.location.href = "./beforeadd.html"
    }
    // ======== 
    var newarr = JSON.parse(localStorage.getItem("cart")) || []
    var bagitems = document.querySelector("#bagitems")
    bagitems.innerHTML = newarr.length