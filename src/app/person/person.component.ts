import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const people = [
      { firstName: 'Brian', lastName: 'Troncone' },
      { firstName: 'Todd', lastName: 'Motto' }
    ]

    const peopleWithFullName = people.map(
      p => ({...p, Name: `${p.firstName} ` + `${p.lastName}`})
    )

    const lastNames = people.map(
      p => p.lastName
    )

    console.log(peopleWithFullName)

    console.log(lastNames)
  }

}

