// BELONGS TO:
//      - Wireframe.jsx
//
//
// FUNCTIONALITY:
//      - POST ROUTE for a new wireframe:
//                      01. name
//                      02. upload image(using Cloudinary)
//                      03. notes
//
//
//
// VISUAL:
//      - renders a form for a new wireframe
//                               01. name
//                               02. upload
//                               03. notes
//                               04. new button - (window.location.reload())


import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'

const AddWireframe = () => {
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [notes, setNotes] = useState('')
    const [error, setError] = useState('')
    const { currentUser } = useAuth()
    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const newWireframe = {
                name,
                image,
                notes,
                user_id: currentUser.id
            }
            await axios.post('/api/wireframes', newWireframe)
            history.push('/wireframes')
        } catch (err) {
            setError(err.response.data.msg)
        }
    }

    return (
        <div className='add-wireframe'>
            <h1>Add Wireframe</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter title'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Upload</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Upload image'
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Notes</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter info'
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                    />
                </Form.Group>
                <Button variant='primary' type='submit'>
                    Submit
                </Button>
            </Form>
            {error && <h3>{error}</h3>}
            <Button variant='primary' onClick={() => window.location.reload()}>
                New
            </Button>
        </div>
    )
}

export default AddWireframe