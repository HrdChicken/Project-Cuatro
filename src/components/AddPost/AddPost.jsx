import React, { useState } from 'react';
import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react';

export default function AddMemoryForm(props){
  const [selectedFile, setSelectedFile] = useState('')
  const [state, setState] = useState({
    description: ''
  })

    function handleFileInput(e){
        setSelectedFile(e.target.files[0])
    }

    function handleChange(e){
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        const formData = new FormData()
        formData.append('photo', selectedFile);
        formData.append('description', state.description)
        props.handleAddMemory(formData)
    }

    return(
        <Grid textAlign='center' verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Segment>
        
            <Form  autoComplete="off" onSubmit={handleSubmit}>
            
              <Form.Input
                  className="form-control"
                  name="description"
                  value={state.caption}
                  placeholder="What happened in this moment?"
                  onChange={handleChange}
                  required
              />   
              <Form.Input
                className="form-control"
                type="file"
                name="photo"
                placeholder="upload image"
                onChange={handleFileInput}
              />   
              <Button
                type="submit"
                className="btn"
              >
                Add Memory
              </Button>
            </Form>
          </Segment>
      </Grid.Column>
    </Grid>
    )
}