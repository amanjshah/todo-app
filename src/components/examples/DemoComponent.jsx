const person = {
  firstname: 'Aman',
  lastname: 'Shah',
  address: {
    street: 'Baker Street',
    city: 'London'
  },
  profiles: ['LinkedIn', 'GitHub'],
  printProfile: () => {
    person.profiles.map(
      profile => console.log(profile)
    )
  }
}

export default function DemoComponent() {
  return (
    <>
      <div>{person.firstname}</div>
      <div>{person.address.city}</div>
      <div>{ person.printProfile() }</div>
    </>
  )
}
