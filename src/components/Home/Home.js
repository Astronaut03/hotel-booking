import React from 'react';
import Room from '../Room/Room';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const Home = () => {
    const style = {
        display: 'flex',
        margin: '40px',
        justifyContent: 'space-between'
    }
    const rooms = [
        {
            title: 'Standard Single Room',
            description: 'Standard designed-concept living area and have many facilities.',
            imgUrl: 'https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/offers/offer-images/burj-al-arab-presidential-suite-living-room-4-hero.jpg',
            bed: 1,
            capacity: 1,
            bedType: 'Single',
            avatar: 'S',
            price: 129
        },
        {
            title: 'Couple Power Room',
            description: 'Superior Double Rooms are perfectly equipped for traveling couples or friends.',
            imgUrl: 'https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/offers/offer-images/burj-al-arab-royal-suite-staircase-5-hero.jpg',
            bed: 1,
            capacity: 2,
            bedType: 'Double',
            avatar: 'D',
            price: 149
        },
        {
            title: 'Family Capacity Room',
            description: ' Have lots of in-room facilities and are designed in open-concept living area.',
            imgUrl: 'https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/hotels/dubai/burj-al-arab-jumeirah/room/presidential-two-bedroom-suite/burj-al-arab-presidential-suite-guest-bedroom_6-4_landscape/burj-al-arab-presidential-suite-guest-bedroom_16-9_landscape.jpg?w=2080',
            bed: 2,
            capacity: 4,
            bedType: 'Family',
            avatar: 'F',
            price: 189
        }
    ]
    return (
        <div style={style}>
            <Container>
            <Grid container spacing={3} justify="center" alignItems="center">
            {
                rooms.map(room => <Grid item xs={12} md={6} lg={4}>
                    <Room key={room.bedType} room={room}></Room>
                </Grid>)
            }
            </Grid>        
        </Container>
        </div>

    );
};

export default Home;