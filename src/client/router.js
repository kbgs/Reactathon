import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from 'App';
import AppLayout from 'components/AppLayout';
import EventsDashboard from 'components/EventsDashboard/EventsDashboard';
import AddEvent from 'components/EventsDashboard/AddEvent';
import EnrolledTeams from 'components/EnrolledTeams/EnrolledTeams';

export default (
    <Route path="/" component={App}>
    	<IndexRoute component={AppLayout} />
        <Route path="/upcomingEvents" component={EventsDashboard} />
        <Route path="/previousEvents" component={EventsDashboard} />
        <Route path="/addEvent" component={AddEvent} />
        <Route path="/enrollments/:id" component={EnrolledTeams} />
    </Route>
)
