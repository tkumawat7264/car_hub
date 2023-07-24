import { CarProps } from '@/components/CarCard'

interface FilterProps {
  manufacturer: string
  year: number
  fuel: string
  limit: number
  model: string
}

export const fetchCars = async (filter: FilterProps) => {
  const headers = {
    'X-RapidAPI-Key': 'a777a8c4aemsh5f5c999c4a2abf8p1fc02ejsn9950db01bbd9',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  }
  const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${filter?.manufacturer}&model=${filter?.model}&year=${filter?.year}&limit=${filter?.limit}&fuel_type=${filter?.fuel}`
  const response = await fetch(url, {
    headers: headers,
  })
  const result = await response.json()
  return result
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50 // Base rental price per day in dollars
  const mileageFactor = 0.1 // Additional rate per mile driven
  const ageFactor = 0.05 // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor
  const ageRate = (new Date().getFullYear() - year) * ageFactor

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate

  return rentalRatePerDay.toFixed(0)
}

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL('https://cdn.imagin.studio/getimage')
  const { make, model, year } = car

  url.searchParams.append('customer', 'hrjavascript-mastery')
  url.searchParams.append('make', make)
  url.searchParams.append('modelFamily', model.split(' ')[0])
  url.searchParams.append('zoomType', 'fullscreen')
  url.searchParams.append('modelYear', `${year}`)
  // url.searchParams.append('zoomLevel', zoomLevel);
  url.searchParams.append('angle', `${angle}`)

  return `${url}`
}

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search)
  searchParams.set(type, value)
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`
  return newPathname
}
