import { Observable } from 'rxjs'
import './index.scss'

const click$ = Observable.fromEvent(document, 'click');

click$
  .do(x => console.log(x))
  .buffer(() => click$.debounce(250))
  .do(x => console.log(x))
  .map(list => list.length)
  .do(x => console.log(x))
  .filter(x => x === 2)
  .do(x => console.log(x))
  .subscribe(() => {
    alert('doubleclick')
  })
