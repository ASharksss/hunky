import logo from './../logo.png'
import { useSelector } from 'react-redux'
import user_avatar from './../user_avatar.png'



export const Header = () => {
  const user = useSelector(state => state.auth.user)
  return(
    <>
      <header className="header">
        <div className="container">
          <div className="header_wrapper">
            <div className="header__logo">
              <img src={logo} alt="Vodenoi" className="logo"/>
            </div>
            <div className="header__user">
              <img src={user_avatar} alt="avatar" className="user_avatar"/>
              <div className="user_decr">
                <p>{user.name}</p>
                <p>{user.job_title}</p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}