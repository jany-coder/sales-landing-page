import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import '../../styles/shared/fonts-definition.scss';
import '../../styles/shared/color.scss';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion( props) {

  const {question, answer} = props.data;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion className="mt-4 p-2" style={{backgroundColor:"#f5f5f5"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading} >
            <div className="roboto-medium-20 info-color"> {question}</div> </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="regular-font" >
            {answer}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
