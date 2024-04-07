import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redux-sync-simulation',
  templateUrl: './redux-sync-simulation.component.html',
  styleUrls: ['./redux-sync-simulation.component.css'],
})
export class ReduxSyncSimulationComponent implements OnInit {
  ngOnInit(): void {
    this.demoFn();
  }

  demoFn(): void {
    // Redux -> Pattern
    //    - State => Single source of truth
    //    - Actions => modifies state
    // How do we change state?
    //  - we never touch it directly!
    //  - we dispatch an Action

    // Reducer -> capture all actions that are dispatched

    // const eventsCollection = [10, 20, 30];
    // const reducer = (acc: number, curr: number) => acc + curr;
    // const initialState = 0;

    // const result = eventsCollection.reduce(reducer, initialState);
    // console.log({ result });

    // Complex example
    interface AppState {
      msg: string;
      person: Object;
      isAuth: boolean;
    }

    // Default state
    const initialState: AppState = {
      msg: '',
      person: {},
      isAuth: false,
    };

    // ACTIONS
    const EVENT_1 = 'EVENT1';
    const EVENT_2 = 'EVENT2';
    const EVENT_3 = 'EVENT3';

    // Reducer?
    const reducer = (state: AppState, action: any) => {
      switch (action.type) {
        case EVENT_1:
          return { ...state, msg: action.value };
        case EVENT_2:
          return { ...state, person: action.value };
        case EVENT_3:
          return { ...state, isAuth: action.value };

        default:
          return state;
      }
    };

    // Event collection -> for dispatching with value
    const eventCollection = [
      { type: EVENT_1, value: 'Initial Message!' },
      { type: EVENT_2, value: { name: 'Gosho', age: 21, gender: 'M' } },
      { type: EVENT_3, value: true },
      { type: 'sadsadsadsa', value: true },
    ];

    const result = eventCollection.reduce(reducer, initialState);
    // console.log({ result });

    // Enforces us to uni-directional data flow.
    // Simple flat object.
  }
}
