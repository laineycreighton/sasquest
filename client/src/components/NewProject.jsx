import '../assets/css/NewProject.css'
import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { ADD_PROJECT } from '../utils/mutations'
// import { QUERY_PROJECTS } from '../utils/queries'
// import gql from 'graphql-tag'


const NewProject = () => {

    const [formState, setFormState] = useState({ projectName: '' });
    const [createProject, { error }] = useMutation(ADD_PROJECT);
    // const [projectName, setProjectName] = useState({
    //     title: '',
    // })
    // const [createProject, { error }] = useMutation(ADD_PROJECT, {});

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        // try {
            const { data } = await createProject({
                variables: { projectName: formState.projectName }, // Use formState.projectName
            });
    setFormState({ projectName: '' });
            window.location.reload();
        // } catch (error) {
        //     console.error(error);
        // }
    };
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'projectName') {
            setFormState({ ...formState, projectName: value });
        } else {
            setFormState({ ...formState, [name]: value });
        }
    }

    return (
        <div className='new-project-container'>
            <div className='new-project'>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="projectName">Project Name:</label>
                    <input type="text" id="projectName" onChange={handleChange} />
                    <button type='submit'>
                        Create
                    </button>
                </form>
            </div>
        </div>
    )
}

export default NewProject