import './style.css';
import {fromFetch} from 'rxjs/fetch';
import {fromPromise} from 'rxjs/internal/observable/innerFrom';
import {EMPTY, Subject, catchError, fromEvent, map, retry, switchMap} from 'rxjs';
import {formatDistance, parse} from 'date-fns';


document.querySelector('#app').innerHTML = `
  <div>
    Hello rsjx
  </div>
`

export const mySubject = new Subject()

const observable = fromEvent(document.body, 'click')
.pipe(
  switchMap(()=>
    fromFetch('https://go-kart-api.onrender.com/runs/SN2780_210722_11H00_NADINE_IDUBE_RACEWAY_16_5554')
    .pipe(
      switchMap(res => fromPromise(res.json())),
      map(responseJson => ({
        summary: `${responseJson.trackName} - ${responseJson.sessionName} - ${responseJson.driver}`,
        dateTime: parse(responseJson.date + ' '+ responseJson.time, 'dd-MM-yyyy HH:mm', new Date())
      })),
      retry(2),
      catchError(err => {
        console.error(err);
        return EMPTY;
      })
    )
    ),catchError( err => {
      console.error('api call',err)
      return EMPTY;
    }));

observable.subscribe(res => {
  document.body.innerHTML = `${res.summary}<br>${formatDistance(res.dateTime, Date.now(), {addSuffix: true})}`
});

// or
// const observable3 = fromFetch('https://go-kart-api.onrender.com/runs/SN2780_210722_11H00_NADINE_IDUBE_RACEWAY_16_5554')
// .pipe(switchMap(res => fromPromise(res.json())));

// observable3.subscribe(res => console.log(res));