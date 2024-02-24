//async analogy
// const p = new Promise((resolve, reject) => {
//   console.log('From Promise Invoked');

import { Observable, map } from "rxjs";


//   setTimeout(() => {
//     resolve(1200);
//   }, 4000);
// });
// p.then((data) => console.log('promise', data));

//async analogy Promise
Promise.resolve(100)
  .then((d) => d * 1.2)
  .then((x) => console.log('from Promise:', x));

//sync analogy Promise
[1].map((x) => x * 2).map((x) => x * 10);

//sync analogy Observable
[1, 2, 3, 4, 5].map((x) => x * 2).map((x) => x * 10);

//async analogy Observable
function interval(intervalValue: number) {
  console.log('from Observable Invoked');

  return new Observable<number>((observer) => {
    // observer.next(1000);
    // observer.next(2000);
    // observer.next(3000);
    // observer.next(4000);
    // observer.next(5000);
    // observer.next(6000);
    let counter = 0;
    const timer = setInterval(() => {
      observer.next(counter++);
      // observer.complete();
    }, 2000);
    return () => {
      clearInterval(timer);
      observer.unsubscribe;
    };
  });
}

const stream$ = interval(3000)
  .pipe(map((x) => (x + 1) * 2)) //transform, filter,accumulate, result
  .subscribe({
    next: (x) => console.log('data', x),
    error: (err) => console.error(`Error occured: ${err}`),
    complete: () => console.log('Stram has been completed!'),
  });


// const stream$ = interval(3000).subscribe((data) => {
//   console.log('data from observer', data);
// });

// const stream$ = interval(3000).pipe(map((x) => x + 1));

// setInterval(() => {
//   stream$.subscribe({
//     next: (x) => console.log('data', x),
//     error: (err) => console.error(`Error occured: ${err}`),
//     complete: () => console.log('Stram has been completed!'),
//   });
// }, 3000);


