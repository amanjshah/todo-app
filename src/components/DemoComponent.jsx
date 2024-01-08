const person = {
  firstname: 'Aman',
  lastname: 'Shah',
  address: {
    street: 'Baker Street',
    city: 'London'
  },
  profiles: ['LinkedIn', 'GitHub']
}

export default function DemoComponent() {
  return (
    <>
      <div className='DemoComponent'>{person.firstname}</div>
      <div className='DemoComponent'>{person.address.city}</div>
    </>
  )
}
