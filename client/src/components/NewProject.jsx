import '../assets/css/NewProject.css'

const NewProject = () => {

    // const [projectName, setProjectName] = useState('')

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     axios.post('/api/projects', {projectName})
    //     .then(() => {
    //         window.location.reload()
    //     })
    // }

    return (
        <div className='home-placeholder'>
            <div className='projects-placeholder'>
                <div className='adventures-placeholder'>
                    <p>your adventures</p>
                </div>
                <div className='display-placeholder'></div>
            </div>
            <div className='new-project'>
                <form>
                    {/* <form onSubmit={handleSubmit}> */}
                    <label htmlFor="projectName">Project Name:</label>
                    {/* <input type="text" id="projectName" onChange={(e) => setProjectName(e.target.value)} /> */}
                    {/* <input type="submit" value="Save" /> */}
                    <button>
                        Create
                    </button>
                </form>
            </div>
        </div>
    )
}

export default NewProject