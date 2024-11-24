function boilWater(callback) {
    setTimeout(() => {
        console.log("Boiling water...");
        callback();
    }, 1000);
}

function brewCoffee(callback) {
    setTimeout(() => {
        console.log("Brewing coffee...");
        callback();
    }, 1000);
}

function addMilkAndSugar(callback) {
    setTimeout(() => {
        console.log("Adding milk and sugar...");
        callback();
    }, 1000);
}

function serveCoffee(callback) {
    setTimeout(() => {
        console.log("Serving coffee...");
        callback();
    }, 1000);
}

boilWater(() => {
    brewCoffee(() => {
        addMilkAndSugar(() => {
            serveCoffee(() => {
                console.log("Coffee is ready to enjoy!");
            });
        });
    });
});

// uber example
function requestUber(callback) {
    setTimeout(() => {
        console.log("Requesting an Uber...");
        callback();
    }, 1000);
}

function waitForDriver(callback) {
    setTimeout(() => {
        console.log("Waiting for the driver...");
        callback();
    }, 1000);
}

function getInCar(callback) {
    setTimeout(() => {
        console.log("Getting in the car...");
        callback();
    }, 1000);
}

function reachDestination(callback) {
    setTimeout(() => {
        console.log("Reached destination!");
        callback();
    }, 1000);
}

requestUber(() => {
    waitForDriver(() => {
        getInCar(() => {
            reachDestination(() => {
                console.log("You have arrived at your location.");
            });
        });
    });
});

