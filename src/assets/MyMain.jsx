import { useState } from "react"

function MyMain() {
    const postLink = 'https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts'
    const [formData, setFormData] = useState({
        author: '',
        title: '',
        body: '',
        public: false
    })

    function handleFormData(e) {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;

        setFormData({ ...formData, [e.target.name]: value });


    }
    function formSubmit(e) {
        e.preventDefault()
        console.log(formData)
        axios.post(postLink, formData)
            .then(res => console.log("dati inviati", res.data))
            .catch(error => console.log(error))
    }
    return (
        <main>
            <div className="container">
                <form onSubmit={formSubmit}>
                    {/* author */}
                    <div className="mb-3">
                        <label className="form-label">Autore</label>
                        <input type="text" name="author" value={formData.author} onChange={handleFormData} className="form-control" required />
                    </div>

                    {/* title */}
                    <div className="mb-3">
                        <label className="form-label">Titolo</label>
                        <input type="text" name="title" value={formData.title} onChange={handleFormData} className="form-control" required />
                    </div>

                    {/* body */}
                    <div className="mb-3">
                        <label className="form-label">Testo</label>
                        <textarea type="text" name="body" value={formData.body} onChange={handleFormData} className="form-control" rows='3' required></textarea>
                    </div>

                    {/* public */}
                    <div className="mb-3 form-check">
                        <input type="checkbox" name="public" checked={formData.public} onChange={handleFormData} className="form-check-input" />
                        <label className="form-check-label" >Post pubblico</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Invia</button>
                </form>
            </div>
        </main>
    )
}

export default MyMain