import React, { useState } from "react";
import VideoCall from "./Videocall";
import ChannelForm from "./ChannelForm";
import "./App.css";
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense('Ngo9BigBOggjHTQxAR8/V1NGaF1cWGhAYVFpR2NbfE52flZAalxRVAciSV9jS31TfkdlWXlddnRVRGZYVg==');


const App = () => {
  const [inCall, setInCall] = useState(false);
  const [channelName, setChannelName] = useState("");
  
  return (
    <div>
  	{inCall ? (
    	<VideoCall setInCall={setInCall} channelName={channelName} />
  	) : (
    	<ChannelForm setInCall={setInCall} setChannelName={setChannelName} />
  	)}
    </div>
  );
};

export default App;