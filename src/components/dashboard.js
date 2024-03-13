import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, Typography, Container, Grid, Paper, Button } from '@mui/material';

const drawerWidth = 240;

const LandingPage = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courses = [
    { id: 1, title: 'Course 1', description: 'Description for Course 1', imageUrl: 'course1.jpg' },
    { id: 2, title: 'Course 2', description: 'Description for Course 2', imageUrl: 'course2.jpg' },
    { id: 3, title: 'Course 3', description: 'Description for Course 3', imageUrl: 'course3.jpg' },
    { id: 4, title: 'Course 4', description: 'Description for Course 4', imageUrl: 'course4.jpg' },
    { id: 5, title: 'Course 5', description: 'Description for Course 5', imageUrl: 'course5.jpg' },
    { id: 6, title: 'Course 6', description: 'Description for Course 6', imageUrl: 'course6.jpg' },
    { id: 7, title: 'Course 7', description: 'Description for Course 7', imageUrl: 'course7.jpg' },
    { id: 8, title: 'Course 8', description: 'Description for Course 8', imageUrl: 'course8.jpg' },
    { id: 9, title: 'Course 9', description: 'Description for Course 9', imageUrl: 'course9.jpg' },
  ];

  const handleCourseSelect = (course) => {
    setSelectedCourse(course);
  };

  return (
    <div style={{ display: 'flex' }}>
      <Drawer
        style={{ width: drawerWidth, flexShrink: 0, top:'100px', backgroundColor: 'skyblue' }}
        variant="permanent"
        anchor="left"
      >
        <List style={{ width: drawerWidth,top:'100px', flexShrink: 0, backgroundColor: 'skyblue' }}>
          {courses.map((course) => (
            <ListItem button key={course.id} onClick={() => handleCourseSelect(course)}>
              <ListItemText primary={course.title} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main style={{ flexGrow: 1, padding: '20px', backgroundColor: '#f0f0f0' }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {selectedCourse && (
              <>
                <Grid item xs={12}>
                  <Typography variant="h4" gutterBottom>
                    {selectedCourse.title}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    {selectedCourse.description}
                  </Typography>
                </Grid>
                {[...Array(9)].map((_, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Paper elevation={3} style={{ padding: '20px' }}>
                      <img src={selectedCourse.imageUrl} alt={selectedCourse.title} style={{ width: '100%', marginBottom: '10px' }} />
                      <Typography variant="h6">{`${selectedCourse.title} - ${index + 1}`}</Typography>
                      <Typography variant="body2">{selectedCourse.description}</Typography>
                      <Button variant="contained" color="primary" style={{ marginTop: '10px' }}>Enroll</Button>
                    </Paper>
                  </Grid>
                ))}
              </>
            )}
          </Grid>
        </Container>
      </main>
    </div>
  );
};

export default LandingPage;
