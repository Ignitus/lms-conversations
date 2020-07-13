import React from 'react';
import LMSButton from '../../components/buttons/LMSButton';

const Home = () => {
	return (
		<div>
            <h3 className="my-2">Buttons</h3>

			<LMSButton title="Log in" type="primary" size="small" clickHandler={(e)=> alert("Clicked")}/>
			<LMSButton title="Log in" type="secondary" size="small" />
			<LMSButton title="Log in" type="success" size="small" />
			<LMSButton title="Log in" type="danger" size="small" />
			<LMSButton title="Log in" type="info" size="small" />
			<LMSButton title="Log in" type="warning" size="small" />
			
			<h3 className="my-2">With Icons</h3>
			
			<LMSButton title="Log in" type="primary" size="small" icon="information-circle" iconSize="large"/>
			<LMSButton title="Log in" type="secondary" size="small" icon="information-circle" iconSize="large"/>
			<LMSButton title="Log in" type="success" size="small" icon="information-circle" iconSize="large"/>
			<LMSButton title="Log in" type="danger" size="small" icon="information-circle" iconSize="large"/>
			<LMSButton title="Log in" type="info" size="small" icon="information-circle" iconSize="large"/>
			<LMSButton title="Log in" type="warning" size="small" icon="information-circle" iconSize="large"/>

            <h3 className="my-2">Large Buttons</h3>
			
			<LMSButton title="Log in" type="primary" size="large" icon="log-in" iconSize="large"/>
			<LMSButton title="Log in" type="secondary" size="large" icon="log-in" iconSize="large"/>
			<LMSButton title="Log in" type="success" size="large" icon="log-in" iconSize="large"/>
			<LMSButton title="Log in" type="danger" size="large" icon="log-in" iconSize="large"/>
			<LMSButton title="Log in" type="info" size="large" icon="log-in" iconSize="large"/>
			<LMSButton title="Log in" type="warning" size="large" icon="log-in" iconSize="large"/>

            <h3 className="my-2">Loading Buttons</h3>

            <LMSButton title="Loading" type="primary" size="small" icon="reload-circle" iconSize="large" loading={true}/>
            
            <h3 className="my-2">Buttons with clickHandler</h3>

            <LMSButton title="Click me" type="primary" size="small" clickHandler={()=> alert("Clicked")}/>
		</div>
	);
};

export default Home;
