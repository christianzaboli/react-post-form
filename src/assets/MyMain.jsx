import { useState } from "react"

function MyMain() {

    const [formData, setFormData] = useState([])

    return (
        <main>
            <div className="container">
                <form>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input type="name" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="name" className="form-control" />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="radio" className="form-check-input" />
                        <label className="form-check-label" >Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </main>
    )
}

export default MyMain