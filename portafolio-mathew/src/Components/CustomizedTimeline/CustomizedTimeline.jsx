import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import School from '@material-ui/icons/School';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import LocalLibrary from '@material-ui/icons/LocalLibrary'
const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
    backgroundColor: '#18bb18', 
    color: '#ffffff',
    fontFamily: 'Courier New',
    fontSize: '30px'
  },
  timetext: {
    color: '#18bb18',
    fontFamily: 'Courier New',
    fontSize: '15px'
  },
  timelineDot: {
    backgroundColor: '#18bb18', 
    
  },
  timelineconnector: {
    color: '#18bb18', 
  }
}));

export default function CustomizedTimeline() {
  const classes = useStyles();

  return (
    <Timeline align="alternate">
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography className={classes.timetext}>
            2022 - Hoy en dia
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator className={classes.timelineconnector}>
          <TimelineDot className={classes.timelineDot}>
            <School></School>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h4" component="h1">
              Universidad del Valle de Guatemala
            </Typography>
            <Typography variant='h5'>Ingenieria en ciencias de la computacion</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography className={classes.timetext}>
          2022 - 2022
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator className={classes.timelineconnector}>
          <TimelineDot className={classes.timelineDot}>
            <LocalLibrary></LocalLibrary>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h4" component="h1">
            Fortinet NSE1 y NSE2 
            </Typography>
            <Typography variant='h5'>Curso Fortinet de Router y Red </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography className={classes.timetext}>
          2021 - 2021
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator className={classes.timelineconnector}>
          <TimelineDot className={classes.timelineDot}>
            <LocalLibrary></LocalLibrary>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h4" component="h1">
            CCNA: Enterprise Networking, Security, and Automation
            </Typography>
            <Typography variant='h5'>Curso Cisco de Redes y Seguridad </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography className={classes.timetext}>
          2018 - 2021
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator className={classes.timelineconnector}>
          <TimelineDot className={classes.timelineDot}>
            <School></School>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h4" component="h1">
              Diversificado Centro educativo tecnico laboral Kinal
            </Typography>
            <Typography variant='h5'>Perito Electronica en Computacion</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      
    </Timeline>
  );
}
