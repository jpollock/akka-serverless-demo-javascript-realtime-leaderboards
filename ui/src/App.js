import React, { useMemo, useState, useEffect } from "react";
import { Column, Row } from 'simple-flexbox';
import axios from "axios";

import Table from "./Table";
import "./App.css";

import { RealtimeLeaderboardServiceClient } from './_proto/LeaderboardService_grpc_web_pb';
import { GetLeaderboardSortedRequest, Leaderboard } from './_proto/LeaderboardService_pb';


const echoService = new RealtimeLeaderboardServiceClient(process.env.REACT_APP_SERVICE_HOST, null, null);
const request = new GetLeaderboardSortedRequest();

function App() {
  const columns = useMemo(
    () => [
      {
        Header: "User",
        columns: [
          {
            Header: "UUID",
            accessor: "show.id"
          },
          {
            Header: "Name",
            accessor: "show.name"
          }
        ]
      },
      {
        Header: "Details",
        columns: [
          {
            Header: "Age",
            accessor: "show.age"
          },
          {
            Header: "Score",
            accessor: "score"
          }
        ]
      }
    ],
    []
  );

  const [data, setData] = useState([]);
  const [count, setCount] = useState([]);
  //const [filterInput, setFilterInput] = useState('');
  const [channelInput, setChannelInput] = useState('');
  //const [uuidInput, setUuidInput] = useState('');
  //const [stateValueInput, setStateValueInput] = useState('');


  /*const updateFilter = value => {
    setFilterInput(value);
  }*/

  const updateChannel = value => {
    setChannelInput(value);
  }

  /*const updateUuid = value => {
    setUuidInput(value);
  }*/

  /*const updateValue= value => {
    setStateValueInput(value);
  }*/

  const fetchData = async () => {
    if (channelInput !== undefined && channelInput !== '') {
      request.setLeaderboardid(channelInput);
      request.setOrder('desc');
      request.setLimit(100);
      console.log(channelInput);
      const call = echoService.getLeaderboardSorted(request, {},  function(err, response) {
        let lb_data = {};
        if (response != null && !response.undefined) {
          lb_data = response.toObject();
          let lb = []
          for (let index = 0; index < lb_data.playersList.length; index++) {        
            const element = lb_data.playersList[index];
            //console.log(element);
            let lb_pos = {score: element.score, show: {id: element.playerid, name: element.playername, age: element.age}}
            lb.push(lb_pos);
          
          }
          
          setData(lb);  
          setCount(lb_data.totalplayers.count);
        }
        
      });
    }
   
  };

  useEffect(() =>{
    let interval = setInterval(() => fetchData(), (1000))
    return () => {
      clearInterval(interval);
    }
  });

  return (
      <div className="App">
          <Column flexGrow={1}>
              <Row horizontal='center'>
                <h1>GET MOVING!</h1>
              </Row>
              <Row>
                <Column flexGrow={2} horizontal='left'>{count}</Column>
              </Row>
              <Row vertical='center'>
                <Column flexGrow={2} horizontal='left'>
                  <Table columns={columns} data={data}  channel= {updateChannel}  />
                </Column>
              </Row>

            </Column>        
      </div>
  );
}

export default App;
