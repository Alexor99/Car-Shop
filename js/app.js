function car (name, model, owner, year, phone, image, id) {
    return {
        name, model, owner, year, phone, image, id
    }
}

function log (text, type, date = new Date()) {
    return {
        text, type, date
    }
}

const cars = [
    car('Ford','Focus','Max',2016,'+380966311068','images/focus.jpg', 0),
    car('Ford','Mondeo','Vlad',2018,'+380966311068','images/mondeo.jpg', 1),
    car('Kia','Cerato','Ira',2019,'+380966311068','images/cerato.jpg', 2)
]

new Vue({
    el: '#app',
    data: {
        cars:cars,
        car:cars[0],
        logs: [],
        selectedCarIndex: 0,
        phoneVisibility: false,
        search: '',
        modalVisibility: false
   },
   methods: {
        selectCar (id) {
            console.log('Click', id)
            this.car = cars[id] 
            this.selectedCarIndex = id
        },
        togglePhone () {
            this.phoneVisibility = !this.phoneVisibility
        },
        newOrder () {
            this.modalVisibility = false
            this.logs.push(
                log(`Success order: ${this.car.name} - ${this.car.model}`, 'ok')
            )
        },
        cancelOrder () {
            this.modalVisibility = false
            this.logs.push(
                log(`Cancel order: ${this.car.name} - ${this.car.model}`, 'cnl')
            )
        }
   },
   computed: {
       phoneBtnText () {
           return this.phoneVisibility ? 'Hide phone' : 'Show phone'
       },
       filteredCars () {
           var self = this
           var filtered = this.cars.filter(function(car) {
               return car.name.indexOf(self.search) > -1 ||
                car.model.indexOf(self.search) > -1
           })
           return filtered
       }
   },
   filters: {
       date(value) {
            return value.toLocaleString()
       }
   }
})