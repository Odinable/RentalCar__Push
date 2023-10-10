export async function fetchCars() {
    const header = {
        'X-RapidAPI-Key': '2cc9d8eab8msh6c3aa16786408f2p1ca25fjsn3bbe6f5cc2bb',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }


const response = await fetch ( 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla' , {
    headers: header, 
});

const result = await response.json();
return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  };
