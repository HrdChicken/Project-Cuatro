import {Grid, Loader} from 'semantic-ui-react';

export default function Loading(){
    return(
        <Grid textAlign='center' style={{height: '100vh'}} verticalAlign='middle'>
            <Grid.Column style={{width: 450}}>
                <Loader size='large' active>
                    Loading
                </Loader>
            </Grid.Column>
        </Grid>
    )
} 