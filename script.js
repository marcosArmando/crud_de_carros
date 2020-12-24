const cars = [
    {
        brand: "Toyota",
        model: "Camry",
        color: "negro",
        year: 2020,
        price: 1300000,
        picture: "https://www.autonocion.com/wp-content/uploads/2019/09/toyota-camry-trd-avalon17-930x621.jpg",
        id: 0
    },
    {
        brand: "nissan",
        model: "tsuru",
        color: "champagne",
        year: 2001,
        price: 19000,
        picture: "https://cdn.forbes.com.mx/2016/06/tsuru-nissan.jpg",
        id: 1
    },
    {
        brand: "audi",
        model: "a4",
        color: "blanco",
        year: 2012,
        price: 230000,
        picture: "https://www.audi.com.mx/content/dam/nemo/mx/models/A4/2021/1920x1080_A4_gallery3_21.jpg",
        id: 2
    },
    {
        brand: "chevrolet",
        model: "chevy",
        color: "blanco",
        year: 2006,
        price: 75000,
        picture: "https://www.eluniversal.com.mx/sites/default/files/u24285/chevy.jpg",
        id: 3
    },
    {
        brand: "volkswagen",
        model: "vocho",
        color: "blanco",
        year: 1998,
        price: 45000,
        picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQmVMSVXw14BQ9YAqnLPHYMViukuRoCroy3w&usqp=CAU",
        id: 4
    },
];

function printCars() {
    
    const container = document.getElementById('container-cars');
    let infoToload = '';

    cars.forEach(element => {
        infoToload +=   `<tr>
                            <td>${element.brand}</td>
                            <td>${element.model}</td>
                            <td>${element.color}</td>
                            <td>${element.year}</td>
                            <td>${element.price}</td>
                            <td class="car-image" style="background-image: url(${element.picture})"></td>
                            <td>
                                <button onclick="deleteCar(${element.id})" class="btn btn-danger center">
                                    Eliminar
                                </button>
                            </td>
                            <td>
                                <button onclick="updateCar(${element.id})" class="btn btn-primary center">
                                    Actualizar
                                </button>
                            </td>
                        </tr>`
    });

    container.innerHTML = infoToload;
}

function deleteCar(id) {

    const index = cars.findIndex((car) => car.id === id);
    alert(`Se eliminará ${cars[index].model} ${cars[index].year} de la lista`);

    cars.splice(index, 1);

    printCars();
}

function addCar() {

    const brand = document.getElementById("brandInput").value;
    const model = document.getElementById("modelInput").value;
    const color = document.getElementById("colorInput").value;
    const year = document.getElementById("yearInput").value;
    const price = document.getElementById("priceInput").value;
    const picture = document.getElementById("pictureInput").value;

    const id = cars[cars.length - 1].id + 1;

    const newCar = {
        brand,
        model,
        color,
        year,
        price,
        picture,
        id
    }

    cars.push(newCar);
    printCars();

    document.getElementById("form-cars").reset();
}

function updateCar(id) {

    const index = cars.findIndex((car) => car.id === id);

    document.getElementById("brandInput").value = cars[index].brand;
    document.getElementById("modelInput").value = cars[index].model;
    document.getElementById("colorInput").value = cars[index].color;
    document.getElementById("yearInput").value = cars[index].year;
    document.getElementById("priceInput").value = cars[index].price;
    document.getElementById("pictureInput").value = cars[index].picture;

    cars.splice(index, 1);

    alert(`El carro seleccionado ya no están en la lista, solo en los campos, realice las modificaciones y haga Submit, el carro modificado aparecerá último en la lista`);

}

printCars();    