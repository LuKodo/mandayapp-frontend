export default function Login() {
    return (
        <section className="hero is-fullheight">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                            <form action="" className="box">
                                <div className="field">
                                    <label htmlFor="" className="label">Email</label>
                                    <div className="control has-icons-left">
                                        <input type="email" placeholder="e.g. bobsmith@gmail.com" className="input"
                                               required/>
                                        <span className="icon is-small is-left">
                                              <i className="bi bi-envelope-at-fill"></i>
                                            </span>
                                    </div>
                                </div>
                                <div className="field">
                                    <label htmlFor="" className="label">Password</label>
                                    <div className="control has-icons-left">
                                        <input type="password" placeholder="*******" className="input" required/>
                                        <span className="icon is-small is-left">
                                              <i className="bi bi-lock-fill"></i>
                                            </span>
                                    </div>
                                </div>
                                <div className="field">
                                    <label for="" class="checkbox">
                                        <input type="checkbox"/>
                                        {" "}Remember me
                                    </label>
                                </div>
                                <div class="field">
                                    <button class="button is-primary is-fullwidth">
                                        Login
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}