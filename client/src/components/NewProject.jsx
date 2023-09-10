// BELONGS TO:
//      - Home.jsx
//
//
// FUNCTIONALITY:
//      - POST ROUTE for a new project:
//                      01. Home.jsx
//
//
// VISUAL:
//      - renders a form for a new project
//                               01. project name
//                               02. save button - (window.location.reload())

const NewProject = () => {

    const [projectName, setProjectName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('/api/projects', {projectName})
        .then(() => {
            window.location.reload()
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="projectName">Project Name:</label>
                <input type="text" id="projectName" onChange={(e) => setProjectName(e.target.value)} />
                <input type="submit" value="Save" />
            </form>
        </div>
    )
}

export default NewProject