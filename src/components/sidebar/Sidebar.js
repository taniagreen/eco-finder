import React from 'react';
import './sidebar.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const Sidebar = (props) => {
  // const result = [{"category":"Battery Recycling","address":"242 Pitt St, Surry Hills, NSW 2000","description":"30c off BYO Cup","latitude":"-33.8861956","name":"Officeworks Pitt Street","longitude":"151.1960456"},{"category":"BYO Cup Discount","address":"475 Crown St, Surry Hills, NSW 2010","description":"30c off BYO Cup","latitude":"-33.8862693","name":"Cali Press Surry Hills","longitude":"151.1960456"},{"category":"BYO Cup Discount","address":"415 Crown St, Surry Hills, NSW 2010","description":"50c off BYO Cup","latitude":"-33.8863106","name":"Rustic Pearl","longitude":"151.2113665"},{"image":"https://shehacks2019.s3.amazonaws.com/LOC001-PIC000.jpeg","longitude":"151.2074503","category":"BYO Cup Discount","address":"Line: 241 Commonwealth St, Surry Hills, NSW Postcode: 2010","description":"Organic Coffee. Save 50c when you bring your keepcup","latitude":"-33.8836528","name":"Shift Eatery"},{"image":"https://shehacks2019.s3.amazonaws.com/LOC000-PIC000.jpg","longitude":"151.2063611","category":"BYO Cup Discount","address":"Line: 1/302-306 Elizabeth St, \nSuburb: Surry Hills \nState: NSW \nPostcode: 2010","description":"Single Origin roast and ethically sourced coffee. Save 50c when you bring your keepcup","latitude":"-33.8837034","name":"Two Skinny Pickles1"},{"category":"Soft Plastic Recycling","address":"413-417 Bourke Street, Surry Hills, NSW 2010","description":" ","latitude":"-33.8825755","name":"Woolworths Surry Hills","longitude":"151.2120395"},{"category":"Donation Centers","address":"339 Crown St, Surry Hills, NSW 2010","description":" ","latitude":"-33.8825877","name":"Salvos","longitude":"151.2120395"},{"category":"Donation Centers","address":"406 Elizabeth St, Surry Hills, NSW 2000","description":" ","latitude":"33.8857895","name":"Vinnies","longitude":"151.2100456"}];

  const items = props.data.map(item => {
    return (
      <div>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src={item.image} />
          </ListItemAvatar>
          <ListItemText
            primary=""
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className="inline"
                  color="textPrimary"
                >
                  {`${item.name} - `}
                </Typography>
                {item.category}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
      </div>
    );
  });


  return (
    <div className='sidebar'>
      <h1 className="ecommunity">Eco.mmunity</h1>
      <h2 className="sidebarHeading">Green initiatives near you</h2>
      <button className="sidebar__filterButton">Filter your results</button>
      <List
        className="root"
      >
        {items}
    </List>
    </div>    
  )
}

export default Sidebar;