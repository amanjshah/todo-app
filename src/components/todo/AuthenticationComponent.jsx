export default function AuthenticationComponent({authenticationAttempted, authenticated}) {
  return authenticationAttempted && ((authenticated) ?
    <div className='successfulAuthentication'>Successfully authenticated</div> :
    <div className='unsuccessfulAuthentication'>Unsuccessful authentication</div>)
}