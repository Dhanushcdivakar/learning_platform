import React, { useState } from 'react';
import { APIKEY } from '../constants.js';
import axios from 'axios';
import Banner from './Banner';

export default function Resource({ user }) {
  const [videos, setVideos] = useState(null); 
  const [loading, setLoading] = useState(false);

  const generalvideod = () => {
    setLoading(true);
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=200&playlistId=UU59K-uG2A5ogwIrHw4bmlEg&key=${APIKEY}`
      )
      .then((response) => {
        console.log(response.data);
        setVideos(response.data.items);
      })
      .catch((error) => {
        console.error('Error fetching data', error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleOnclickforVideos = async (link) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=100&playlistId=${link}&key=${APIKEY}`
      );
      const data = await response.json();
      setVideos(data.items);
    } catch (error) {
      console.error('Error fetching videos:', error);
    } finally {
      setLoading(false);
    }
  };

  // Render content based on user status
  if (!user) {
    return (
      <div className="text-center">
        <h1>Please log in to access the resources</h1>
        <p>Once logged in, you will be able to access educational videos and content.</p>
      </div>
    );
  }

  return (
    <div className="text-center">
      <div className="row align-items-start">
        {/* Sidebar Section */}
        <div className="col-12 col-md-3 bg-success rounded my-2" style={{ height: 'auto', minHeight: 'auto', position: 'sticky', top: '10px',  background: "linear-gradient(135deg, #ff7e5f, #feb47b, #86a8e7, #91eae4)"}}>
          <div className="list-group p-2">
            <button type="button" onClick={generalvideod} className="btn btn-outline-info text-dark fs-5 rounded m-2" >
              General Videos
            </button>
            <button type="button" onClick={() => handleOnclickforVideos('PLV8vIYTIdSnZ67NQObdXE0gFjrzPrNKHp')} className="btn btn-outline-info text-dark fs-5 rounded m-2">
              Operating Systems
            </button>
            <button type="button" onClick={() => handleOnclickforVideos('PLBlnK6fEyqRgLLlzdgiTUKULKJPYc0A4q')} className="btn btn-outline-info text-dark fs-5 rounded m-2">
              Computer Architecture
            </button>
            <button type="button" onClick={() => handleOnclickforVideos('PLXj4XH7LcRfAhaLFnq4fQ5ASOqKd08-Us')} className="btn btn-outline-info text-dark fs-5 rounded m-2">
              Data Structures And Algorithms
            </button>
            <button type="button" onClick={() => handleOnclickforVideos('PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y')} className="btn btn-outline-info text-dark fs-5 rounded m-2">
              Database Management System
            </button>
            <button type="button" onClick={() => handleOnclickforVideos('PLBlnK6fEyqRgp46KUv4ZY69yXmpwKOIev')} className="btn btn-outline-info text-dark fs-5 rounded m-2">
              Theory Of Computation
            </button>
            <button type="button" onClick={() => handleOnclickforVideos('PLEiEAq2VkUULyr_ftxpHB6DumOq1Zz2hq')} className="btn btn-outline-info text-dark fs-5 rounded m-2">
              Artificial Intelligence
            </button>
            <button type="button" onClick={() => handleOnclickforVideos('PLKnIA16_Rmvbr7zKYQuBfsVkjoLcJgxHH')} className="btn btn-outline-info text-dark fs-5 rounded m-2">
              Machine Learning
            </button>
            <button type="button" onClick={() => handleOnclickforVideos('PLrjkTql3jnm9b5nr-ggx7Pt1G4UAHeFlJ')} className="btn btn-outline-info text-dark fs-5 rounded m-2">
              Software Engineering
            </button>
            <button type="button" onClick={() => handleOnclickforVideos('PLC36xJgs4dxHT-TxTy3U1slr5RaBJGaLd')} className="btn btn-outline-info text-dark fs-5 rounded m-2">
              Computer Networks
            </button>
            <button type="button" onClick={() => handleOnclickforVideos('PL9ooVrP1hQOGPQVeapGsJCktzIO4DtI4_')} className="btn btn-outline-info text-dark fs-5 rounded m-2">
              Cyber Security
            </button>
            <button type="button" onClick={() => handleOnclickforVideos('PLQ-nEJNYlEV1CfTcLCx_S7D2of3QAsvTT')} className="btn btn-outline-info text-dark fs-5 rounded m-2">
              Human-Computer Interaction
            </button>
            <button type="button" onClick={() => handleOnclickforVideos('PLU6SqdYcYsfJ27O0dvuMwafS3X8CecqUg')} className="btn btn-outline-info text-dark fs-5 rounded m-2">
              Discrete Mathematics
            </button>
          </div>
        </div>

        {/* Main Video Section */}
        <div className="col-12 col-md-9 bg-light rounded my-2">
          {loading ? (
            <p>Loading...</p>
          ) : videos ? (
            <div className="row">
              {videos.map((video, index) => (
                <div key={index} className="col-12 col-sm-6 col-lg-4 mb-4">
                  <Banner
                    title={video.snippet.title}
                    description={video.snippet.description.slice(0, 50)}
                    imgUrl={video.snippet.thumbnails.maxres?.url || video.snippet.thumbnails.default.url}
                    srcurl={`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`}
                  />
                </div>
              ))}
            </div>
          ) : (
            <h1 className='text-center'>Click on a button to load content...</h1>
          )}
        </div>
      </div>
    </div>
  );
}
