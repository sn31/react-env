import React from 'react'
import Header from './Header'
import TicketList from './TicketList'
import {Switch, Route} from 'react-router-dom'
import NewTicketControl from './NewTicketControl'
import Error404 from './Error404'
import Moment from 'moment';
import Admin from './Admin';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      masterTicketList: [],
      selectedTiket: null
    }
  }

  handleAddingNewTicketToList(newTicket){
    var newMasterTicketList = this.state.masterTicketList.slice();
    newTicket.formattedWaitTime = (newTicket.timeOpen).fromNow(true);
    newMasterTicketList.push(newTicket)
    this.setState({masterTicketList: newMasterTicketList})
  }

  componentDidMount(){
    this.waitTimeUpdateTimer = setInterval(()=>this.updateTicketElapsedWaitTime(),60000);
  }
  componentWillUnmount() {
    clearInterval(this.waitTimeUpdateTimer);
  }

  updateTicketElapsedWaitTime(){
    console.log("check");
    let newMasterTicketList = this.state.masterTicketList.slice();
    newMasterTicketList.forEach((ticket)=>
    ticket.formattedWaitTime = (ticket.timeOpen).fromNow(true));
    this.setState({masterTicketList:newMasterTicketList});
  }

  handleChangingSelectedTicket(ticket){
    this.setState({selectedTicket:ticket});
    alert('The selected ticket is now: ' + this.state.selectedTicket.names);
  }
  

  render(){
    return (
      <div className="container-fluid">
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><TicketList ticketList={this.state.masterTicketList} />} />
          <Route path='/newticket' render={()=><NewTicketControl onNewTicketCreation={this.handleAddingNewTicketToList.bind(this)} />} />
          <Route path='/admin' render={(props)=><Admin ticketList={this.state.masterTicketList} currentRouterPath={props.location.pathname} onTicketSelection={this.handleChangingSelectedTicket.bind(this)}/>} />
          <Route component={Error404} />
        </Switch>
      </div>
    )
  }

}

export default App
