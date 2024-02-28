const cities =[
    {
        name: 'CPT',
        high: 30,
        low: 20,
        current: 23,
        condition: 'clear'
    },
    {
        name: 'DUR',
        high: 20,
        low: 20,
        current: 23,
        condition: 'clear'
    },
    {
        name: 'JHB',
        high: 30,
        low: 20,
        current: 23,
        condition: 'clear'
    },
]

for(const city of cities){
    const card = document.createElement('forcast-card');
    card.setAttribute('id', city.name);
    card.setAttribute('city', city.name);
    card.setAttribute('high', city.high);
    card.setAttribute('low', city.low);
    card.setAttribute('current', city.current);
    card.setAttribute('condition', city.condition);
    document.querySelector('body').appendChild(card);
}

setInterval(() => {
   const cityToChange = cities.at(Math.floor(Math.random() * cities.length));

   const newCurrTemp = Math.floor(cityToChange.low + ((cityToChange.high - cityToChange.low) * Math.random()));

   const domElement = document.getElementById(cityToChange.name);
   if(domElement){
    domElement.setAttribute('current', newCurrTemp + 10);
   }
}, 1000)