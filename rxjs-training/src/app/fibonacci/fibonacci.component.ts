import { Component } from '@angular/core';
import { scan, Observable, take,interval} from 'rxjs';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css']
})
export class FibonacciComponent {
  private fibonacci:number[] = []
  howmany: number = 0

  constructor(){ }


  calcola_fibonacci1(howmany:number = 10){
    const fibo$ = interval(0).pipe(
      scan(([a, b]) => [b, a + b], [0, 1]),
      take(howmany),
    );
    fibo$.subscribe({
      next: ([_, current]) => {
        console.log(`${current}`);
        this.fibonacci.push(current)
      },
      complete: () => {
        console.log('Observable completato.');
      },
    });
  }

  calcola_fiboancci2():void {
    let s = new Observable((observer) => {
      let a:number = 0;
      let b:number = 1;
      let acc:number;
      observer.next(b)
    
      for (let i = 0; i < 10; i++) {
        acc = a+b;
        observer.next(acc)
        a=b;
        b=acc;
      }
      observer.complete()
    
      return () => console.log("End")
    });
    
    s.subscribe({
      next(val) {
        console.log(val);
      }, // Display del valore quando viene emesso
      error(err) {
        console.log('Errore: ', err);
      }, // Display errore se si verifica
      complete() {
        console.log('Unsubscribe done!');
      },
    });
  }


  clear(){
    this.fibonacci = [];
  }

  getFibonacci(){
    return this.fibonacci;
  }

}
