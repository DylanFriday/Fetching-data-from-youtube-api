import React from "react";
import SearchBar from "./SearchBar";
import Youtube from '../apis/Youtube'
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component{
    state = {videos: [],selectedVideo:null};
    componentDidMount(){
        this.onTermSubmit('trend');
    }

    onTermSubmit =async (term) =>{
      const res = await Youtube.get('/search',{
            params: {
                q: term,
            },
        });
        this.setState({
            videos: res.data.items,
        selectedVideo: res.data.items[0]
        });
    };

    onVideoSelect = (video) =>{
        this.setState({selectedVideo: video})
    }
    render(){
        return (
        <div className="ui container">
            <SearchBar onFormSubmit={this.onTermSubmit}/>
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
            <VideoDetail video={this.state.selectedVideo}/>
            </div>
            <div className="five wide column">
            <VideoList  onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
            </div>
            </div>
            </div>
        </div>
        );
    }
}

export default App;