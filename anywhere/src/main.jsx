const Main = () => {
  return (
      <main className="main">
        <div className="info">
        <div className="info__descripion">Start for free</div>
            <h1 className="info__header">
              Create new account <span className="info__header-dot">.</span>
            </h1>
            <div className="info__content">
              Already A Member? 
              <a className="info__link" href="#"> Log in</a>
            </div>
        </div>

        <form className="form" action="#" method="GET">
            <div className="form__fields">
              <div className="grid">
                <div className="field">
                  <input
                    type="text"
                    name="name"
                    value="Yaroslav"
                    placeholder="First name"
                    class="field__input field__input_user"
                  />
                  <div className="field__name"></div>
                </div>
                <div className="field">
                  <input
                    type="text"
                    name="surname"
                    value="Gromov"
                    placeholder="Last name"
                    class="field__input field__input_user"
                  />
                  <div className="field__name"></div>
                </div>
              </div>
              <div className="field">
                <input
                  required
                  type="email"
                  name="email"
                  value="Email@gmail.com"
                  placeholder="Email"
                  class="field__input"
                />
                <div className="field__name"></div>
              </div>
              <div className="field">
                <input
                  type="password"
                  value="Password"
                  name="password"
                  placeholder="Password"
                  class="field__input"
                />
                <div className="field__name"></div>
              </div>
            </div>

            <label className="gender_male">
              <input className="gender" type="radio" name="question" />
              Male
            </label>

            <label className="gender_female">
              <input className="gender" type="radio" name="question" />
              Female
            </label>

            <div className="buttons">
              <button className="buttons__item button">Change method</button>
              <button type="submit" className="buttons__item button button_primary">
                Create account
              </button>
            </div>
          </form>
      </main>
  )
}

export default Main;
