import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Wrapper } from './style';
import data from '../BoshSahifa/data';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Wrapper>
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 500 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      > 
      
        <Tab label="Maqolalar" className='tap' {...a11yProps(0)} />
        <Tab label="Xazratim" className='tap' {...a11yProps(1)} />
        <Tab label="Shayh Butiy og'itlari" className='tap' {...a11yProps(2)} />
        <Tab label="Tazkiya" className='tap' {...a11yProps(3)} />
      </Tabs>
      <TabPanel  value={value} index={0}>
             <p>Bosh saxifa  /  Maqolalar</p>
         <div>
             <div className='maqolalar'>
             {
                    data.map(item => {
                        return (
                            <div className="container" key={item.id} >
                                <h5>{item.name}</h5>
                                <div className="box">
                                    <p>{item.text}</p>
                                    <img src={item.img} alt="" srcset="" />
                                </div>
                            </div>
                        )
                    })
                }     
             </div>
         </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
            <p>Bosh saxifa / xazratim</p>
        <div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
            <p>Bosh saxifa / Shayx</p>
         <div>
         </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
          <p>Bosh saxifa / Shayx</p>
        <div>
        </div>
      </TabPanel>
    </Box>
    </Wrapper>
  );
}